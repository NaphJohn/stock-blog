import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 4/31 of <em>Stock Knowledge 101</em> 〔Candle patterns〕.</p>\n</blockquote>\n<ul>\n<li>Hammer: long lower shadow, small body at lows → dip rejected, bullish.</li>\n<li>Hanging man: long lower shadow at highs → looks stable but risky, confirm with a breakdown next.</li>\n<li>Morning star (red→doji→green) = bottom reversal; evening star is the top mirror.</li>\n<li>These are most reliable near key support/resistance.</li>\n</ul>\n<blockquote>\n<p>📌 Location > shape; morning star at lows, evening star at highs; reversed ones are traps.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"Hammer, hanging man, morning/evening star","description":"Candle patterns · Hammer: long lower shadow, small body at","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb04","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb04.md";
				const url = "/stock-blog/en/blog/kb04";
				function rawContent() {
					return "   \n                                                  \n                                                                         \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 4/31 of *Stock Knowledge 101* 〔Candle patterns〕.\n\n- Hammer: long lower shadow, small body at lows → dip rejected, bullish.\n- Hanging man: long lower shadow at highs → looks stable but risky, confirm with a breakdown next.\n- Morning star (red→doji→green) = bottom reversal; evening star is the top mirror.\n- These are most reliable near key support/resistance.\n\n\n> 📌 Location > shape; morning star at lows, evening star at highs; reversed ones are traps.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
