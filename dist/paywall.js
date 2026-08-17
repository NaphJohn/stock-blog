/*
 * paywall.js — 股市笔记 付费墙（纯前端，无后端）
 * 重要说明（纯静态站点的根本限制）：
 *   本站托管于 GitHub Pages，无后端、无支付回调，无法真正校验微信/支付宝是否付款。
 *   因此付费墙为「软门槛」——读者扫码打赏/订阅后，须输入作者私发的「解锁码」才解锁查看。
 *   此机制可挡住随手白嫖，但懂技术者仍可能逆向；要做到「不付绝对看不到」需后端支付回调。
 * - 章节解锁码：调用方通过 cfg.unlockCode 传入（base64 编码，避免明文暴露）。
 * - 订阅解锁码：调用方通过 cfg.subCode 传入（base64 编码）。
 * - 支持多币种（USD / RMB）+ 多周期（日 / 月 / 年）。
 * - 作者本人用 ?author=1 或 localStorage ml_author=1 免付费。
 * - 复用 public/reward/wechat.png + alipay.png 收款码。
 */
(function () {
  'use strict';

  var STORE = {
    author: 'ml_author',
    chapter: 'sl_chapter_v1', // 章节打赏通票
    sub: 'sl_sub_v1'          // 订阅 {tier, until}
  };

  function ls(k, v) {
    try {
      if (v === undefined) return localStorage.getItem(k);
      localStorage.setItem(k, v);
      return v;
    } catch (e) { return null; }
  }

  function isAuthor() {
    if (/[?&]author=1\b/.test(location.search)) ls(STORE.author, '1');
    return ls(STORE.author) === '1';
  }

  function isChapterUnlocked() { return ls(STORE.chapter) === '1' || isAuthor(); }
  function unlockChapters() { ls(STORE.chapter, '1'); }

  function subState() {
    try { return JSON.parse(ls(STORE.sub) || 'null'); } catch (e) { return null; }
  }
  function isSubActive() {
    if (isAuthor()) return true;
    var s = subState();
    if (!s || !s.until) return false;
    return Date.now() <= s.until;
  }
  function unlockSub(tier, days) {
    ls(STORE.sub, JSON.stringify({ tier: tier, until: Date.now() + days * 86400000 }));
  }
  function subDaysLeft() {
    var s = subState();
    if (!s || !s.until) return 0;
    return Math.max(0, Math.ceil((s.until - Date.now()) / 86400000));
  }

  // 绝对基址（GitHub Pages 部署路径），不再依赖 document.currentScript 解析
  var ABS_BASE = 'https://naphjohn.github.io/stock-blog/';

  var CSS_INJECTED = false;
  function ensureStyle() {
    if (CSS_INJECTED) return;
    CSS_INJECTED = true;
    var css = '' +
      '.ml-mask{position:fixed;inset:0;background:rgba(8,12,20,.55);backdrop-filter:blur(3px);' +
      'display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px;overflow-y:auto;}' +
      '.ml-dlg{background:var(--bg,#fff);color:var(--fg,#1c1830);border:1px solid var(--border,#e5e7eb);' +
      'border-radius:14px;max-width:440px;width:100%;padding:22px 22px 18px;box-shadow:0 18px 50px rgba(0,0,0,.25);' +
      'font-family:system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;}' +
      '.ml-dlg h3{margin:0 0 6px;font-size:19px;}' +
      '.ml-dlg p{margin:6px 0;font-size:13px;color:var(--muted,#666);line-height:1.7;}' +
      /* 币种切换 */
      '.ml-curr{display:flex;gap:6px;margin:10px 0 4px;justify-content:center;}' +
      '.ml-curr button{padding:4px 14px;border-radius:999px;border:1px solid var(--border,#e5e7eb);background:transparent;' +
      'color:var(--muted,#666);font-size:12px;cursor:pointer;transition:.15s;}' +
      '.ml-curr button.sel{border-color:var(--accent,#1565c0);background:rgba(21,101,192,.08);color:var(--accent,#1565c0);font-weight:700;}' +
      /* 档位按钮 — 支持 3 列（日/月/年） */
      '.ml-tiers{display:flex;gap:8px;margin:12px 0 4px;flex-wrap:wrap;justify-content:center;}' +
      '.ml-tier{flex:1;min-width:90px;border:1.5px solid var(--border,#e5e7eb);border-radius:10px;padding:10px 6px;text-align:center;' +
      'cursor:pointer;transition:.15s;background:transparent;color:var(--fg,#1c1830);}' +
      '.ml-tier .p{font-size:18px;font-weight:800;color:var(--accent,#1565c0);}' +
      '.ml-tier .t{font-size:11px;color:var(--muted,#666);margin-top:2px;line-height:1.3;}' +
      '.ml-tier .save{font-size:10px;color:#2f9e44;display:block;margin-top:2px;}' +
      '.ml-tier.sel{border-color:var(--accent,#1565c0);background:rgba(21,101,192,.08);}' +
      /* 二维码 */
      '.ml-qrs{display:flex;gap:16px;justify-content:center;margin:14px 0 6px;}' +
      '.ml-qr{text-align:center;font-size:11px;color:var(--muted,#666);}' +
      '.ml-qr img{width:140px;height:140px;border:1px solid var(--border,#e5e7eb);border-radius:10px;display:block;}' +
      '.ml-qr-fail{width:140px;height:100px;border:1px dashed #ccc;border-radius:10px;display:flex;align-items:center;' +
      'justify-content:center;font-size:11px;color:#999;text-align:center;padding:8px;box-sizing:border-box;}' +
      /* 输入与按钮 */
      '.ml-amt{display:flex;align-items:center;gap:8px;margin:12px 0 4px;}' +
      '.ml-amt label{flex:0 0 auto;font-size:14px;color:var(--fg,#1c1830);}' +
      '.ml-amt input{flex:1;padding:9px 10px;border:1px solid var(--border,#e5e7eb);border-radius:8px;' +
      'background:var(--bg,#fff);color:var(--fg,#1c1830);font-size:15px;}' +
      '.ml-btns{display:flex;gap:10px;margin-top:14px;}' +
      '.ml-btn{flex:1;padding:11px 0;border-radius:9px;border:1px solid var(--accent,#1565c0);' +
      'background:var(--accent,#1565c0);color:#fff;font-size:15px;cursor:pointer;transition:.15s;}' +
      '.ml-btn:hover{opacity:.92;}' +
      '.ml-btn.ghost{background:transparent;color:var(--accent,#1565c0);}' +
      '.ml-note{font-size:11.5px;color:var(--muted,#666);margin-top:10px;text-align:center;line-height:1.6;}' +
      '.ml-err{color:#d33;font-size:13px;min-height:16px;margin-top:6px;}' +
      // 文章付费遮罩
      '.article-lock{position:relative;}' +
      '.article-lock #post-content{filter:blur(7px);max-height:340px;overflow:hidden;user-select:none;}' +
      '.article-lock .paywall-veil{position:absolute;left:0;right:0;top:0;height:100%;' +
      'display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;' +
      'background:linear-gradient(180deg,rgba(255,255,255,0) 0%,var(--bg,#fff) 62%);text-align:center;padding:20px;}' +
      '.article-lock .paywall-veil .pbtn{padding:10px 22px;border-radius:999px;background:var(--accent,#1565c0);' +
      'color:#fff;border:none;font-size:15px;cursor:pointer;}' +
      '.article-lock .paywall-veil .pbtn:hover{opacity:.92;}' +
      // 联系字段
      '.ml-contact{display:flex;align-items:center;gap:8px;margin:8px 0 2px;}' +
      '.ml-contact label{flex:0 0 auto;font-size:13px;color:var(--muted);}' +
      '.ml-contact input{flex:1;padding:8px 10px;border:1px solid var(--border,#e5e7eb);border-radius:8px;background:var(--bg,#fff);color:var(--fg,#1c1830);font-size:13px;}';
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
  }

  function closeMask(mask) { if (mask && mask.parentNode) mask.parentNode.removeChild(mask); }

  // 校验解锁码：base64 解码后大小写不敏感比对
  function verifyCode(input, codeB64) {
    var expected = '';
    try { expected = atob(codeB64 || ''); } catch (e) { expected = ''; }
    if (!expected) return false;
    return (input || '').trim().toLowerCase() === expected.toLowerCase();
  }

  // 订阅码 → 档位匹配
  function matchSubCode(input, codes) {
    if (codes == null) return null;
    if (!Array.isArray(codes)) codes = [codes];
    for (var i = 0; i < codes.length; i++) {
      var entry = codes[i];
      var b64, tier;
      if (typeof entry === 'string') { b64 = entry; tier = 'yearly'; }
      else { b64 = entry.code; tier = entry.tier || 'yearly'; }
      if (verifyCode(input, b64)) return tier;
    }
    return null;
  }

  // ===== 多币种 + 多周期定价表 =====
  var PRICING = {
    USD: {
      daily:  { price: '$1',   days: 1,    label: '体验',   save: '' },
      monthly:{ price: '$10',  days: 30,   label: '按月',   save: '' },
      yearly: { price: '$100', days: 365,  label: '按年',   save: '省 $20' }
    },
    CNY: {
      daily:  { price: '¥5',   days: 1,    label: '体验',   save: '' },
      monthly:{ price: '¥72',  days: 30,   label: '按月',   save: '' },
      yearly: { price: '¥720', days: 365,  label: '按年',   save: '省 ¥144' }
    }
  };

  // 默认选中的周期和币种
  var DEF_CURR = 'CNY';   // 默认人民币（国内用户为主）
  var DEF_TIER = 'yearly';

  // 构建安全的 img 标签（带 onerror 降级）
  function safeImg(src, alt, fallbackText) {
    return '<img src="' + src + '" alt="' + alt + '" loading="lazy" onerror="this.outerHTML=\'<div class=\\\'ml-qr-fail\\\'>\'+' + JSON.stringify(fallbackText || ('扫码失败：' + alt)) + '+\'</div>\'" />';
  }

  // —— 文章解锁弹窗（不变）——
  function showTipModal(cfg, onOk) {
    cfg = cfg || {};
    ensureStyle();
    var qrWechat = cfg.qrWechat || (ABS_BASE + 'reward/wechat.png');
    var qrAlipay = cfg.qrAlipay || (ABS_BASE + 'reward/alipay.png');
    var title = cfg.title || '解锁付费章节';
    var desc = cfg.desc || '扫码打赏后，请输入作者私发的解锁码，即可解锁全部付费章节。作者本人免付费。';

    var mask = document.createElement('div');
    mask.className = 'ml-mask';
    mask.innerHTML =
      '<div class="ml-dlg" role="dialog" aria-modal="true">' +
        '<h3>' + title + '</h3>' +
        '<p>' + desc + '</p>' +
        '<div class="ml-qrs">' +
          '<div class="ml-qr">' + safeImg(qrWechat, '微信收款码', '微信收款码加载失败<br>请刷新重试') + '<div>微信</div></div>' +
          '<div class="ml-qr">' + safeImg(qrAlipay, '支付宝收款码', '支付宝收款码加载失败<br>请刷新重试') + '<div>支付宝</div></div>' +
        '</div>' +
        '<div class="ml-amt"><label>解锁码</label>' +
          '<input id="ml-code" type="text" placeholder="请输入作者私发的解锁码" autocomplete="off"/></div>' +
        '<div class="ml-err" id="ml-err"></div>' +
        '<div class="ml-btns">' +
          '<button class="ml-btn ghost" id="ml-cancel">稍后</button>' +
          '<button class="ml-btn" id="ml-ok">输入解锁码，解锁</button>' +
        '</div>' +
        '<p class="ml-note">扫码打赏后，凭作者私发的解锁码在此输入即可解锁全部付费章节。</p>' +
      '</div>';
    document.body.appendChild(mask);

    mask.addEventListener('click', function (e) { if (e.target === mask) closeMask(mask); });
    mask.querySelector('#ml-cancel').addEventListener('click', function () { closeMask(mask); });
    mask.querySelector('#ml-ok').addEventListener('click', function () {
      var input = mask.querySelector('#ml-code').value;
      if (!input || !input.trim()) { mask.querySelector('#ml-err').textContent = '请输入解锁码'; return; }
      if (!verifyCode(input, cfg.unlockCode)) {
        mask.querySelector('#ml-err').textContent = '解锁码不正确，请确认已打赏并向作者索取解锁码。';
        return;
      }
      unlockChapters();
      closeMask(mask);
      if (typeof onOk === 'function') onOk();
    });
  }

  // —— 订阅弹窗（增强版：多币种 + 日/月/年）——
  function showSubModal(cfg, onOk) {
    cfg = cfg || {};
    ensureStyle();
    var qrWechat = cfg.qrWechat || (ABS_BASE + 'reward/wechat.png');
    var qrAlipay = cfg.qrAlipay || (ABS_BASE + 'reward/alipay.png');
    var title = cfg.title || '订阅动态选股';
    var desc = cfg.desc || '订阅后可使用「动态选股」工具全套功能。选择适合你的方案，扫码付款后输入作者私发的解锁码即激活。';
    var showContact = !!cfg.contact;
    var contactPlaceholder = cfg.contactPlaceholder || '微信 ID / 邮箱（付款后便于发码）';

    var curr = DEF_CURR;  // 'USD' | 'CNY'
    var chosen = DEF_TIER; // 'daily' | 'monthly' | 'yearly'

    var mask = document.createElement('div');
    mask.className = 'ml-mask';

    function renderTiers() {
      var p = PRICING[curr];
      var html = '';
      ['daily', 'monthly', 'yearly'].forEach(function (t) {
        var ti = p[t];
        var cls = t === chosen ? 'sel' : '';
        var saveHtml = ti.save ? '<span class="save">' + ti.save + '</span>' : '';
        html += '<button class="ml-tier ' + cls + '" data-tier="' + t + '">' +
          '<div class="p">' + ti.price + '</div>' +
          '<div class="t">' + ti.label + (t === 'daily' ? '（当日有效）' : '') + '</div>' +
          saveHtml +
          '</button>';
      });
      return html;
    }

    function renderCurrBtns() {
      return '<div class="ml-curr">' +
        '<button data-curr="CNY"' + (curr === 'CNY' ? ' class="sel"' : '') + '>¥ 人民币</button>' +
        '<button data-curr="USD"' + (curr === 'USD' ? ' class="sel"' : '') + '>$ 美元</button>' +
        '</div>';
    }

    mask.innerHTML =
      '<div class="ml-dlg" role="dialog" aria-modal="true">' +
        '<h3>' + title + '</h3>' +
        '<p>' + desc + '</p>' +
        renderCurrBtns() +
        '<div class="ml-tiers" id="ml-tiers">' + renderTiers() + '</div>' +
        '<div class="ml-qrs">' +
          '<div class="ml-qr">' + safeImg(qrWechat, '微信收款码', '微信收款码<br>请刷新页面') + '<div>微信</div></div>' +
          '<div class="ml-qr">' + safeImg(qrAlipay, '支付宝收款码', '支付宝收款码<br>请刷新页面') + '<div>支付宝</div></div>' +
        '</div>' +
        (showContact
          ? '<div class="ml-contact"><label>联系方式</label>' +
            '<input id="ml-contact" type="text" placeholder="' + contactPlaceholder + '" autocomplete="off"/></div>'
          : '') +
        '<div class="ml-amt"><label>解锁码</label>' +
          '<input id="ml-code" type="text" placeholder="请输入作者私发的订阅码" autocomplete="off"/></div>' +
        '<div class="ml-err" id="ml-err"></div>' +
        '<div class="ml-btns">' +
          '<button class="ml-btn ghost" id="ml-cancel">稍后</button>' +
          '<button class="ml-btn" id="ml-ok">输入解锁码，订阅</button>' +
        '</div>' +
        '<p class="ml-note">订阅时长由你输入的解锁码决定：<b>日付码有效 1 天</b>，月付码 1 个月，年付码 1 年。<br>' +
        '扫码付款后凭作者私发的解锁码在此输入即可激活。<br>' +
        '💡 推荐年付（最划算）；想先试试选「体验」日付。</p>' +
      '</div>';
    document.body.appendChild(mask);

    // 币种切换
    mask.addEventListener('click', function (e) {
      if (e.target === mask) closeMask(mask);
      var cb = e.target.closest && e.target.closest('[data-curr]');
      if (cb) {
        curr = cb.getAttribute('data-curr');
        chosen = 'yearly'; // 切换币种时默认回年付
        mask.querySelector('.ml-curr').innerHTML = renderCurrBtns();
        mask.getElementById('ml-tiers').innerHTML = renderTiers();
      }
      var tb = e.target.closest && e.target.closest('[data-tier]');
      if (tb) {
        chosen = tb.getAttribute('data-tier');
        mask.querySelectorAll('.ml-tier').forEach(function (b) {
          b.classList.toggle('sel', b.getAttribute('data-tier') === chosen);
        });
      }
    });

    mask.querySelector('#ml-cancel').addEventListener('click', function () { closeMask(mask); });
    mask.querySelector('#ml-ok').addEventListener('click', function () {
      var input = mask.querySelector('#ml-code').value;
      if (!input || !input.trim()) { mask.querySelector('#ml-err').textContent = '请输入解锁码'; return; }
      var matchedTier = matchSubCode(input, cfg.subCodes || cfg.subCode);
      if (!matchedTier) {
        mask.querySelector('#ml-err').textContent = '解锁码不正确，请确认已付款并向作者索取订阅码。';
        return;
      }
      // 联系方式存档 + 复制到剪贴板
      var contactEl = mask.querySelector('#ml-contact');
      var contact = contactEl ? (contactEl.value || '').trim() : '';
      if (contact) {
        try {
          ls('sl_sub_contact_v1', JSON.stringify({ contact: contact, tier: matchedTier, at: Date.now() }));
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(contact).catch(function () {});
          }
        } catch (e) {}
      }
      // 根据匹配到的档位取天数（优先用配置的 days，否则查 PRICING 表）
      var p = PRICING[curr][matchedTier] || PRICING.CNY[matchedTier] || PRICing.USD.yearly;
      var days = p.days;
      unlockSub(matchedTier, days);
      var st = subState();
      var expStr = (st && st.until) ? new Date(st.until).toISOString().slice(0, 10) : '';
      var durTxt = days >= 365 ? '1 年' : (days === 1 ? '1 天（今日有效）' : days + ' 天');
      closeMask(mask);
      var msg = '订阅成功！有效期 ' + durTxt + (expStr ? '（至 ' + expStr + '）' : '') + '。';
      if (contact) {
        msg += '联系方式已复制到剪贴板，请打开微信/邮箱粘贴给作者以完成发码。';
      } else {
        msg += '请凭作者私发的解锁码在此输入。';
      }
      try { alert(msg); } catch (e) {}
      if (typeof onOk === 'function') onOk(matchedTier);
    });
  }

  window.MingLiPay = {
    isAuthor: isAuthor,
    isChapterUnlocked: isChapterUnlocked,
    unlockChapters: unlockChapters,
    isSubActive: isSubActive,
    unlockSub: unlockSub,
    subDaysLeft: subDaysLeft,
    showTipModal: showTipModal,
    showSubModal: showSubModal
  };
})();
