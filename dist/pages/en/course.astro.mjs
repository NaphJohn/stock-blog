import { c as createComponent, r as renderComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from '../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$SiteHeader } from '../../chunks/SiteHeader_C5lBd-eY.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Course = createComponent(($$result, $$props, $$slots) => {
  const base = "/stock-blog/";
  const course = {
    name: "Xiaobei Fund Strategy · Four-Step DCA",
    desc: "A practical DCA system across sector, active, bond and index funds.",
    chapters: [
      { slug: "ch1-intro", title: "Intro: why a system beats guessing", desc: 'Adopt "respond, do not predict".', free: true },
      { slug: "ch2-four-step", title: "Four-step DCA: sector / active / bond / index", desc: "Roles and sizing of four fund types.", free: true },
      { slug: "ch3-pick-fund", title: "How to pick a fund: fees, tracking error, benchmark", desc: "Low fees compound in your favor.", free: true },
      { slug: "ch4-position", title: "Position & timing: when and how much", desc: "Stagger buys instead of going all-in.", free: true },
      { slug: "ch5-sector", title: "Sector rotation: ride the up-cycle", desc: "Entry, exit and taking profit on sector ETFs.", free: false },
      { slug: "ch6-active", title: "Active funds: manager, style, drawdown", desc: "Spot managers who outperform long-term.", free: false },
      { slug: "ch7-bond", title: "Bond funds: duration & credit", desc: "Use bonds to dampen portfolio volatility.", free: false },
      { slug: "ch8-index", title: "Hold index funds: valuation & DCA multiples", desc: "Multipliers and profit-taking rules.", free: false },
      { slug: "ch14-bond-bull", title: "Bond funds in a bull market", desc: "Buy in one shot when below historical monthly average; scale out in thirds.", free: false, no: 14 },
      { slug: "ch15-bond-shake", title: "Bond funds in a ranging market", desc: "Buy on drawdowns, widen the profit tolerance, keep ≥1/2 position.", free: false, no: 15 },
      { slug: "ch16-cycle-why", title: "Why Xiaobei insists on cycle timing", desc: "Institutions earn fees; we earn upside & dividends — and A-shares range.", free: false, no: 16 },
      { slug: "ch17-index-fund", title: "How to pick a quality index fund", desc: "Two rules: listed 5+ years, repeatedly makes new highs.", free: false, no: 17 },
      { slug: "ch18-index-shake", title: "Index funds in a ranging market", desc: "Buy pullbacks for swing gains; tiered entries by MA, exits by deviation.", free: false, no: 18 },
      { slug: "ch19-index-bear", title: "Index funds in a bear market", desc: "Back to valuation: build below PE 30%, scale out as PE climbs.", free: false, no: 19 }
    ]
  };
  const freeCount = course.chapters.filter((c) => c.free).length;
  return renderTemplate`${renderComponent($$result, "SiteHeader", $$SiteHeader, { "lang": "en", "altLang": "中文", "altHref": "/course" })} ${maybeRenderHead()}<main class="course"> <p class="kicker">✦ Course · ${course.chapters.length} chapters</p> <h1>${course.name}</h1> <p class="sub">${course.desc}</p> <p class="rule">First <b>${freeCount}</b> chapters free; from chapter ${freeCount + 1} a <b>tip</b> (min ¥1) unlocks all paid content at once. Author is exempt.</p> <ol class="ch-list"> ${course.chapters.map((c, i) => renderTemplate`<li${addAttribute(c.free ? "free" : "paid", "class")}> <span class="no">${(c.no ?? i + 1).toString().padStart(2, "0")}</span> <a${addAttribute(`${base}en/blog/${c.slug}`, "href")} class="title">${c.title}</a> ${c.free ? renderTemplate`<span class="tag free">Free</span>` : renderTemplate`<span class="tag paid">Paid</span>`} <p class="desc">${c.desc}</p> </li>`)} </ol> <section class="sel-cta"> <h2>📈 Want it easier?</h2> <p>Use the <b>Stock Picker</b>: enter a ticker + your investable amount, and it reads the cycle, suggests how to invest, how much, and a DCA plan. Subscription only: $10/mo or $100/yr.</p> <a class="btn"${addAttribute(`${base}en/selector`, "href")}>Open Stock Picker</a> </section> <p class="foot-note">⚠️ For learning and entertainment only — not investment advice.</p> </main> `;
}, "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/course.astro", void 0);
const $$file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/course.astro";
const $$url = "/stock-blog/en/course";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Course,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
