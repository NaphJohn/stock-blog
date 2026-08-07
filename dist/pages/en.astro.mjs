import { c as createComponent, a as renderTemplate, b as addAttribute, r as renderComponent, f as renderHead } from '../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$SiteHeader } from '../chunks/SiteHeader_C5lBd-eY.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const base = "/stock-blog/";
  const course = {
    name: "Xiaobei Fund Strategy · Four-Step DCA",
    en: "小倍基金策略",
    desc: "A practical DCA system across sector, active, bond and index funds.",
    chapters: [
      { slug: "ch1-intro", title: "Intro: why a system beats guessing", desc: 'Adopt "respond, do not predict".', free: true },
      { slug: "ch2-four-step", title: "Four-step DCA: sector / active / bond / index", desc: "Roles and sizing of four fund types.", free: true },
      { slug: "ch3-pick-fund", title: "How to pick a fund: fees, tracking error, benchmark", desc: "Low fees compound in your favor.", free: true },
      { slug: "ch4-position", title: "Position & timing: when and how much", desc: "Stagger buys instead of going all-in.", free: true },
      { slug: "ch5-sector", title: "Sector rotation: ride the up-cycle", desc: "Entry, exit and taking profit on sector ETFs.", free: false },
      { slug: "ch6-active", title: "Active funds: manager, style, drawdown", desc: "Spot managers who outperform long-term.", free: false },
      { slug: "ch7-bond", title: "Bond funds: duration & credit", desc: "Use bonds to dampen portfolio volatility.", free: false },
      { slug: "ch8-index", title: "Hold index funds: valuation & DCA multiples", desc: "Multipliers and profit-taking rules.", free: false }
    ]
  };
  return renderTemplate(_a || (_a = __template([`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light dark"><script>
      (function () {
        try {
          var t = localStorage.getItem('theme');
          if (t !== 'light' && t !== 'dark') {
            t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
          document.documentElement.setAttribute('data-theme', t);
        } catch (e) {}
      })();
    </script><title>Market Notes · Fund DCA · Stock Picker</title><meta name="description" content="Market Notes: a fund-DCA course plus a dynamic stock picker that reads the cycle and suggests sizing & DCA.">`, "</head> <body> ", ' <main> <section class="hero"> <p class="kicker">✦ Fund DCA · Stock Picker · Cycle Reading</p> <h1>Market Notes</h1> <p class="hero-sub">Turning a messy market into steps you can actually follow.<br>For learning and entertainment — not investment advice.</p> <a class="hero-cta"', '>📚 The Course</a> <a class="hero-cta alt"', '>📈 Stock Picker</a> </section> <section class="banner"> <span>Course "', '": ', " chapters — </span> <a", ">first 4 free</a> · <a", ">rest behind a tip</a> · <a", '>Stock Picker (subscription)</a> </section> <section class="series-block"> <h2>', ' <span class="en">', '</span></h2> <p class="series-desc">', '</p> <ul class="post-list"> ', ' </ul> </section> <p class="foot-note">⚠️ Everything here is for learning and entertainment only — not investment, financial or trading advice.</p> </main> <footer>© 2026 Market Notes · Hosted on GitHub Pages</footer>  </body> </html>'])), renderHead(), renderComponent($$result, "SiteHeader", $$SiteHeader, { "lang": "en", "altLang": "中文", "altHref": "/" }), addAttribute(`${base}en/course`, "href"), addAttribute(`${base}en/selector`, "href"), course.name, course.chapters.length, addAttribute(`${base}en/course`, "href"), addAttribute(`${base}en/course`, "href"), addAttribute(`${base}en/selector`, "href"), course.name, course.en, course.desc, course.chapters.map((c, i) => renderTemplate`<li> <a${addAttribute(`${base}en/blog/${c.slug}`, "href")}> <span class="ch-no">${(i + 1).toString().padStart(2, "0")}</span> ${c.title} ${c.free ? renderTemplate`<span class="badge free">Free</span>` : renderTemplate`<span class="badge paid">Paid</span>`} </a> <div class="date">${c.desc}</div> </li>`));
}, "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/index.astro", void 0);
const $$file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/index.astro";
const $$url = "/stock-blog/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
