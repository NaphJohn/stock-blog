import { c as createComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead, r as renderComponent } from '../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$SiteHeader } from '../../chunks/SiteHeader_y61EAjpp.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Selector = createComponent(($$result, $$props, $$slots) => {
  const base = "/stock-blog/";
  return renderTemplate(_a || (_a = __template(["", " ", '<main class="sel"> <p class="kicker">✦ Stock Picker · Subscription</p> <h1>📈 Stock Picker</h1> <p class="sub">Enter a ticker and your investable amount; it reads the cycle and suggests action, sizing and a DCA plan.</p> <div id="sel-wrap" style="position:relative"> <form id="sel-form" class="card" onsubmit="return false"> <div class="row"> <label>Ticker / code\n<input id="code" type="text" placeholder="e.g. 600519 / sh600519 / 00700 / AAPL"> </label> <label>Investable amount (CNY)\n<input id="capital" type="number" min="0" step="1000" placeholder="e.g. 100000"> </label> </div> <div class="row"> <button id="run" class="run" type="button">Analyze</button> <span class="hint">Data from Tencent quote (qt.gtimg.cn). For reference only — not advice.</span> </div> <div id="err" class="err"></div> </form> <div id="result" class="result" hidden></div> <div class="paywall-veil" id="sel-veil" hidden> <h3>🔒 Subscribers only</h3> <p>Stock Picker is a subscription feature: $10/mo or $100/yr (save $20).</p> <button class="pbtn" id="sub-btn" type="button">Subscribe to unlock</button> </div> </div> <p class="foot-note">⚠️ All output is generated from public quotes and a rule model, for learning only — not investment advice.</p> </main> <script', `></script> <script>
  (function () {
    var wrap = document.getElementById('sel-wrap');
    var veil = document.getElementById('sel-veil');
    var runBtn = document.getElementById('run');

    function gateCheck() {
      if (!window.MingLiPay) return;
      if (MingLiPay.isSubActive()) { wrap.classList.remove('article-lock'); if (veil) veil.hidden = true; return; }
      wrap.classList.add('article-lock');
      if (veil) veil.hidden = false;
    }
    gateCheck();
    var subBtn = document.getElementById('sub-btn');
    if (subBtn) subBtn.addEventListener('click', function () {
      MingLiPay.showSubModal({ title: 'Subscribe to Stock Picker', desc: '$10/mo or $100/yr (save $20). Unlocks cycle reading, sizing & DCA.' }, function () { gateCheck(); });
    });

    runBtn.addEventListener('click', function () {
      if (window.MingLiPay && !MingLiPay.isSubActive()) {
        MingLiPay.showSubModal({ title: 'Subscribe to Stock Picker', desc: '$10/mo or $100/yr. Unlock analysis after subscribing.' }, function () { gateCheck(); });
        return;
      }
      analyze();
    });

    function normalizeCode(raw) {
      raw = (raw || '').trim().toLowerCase();
      if (/^(sh|sz|hk|us)/.test(raw)) return raw;
      if (/^\\d{6}$/.test(raw)) {
        var p = raw[0];
        if (p === '6' || raw.startsWith('68') || raw.startsWith('11') || raw.startsWith('5')) return 'sh' + raw;
        if (p === '0' || p === '3' || raw.startsWith('12') || raw.startsWith('15') || raw.startsWith('16')) return 'sz' + raw;
        return 'sh' + raw;
      }
      if (/^\\d{5}$/.test(raw)) return 'hk' + raw;
      if (/^[a-z]{1,6}$/.test(raw)) return 'us' + raw;
      return raw;
    }

    function fetchQuote(code) {
      return new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = 'https://qt.gtimg.cn/q=' + code;
        var done = false;
        function fin() { if (done) return; done = true; try { s.remove(); } catch (e) {} }
        s.onload = function () {
          var raw = window['v_' + code];
          fin();
          if (!raw) return reject('No quote data — check the code');
          resolve(raw);
        };
        s.onerror = function () { fin(); reject('Quote request failed'); };
        setTimeout(function () { fin(); reject('Quote request timed out'); }, 8000);
        document.head.appendChild(s);
      });
    }

    function parseQuote(raw) {
      var f = raw.split('~');
      return {
        name: f[1], code: f[2],
        price: parseFloat(f[3]), prevClose: parseFloat(f[4]), open: parseFloat(f[5]),
        chg: parseFloat(f[30]), chgPct: parseFloat(f[32]) || parseFloat(f[31]) || 0,
        high: parseFloat(f[33]), low: parseFloat(f[34]),
        pe: parseFloat(f[37]), pb: parseFloat(f[38]),
        high52: parseFloat(f[47]), low52: parseFloat(f[48])
      };
    }

    function fetchKline(code) {
      return fetch('https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?param=' + code + ',day,,,320,qfq')
        .then(function (r) { return r.json(); })
        .then(function (d) {
          var node = (d.data && (d.data[code] || d.data[code.toUpperCase()]));
          var arr = node ? (node.qfqday || node.day || []) : [];
          return arr.map(function (x) { return parseFloat(x.close); });
        });
    }

    function ma(closes, n) {
      if (!closes || closes.length < n) return null;
      var s = 0; for (var i = closes.length - n; i < closes.length; i++) s += closes[i];
      return s / n;
    }

    function analyze() {
      var errEl = document.getElementById('err');
      var resEl = document.getElementById('result');
      errEl.textContent = ''; resEl.hidden = true;
      var code = normalizeCode(document.getElementById('code').value);
      var C = parseFloat(document.getElementById('capital').value) || 0;
      if (!code) { errEl.textContent = 'Please enter a ticker / code.'; return; }

      fetchQuote(code).then(function (raw) {
        var q = parseQuote(raw);
        if (!q.price) { errEl.textContent = 'No valid quote parsed — check the code format.'; return; }
        fetchKline(code).then(function (closes) {
          var mas = closes && closes.length ? { ma20: ma(closes, 20), ma60: ma(closes, 60), ma120: ma(closes, 120) } : null;
          render(q, mas, C);
        }).catch(function () { render(q, null, C); });
      }).catch(function (e) {
        errEl.textContent = (typeof e === 'string') ? e : 'Failed to fetch quote — try again.';
      });
    }

    function render(q, mas, C) {
      var P = q.price, H52 = q.high52, L52 = q.low52;
      var posPct = (H52 && L52 && H52 > L52) ? (P - L52) / (H52 - L52) : null;
      var trend = 'unknown';
      if (mas && mas.ma20 && mas.ma60 && mas.ma120) {
        if (mas.ma20 > mas.ma60 && mas.ma60 > mas.ma120 && P >= mas.ma20) trend = 'up';
        else if (mas.ma20 < mas.ma60 && mas.ma60 < mas.ma120 && P <= mas.ma20) trend = 'down';
        else trend = 'side';
      }
      var band = 'mid';
      if (posPct != null) { band = posPct >= 0.8 ? 'high' : (posPct <= 0.2 ? 'low' : 'mid'); }
      else if (H52 && P >= H52 * 0.97) band = 'high';

      var label, tone, action, deployPct;
      if (band === 'low') {
        label = (trend === 'down' || trend === 'side') ? 'Undervalued · bottoming/range' : 'Undervalued · early uptrend';
        tone = 'good'; action = 'Buy in tranches / DCA to average down'; deployPct = 0.7;
      } else if (band === 'high') {
        label = (trend === 'up') ? 'High · late uptrend' : 'High · ranging';
        tone = 'bad'; action = 'Trim / wait — pause DCA'; deployPct = 0.15;
      } else {
        label = (trend === 'up') ? 'Mid uptrend' : (trend === 'down' ? 'Mid downtrend' : 'Mid range');
        tone = 'mid'; action = 'Hold / small DCA'; deployPct = 0.4;
      }
      var deploy = C ? Math.round(C * deployPct) : null;
      var dca;
      if (band !== 'high') {
        var months = (band === 'low') ? 12 : 6;
        var perMonth = C ? Math.round(C * deployPct / months) : null;
        var mid = (H52 && L52) ? Math.round((H52 + L52) / 2) : null;
        dca = { months: months, perMonth: perMonth, stop: 'stop when price reaches the 52-week midpoint (≈ ¥' + (mid || '?') + ') or the target is met' };
      } else { dca = { skip: true }; }

      var trendTxt = { up: 'Uptrend', down: 'Downtrend', side: 'Range', unknown: 'Unknown (K-line limited)' }[trend];
      var bandTxt = { high: 'High (near 52w high)', low: 'Low (near 52w low)', mid: 'Mid range' }[band];
      var html =
        '<div class="r-head">' +
          '<div><b>' + (q.name || q.code) + '</b> <span class="code">' + q.code + '</span></div>' +
          '<div class="price">¥' + P.toFixed(2) + ' <span class="' + (q.chgPct >= 0 ? 'up' : 'down') + '">' + (q.chgPct >= 0 ? '+' : '') + q.chgPct.toFixed(2) + '%</span></div>' +
        '</div>' +
        '<div class="r-cycle ' + tone + '">Cycle: ' + label + '</div>' +
        '<ul class="r-list">' +
          '<li><span>Trend (MA20/60/120)</span><b>' + trendTxt + '</b></li>' +
          (posPct != null ? '<li><span>52w range position</span><b>' + bandTxt + ' (' + (posPct * 100).toFixed(0) + '%)</b></li>' : '<li><span>52w range</span><b>' + bandTxt + '</b></li>') +
          (H52 ? '<li><span>52w high / low</span><b>¥' + H52.toFixed(2) + ' / ¥' + L52.toFixed(2) + '</b></li>' : '') +
          (q.pe ? '<li><span>PE (TTM)</span><b>' + q.pe.toFixed(1) + '</b></li>' : '') +
          (q.pb ? '<li><span>PB</span><b>' + q.pb.toFixed(2) + '</b></li>' : '') +
        '</ul>' +
        '<div class="r-act"><span class="lbl">Action</span><b>' + action + '</b></div>' +
        '<div class="r-act"><span class="lbl">Max position</span><b>' + (deployPct * 100).toFixed(0) + '%' +
          (deploy != null ? ' (≈ ¥' + deploy.toLocaleString() + ')' : '') + '</b></div>' +
        (dca.skip
          ? '<div class="r-dca bad">🚫 Currently high — <b>pause DCA</b>; wait for a pullback to the undervalued zone before tranches.</div>'
          : '<div class="r-dca"><span class="lbl">DCA plan</span><b>¥' + (dca.perMonth != null ? dca.perMonth.toLocaleString() : '?') + ' / month</b> over ' + dca.months + ' months; ' + dca.stop + '.</div>') +
        '<p class="r-note">Note: ' + (mas ? 'MAs from the last 320 daily bars.' : 'Historical K-line unavailable here; trend estimated from the 52-week range, for reference only.') + ' Rule-model output — not advice.</p>';
      var resEl = document.getElementById('result');
      resEl.innerHTML = html;
      resEl.hidden = false;
    }
  })();
</script> `], ["", " ", '<main class="sel"> <p class="kicker">✦ Stock Picker · Subscription</p> <h1>📈 Stock Picker</h1> <p class="sub">Enter a ticker and your investable amount; it reads the cycle and suggests action, sizing and a DCA plan.</p> <div id="sel-wrap" style="position:relative"> <form id="sel-form" class="card" onsubmit="return false"> <div class="row"> <label>Ticker / code\n<input id="code" type="text" placeholder="e.g. 600519 / sh600519 / 00700 / AAPL"> </label> <label>Investable amount (CNY)\n<input id="capital" type="number" min="0" step="1000" placeholder="e.g. 100000"> </label> </div> <div class="row"> <button id="run" class="run" type="button">Analyze</button> <span class="hint">Data from Tencent quote (qt.gtimg.cn). For reference only — not advice.</span> </div> <div id="err" class="err"></div> </form> <div id="result" class="result" hidden></div> <div class="paywall-veil" id="sel-veil" hidden> <h3>🔒 Subscribers only</h3> <p>Stock Picker is a subscription feature: $10/mo or $100/yr (save $20).</p> <button class="pbtn" id="sub-btn" type="button">Subscribe to unlock</button> </div> </div> <p class="foot-note">⚠️ All output is generated from public quotes and a rule model, for learning only — not investment advice.</p> </main> <script', `></script> <script>
  (function () {
    var wrap = document.getElementById('sel-wrap');
    var veil = document.getElementById('sel-veil');
    var runBtn = document.getElementById('run');

    function gateCheck() {
      if (!window.MingLiPay) return;
      if (MingLiPay.isSubActive()) { wrap.classList.remove('article-lock'); if (veil) veil.hidden = true; return; }
      wrap.classList.add('article-lock');
      if (veil) veil.hidden = false;
    }
    gateCheck();
    var subBtn = document.getElementById('sub-btn');
    if (subBtn) subBtn.addEventListener('click', function () {
      MingLiPay.showSubModal({ title: 'Subscribe to Stock Picker', desc: '$10/mo or $100/yr (save $20). Unlocks cycle reading, sizing & DCA.' }, function () { gateCheck(); });
    });

    runBtn.addEventListener('click', function () {
      if (window.MingLiPay && !MingLiPay.isSubActive()) {
        MingLiPay.showSubModal({ title: 'Subscribe to Stock Picker', desc: '$10/mo or $100/yr. Unlock analysis after subscribing.' }, function () { gateCheck(); });
        return;
      }
      analyze();
    });

    function normalizeCode(raw) {
      raw = (raw || '').trim().toLowerCase();
      if (/^(sh|sz|hk|us)/.test(raw)) return raw;
      if (/^\\\\d{6}$/.test(raw)) {
        var p = raw[0];
        if (p === '6' || raw.startsWith('68') || raw.startsWith('11') || raw.startsWith('5')) return 'sh' + raw;
        if (p === '0' || p === '3' || raw.startsWith('12') || raw.startsWith('15') || raw.startsWith('16')) return 'sz' + raw;
        return 'sh' + raw;
      }
      if (/^\\\\d{5}$/.test(raw)) return 'hk' + raw;
      if (/^[a-z]{1,6}$/.test(raw)) return 'us' + raw;
      return raw;
    }

    function fetchQuote(code) {
      return new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = 'https://qt.gtimg.cn/q=' + code;
        var done = false;
        function fin() { if (done) return; done = true; try { s.remove(); } catch (e) {} }
        s.onload = function () {
          var raw = window['v_' + code];
          fin();
          if (!raw) return reject('No quote data — check the code');
          resolve(raw);
        };
        s.onerror = function () { fin(); reject('Quote request failed'); };
        setTimeout(function () { fin(); reject('Quote request timed out'); }, 8000);
        document.head.appendChild(s);
      });
    }

    function parseQuote(raw) {
      var f = raw.split('~');
      return {
        name: f[1], code: f[2],
        price: parseFloat(f[3]), prevClose: parseFloat(f[4]), open: parseFloat(f[5]),
        chg: parseFloat(f[30]), chgPct: parseFloat(f[32]) || parseFloat(f[31]) || 0,
        high: parseFloat(f[33]), low: parseFloat(f[34]),
        pe: parseFloat(f[37]), pb: parseFloat(f[38]),
        high52: parseFloat(f[47]), low52: parseFloat(f[48])
      };
    }

    function fetchKline(code) {
      return fetch('https://web.ifzq.gtimg.cn/appstock/app/fqkline/get?param=' + code + ',day,,,320,qfq')
        .then(function (r) { return r.json(); })
        .then(function (d) {
          var node = (d.data && (d.data[code] || d.data[code.toUpperCase()]));
          var arr = node ? (node.qfqday || node.day || []) : [];
          return arr.map(function (x) { return parseFloat(x.close); });
        });
    }

    function ma(closes, n) {
      if (!closes || closes.length < n) return null;
      var s = 0; for (var i = closes.length - n; i < closes.length; i++) s += closes[i];
      return s / n;
    }

    function analyze() {
      var errEl = document.getElementById('err');
      var resEl = document.getElementById('result');
      errEl.textContent = ''; resEl.hidden = true;
      var code = normalizeCode(document.getElementById('code').value);
      var C = parseFloat(document.getElementById('capital').value) || 0;
      if (!code) { errEl.textContent = 'Please enter a ticker / code.'; return; }

      fetchQuote(code).then(function (raw) {
        var q = parseQuote(raw);
        if (!q.price) { errEl.textContent = 'No valid quote parsed — check the code format.'; return; }
        fetchKline(code).then(function (closes) {
          var mas = closes && closes.length ? { ma20: ma(closes, 20), ma60: ma(closes, 60), ma120: ma(closes, 120) } : null;
          render(q, mas, C);
        }).catch(function () { render(q, null, C); });
      }).catch(function (e) {
        errEl.textContent = (typeof e === 'string') ? e : 'Failed to fetch quote — try again.';
      });
    }

    function render(q, mas, C) {
      var P = q.price, H52 = q.high52, L52 = q.low52;
      var posPct = (H52 && L52 && H52 > L52) ? (P - L52) / (H52 - L52) : null;
      var trend = 'unknown';
      if (mas && mas.ma20 && mas.ma60 && mas.ma120) {
        if (mas.ma20 > mas.ma60 && mas.ma60 > mas.ma120 && P >= mas.ma20) trend = 'up';
        else if (mas.ma20 < mas.ma60 && mas.ma60 < mas.ma120 && P <= mas.ma20) trend = 'down';
        else trend = 'side';
      }
      var band = 'mid';
      if (posPct != null) { band = posPct >= 0.8 ? 'high' : (posPct <= 0.2 ? 'low' : 'mid'); }
      else if (H52 && P >= H52 * 0.97) band = 'high';

      var label, tone, action, deployPct;
      if (band === 'low') {
        label = (trend === 'down' || trend === 'side') ? 'Undervalued · bottoming/range' : 'Undervalued · early uptrend';
        tone = 'good'; action = 'Buy in tranches / DCA to average down'; deployPct = 0.7;
      } else if (band === 'high') {
        label = (trend === 'up') ? 'High · late uptrend' : 'High · ranging';
        tone = 'bad'; action = 'Trim / wait — pause DCA'; deployPct = 0.15;
      } else {
        label = (trend === 'up') ? 'Mid uptrend' : (trend === 'down' ? 'Mid downtrend' : 'Mid range');
        tone = 'mid'; action = 'Hold / small DCA'; deployPct = 0.4;
      }
      var deploy = C ? Math.round(C * deployPct) : null;
      var dca;
      if (band !== 'high') {
        var months = (band === 'low') ? 12 : 6;
        var perMonth = C ? Math.round(C * deployPct / months) : null;
        var mid = (H52 && L52) ? Math.round((H52 + L52) / 2) : null;
        dca = { months: months, perMonth: perMonth, stop: 'stop when price reaches the 52-week midpoint (≈ ¥' + (mid || '?') + ') or the target is met' };
      } else { dca = { skip: true }; }

      var trendTxt = { up: 'Uptrend', down: 'Downtrend', side: 'Range', unknown: 'Unknown (K-line limited)' }[trend];
      var bandTxt = { high: 'High (near 52w high)', low: 'Low (near 52w low)', mid: 'Mid range' }[band];
      var html =
        '<div class="r-head">' +
          '<div><b>' + (q.name || q.code) + '</b> <span class="code">' + q.code + '</span></div>' +
          '<div class="price">¥' + P.toFixed(2) + ' <span class="' + (q.chgPct >= 0 ? 'up' : 'down') + '">' + (q.chgPct >= 0 ? '+' : '') + q.chgPct.toFixed(2) + '%</span></div>' +
        '</div>' +
        '<div class="r-cycle ' + tone + '">Cycle: ' + label + '</div>' +
        '<ul class="r-list">' +
          '<li><span>Trend (MA20/60/120)</span><b>' + trendTxt + '</b></li>' +
          (posPct != null ? '<li><span>52w range position</span><b>' + bandTxt + ' (' + (posPct * 100).toFixed(0) + '%)</b></li>' : '<li><span>52w range</span><b>' + bandTxt + '</b></li>') +
          (H52 ? '<li><span>52w high / low</span><b>¥' + H52.toFixed(2) + ' / ¥' + L52.toFixed(2) + '</b></li>' : '') +
          (q.pe ? '<li><span>PE (TTM)</span><b>' + q.pe.toFixed(1) + '</b></li>' : '') +
          (q.pb ? '<li><span>PB</span><b>' + q.pb.toFixed(2) + '</b></li>' : '') +
        '</ul>' +
        '<div class="r-act"><span class="lbl">Action</span><b>' + action + '</b></div>' +
        '<div class="r-act"><span class="lbl">Max position</span><b>' + (deployPct * 100).toFixed(0) + '%' +
          (deploy != null ? ' (≈ ¥' + deploy.toLocaleString() + ')' : '') + '</b></div>' +
        (dca.skip
          ? '<div class="r-dca bad">🚫 Currently high — <b>pause DCA</b>; wait for a pullback to the undervalued zone before tranches.</div>'
          : '<div class="r-dca"><span class="lbl">DCA plan</span><b>¥' + (dca.perMonth != null ? dca.perMonth.toLocaleString() : '?') + ' / month</b> over ' + dca.months + ' months; ' + dca.stop + '.</div>') +
        '<p class="r-note">Note: ' + (mas ? 'MAs from the last 320 daily bars.' : 'Historical K-line unavailable here; trend estimated from the 52-week range, for reference only.') + ' Rule-model output — not advice.</p>';
      var resEl = document.getElementById('result');
      resEl.innerHTML = html;
      resEl.hidden = false;
    }
  })();
</script> `])), renderComponent($$result, "SiteHeader", $$SiteHeader, { "lang": "en", "altLang": "中文", "altHref": "/selector" }), maybeRenderHead(), addAttribute(`${base}paywall.js`, "src"));
}, "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/selector.astro", void 0);
const $$file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/selector.astro";
const $$url = "/stock-blog/en/selector";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Selector,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
