import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_Dmw8qGdY.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 8/31 of <em>Stock Knowledge 101</em> 〔Volume-Price〕.</p>\n</blockquote>\n<ul>\n<li>Top divergence: price makes new highs but volume/momentum fails to → upside exhaustion.</li>\n<li>Bottom divergence: price makes new lows but volume/indicator doesn’t → downside easing, possible bottom.</li>\n<li>Divergence isn’t an instant reversal but a warning that the trend may be loosening; wait for confirmation.</li>\n<li>MACD/RSI divergences are more objective than volume alone; watch both.</li>\n</ul>\n<blockquote>\n<p>📌 Divergence = price fights the evidence; when they fight long enough, one side yields.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"Volume-price divergence: an early warning","description":"Volume-Price · Top divergence: price makes new highs bu","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb08","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/kb08.md";
				const url = "/stock-blog/en/blog/kb08";
				function rawContent() {
					return "   \n                                                  \n                                                                      \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 8/31 of *Stock Knowledge 101* 〔Volume-Price〕.\n\n- Top divergence: price makes new highs but volume/momentum fails to → upside exhaustion.\n- Bottom divergence: price makes new lows but volume/indicator doesn't → downside easing, possible bottom.\n- Divergence isn't an instant reversal but a warning that the trend may be loosening; wait for confirmation.\n- MACD/RSI divergences are more objective than volume alone; watch both.\n\n\n> 📌 Divergence = price fights the evidence; when they fight long enough, one side yields.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
