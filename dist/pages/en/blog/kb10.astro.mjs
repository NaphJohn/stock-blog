import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 10/31 of <em>Stock Knowledge 101</em> 〔Moving Averages〕.</p>\n</blockquote>\n<ul>\n<li>Golden cross: short MA crosses above long (e.g., MA5 over MA20) → bullish; death cross opposite.</li>\n<li>Larger cycles = steadier but laggier; smaller = faster but noisier; combine.</li>\n<li>Price above MA60 = mid-term bullish; below MA250 (year line) = often a bear structure.</li>\n<li>Practice: pullback to a key MA that holds + shrinking volume = good entry; excess deviation tends to fall back.</li>\n</ul>\n<blockquote>\n<p>📌 Golden cross buy / death cross sell is the simplified version; what really works is the pullback onto the MA.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"Golden/Death cross & MA in practice","description":"Moving Averages · Golden cross: short MA crosses above lon","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb10","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb10.md";
				const url = "/stock-blog/en/blog/kb10";
				function rawContent() {
					return "   \n                                            \n                                                                         \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 10/31 of *Stock Knowledge 101* 〔Moving Averages〕.\n\n- Golden cross: short MA crosses above long (e.g., MA5 over MA20) → bullish; death cross opposite.\n- Larger cycles = steadier but laggier; smaller = faster but noisier; combine.\n- Price above MA60 = mid-term bullish; below MA250 (year line) = often a bear structure.\n- Practice: pullback to a key MA that holds + shrinking volume = good entry; excess deviation tends to fall back.\n\n\n> 📌 Golden cross buy / death cross sell is the simplified version; what really works is the pullback onto the MA.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
