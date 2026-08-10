import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_Dc_DXSsH.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>Lesson 3 of the <em>Fund Strategy</em> knowledge supplement. Maps to the email’s ”🔲 ETF Grid Trading (satellite)” section.</p>\n</blockquote>\n<p>Grid trading is a <strong>direction-agnostic, volatility-harvesting</strong> strategy — ideal for range-bound ETFs.</p>\n<h2 id=\"1-what-is-a-grid\">1. What is a grid?</h2>\n<p>Draw a “grid band” over price with evenly spaced rungs:</p>\n<ul>\n<li>Price <strong>drops to a rung → buy one grid</strong>;</li>\n<li>Price <strong>rises back to the rung above → sell one grid</strong>.</li>\n</ul>\n<p>Repeated small spreads compound into returns — <strong>small sums, no directional bet</strong>.</p>\n<h2 id=\"2-why-etfs-for-grids\">2. Why ETFs for grids?</h2>\n<p>Use <strong>broad ETFs (e.g. CSI 300) or commodity ETFs (e.g. gold)</strong>:</p>\n<ul>\n<li>They trend up long-term but swing hard mid-way — perfect for repeated “sell-high, buy-low”;</li>\n<li>ETFs don’t delist, have low fees, good liquidity — far safer than single stocks.</li>\n</ul>\n<h2 id=\"3-building-a-grid\">3. Building a grid</h2>\n<p>Take CSI 300 ETF (~4.76 now):</p>\n<ol>\n<li><strong>Band</strong>: ±10% → 4.28 – 5.24;</li>\n<li><strong>Rungs</strong>: 8, each ~0.12 apart;</li>\n<li><strong>Per grid</strong>: budget ¥30,000 ÷ 8 ≈ ¥3,750/grid → round to <strong>700 shares ≈ ¥3,331</strong>;</li>\n<li><strong>Orders</strong>: next buy 4.64 (down 2.5%), next sell 4.88 (up 2.5%).</li>\n</ol>\n<h2 id=\"4-two-iron-rules\">4. Two iron rules</h2>\n<ul>\n<li><strong>Below the band</strong> → stop buying, hold (don’t average down forever);</li>\n<li><strong>Above the band</strong> → position cleared, rebuild on pullback.</li>\n</ul>\n<h2 id=\"5-complement-with-dca\">5. Complement with DCA</h2>\n<ul>\n<li><strong>DCA</strong>: mindless base, buy-only, long-term;</li>\n<li><strong>Grid</strong>: swing-trade the base for volatility gains.</li>\n</ul>\n<p>Same ETF — DCA owns “long-term”, grid owns “volatility”. No conflict.</p>\n<h2 id=\"6-biggest-risk\">6. Biggest risk</h2>\n<p><strong>Strong trends break it</strong>: a relentless rally sells out early; a relentless fall keeps buying into a heavy position. So cap each grid at <strong>~6% of total</strong> — a satellite sleeve, not the core.</p>\n<blockquote>\n<p>⚠️ This article is a framework illustration and not investment or trading advice. Markets are risky; decide with care.</p>\n</blockquote>";

				const frontmatter = {"title":"ETF Grid Trading Basics: Compound the Small in Choppy Markets","description":"What grid trading is, why it suits broad/commodity ETFs, how to set the band and rungs, the below-band and above-band rules, and how it complements DCA.","layout":"../../../layouts/BlogPost.astro","series":"Fund Strategy","free":false,"lang":"en","altLang":"中文","altHref":"/","pubDate":"2026-08-10T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/ch12-grid-trading.md";
				const url = "/stock-blog/en/blog/ch12-grid-trading";
				function rawContent() {
					return "   \n                                                                      \n                                                                                                                                                                       \n                                       \n                     \n           \n        \n           \n          \n                   \n   \n\n> Lesson 3 of the *Fund Strategy* knowledge supplement. Maps to the email's \"🔲 ETF Grid Trading (satellite)\" section.\n\nGrid trading is a **direction-agnostic, volatility-harvesting** strategy — ideal for range-bound ETFs.\n\n## 1. What is a grid?\n\nDraw a \"grid band\" over price with evenly spaced rungs:\n\n- Price **drops to a rung → buy one grid**;\n- Price **rises back to the rung above → sell one grid**.\n\nRepeated small spreads compound into returns — **small sums, no directional bet**.\n\n## 2. Why ETFs for grids?\n\nUse **broad ETFs (e.g. CSI 300) or commodity ETFs (e.g. gold)**:\n\n- They trend up long-term but swing hard mid-way — perfect for repeated \"sell-high, buy-low\";\n- ETFs don't delist, have low fees, good liquidity — far safer than single stocks.\n\n## 3. Building a grid\n\nTake CSI 300 ETF (~4.76 now):\n\n1. **Band**: ±10% → 4.28 – 5.24;\n2. **Rungs**: 8, each ~0.12 apart;\n3. **Per grid**: budget ¥30,000 ÷ 8 ≈ ¥3,750/grid → round to **700 shares ≈ ¥3,331**;\n4. **Orders**: next buy 4.64 (down 2.5%), next sell 4.88 (up 2.5%).\n\n## 4. Two iron rules\n\n- **Below the band** → stop buying, hold (don't average down forever);\n- **Above the band** → position cleared, rebuild on pullback.\n\n## 5. Complement with DCA\n\n- **DCA**: mindless base, buy-only, long-term;\n- **Grid**: swing-trade the base for volatility gains.\n\nSame ETF — DCA owns \"long-term\", grid owns \"volatility\". No conflict.\n\n## 6. Biggest risk\n\n**Strong trends break it**: a relentless rally sells out early; a relentless fall keeps buying into a heavy position. So cap each grid at **~6% of total** — a satellite sleeve, not the core.\n\n> ⚠️ This article is a framework illustration and not investment or trading advice. Markets are risky; decide with care.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"1-what-is-a-grid","text":"1. What is a grid?"},{"depth":2,"slug":"2-why-etfs-for-grids","text":"2. Why ETFs for grids?"},{"depth":2,"slug":"3-building-a-grid","text":"3. Building a grid"},{"depth":2,"slug":"4-two-iron-rules","text":"4. Two iron rules"},{"depth":2,"slug":"5-complement-with-dca","text":"5. Complement with DCA"},{"depth":2,"slug":"6-biggest-risk","text":"6. Biggest risk"}];
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
