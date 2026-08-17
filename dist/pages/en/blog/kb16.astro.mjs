import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 16/31 of <em>Stock Knowledge 101</em> 〔Indicators〕.</p>\n</blockquote>\n<ul>\n<li>RSI = average gain/(avg gain+avg loss) over a period, 0~100, commonly 14.</li>\n<li>Overbought: RSI>70 (strong but beware pullback); oversold: RSI&#x3C;30 (weak but may bounce).</li>\n<li>RSI around 50 = balance; crossing above 50 bullish, below bearish.</li>\n<li>RSI divergence (price new high but RSI not) is a classic top warning.</li>\n</ul>\n<blockquote>\n<p>📌 RSI>70 don’t chase, &#x3C;30 don’t panic-sell; it tells you if it’s hot, not if it’s turning.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"RSI relative strength","description":"Indicators · RSI = average gain/(avg gain+avg loss) o","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb16","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb16.md";
				const url = "/stock-blog/en/blog/kb16";
				function rawContent() {
					return "   \n                              \n                                                                    \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 16/31 of *Stock Knowledge 101* 〔Indicators〕.\n\n- RSI = average gain/(avg gain+avg loss) over a period, 0~100, commonly 14.\n- Overbought: RSI>70 (strong but beware pullback); oversold: RSI<30 (weak but may bounce).\n- RSI around 50 = balance; crossing above 50 bullish, below bearish.\n- RSI divergence (price new high but RSI not) is a classic top warning.\n\n\n> 📌 RSI>70 don't chase, <30 don't panic-sell; it tells you if it's hot, not if it's turning.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
