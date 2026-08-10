import { c as createComponent, a as renderTemplate, b as addAttribute, r as renderComponent, f as renderHead } from '../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$SiteHeader } from '../chunks/SiteHeader_y61EAjpp.mjs';
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
      { slug: "ch4-position", title: "仓位与节奏：什么时候买、买多少", desc: "用估值与分批摊薄替代一把梭。", free: true },
      { slug: "ch5-sector", title: "行业基金轮动：抓住景气上行", desc: "行业 ETF 的买点、卖点与止盈。", free: false },
      { slug: "ch6-active", title: "主动基金淘金：经理、风格与回撤", desc: "如何识别长期能打的主动基金。", free: false },
      { slug: "ch7-bond", title: "债券基金稳收益：久期与信用", desc: "用债基给组合压住波动。", free: false },
      { slug: "ch8-index", title: "指数基金长期持有：估值与定投倍数", desc: "宽基定投的加倍与止盈规则。", free: false }
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
    </script><title>股市笔记 · 基金定投实战 · 动态选股</title><meta name="description" content="股市笔记：基金定投实战专栏 + 动态选股工具，判断周期、给出仓位与定投方案。">`, "</head> <body> ", ' <main> <section class="hero"> <p class="kicker">✦ 基金定投 · 动态选股 · 周期判断</p> <h1>股市笔记</h1> <p class="hero-sub">把复杂的市场，讲成你能照着做的定投与选股方法。<br>娱乐与学习为主，不构成投资建议。</p> <a class="hero-cta"', '>📚 进入专栏</a> <a class="hero-cta alt"', '>📈 动态选股工具</a> </section> <section class="banner"> <span>专栏《', "》共 ", " 节：</span> <a", ">前 4 节免费</a> · <a", ">后 ", " 节打赏解锁</a> · <a", '>动态选股（订阅）</a> </section> <section class="series-block"> <h2>', ' <span class="en">', '</span></h2> <p class="series-desc">', '</p> <ul class="post-list"> ', ' </ul> </section> <p class="foot-note">⚠️ 本站所有内容仅供学习与娱乐，不构成任何投资、理财或交易建议。市场有风险，决策需谨慎。</p> </main> <footer>© 2026 股市笔记 · 托管于 GitHub Pages</footer>  </body> </html>'])), renderHead(), renderComponent($$result, "SiteHeader", $$SiteHeader, { "lang": "zh", "altLang": "English", "altHref": "/en/" }), addAttribute(`${base}course`, "href"), addAttribute(`${base}selector`, "href"), course.name, course.chapters.length, addAttribute(`${base}course`, "href"), addAttribute(`${base}course`, "href"), course.chapters.length - 4, addAttribute(`${base}selector`, "href"), course.name, course.en, course.desc, course.chapters.map((c, i) => renderTemplate`<li> <a${addAttribute(`${base}blog/${c.slug}`, "href")}> <span class="ch-no">${(i + 1).toString().padStart(2, "0")}</span> ${c.title} ${c.free ? renderTemplate`<span class="badge free">免费</span>` : renderTemplate`<span class="badge paid">付费</span>`} </a> <div class="date">${c.desc}</div> </li>`));
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
