import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DNhH03SJ.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 3 (free) of the <em>Fund Strategy</em> series. Prosperity is not a “feeling” — it is a set of indicators you can watch continuously.</p>\n</blockquote>\n<p>Judging a sector’s prosperity answers two questions: <strong>is it rising or falling now, and roughly where is the turning point?</strong> Here is an operational indicator framework.</p>\n<h2 id=\"1-mesoscopic-high-frequency-data-closest-to-the-industry\">1. Mesoscopic high-frequency data (closest to the industry)</h2>\n<ul>\n<li><strong>Output and orders</strong>: utilization, shipments, new-order indices — the most direct thermometer.</li>\n<li><strong>Price signals</strong>: rising product prices (commodities, components) often lead profit improvement.</li>\n<li><strong>Inventory cycle</strong>: passive de-stocking → active re-stocking is usually an early sign of recovery; active accumulation is late-cycle overheating.</li>\n</ul>\n<h2 id=\"2-earnings-confirmation\">2. Earnings confirmation</h2>\n<ul>\n<li><strong>Revenue / profit growth</strong>: quarterly YoY and QoQ verify whether the “story” lands.</li>\n<li><strong>Gross-margin trend</strong>: a widening margin signals pricing power or cost improvement.</li>\n</ul>\n<h2 id=\"3-flows-and-sentiment\">3. Flows and sentiment</h2>\n<ul>\n<li><strong>Fund flows</strong>: northbound, main force, and sector-ETF net subscriptions reveal real preferences.</li>\n<li><strong>Valuation percentile</strong>: with PE/PB history, judge whether the price is cheap or dear.</li>\n</ul>\n<h2 id=\"4-policy-and-event-catalysts\">4. Policy and event catalysts</h2>\n<ul>\n<li>Industrial plans, subsidies, tech breakthroughs, and major orders are often the “switch” of prosperity.</li>\n</ul>\n<h2 id=\"where-the-cycle-sits\">Where the cycle sits</h2>\n<p>Combine the above to locate the sector at: <strong>early cycle (data just turning) → mid cycle (earnings confirmed, flows arriving) → late cycle (valuation high, inventory building)</strong>. Early/mid is better for DCA; late calls for trimming profits in batches.</p>\n<h2 id=\"recap\">Recap</h2>\n<p>Prosperity judgment is not one metric but a blend: <strong>use high-frequency data for direction, earnings for confirmation, and flows plus valuation for timing</strong>. Together with Lesson 2’s “fund picking”, that closes the loop on sector investing.</p>\n<blockquote>\n<p>⚠️ This article is a framework illustration and not investment or trading advice. Markets are risky; decide with care.</p>\n</blockquote>";

				const frontmatter = {"title":"How to judge a sector's prosperity cycle?","description":"Use a set of observable indicators to place the sector's stage.","layout":"../../../layouts/BlogPost.astro","series":"Fund Strategy","free":true,"lang":"en","altLang":"中文","altHref":"/","pubDate":"2026-08-06T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/ch3-pick-fund.md";
				const url = "/stock-blog/en/blog/ch3-pick-fund";
				function rawContent() {
					return "   \n                                                  \n                                                                              \n                                       \n                     \n          \n        \n           \n          \n                   \n   \n\n> This is Lesson 3 (free) of the *Fund Strategy* series. Prosperity is not a \"feeling\" — it is a set of indicators you can watch continuously.\n\nJudging a sector's prosperity answers two questions: **is it rising or falling now, and roughly where is the turning point?** Here is an operational indicator framework.\n\n## 1. Mesoscopic high-frequency data (closest to the industry)\n\n- **Output and orders**: utilization, shipments, new-order indices — the most direct thermometer.\n- **Price signals**: rising product prices (commodities, components) often lead profit improvement.\n- **Inventory cycle**: passive de-stocking → active re-stocking is usually an early sign of recovery; active accumulation is late-cycle overheating.\n\n## 2. Earnings confirmation\n\n- **Revenue / profit growth**: quarterly YoY and QoQ verify whether the \"story\" lands.\n- **Gross-margin trend**: a widening margin signals pricing power or cost improvement.\n\n## 3. Flows and sentiment\n\n- **Fund flows**: northbound, main force, and sector-ETF net subscriptions reveal real preferences.\n- **Valuation percentile**: with PE/PB history, judge whether the price is cheap or dear.\n\n## 4. Policy and event catalysts\n\n- Industrial plans, subsidies, tech breakthroughs, and major orders are often the \"switch\" of prosperity.\n\n## Where the cycle sits\n\nCombine the above to locate the sector at: **early cycle (data just turning) → mid cycle (earnings confirmed, flows arriving) → late cycle (valuation high, inventory building)**. Early/mid is better for DCA; late calls for trimming profits in batches.\n\n## Recap\n\nProsperity judgment is not one metric but a blend: **use high-frequency data for direction, earnings for confirmation, and flows plus valuation for timing**. Together with Lesson 2's \"fund picking\", that closes the loop on sector investing.\n\n> ⚠️ This article is a framework illustration and not investment or trading advice. Markets are risky; decide with care.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"1-mesoscopic-high-frequency-data-closest-to-the-industry","text":"1. Mesoscopic high-frequency data (closest to the industry)"},{"depth":2,"slug":"2-earnings-confirmation","text":"2. Earnings confirmation"},{"depth":2,"slug":"3-flows-and-sentiment","text":"3. Flows and sentiment"},{"depth":2,"slug":"4-policy-and-event-catalysts","text":"4. Policy and event catalysts"},{"depth":2,"slug":"where-the-cycle-sits","text":"Where the cycle sits"},{"depth":2,"slug":"recap","text":"Recap"}];
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
