import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>Lesson 4 of the <em>Fund Strategy</em> knowledge supplement. Maps to the email’s ”🪙 Gold” and “🏛️ Macro Calendar · FOMC” sections.</p>\n</blockquote>\n<p>Macro feels distant, but it sets the “water temperature” of your portfolio. Two things to know: <strong>why gold moves</strong>, and <strong>how the Fed stirs everything</strong>.</p>\n<h2 id=\"1-golds-pricing-logic\">1. Gold’s pricing logic</h2>\n<p>Gold pays no interest, so its opportunity cost is set by “real rates”:</p>\n<ul>\n<li><strong>Real rate = nominal rate − inflation</strong>. Real rate ↓ → gold cheaper to hold → price ↑;</li>\n<li><strong>Dollar ↓</strong> → gold (priced in USD) ↑;</li>\n<li><strong>Central-bank buying</strong>: persistent net purchases put a floor under price (several central banks planned increases in 2026);</li>\n<li><strong>Safe-haven flows</strong>: geopolitics, recession fears lift gold.</li>\n</ul>\n<h2 id=\"2-what-is-the-fed-fomc\">2. What is the Fed FOMC?</h2>\n<p>The Fed meets <strong>8 times a year (FOMC)</strong> and sets the <strong>federal funds rate</strong> (the US “benchmark rate”).</p>\n<ul>\n<li><strong>Dot plot</strong>: officials’ forecast of future rates — more telling than a single decision;</li>\n<li><strong>Hawkish</strong>: leans to hike or hold high → supports dollar, pressures gold &#x26; growth stocks;</li>\n<li><strong>Dovish</strong>: leans to cut → supports gold &#x26; equities.</li>\n</ul>\n<h2 id=\"3-the-2026-reality\">3. The 2026 reality</h2>\n<ul>\n<li>Rate <strong>3.50%–3.75%</strong>, held all year;</li>\n<li>New Chair <strong>Warsh is hawkish</strong>; markets price a possible hike by ~October;</li>\n<li>Next key meeting <strong>2026-09-15~16 (with dot plot)</strong> — volatility widens around it.</li>\n</ul>\n<h2 id=\"4-what-it-means-for-you\">4. What it means for you</h2>\n<ul>\n<li>Track rate expectations to read the “big direction” of gold and equities;</li>\n<li>Easiest gold exposure is <strong>Gold ETF (518880)</strong> — no physical custody;</li>\n<li>Gold view (H2 2026): base case <strong>choppy-soft ~$4,100 ±5%</strong>, floored by central banks; <strong>DCA call = maintain, can add slightly, don’t cut</strong> — add below $3,900, don’t chase.</li>\n</ul>\n<blockquote>\n<p>⚠️ This article is a framework illustration and not investment or trading advice. Markets are risky; decide with care.</p>\n</blockquote>";

				const frontmatter = {"title":"Gold & Fed Macro Basics: How Rates Move Your Holdings","description":"Gold's pricing logic (real rates / dollar / central-bank buying), how the Fed FOMC and dot plot move gold and equities, and how an ordinary investor tracks macro.","layout":"../../../layouts/BlogPost.astro","series":"Fund Strategy","free":false,"lang":"en","altLang":"中文","altHref":"/","pubDate":"2026-08-10T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/ch13-gold-macro.md";
				const url = "/stock-blog/en/blog/ch13-gold-macro";
				function rawContent() {
					return "   \n                                                              \n                                                                                                                                                                                 \n                                       \n                     \n           \n        \n           \n          \n                   \n   \n\n> Lesson 4 of the *Fund Strategy* knowledge supplement. Maps to the email's \"🪙 Gold\" and \"🏛️ Macro Calendar · FOMC\" sections.\n\nMacro feels distant, but it sets the \"water temperature\" of your portfolio. Two things to know: **why gold moves**, and **how the Fed stirs everything**.\n\n## 1. Gold's pricing logic\n\nGold pays no interest, so its opportunity cost is set by \"real rates\":\n\n- **Real rate = nominal rate − inflation**. Real rate ↓ → gold cheaper to hold → price ↑;\n- **Dollar ↓** → gold (priced in USD) ↑;\n- **Central-bank buying**: persistent net purchases put a floor under price (several central banks planned increases in 2026);\n- **Safe-haven flows**: geopolitics, recession fears lift gold.\n\n## 2. What is the Fed FOMC?\n\nThe Fed meets **8 times a year (FOMC)** and sets the **federal funds rate** (the US \"benchmark rate\").\n\n- **Dot plot**: officials' forecast of future rates — more telling than a single decision;\n- **Hawkish**: leans to hike or hold high → supports dollar, pressures gold & growth stocks;\n- **Dovish**: leans to cut → supports gold & equities.\n\n## 3. The 2026 reality\n\n- Rate **3.50%–3.75%**, held all year;\n- New Chair **Warsh is hawkish**; markets price a possible hike by ~October;\n- Next key meeting **2026-09-15~16 (with dot plot)** — volatility widens around it.\n\n## 4. What it means for you\n\n- Track rate expectations to read the \"big direction\" of gold and equities;\n- Easiest gold exposure is **Gold ETF (518880)** — no physical custody;\n- Gold view (H2 2026): base case **choppy-soft ~$4,100 ±5%**, floored by central banks; **DCA call = maintain, can add slightly, don't cut** — add below $3,900, don't chase.\n\n> ⚠️ This article is a framework illustration and not investment or trading advice. Markets are risky; decide with care.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"1-golds-pricing-logic","text":"1. Gold’s pricing logic"},{"depth":2,"slug":"2-what-is-the-fed-fomc","text":"2. What is the Fed FOMC?"},{"depth":2,"slug":"3-the-2026-reality","text":"3. The 2026 reality"},{"depth":2,"slug":"4-what-it-means-for-you","text":"4. What it means for you"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPost, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
