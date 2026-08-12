import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_Dmw8qGdY.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 1/31 of <em>Stock Knowledge 101</em> 〔Candlesticks〕.</p>\n</blockquote>\n<ul>\n<li>A candle = one time unit (day/week/min) summarised by open/high/low/close.</li>\n<li>Bullish (close>open): A-shares usually red/hollow; bearish (close&#x3C;open): green/filled.</li>\n<li>Body = rectangle from open to close; upper shadow = high to body; lower shadow = body to low.</li>\n<li>Longer body = stronger one-sided move; longer shadow = more overhead/underlying pressure.</li>\n</ul>\n<blockquote>\n<p>📌 Red up, green down in A-shares; body length = strength, shadow length = battle.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"What a candle looks like: bullish, bearish, body, shadows","description":"Candlesticks · A candle = one time unit (day/week/min) ","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb01","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/kb01.md";
				const url = "/stock-blog/en/blog/kb01";
				function rawContent() {
					return "   \n                                                                  \n                                                                      \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 1/31 of *Stock Knowledge 101* 〔Candlesticks〕.\n\n- A candle = one time unit (day/week/min) summarised by open/high/low/close.\n- Bullish (close>open): A-shares usually red/hollow; bearish (close<open): green/filled.\n- Body = rectangle from open to close; upper shadow = high to body; lower shadow = body to low.\n- Longer body = stronger one-sided move; longer shadow = more overhead/underlying pressure.\n\n\n> 📌 Red up, green down in A-shares; body length = strength, shadow length = battle.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
