import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 18/31 of <em>Stock Knowledge 101</em> 〔Indicators〕.</p>\n</blockquote>\n<ul>\n<li>BOLL = mid rail (20-day MA) ± 2 standard deviations → upper/mid/lower channel.</li>\n<li>Touch lower rail = relatively cheap (oversold); touch upper = relatively expensive (overbought).</li>\n<li>Expansion (wider band) = rising volatility, trend may start; contraction = narrowing vol, imminent change.</li>\n<li>Mid rail is a strength divider: above = bullish, below = bearish.</li>\n</ul>\n<blockquote>\n<p>📌 BOLL contraction always precedes a move; expansion shows direction; touching a rail isn’t a reversal, confirm.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"BOLL Bollinger Bands","description":"Indicators · BOLL = mid rail (20-day MA) ± 2 standard","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb18","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb18.md";
				const url = "/stock-blog/en/blog/kb18";
				function rawContent() {
					return "   \n                             \n                                                                    \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 18/31 of *Stock Knowledge 101* 〔Indicators〕.\n\n- BOLL = mid rail (20-day MA) ± 2 standard deviations → upper/mid/lower channel.\n- Touch lower rail = relatively cheap (oversold); touch upper = relatively expensive (overbought).\n- Expansion (wider band) = rising volatility, trend may start; contraction = narrowing vol, imminent change.\n- Mid rail is a strength divider: above = bullish, below = bearish.\n\n\n> 📌 BOLL contraction always precedes a move; expansion shows direction; touching a rail isn't a reversal, confirm.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
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
