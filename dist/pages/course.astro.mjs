import { c as createComponent, r as renderComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from '../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$SiteHeader } from '../chunks/SiteHeader_CJ1gaIV5.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Course = createComponent(($$result, $$props, $$slots) => {
  const base = "/stock-blog/";
  const course = {
    name: "基金策略 · 四步定投实战",
    desc: "从行业、主动、债券到指数基金，一套普通人能落地的定投体系。",
    chapters: [
      { slug: "ch1-intro", title: "定投策略简述：四步定投法", desc: "一套普通人能落地的四步定投框架。", free: true },
      { slug: "ch2-four-step", title: "如何选择优质的行业指数基金？", desc: "先选赛道，再选基金的两段筛选法。", free: true },
      { slug: "ch3-pick-fund", title: "如何判断行业的景气度？", desc: "用一组可观测指标判断行业所处阶段。", free: true },
      { slug: "ch4-position", title: "行业基金在震荡市周期的投资策略", desc: "震荡市用「顺大势、逆小势」高抛低吸。", free: true },
      { slug: "ch5-sector", title: "行业基金在熊市阶段的投资策略", desc: "熊市分批定投，在估值足够低时买入。", free: false },
      { slug: "ch6-active", title: "判断优质基金的标准是什么", desc: "唯一标准：每个牛熊周期都创新高且有超额收益。", free: false },
      { slug: "ch7-bond", title: "如何选择优质的主动基金", desc: "核心标准 + 辅助条件，优中选优的主动基金筛选法。", free: false },
      { slug: "ch8-index", title: "主动基金在震荡市周期的投资策略", desc: "震荡市买跌不买涨：年化未达 50% 逢回撤一次买，达标卖一半保持半仓波动。", free: false },
      { slug: "ch9-active-bear", title: "主动基金在熊市周期的投资策略", desc: "时间+空间双到位后分批定投，月度反弹超均值减半仓波段操作。", free: false },
      { slug: "ch10-highdiv", title: "高股息投资基础：国企/银行/电力", desc: "股息率是什么、为什么选这三类、买在股息率更高时、卖在压缩时，与定投网格配合。", free: true },
      { slug: "ch11-etf-basics", title: "ETF 与指数基金基础", desc: "指数基金与 ETF 区别、四大分类、怎么选（费率/误差/规模/流动性）。", free: false },
      { slug: "ch12-grid-trading", title: "ETF 网格交易基础", desc: "震荡市积少成多：设区间与档位、跌破下沿停买、突破上沿清仓、与定投互补。", free: false },
      { slug: "ch13-gold-macro", title: "黄金与美联储宏观基础", desc: "实际利率定金价、FOMC 与点阵图如何影响黄金与股市、普通人怎么跟踪。", free: false },
      { slug: "ch14-bond-bull", title: "债券基金在牛市周期的投资策略", desc: "牛市一次性买入，以历史月均收益为买点、年化达标分三批卖出。", free: false, no: 14 },
      { slug: "ch15-bond-shake", title: "债券基金在震荡市周期的投资策略", desc: "震荡市回撤买入为主，放宽收益容忍、至少保留 1/2 仓位。", free: false, no: 15 },
      { slug: "ch16-cycle-why", title: "为什么会强调周期择时", desc: "机构靠管理费、我们靠上涨与分红，A 股多为震荡市，故必须择时。", free: false, no: 16 },
      { slug: "ch17-index-fund", title: "如何选择优质的指数基金", desc: "优选宽基两条标准：成立超 5 年、长期持续创新高。", free: false, no: 17 },
      { slug: "ch18-index-shake", title: "指数基金在震荡市周期的投资策略", desc: "震荡市买回调赚波动：均线多头收敛前提下的分级倍投与乖离度卖出。", free: false, no: 18 },
      { slug: "ch19-index-bear", title: "指数基金在熊市周期的投资策略", desc: "熊市回归估值策略：PE<30% 建仓分批加仓，PE 分级减仓至清仓。", free: false, no: 19 },
      { slug: "ch20-index-bull", title: "指数基金在牛市周期的投资策略", desc: "牛市顺势持有+移动止盈：站上均线建仓、回踩不破加仓，按最高点回撤分级止盈。", free: false, no: 20 },
      { slug: "ch20-undervalued", title: "低估优质股扫描基础", desc: "什么是低估、PE/PB 分位与 PEG、量化初筛三条件、价值陷阱与用法。", free: false, no: 21 },
      { slug: "ch21-long-short", title: "做多与做空基础：怎么开户买股票、怎么押下跌", desc: "做多先买后卖赚上涨、做空先卖后买赚下跌；手把手开户买股四步；A 股做空工具与 50 万门槛。", free: false, no: 22 },
      { slug: "ch22-leading-stocks", title: "龙头股投资基础：跟着行业老大，但别追高", desc: "龙头为什么更稳、三类龙头、情绪/筹码/题材三要素、寻龙诀与擒龙术、与定投网格配合。", free: false, no: 23 },
      { slug: "ch23-10w-finance", title: "10 万怎么理财：5-3-2 配置法则", desc: "第一桶金先求稳：5 万压舱石、3 万套利、2 万定投，附固收排雷与散户工具箱。", free: false, no: 24 },
      { slug: "ch24-fund-types", title: "四类基金的买卖策略对照：行业 / 主动 / 债券 / 指数", desc: "讲清四类的区别，并各给一套带具体数字的买 / 卖纪律。", free: true, no: 25 }
    ]
  };
  const freeCount = course.chapters.filter((c) => c.free).length;
  return renderTemplate`${renderComponent($$result, "SiteHeader", $$SiteHeader, { "lang": "zh", "altLang": "English", "altHref": "/en/course" })} ${maybeRenderHead()}<main class="course"> <p class="kicker">✦ 专栏 · 共 ${course.chapters.length} 节</p> <h1>${course.name}</h1> <p class="sub">${course.desc}</p> <p class="rule">前 <b>${freeCount}</b> 节免费阅读；后续章节欢迎<b>请作者喝杯咖啡 ☕️</b>（最低 ¥1，上不封顶）解锁全部内容。作者本人免付费。</p> <ol class="ch-list"> ${course.chapters.map((c, i) => renderTemplate`<li${addAttribute(c.free ? "free" : "paid", "class")}> <span class="no">${(c.no ?? i + 1).toString().padStart(2, "0")}</span> <a${addAttribute(`${base}blog/${c.slug}`, "href")} class="title">${c.title}</a> ${c.free ? renderTemplate`<span class="tag free">免费</span>` : renderTemplate`<span class="tag paid">☕️ 请作者喝咖啡</span>`} <p class="desc">${c.desc}</p> </li>`)} </ol> <section class="sel-cta"> <h2>📈 还想更省心？</h2> <p>用「动态选股」工具：输入一只股票 + 你的可投金额，自动判断当前处在什么周期、该怎么投、投多少、如何定投。该工具为<b>订阅制</b>（月 $10 / 年 $100）。</p> <a class="btn"${addAttribute(`${base}selector`, "href")}>前往动态选股</a> </section> <p class="foot-note">⚠️ 本站内容仅供学习娱乐，不构成任何投资或交易建议。</p> </main> `;
}, "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/course.astro", void 0);
const $$file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/course.astro";
const $$url = "/stock-blog/course";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Course,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
