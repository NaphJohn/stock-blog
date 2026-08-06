/*
 * paywall.js — 股市笔记 付费墙（纯前端，无后端）
 * 两种解锁：
 *  1) 章节打赏通票：一次性打赏（最低 ¥1，无上限）→ 解锁全部「付费章节」文章。
 *  2) 订阅：月 $10（30 天）/ 年 $100（365 天）→ 解锁「动态选股」等订阅功能。
 * 作者本人：URL 带 ?author=1 或 localStorage ml_author==='1' 永久免付费。
 * 注意：纯前端仅做展示层门禁，真正计费需配套后端/支付回调；此处以收款码 + 本地解锁模拟。
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
      '.ml-amt input{flex:1;padding:9px 10px;border:1px solid var(--border,#e5e7eb);border-radius:8px;' +
      'background:var(--bg,#fff);color:var(--fg,#1c1830);font-size:15px;}' +
      '.ml-amt span{color:var(--muted,#666);font-size:14px;}' +
      '.ml-btns{display:flex;gap:10px;margin-top:14px;}' +
      '.ml-btn{flex:1;padding:11px 0;border-radius:9px;border:1px solid var(--accent,#1565c0);' +
      'background:var(--accent,#1565c0);color:#fff;font-size:15px;cursor:pointer;transition:.15s;}' +
      '.ml-btn:hover{opacity:.92;}' +
      '.ml-btn.ghost{background:transparent;color:var(--accent,#1565c0);}' +
      '.ml-note{font-size:12px;color:var(--muted,#666);margin-top:10px;text-align:center;}' +
      '.ml-err{color:#d33;font-size:13px;min-height:16px;margin-top:6px;}' +
      // 文章付费遮罩
      '.article-lock{position:relative;}' +
      '.article-lock #post-content{filter:blur(7px);max-height:340px;overflow:hidden;user-select:none;}' +
      '.article-lock .paywall-veil{position:absolute;left:0;right:0;top:0;height:100%;' +
      'display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;' +
      'background:linear-gradient(180deg,rgba(255,255,255,0) 0%,var(--bg,#fff) 62%);text-align:center;padding:20px;}' +
      '.article-lock .paywall-veil .pbtn{padding:10px 22px;border-radius:999px;background:var(--accent,#1565c0);' +
      'color:#fff;border:none;font-size:15px;cursor:pointer;}' +
      '.article-lock .paywall-veil .pbtn:hover{opacity:.92;}';
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
  }

  function closeMask(mask) { if (mask && mask.parentNode) mask.parentNode.removeChild(mask); }

  function showTipModal(cfg, onOk) {
    cfg = cfg || {};
    ensureStyle();
    var base = baseUrl();
    var minTip = (cfg.minTip != null) ? cfg.minTip : 1;
    var qrWechat = cfg.qrWechat || (base + 'reward/wechat.png');
    var qrAlipay = cfg.qrAlipay || (base + 'reward/alipay.png');
    var title = cfg.title || '解锁付费章节';
    var desc = cfg.desc || '打赏最低 ¥' + minTip + '（上不封顶）即可解锁全部付费章节，作者本人免付费。';

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
        '<div class="ml-amt"><span>金额 ¥</span><input id="ml-amt" type="number" min="' + minTip + '" step="1" value="' + minTip + '"/></div>' +
        '<div class="ml-err" id="ml-err"></div>' +
        '<div class="ml-btns">' +
          '<button class="ml-btn ghost" id="ml-cancel">稍后</button>' +
          '<button class="ml-btn" id="ml-ok">已付款，解锁</button>' +
        '</div>' +
        '<p class="ml-note">付款后点击「已付款，解锁」即可阅读（本页为纯前端演示，不传输任何信息）。</p>' +
      '</div>';
    document.body.appendChild(mask);

    mask.addEventListener('click', function (e) { if (e.target === mask) closeMask(mask); });
    mask.querySelector('#ml-cancel').addEventListener('click', function () { closeMask(mask); });
    mask.querySelector('#ml-ok').addEventListener('click', function () {
      var v = parseFloat(mask.querySelector('#ml-amt').value);
      if (!(v >= minTip)) { mask.querySelector('#ml-err').textContent = '金额不能低于 ¥' + minTip; return; }
      unlockChapters();
      closeMask(mask);
      if (typeof onOk === 'function') onOk(v);
    });
  }

  function showSubModal(cfg, onOk) {
    cfg = cfg || {};
    ensureStyle();
    var base = baseUrl();
    var qrWechat = cfg.qrWechat || (base + 'reward/wechat.png');
    var qrAlipay = cfg.qrAlipay || (base + 'reward/alipay.png');
    var title = cfg.title || '订阅动态选股';
    var desc = cfg.desc || '订阅后可使用「动态选股」工具：判断周期、给出仓位与定投方案。';
    var monthly = cfg.monthly || { price: '$10', days: 30, label: '按月 · $10 / 月' };
    var yearly = cfg.yearly || { price: '$100', days: 365, label: '按年 · $100 / 年（省 $20）' };
    var chosen = 'yearly';

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
        '<div class="ml-err" id="ml-err"></div>' +
        '<div class="ml-btns">' +
          '<button class="ml-btn ghost" id="ml-cancel">稍后</button>' +
          '<button class="ml-btn" id="ml-ok">已付款，订阅</button>' +
        '</div>' +
        '<p class="ml-note">扫描对应收款码付款后点击「已付款，订阅」；订阅状态保存在本机浏览器。</p>' +
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
      var days = (chosen === 'monthly') ? monthly.days : yearly.days;
      var tier = (chosen === 'monthly') ? 'monthly' : 'yearly';
      unlockSub(tier, days);
      closeMask(mask);
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
