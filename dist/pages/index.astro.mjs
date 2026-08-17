import { c as createComponent, a as renderTemplate, d as addAttribute, r as renderComponent, f as renderHead } from '../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$SiteHeader } from '../chunks/SiteHeader_CJ1gaIV5.mjs';
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
    desc: "从行业、主动、债券到指数基金，一套普通人能落地的定投体系。",
    chapters: [
      { slug: "ch1-intro", title: "定投策略简述：四步定投法", free: true },
      { slug: "ch2-four-step", title: "如何选择优质的行业指数基金？", free: true },
      { slug: "ch3-pick-fund", title: "如何判断行业的景气度？", free: true },
      { slug: "ch4-position", title: "行业基金在震荡市周期的投资策略", free: true },
      { slug: "ch5-sector", title: "行业基金在熊市阶段的投资策略", free: false },
      { slug: "ch6-active", title: "判断优质基金的标准是什么", free: false },
      { slug: "ch7-bond", title: "如何选择优质的主动基金", free: false },
      { slug: "ch10-active-bull", title: "主动基金在牛市周期的投资策略", free: false },
      { slug: "ch8-index", title: "主动基金在震荡市周期的投资策略", free: false },
      { slug: "ch9-active-bear", title: "主动基金在熊市周期的投资策略", free: false },
      { slug: "ch10-highdiv", title: "高股息投资基础：国企/银行/电力", free: true },
      { slug: "ch11-etf-basics", title: "ETF 与指数基金基础", free: false },
      { slug: "ch12-grid-trading", title: "ETF 网格交易基础", free: false },
      { slug: "ch13-gold-macro", title: "黄金与美联储宏观基础", free: false },
      { slug: "ch14-bond-bull", title: "债券基金在牛市周期的投资策略", free: false },
      { slug: "ch15-bond-shake", title: "债券基金在震荡市周期的投资策略", free: false },
      { slug: "ch16-cycle-why", title: "为什么会强调周期择时", free: false },
      { slug: "ch17-index-fund", title: "如何选择优质的指数基金", free: false },
      { slug: "ch18-index-shake", title: "指数基金在震荡市周期的投资策略", free: false },
      { slug: "ch19-index-bear", title: "指数基金在熊市周期的投资策略", free: false },
      { slug: "ch20-index-bull", title: "指数基金在牛市周期的投资策略", free: false },
      { slug: "ch20-undervalued", title: "低估优质股扫描基础", free: false },
      { slug: "ch21-long-short", title: "做多与做空基础", free: false },
      { slug: "ch22-leading-stocks", title: "龙头股投资基础", free: false },
      { slug: "ch23-10w-finance", title: "10 万怎么理财：5-3-2 配置法则", free: false },
      { slug: "ch24-fund-types", title: "四类基金的买卖策略对照", free: true }
    ]
  };
  const kb = {
    name: "股票知识小课堂",
    desc: "31 天滚动小课：K线、趋势、量价、均线、指标、财报、估值、分红、仓位、风控。"
  };
  const modules = [
    {
      icon: "🟢",
      title: "从零开始学指标",
      desc: "零基础导论 + 指标三件套基础包（均线/MACD/PE），看懂后面所有内容的前提。",
      href: base + "blog/guide-indicators-101",
      cta: "开始学习 →",
      accent: true
    },
    {
      icon: "📚",
      title: course.name,
      desc: course.desc + " 共 " + course.chapters.length + " 节（" + course.chapters.filter((c) => c.free).length + " 节免费 / " + course.chapters.filter((c) => !c.free).length + " 节付费）。",
      href: base + "course",
      cta: "查看全部章节 →"
    },
    {
      icon: "📖",
      title: kb.name,
      desc: kb.desc,
      href: base + "blog/kb01",
      cta: "开始阅读 →"
    },
    {
      icon: "📈",
      title: "动态选股工具",
      desc: "龙头股 / 收息股精选池，输入预算即生成「今日买点时机 + 买多少 + 定投网格方案」。（订阅制）",
      href: base + "selector",
      cta: "打开工具 →",
      accent: true
    }
  ];
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
    </script><title>股市笔记 · 基金定投实战 · 动态选股</title><meta name="description" content="股市笔记：基金定投实战专栏 + 动态选股工具，判断周期、给出仓位与定投方案。">`, "</head> <body> ", ' <main> <!-- Hero --> <section class="hero"> <p class="kicker">✦ 基金定投 · 动态选股 · 周期判断</p> <h1>股市笔记</h1> <p class="hero-sub">把复杂的市场，讲成你能照着做的定投与选股方法。<br>娱乐与学习为主，不构成投资建议。</p> <div class="hero-btns"> <a class="hero-cta"', '>📈 动态选股</a> <a class="hero-cta alt"', '>📚 专栏目录</a> </div> </section> <!-- 核心模块卡片 --> <section class="modules"> ', ' </section> <!-- 学习路径（极简版）--> <section class="path-mini"> <p><b>推荐路径</b>：先看「从零开始学指标」建立语汇 → 再读《四步定投》掌握框架 → 用「动态选股」工具落地实操。</p> </section> <p class="foot-note">⚠️ 本站所有内容仅供学习与娱乐，不构成任何投资、理财或交易建议。市场有风险，决策需谨慎。</p> </main> <footer>© 2026 股市笔记 · 托管于 GitHub Pages</footer>  </body> </html>'])), renderHead(), renderComponent($$result, "SiteHeader", $$SiteHeader, { "lang": "zh", "altLang": "English", "altHref": "/en/" }), addAttribute(`${base}selector`, "href"), addAttribute(`${base}course`, "href"), modules.map((m) => renderTemplate`<a${addAttribute(`mod-card${m.accent ? " accent" : ""}`, "class")}${addAttribute(m.href, "href")}> <span class="mod-icon">${m.icon}</span> <div class="mod-body"> <h3>${m.title}</h3> <p>${m.desc}</p> <span class="mod-cta">${m.cta}</span> </div> </a>`));
}, "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/index.astro", void 0);
const $$file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/index.astro";
const $$url = "/stock-blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
