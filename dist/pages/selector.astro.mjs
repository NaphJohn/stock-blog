import { c as createComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead, r as renderComponent } from '../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$SiteHeader } from '../chunks/SiteHeader_y61EAjpp.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Selector = createComponent(($$result, $$props, $$slots) => {
  const base = "/stock-blog/";
  return renderTemplate(_a || (_a = __template(["", " ", '<main class="sel"> <p class="kicker">✦ 动态选股 · 订阅功能</p> <h1>📈 动态选股</h1> <p class="sub">输入一只股票 / 基金代码与你的可投金额，自动判断当前周期、给出操作建议、仓位与定投方案。</p> <div id="sel-wrap" style="position:relative"> <form id="sel-form" class="card" onsubmit="return false"> <div class="row"> <label>股票 / 基金代码\n<input id="code" type="text" placeholder="如 600519 / sh600519 / 00700 / AAPL"> </label> <label>可投资金额（元）\n<input id="capital" type="number" min="0" step="1000" placeholder="如 100000"> </label> </div> <div class="row"> <button id="run" class="run" type="button">开始分析</button> <span class="hint">数据来自腾讯行情 qt.gtimg.cn，仅供参考，非投资建议。</span> </div> <div id="err" class="err"></div> </form> <div id="result" class="result" hidden></div> <div class="paywall-veil" id="sel-veil" hidden> <h3>🔒 订阅后可用</h3> <p>动态选股为订阅功能：月 $10 / 年 $100（省 $20）。</p> <button class="pbtn" id="sub-btn" type="button">订阅解锁</button> </div> </div> <p class="foot-note">⚠️ 本工具所有结论由公开行情与规则模型生成，仅供学习娱乐，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p> </main> <script', `></script> <script>
  (function () {
    var wrap = document.getElementById('sel-wrap');
    var veil = document.getElementById('sel-veil');
    var runBtn = document.getElementById('run');

    // 订阅门禁
    function gateCheck() {
      if (!window.MingLiPay) return;
      if (MingLiPay.isSubActive()) { wrap.classList.remove('article-lock'); if (veil) veil.hidden = true; return; }
      wrap.classList.add('article-lock');
      if (veil) veil.hidden = false;
    }
    gateCheck();
    var subBtn = document.getElementById('sub-btn');
    if (subBtn) subBtn.addEventListener('click', function () {
      MingLiPay.showSubModal({
        title: '订阅动态选股',
        desc: '月 $10 / 年 $100（省 $20）。订阅后可使用周期判断、仓位与定投方案。扫码付款后输入作者私发的解锁码。',
        subCode: btoa('gushi2026sub')
      }, function () { gateCheck(); });
    });

    // 点击分析：未订阅先弹订阅
    runBtn.addEventListener('click', function () {
      if (window.MingLiPay && !MingLiPay.isSubActive()) {
        MingLiPay.showSubModal({
          title: '订阅动态选股',
          desc: '月 $10 / 年 $100。订阅后解锁分析。扫码付款后输入作者私发的解锁码。',
          subCode: btoa('gushi2026sub')
        }, function () { gateCheck(); });
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
          if (!raw) return reject('无行情数据，请检查代码');
          resolve(raw);
        };
        s.onerror = function () { fin(); reject('行情接口请求失败'); };
        setTimeout(function () { fin(); reject('行情请求超时'); }, 8000);
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
      if (!code) { errEl.textContent = '请输入股票 / 基金代码。'; return; }

      fetchQuote(code).then(function (raw) {
        var q = parseQuote(raw);
        if (!q.price) { errEl.textContent = '未解析到有效行情，请检查代码格式。'; return; }
        fetchKline(code).then(function (closes) {
          var mas = closes && closes.length ? { ma20: ma(closes, 20), ma60: ma(closes, 60), ma120: ma(closes, 120) } : null;
          render(q, mas, C);
        }).catch(function () {
          render(q, null, C); // K线受限时降级，仅用52周区间
        });
      }).catch(function (e) {
        errEl.textContent = (typeof e === 'string') ? e : '行情获取失败，请稍后重试。';
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
        label = (trend === 'down' || trend === 'side') ? '低估 · 筑底/震荡' : '低估 · 上行初期';
        tone = 'good'; action = '分批买入 / 定投摊薄成本'; deployPct = 0.7;
      } else if (band === 'high') {
        label = (trend === 'up') ? '高位 · 上行末端' : '高位 · 震荡';
        tone = 'bad'; action = '减仓 / 观望，暂停定投'; deployPct = 0.15;
      } else {
        label = (trend === 'up') ? '上行中段' : (trend === 'down' ? '下行中段' : '中部震荡');
        tone = 'mid'; action = '持有 / 小额定投'; deployPct = 0.4;
      }
      var deploy = C ? Math.round(C * deployPct) : null;
      var dca;
      if (band !== 'high') {
        var months = (band === 'low') ? 12 : 6;
        var perMonth = C ? Math.round(C * deployPct / months) : null;
        var mid = (H52 && L52) ? Math.round((H52 + L52) / 2) : null;
        dca = { months: months, perMonth: perMonth, stop: '价格升至 52 周区间中位（约 ¥' + (mid || '?') + '）或累计达标后停止' };
      } else { dca = { skip: true }; }

      var trendTxt = { up: '上升', down: '下降', side: '震荡', unknown: '未知（K线数据受限）' }[trend];
      var bandTxt = { high: '高位（接近 52 周最高）', low: '低位（接近 52 周最低）', mid: '中部区间' }[band];
      var html =
        '<div class="r-head">' +
          '<div><b>' + (q.name || q.code) + '</b> <span class="code">' + q.code + '</span></div>' +
          '<div class="price">¥' + P.toFixed(2) + ' <span class="' + (q.chgPct >= 0 ? 'up' : 'down') + '">' + (q.chgPct >= 0 ? '+' : '') + q.chgPct.toFixed(2) + '%</span></div>' +
        '</div>' +
        '<div class="r-cycle ' + tone + '">周期判断：' + label + '</div>' +
        '<ul class="r-list">' +
          '<li><span>趋势（MA20/60/120）</span><b>' + trendTxt + '</b></li>' +
          (posPct != null ? '<li><span>52 周区间位置</span><b>' + bandTxt + '（' + (posPct * 100).toFixed(0) + '%）</b></li>' : '<li><span>52 周区间</span><b>' + bandTxt + '</b></li>') +
          (H52 ? '<li><span>52 周高 / 低</span><b>¥' + H52.toFixed(2) + ' / ¥' + L52.toFixed(2) + '</b></li>' : '') +
          (q.pe ? '<li><span>市盈率 TTM</span><b>' + q.pe.toFixed(1) + '</b></li>' : '') +
          (q.pb ? '<li><span>市净率</span><b>' + q.pb.toFixed(2) + '</b></li>' : '') +
        '</ul>' +
        '<div class="r-act"><span class="lbl">操作建议</span><b>' + action + '</b></div>' +
        '<div class="r-act"><span class="lbl">建议仓位上限</span><b>' + (deployPct * 100).toFixed(0) + '%' +
          (deploy != null ? '（约 ¥' + deploy.toLocaleString() + '）' : '') + '</b></div>' +
        (dca.skip
          ? '<div class="r-dca bad">🚫 当前处于高位，建议<b>暂停定投</b>，等待回落至低估区再分批介入。</div>'
          : '<div class="r-dca"><span class="lbl">定投方案</span><b>每月 ¥' + (dca.perMonth != null ? dca.perMonth.toLocaleString() : '?') + '</b>，分 ' + dca.months + ' 个月执行；' + dca.stop + '。</div>') +
        '<p class="r-note">注：' + (mas ? '均线基于近 320 交易日日线。' : '当前环境未能获取历史 K 线，趋势按 52 周区间估算，仅供参考。') + '所有结论由规则模型生成，非投资建议。</p>';
      var resEl = document.getElementById('result');
      resEl.innerHTML = html;
      resEl.hidden = false;
    }
  })();
</script> `], ["", " ", '<main class="sel"> <p class="kicker">✦ 动态选股 · 订阅功能</p> <h1>📈 动态选股</h1> <p class="sub">输入一只股票 / 基金代码与你的可投金额，自动判断当前周期、给出操作建议、仓位与定投方案。</p> <div id="sel-wrap" style="position:relative"> <form id="sel-form" class="card" onsubmit="return false"> <div class="row"> <label>股票 / 基金代码\n<input id="code" type="text" placeholder="如 600519 / sh600519 / 00700 / AAPL"> </label> <label>可投资金额（元）\n<input id="capital" type="number" min="0" step="1000" placeholder="如 100000"> </label> </div> <div class="row"> <button id="run" class="run" type="button">开始分析</button> <span class="hint">数据来自腾讯行情 qt.gtimg.cn，仅供参考，非投资建议。</span> </div> <div id="err" class="err"></div> </form> <div id="result" class="result" hidden></div> <div class="paywall-veil" id="sel-veil" hidden> <h3>🔒 订阅后可用</h3> <p>动态选股为订阅功能：月 $10 / 年 $100（省 $20）。</p> <button class="pbtn" id="sub-btn" type="button">订阅解锁</button> </div> </div> <p class="foot-note">⚠️ 本工具所有结论由公开行情与规则模型生成，仅供学习娱乐，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p> </main> <script', `></script> <script>
  (function () {
    var wrap = document.getElementById('sel-wrap');
    var veil = document.getElementById('sel-veil');
    var runBtn = document.getElementById('run');

    // 订阅门禁
    function gateCheck() {
      if (!window.MingLiPay) return;
      if (MingLiPay.isSubActive()) { wrap.classList.remove('article-lock'); if (veil) veil.hidden = true; return; }
      wrap.classList.add('article-lock');
      if (veil) veil.hidden = false;
    }
    gateCheck();
    var subBtn = document.getElementById('sub-btn');
    if (subBtn) subBtn.addEventListener('click', function () {
      MingLiPay.showSubModal({
        title: '订阅动态选股',
        desc: '月 $10 / 年 $100（省 $20）。订阅后可使用周期判断、仓位与定投方案。扫码付款后输入作者私发的解锁码。',
        subCode: btoa('gushi2026sub')
      }, function () { gateCheck(); });
    });

    // 点击分析：未订阅先弹订阅
    runBtn.addEventListener('click', function () {
      if (window.MingLiPay && !MingLiPay.isSubActive()) {
        MingLiPay.showSubModal({
          title: '订阅动态选股',
          desc: '月 $10 / 年 $100。订阅后解锁分析。扫码付款后输入作者私发的解锁码。',
          subCode: btoa('gushi2026sub')
        }, function () { gateCheck(); });
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
          if (!raw) return reject('无行情数据，请检查代码');
          resolve(raw);
        };
        s.onerror = function () { fin(); reject('行情接口请求失败'); };
        setTimeout(function () { fin(); reject('行情请求超时'); }, 8000);
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
      if (!code) { errEl.textContent = '请输入股票 / 基金代码。'; return; }

      fetchQuote(code).then(function (raw) {
        var q = parseQuote(raw);
        if (!q.price) { errEl.textContent = '未解析到有效行情，请检查代码格式。'; return; }
        fetchKline(code).then(function (closes) {
          var mas = closes && closes.length ? { ma20: ma(closes, 20), ma60: ma(closes, 60), ma120: ma(closes, 120) } : null;
          render(q, mas, C);
        }).catch(function () {
          render(q, null, C); // K线受限时降级，仅用52周区间
        });
      }).catch(function (e) {
        errEl.textContent = (typeof e === 'string') ? e : '行情获取失败，请稍后重试。';
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
        label = (trend === 'down' || trend === 'side') ? '低估 · 筑底/震荡' : '低估 · 上行初期';
        tone = 'good'; action = '分批买入 / 定投摊薄成本'; deployPct = 0.7;
      } else if (band === 'high') {
        label = (trend === 'up') ? '高位 · 上行末端' : '高位 · 震荡';
        tone = 'bad'; action = '减仓 / 观望，暂停定投'; deployPct = 0.15;
      } else {
        label = (trend === 'up') ? '上行中段' : (trend === 'down' ? '下行中段' : '中部震荡');
        tone = 'mid'; action = '持有 / 小额定投'; deployPct = 0.4;
      }
      var deploy = C ? Math.round(C * deployPct) : null;
      var dca;
      if (band !== 'high') {
        var months = (band === 'low') ? 12 : 6;
        var perMonth = C ? Math.round(C * deployPct / months) : null;
        var mid = (H52 && L52) ? Math.round((H52 + L52) / 2) : null;
        dca = { months: months, perMonth: perMonth, stop: '价格升至 52 周区间中位（约 ¥' + (mid || '?') + '）或累计达标后停止' };
      } else { dca = { skip: true }; }

      var trendTxt = { up: '上升', down: '下降', side: '震荡', unknown: '未知（K线数据受限）' }[trend];
      var bandTxt = { high: '高位（接近 52 周最高）', low: '低位（接近 52 周最低）', mid: '中部区间' }[band];
      var html =
        '<div class="r-head">' +
          '<div><b>' + (q.name || q.code) + '</b> <span class="code">' + q.code + '</span></div>' +
          '<div class="price">¥' + P.toFixed(2) + ' <span class="' + (q.chgPct >= 0 ? 'up' : 'down') + '">' + (q.chgPct >= 0 ? '+' : '') + q.chgPct.toFixed(2) + '%</span></div>' +
        '</div>' +
        '<div class="r-cycle ' + tone + '">周期判断：' + label + '</div>' +
        '<ul class="r-list">' +
          '<li><span>趋势（MA20/60/120）</span><b>' + trendTxt + '</b></li>' +
          (posPct != null ? '<li><span>52 周区间位置</span><b>' + bandTxt + '（' + (posPct * 100).toFixed(0) + '%）</b></li>' : '<li><span>52 周区间</span><b>' + bandTxt + '</b></li>') +
          (H52 ? '<li><span>52 周高 / 低</span><b>¥' + H52.toFixed(2) + ' / ¥' + L52.toFixed(2) + '</b></li>' : '') +
          (q.pe ? '<li><span>市盈率 TTM</span><b>' + q.pe.toFixed(1) + '</b></li>' : '') +
          (q.pb ? '<li><span>市净率</span><b>' + q.pb.toFixed(2) + '</b></li>' : '') +
        '</ul>' +
        '<div class="r-act"><span class="lbl">操作建议</span><b>' + action + '</b></div>' +
        '<div class="r-act"><span class="lbl">建议仓位上限</span><b>' + (deployPct * 100).toFixed(0) + '%' +
          (deploy != null ? '（约 ¥' + deploy.toLocaleString() + '）' : '') + '</b></div>' +
        (dca.skip
          ? '<div class="r-dca bad">🚫 当前处于高位，建议<b>暂停定投</b>，等待回落至低估区再分批介入。</div>'
          : '<div class="r-dca"><span class="lbl">定投方案</span><b>每月 ¥' + (dca.perMonth != null ? dca.perMonth.toLocaleString() : '?') + '</b>，分 ' + dca.months + ' 个月执行；' + dca.stop + '。</div>') +
        '<p class="r-note">注：' + (mas ? '均线基于近 320 交易日日线。' : '当前环境未能获取历史 K 线，趋势按 52 周区间估算，仅供参考。') + '所有结论由规则模型生成，非投资建议。</p>';
      var resEl = document.getElementById('result');
      resEl.innerHTML = html;
      resEl.hidden = false;
    }
  })();
</script> `])), renderComponent($$result, "SiteHeader", $$SiteHeader, { "lang": "zh", "altLang": "English", "altHref": "/en/selector" }), maybeRenderHead(), addAttribute(`${base}paywall.js`, "src"));
}, "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/selector.astro", void 0);
const $$file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/selector.astro";
const $$url = "/stock-blog/selector";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Selector,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
