import { c as createComponent, a as renderTemplate, d as addAttribute, r as renderComponent, f as renderHead } from '../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$SiteHeader } from '../chunks/SiteHeader_DYtf8oA-.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const base = "/stock-blog/";
  const course = {
    name: "基金策略 · 四步定投实战",
    en: "Fund Strategy",
    desc: "从行业、主动、债券到指数基金，一套普通人能落地的定投体系。",
    chapters: [
      { slug: "ch1-intro", title: "定投策略简述：四步定投法", desc: "一套普通人能落地的四步定投框架。", free: true },
      { slug: "ch2-four-step", title: "如何选择优质的行业指数基金？", desc: "先选赛道，再选基金的两段筛选法。", free: true },
      { slug: "ch3-pick-fund", title: "如何判断行业的景气度？", desc: "用一组可观测指标判断行业所处阶段。", free: true },
      { slug: "ch4-position", title: "行业基金在震荡市周期的投资策略", desc: "震荡市用「顺大势、逆小势」高抛低吸。", free: true },
      { slug: "ch5-sector", title: "行业基金在熊市阶段的投资策略", desc: "熊市分批定投，在估值足够低时买入。", free: false },
      { slug: "ch6-active", title: "判断优质基金的标准是什么", desc: "唯一标准：每个牛熊周期都创新高且有超额收益。", free: false },
      { slug: "ch7-bond", title: "如何选择优质的主动基金", desc: "核心标准 + 辅助条件，优中选优的主动基金筛选法。", free: false },
      { slug: "ch10-active-bull", title: "主动基金在牛市周期的投资策略", desc: "牛市不追高：当年收益未达年化50%且月度收益低于牛市均值时一次买，超额后分批卖、到位清仓。", free: false },
      { slug: "ch8-index", title: "主动基金在震荡市周期的投资策略", desc: "震荡市买跌不买涨：年化未达 50% 逢回撤一次买，达标卖一半保持半仓波动。", free: false },
      { slug: "ch9-active-bear", title: "主动基金在熊市周期的投资策略", desc: "时间+空间双到位后分批定投，月度反弹超均值减半仓波段操作。", free: false },
      { slug: "ch10-highdiv", title: "高股息投资基础：国企/银行/电力", desc: "股息率是什么、为什么选这三类、买在股息率更高时、卖在压缩时，与定投网格配合。", free: true },
      { slug: "ch11-etf-basics", title: "ETF 与指数基金基础", desc: "指数基金与 ETF 区别、四大分类、怎么选（费率/误差/规模/流动性）。", free: false },
      { slug: "ch12-grid-trading", title: "ETF 网格交易基础", desc: "震荡市积少成多：设区间与档位、跌破下沿停买、突破上沿清仓、与定投互补。", free: false },
      { slug: "ch13-gold-macro", title: "黄金与美联储宏观基础", desc: "实际利率定金价、FOMC 与点阵图如何影响黄金与股市、普通人怎么跟踪。", free: false },
      { slug: "ch14-bond-bull", title: "债券基金在牛市周期的投资策略", desc: "牛市一次性买入，以历史月均收益为买点、年化达标分三批卖出。", free: false },
      { slug: "ch15-bond-shake", title: "债券基金在震荡市周期的投资策略", desc: "震荡市回撤买入为主，放宽收益容忍、至少保留 1/2 仓位。", free: false },
      { slug: "ch16-cycle-why", title: "为什么会强调周期择时", desc: "机构靠管理费、我们靠上涨与分红，A 股多为震荡市，故必须择时。", free: false },
      { slug: "ch17-index-fund", title: "如何选择优质的指数基金", desc: "优选宽基两条标准：成立超 5 年、长期持续创新高。", free: false },
      { slug: "ch18-index-shake", title: "指数基金在震荡市周期的投资策略", desc: "震荡市买回调赚波动：均线多头收敛前提下的分级倍投与乖离度卖出。", free: false },
      { slug: "ch19-index-bear", title: "指数基金在熊市周期的投资策略", desc: "熊市回归估值策略：PE<30% 建仓分批加仓，PE 分级减仓至清仓。", free: false },
      { slug: "ch20-undervalued", title: "低估优质股扫描基础", desc: "什么是低估、PE/PB 分位与 PEG、量化初筛三条件、价值陷阱与用法。", free: false },
      { slug: "ch21-long-short", title: "做多与做空基础：怎么开户买股票、怎么押下跌", desc: "做多先买后卖赚上涨、做空先卖后买赚下跌；手把手开户买股四步；A 股做空工具与 50 万门槛。", free: false },
      { slug: "ch22-leading-stocks", title: "龙头股投资基础：跟着行业老大，但别追高", desc: "龙头为什么更稳、三类龙头、情绪/筹码/题材三要素、寻龙诀与擒龙术、与定投网格配合。", free: false },
      { slug: "ch23-10w-finance", title: "10 万怎么理财：5-3-2 配置法则", desc: "第一桶金先求稳：5 万压舱石、3 万套利、2 万定投，附固收排雷与散户工具箱。", free: false },
      { slug: "ch24-fund-types", title: "四类基金的买卖策略对照：行业 / 主动 / 债券 / 指数", desc: "讲清四类的区别，并各给一套带具体数字的买 / 卖纪律。", free: true }
    ]
  };
  const kb = {
    name: "股票知识小课堂",
    en: "Stock Knowledge 101",
    desc: "31 天滚动小课：K线、趋势、量价、均线、指标、财报、估值、分红、仓位、风控——每天一个可复用的知识点。",
    chapters: [
      { slug: "kb01", title: "K线图长什么样：阳线、阴线、实体、影线", desc: "K线基础 · 一根K线 = 一个时间单位（日/周/分钟）的「开、高、低、收」四价。", free: true },
      { slug: "kb02", title: "单根K线的市场心理", desc: "K线基础 · 光头光脚大阳线：一路买盘、多头控盘，常见于启动或主升。", free: true },
      { slug: "kb03", title: "看涨/看跌吞没 与 十字星", desc: "K线组合 · 看涨吞没：下跌末端大阳线实体完全包住前一根阴线 → 空转多信号。", free: true },
      { slug: "kb04", title: "锤子线、上吊线、早晨/黄昏之星", desc: "K线组合 · 锤子线：低位长下影小实体 → 探底回升，偏多。", free: true },
      { slug: "kb05", title: "趋势线怎么画、通道怎么用", desc: "趋势 · 上升趋势线：连接依次抬高的低点，落在线上获支撑即为有效。", free: true },
      { slug: "kb06", title: "支撑位与压力位怎么找", desc: "趋势 · 前高/前低：历史成交密集区天然形成支撑(下)与压力(上)。", free: true },
      { slug: "kb07", title: "成交量与量价关系基础", desc: "量价 · 成交量 = 单位时间成交的股数，反映资金参与度。", free: true },
      { slug: "kb08", title: "量价背离：危险的提前量", desc: "量价 · 顶背离：价格创新高，但成交量/动能指标却没跟上 → 上涨动能枯竭。", free: true },
      { slug: "kb09", title: "均线系统 MA：多头/空头排列", desc: "均线 · MA(N) = 近N日收盘价平均，平滑噪音；常用 MA5/MA20/MA60/M", free: true },
      { slug: "kb10", title: "金叉/死叉与均线实战", desc: "均线 · 金叉：短期均线上穿长期（如 MA5 上穿 MA20）→ 偏多；死叉反之。", free: true },
      { slug: "kb11", title: "MACD 指标：DIF、DEA、红绿柱", desc: "指标 · MACD = 快慢均线的差值，衡量动能强弱与方向。", free: true },
      { slug: "kb12", title: "MACD 金叉死叉与背离", desc: "指标 · 金叉（DIF上穿DEA，尤其零轴上方）= 偏多；死叉反之。", free: true },
      { slug: "kb13", title: "DMI 趋向指标：ADX 看强度、+DI/−DI 看方向", desc: "指标 · DMI 由 +DI(上升动能)、−DI(下降动能)、ADX(趋势强度) 三根线组", free: true },
      { slug: "kb14", title: "MACD 图怎么看：DIF/DEA/红绿柱三件套", desc: "指标 · DIF(快线)=EMA12−EMA26 最灵敏；DEA(慢线)=DIF的9日平滑", free: true },
      { slug: "kb15", title: "成交量图怎么看：价是结果、量是证据", desc: "量价 · 成交量=单位时间成交股数，反映资金参与度；价格是结果、量是证据，无量上涨多为假突", free: true },
      { slug: "kb16", title: "RSI 相对强弱指标", desc: "指标 · RSI = 一段时间内平均涨幅/(平均涨幅+平均跌幅)，区间0~100，常用14", free: true },
      { slug: "kb17", title: "KDJ 随机指标", desc: "指标 · KDJ 由 K、D、J 三条线组成，对短线转折比 MACD 更灵敏。", free: true },
      { slug: "kb18", title: "BOLL 布林带", desc: "指标 · BOLL = 中轨(20日均线) ± 2倍标准差，形成上轨/中轨/下轨通道。", free: true },
      { slug: "kb19", title: "指标组合实战：MACD+量能+均线", desc: "指标 · 单指标易骗线，组合使用胜率更高：趋势看均线、动能看MACD、参与度看量。", free: true },
      { slug: "kb20", title: "财报三大报表概览", desc: "财报 · 利润表：一段时间内赚了多少（营收−成本−费用=利润），看盈利能力。", free: true },
      { slug: "kb21", title: "利润表怎么看", desc: "财报 · 核心链条：营业收入→营业成本→毛利率→三费(销售/管理/研发)→营业利润→净利润", free: true },
      { slug: "kb22", title: "资产负债表怎么看", desc: "财报 · 左边资产（钱去哪了）：货币资金、应收、存货、固定资产、商誉等。", free: true },
      { slug: "kb23", title: "现金流量表怎么看", desc: "财报 · 经营活动现金流：主业造血能力，持续为正才健康；为负要警惕。", free: true },
      { slug: "kb24", title: "核心盈利指标：ROE 与杜邦分析", desc: "财报 · ROE（净资产收益率）=净利润/净资产，衡量股东每投1元赚多少，巴菲特最看重。", free: true },
      { slug: "kb25", title: "成长性与质量指标", desc: "财报 · 营收增速/净利润增速：看公司是否在变大变强，留意基数效应导致的虚高。", free: true },
      { slug: "kb26", title: "PE 市盈率：最常用也最易被误用", desc: "估值 · PE=股价/每股收益，代表按当前盈利多少年回本，越低越便宜（理论上）。", free: true },
      { slug: "kb27", title: "PB、PS 与估值横向对比", desc: "估值 · PB=股价/每股净资产，适合银行/地产等重资产行业（看清算价值）。", free: true },
      { slug: "kb28", title: "PEG 与 DCF 简易理解", desc: "估值 · PEG=PE/盈利增速(%)，PEG<1常被视作估值匹配成长（如PE30、增速4", free: true },
      { slug: "kb29", title: "分红、股息率与回购", desc: "分红 · 股息率=每股分红/股价，衡量现金回报，高股息股(银行/能源)常是压舱石。", free: true },
      { slug: "kb30", title: "仓位管理与分笔建仓", desc: "仓位 · 分笔建仓：看好的标的不要一把梭，分3~5笔在不同价位/时间买入，摊低成本、留余地", free: true },
      { slug: "kb31", title: "止损止盈与常见投资误区", desc: "风控 · 止损：买入前定好跌到哪认错，机械执行，避免亏损扩大（如-8%~-10%硬止损）。", free: true }
    ]
  };
  return renderTemplate(_a || (_a = __template([`<html lang="zh"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light dark"><script>
      (function () {
        try {
          var t = localStorage.getItem('theme');
          if (t !== 'light' && t !== 'dark') {
            t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
          document.documentElement.setAttribute('data-theme', t);
        } catch (e) {}
      })();
    </script><title>股市笔记 · 基金定投实战 · 动态选股</title><meta name="description" content="股市笔记：基金定投实战专栏 + 动态选股工具，判断周期、给出仓位与定投方案。">`, "</head> <body> ", ' <main> <section class="hero"> <p class="kicker">✦ 基金定投 · 动态选股 · 周期判断</p> <h1>股市笔记</h1> <p class="hero-sub">把复杂的市场，讲成你能照着做的定投与选股方法。<br>娱乐与学习为主，不构成投资建议。</p> <a class="hero-cta"', '>📚 进入专栏</a> <a class="hero-cta alt"', '>📈 动态选股工具</a> </section> <section class="banner"> <span>专栏《', "》共 ", " 节：</span> <a", ">前 4 节免费</a> · <a", ">后 ", " 节打赏解锁</a> · <a", '>动态选股（订阅）</a> </section> <section class="series-block"> <h2>', ' <span class="en">', '</span></h2> <p class="series-desc">', '</p> <ul class="post-list"> ', ' </ul> </section> <section class="series-block"> <h2>', ' <span class="en">', '</span></h2> <p class="series-desc">', '</p> <ul class="post-list"> ', ' </ul> </section> <p class="foot-note">⚠️ 本站所有内容仅供学习与娱乐，不构成任何投资、理财或交易建议。市场有风险，决策需谨慎。</p> </main> <footer>© 2026 股市笔记 · 托管于 GitHub Pages</footer>  </body> </html>'])), renderHead(), renderComponent($$result, "SiteHeader", $$SiteHeader, { "lang": "zh", "altLang": "English", "altHref": "/en/" }), addAttribute(`${base}course`, "href"), addAttribute(`${base}selector`, "href"), course.name, course.chapters.length, addAttribute(`${base}course`, "href"), addAttribute(`${base}course`, "href"), course.chapters.length - 4, addAttribute(`${base}selector`, "href"), course.name, course.en, course.desc, course.chapters.map((c, i) => renderTemplate`<li> <a${addAttribute(`${base}blog/${c.slug}`, "href")}> <span class="ch-no">${(i + 1).toString().padStart(2, "0")}</span> ${c.title} ${c.free ? renderTemplate`<span class="badge free">免费</span>` : renderTemplate`<span class="badge paid">☕️ 请作者喝咖啡</span>`} </a> <div class="date">${c.desc}</div> </li>`), kb.name, kb.en, kb.desc, kb.chapters.map((c, i) => renderTemplate`<li> <a${addAttribute(`${base}blog/${c.slug}`, "href")}> <span class="ch-no">${(i + 1).toString().padStart(2, "0")}</span> ${c.title} <span class="badge free">免费</span> </a> <div class="date">${c.desc}</div> </li>`));
}, "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/index.astro", void 0);
const $$file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/index.astro";
const $$url = "/stock-blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
