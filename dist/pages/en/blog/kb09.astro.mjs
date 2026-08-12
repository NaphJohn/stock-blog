import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_Dmw8qGdY.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 9/31 of <em>Stock Knowledge 101</em> 〔Moving Averages〕.</p>\n</blockquote>\n<ul>\n<li>MA(N) = average of last N closes, smoothing noise; common MA5/20/60/120/250.</li>\n<li>Bullish alignment: short MAs above long (5>20>60) and rising → strong uptrend.</li>\n<li>Bearish alignment: short below long and falling → weak downtrend.</li>\n<li>MAs themselves are dynamic support/resistance (pullback to MA20 that holds is often a buy).</li>\n</ul>\n<blockquote>\n<p>📌 Hold through bullish alignment, lighten in bearish; MAs are moving support/resistance.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"MA system: bullish/bearish alignment","description":"Moving Averages · MA(N) = average of last N closes, smooth","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb09","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/kb09.md";
				const url = "/stock-blog/en/blog/kb09";
				function rawContent() {
					return "   \n                                             \n                                                                         \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 9/31 of *Stock Knowledge 101* 〔Moving Averages〕.\n\n- MA(N) = average of last N closes, smoothing noise; common MA5/20/60/120/250.\n- Bullish alignment: short MAs above long (5>20>60) and rising → strong uptrend.\n- Bearish alignment: short below long and falling → weak downtrend.\n- MAs themselves are dynamic support/resistance (pullback to MA20 that holds is often a buy).\n\n\n> 📌 Hold through bullish alignment, lighten in bearish; MAs are moving support/resistance.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
