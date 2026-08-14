/*
 * paywall.js — 股市笔记 付费墙（纯前端，无后端）
 * 重要说明（纯静态站点的根本限制）：
 *   本站托管于 GitHub Pages，无后端、无支付回调，无法真正校验微信/支付宝是否付款。
 *   因此付费墙为「软门槛」——读者扫码打赏/订阅后，须输入作者私发的「解锁码」才解锁查看。
 *   此机制可挡住随手白嫖，但懂技术者仍可能逆向；要做到「不付绝对看不到」需后端支付回调。
 * - 章节解锁码：调用方通过 cfg.unlockCode 传入（base64 编码，避免明文暴露）。
 * - 订阅解锁码：调用方通过 cfg.subCode 传入（base64 编码）。
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

  // 计算 public/ 基址（paywall.js 自身所在目录）
  function baseUrl() {
    var s = document.currentScript;
    if (s && s.src) {
      var m = s.src.match(/(.*\/)paywall\.js$/);
      if (m) return m[1];
    }
    return '/';
  }

  var CSS_INJECTED = false;
  function ensureStyle() {
    if (CSS_INJECTED) return;
    CSS_INJECTED = true;
    var css = '' +
      '.ml-mask{position:fixed;inset:0;background:rgba(8,12,20,.55);backdrop-filter:blur(3px);' +
      'display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px;}' +
      '.ml-dlg{background:var(--bg,#fff);color:var(--fg,#1c1830);border:1px solid var(--border,#e5e7eb);' +
      'border-radius:14px;max-width:420px;width:100%;padding:22px 22px 18px;box-shadow:0 18px 50px rgba(0,0,0,.25);' +
      'font-family:system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;}' +
      '.ml-dlg h3{margin:0 0 6px;font-size:19px;}' +
      '.ml-dlg p{margin:6px 0;font-size:14px;color:var(--muted,#666);line-height:1.7;}' +
      '.ml-qrs{display:flex;gap:16px;justify-content:center;margin:14px 0 6px;}' +
      '.ml-qr{text-align:center;font-size:12px;color:var(--muted,#666);}' +
      '.ml-qr img{width:140px;height:140px;border:1px solid var(--border,#e5e7eb);border-radius:10px;}' +
      '.ml-tiers{display:flex;gap:10px;margin:14px 0 4px;}' +
      '.ml-tier{flex:1;border:1.5px solid var(--border,#e5e7eb);border-radius:10px;padding:12px 8px;text-align:center;' +
      'cursor:pointer;transition:.15s;background:transparent;color:var(--fg,#1c1830);}' +
      '.ml-tier .p{font-size:20px;font-weight:800;color:var(--accent,#1565c0);}' +
      '.ml-tier .t{font-size:12px;color:var(--muted,#666);}' +
      '.ml-tier.sel{border-color:var(--accent,#1565c0);background:rgba(21,101,192,.08);}' +
      '.ml-amt{display:flex;align-items:center;gap:8px;margin:12px 0 4px;}' +
      '.ml-amt label{flex:0 0 auto;font-size:14px;color:var(--fg,#1c1830);}' +
      '.ml-amt input{flex:1;padding:9px 10px;border:1px solid var(--border,#e5e7eb);border-radius:8px;' +
      'background:var(--bg,#fff);color:var(--fg,#1c1830);font-size:15px;}' +
      '.ml-btns{display:flex;gap:10px;margin-top:14px;}' +
      '.ml-btn{flex:1;padding:11px 0;border-radius:9px;border:1px solid var(--accent,#1565c0);' +
      'background:var(--accent,#1565c0);color:#fff;font-size:15px;cursor:pointer;transition:.15s;}' +
      '.ml-btn:hover{opacity:.92;}' +
      '.ml-btn.ghost{background:transparent;color:var(--accent,#1565c0);}' +
      '.ml-note{font-size:12px;color:var(--muted,#666);margin-top:10px;text-align:center;}' +
      '.ml-err{color:#d33;font-size:13px;min-height:16px;margin-top:6px;}' +
      // 文章付费遮罩（沿用 BlogPost 里的 article-lock 类）
      '.article-lock{position:relative;}' +
      '.article-lock #post-content{filter:blur(7px);max-height:340px;overflow:hidden;user-select:none;}' +
      '.article-lock .paywall-veil{position:absolute;left:0;right:0;top:0;height:100%;' +
      'display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;' +
      'background:linear-gradient(180deg,rgba(255,255,255,0) 0%,var(--bg,#fff) 62%);text-align:center;padding:20px;}' +
      '.article-lock .paywall-veil .pbtn{padding:10px 22px;border-radius:999px;background:var(--accent,#1565c0);' +
      'color:#fff;border:none;font-size:15px;cursor:pointer;}' +
      '.article-lock .paywall-veil .pbtn:hover{opacity:.92;}' +
      // —— 联系字段（订阅时可选填）——
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

  // 订阅码 → 档位（有效期）匹配。
  // cfg.subCodes 支持两种写法：
  //   数组 of string（base64）：任一匹配即通过，档位回退为 'yearly'；
  //   数组 of { code: base64, tier: 'yearly'|'monthly' }：匹配到哪条就用那条 tier。
  // 这样「付多少钱、给什么码、有效期多久」一一对应；轮换时把旧码移出数组即对新人失效，
  // 已付费老用户的记录存在 localStorage 时间戳里（sl_sub_v1.until），与此处无关、不受影响。
  // 返回匹配的 tier 字符串；无匹配返回 null。
  function matchSubCode(input, codes) {
    if (codes == null) return null;
    if (!Array.isArray(codes)) codes = [codes]; // 兼容旧的单一码
    for (var i = 0; i < codes.length; i++) {
      var entry = codes[i];
      var b64, tier;
      if (typeof entry === 'string') { b64 = entry; tier = 'yearly'; }
      else { b64 = entry.code; tier = entry.tier || 'yearly'; }
      if (verifyCode(input, b64)) return tier;
    }
    return null;
  }

  function showTipModal(cfg, onOk) {
    cfg = cfg || {};
    ensureStyle();
    var base = baseUrl();
    var qrWechat = cfg.qrWechat || (base + 'reward/wechat.png');
    var qrAlipay = cfg.qrAlipay || (base + 'reward/alipay.png');
    var title = cfg.title || '解锁付费章节';
    var desc = cfg.desc || '扫码打赏后，请输入作者私发的解锁码，即可解锁全部付费章节。作者本人免付费。';

    var mask = document.createElement('div');
    mask.className = 'ml-mask';
    mask.innerHTML =
      '<div class="ml-dlg" role="dialog" aria-modal="true">' +
        '<h3>' + title + '</h3>' +
        '<p>' + desc + '</p>' +
        '<div class="ml-qrs">' +
          '<div class="ml-qr"><img src="' + qrWechat + '" alt="微信收款码"/><div>微信</div></div>' +
          '<div class="ml-qr"><img src="' + qrAlipay + '" alt="支付宝收款码"/><div>支付宝</div></div>' +
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

  function showSubModal(cfg, onOk) {
    cfg = cfg || {};
    ensureStyle();
    var base = baseUrl();
    var qrWechat = cfg.qrWechat || (base + 'reward/wechat.png');
    var qrAlipay = cfg.qrAlipay || (base + 'reward/alipay.png');
    var title = cfg.title || '订阅动态选股';
    var desc = cfg.desc || '订阅后可使用「动态选股」工具：判断周期、给出仓位与定投方案。扫码付款后输入作者私发的解锁码。';
    var monthly = cfg.monthly || { price: '$10', days: 30, label: '按月 · $10 / 月' };
    var yearly = cfg.yearly || { price: '$100', days: 365, label: '按年 · $100 / 年（省 $20）' };
    var chosen = 'yearly';
    var showContact = !!cfg.contact;
    var contactPlaceholder = cfg.contactPlaceholder || '微信 ID / 邮箱（付款后便于发码）';

    var mask = document.createElement('div');
    mask.className = 'ml-mask';
    mask.innerHTML =
      '<div class="ml-dlg" role="dialog" aria-modal="true">' +
        '<h3>' + title + '</h3>' +
        '<p>' + desc + '</p>' +
        '<div class="ml-tiers">' +
          '<button class="ml-tier" data-tier="monthly"><div class="p">' + monthly.price + '</div><div class="t">每月</div></button>' +
          '<button class="ml-tier sel" data-tier="yearly"><div class="p">' + yearly.price + '</div><div class="t">每年（推荐）</div></button>' +
        '</div>' +
        '<div class="ml-qrs">' +
          '<div class="ml-qr"><img src="' + qrWechat + '" alt="微信收款码"/><div>微信</div></div>' +
          '<div class="ml-qr"><img src="' + qrAlipay + '" alt="支付宝收款码"/><div>支付宝</div></div>' +
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
        '<p class="ml-note">订阅时长由你输入的解锁码决定：年付码有效期 1 年，月付码有效期 1 个月。扫码付款后，凭作者私发的解锁码在此输入即可解锁订阅。</p>' +
      '</div>';
    document.body.appendChild(mask);

    function applyTier(t) {
      chosen = t;
      mask.querySelectorAll('.ml-tier').forEach(function (b) {
        b.classList.toggle('sel', b.getAttribute('data-tier') === t);
      });
    }
    mask.addEventListener('click', function (e) {
      if (e.target === mask) closeMask(mask);
      var tier = e.target.closest && e.target.closest('.ml-tier');
      if (tier) applyTier(tier.getAttribute('data-tier'));
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
      // 联系方式：若有填则复制到剪贴板 + 本地存档（无后端：读者需主动粘贴给作者）
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
      var days = (matchedTier === 'monthly') ? monthly.days : yearly.days;
      var tier = matchedTier;
      unlockSub(tier, days);
      var st = subState();
      var expStr = (st && st.until) ? new Date(st.until).toISOString().slice(0, 10) : '';
      var durTxt = (days >= 365) ? '1 年' : (days + ' 天');
      closeMask(mask);
      var msg = '订阅成功！有效期 ' + durTxt + (expStr ? '（至 ' + expStr + '）' : '') + '。';
      if (contact) {
        msg += '联系方式已复制到剪贴板，请打开微信/邮箱粘贴给作者（hangkai）以完成发码。';
      } else {
        msg += '请凭作者私发的解锁码在此输入。';
      }
      try { alert(msg); } catch (e) {}
      if (typeof onOk === 'function') onOk(tier);
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
