import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_Dmw8qGdY.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 7/31 of <em>Stock Knowledge 101</em> 〔Volume-Price〕.</p>\n</blockquote>\n<ul>\n<li>Volume = shares traded per unit time, reflecting participation.</li>\n<li>Price up + volume up: healthy, funded rally; price up + volume down: weak, caution.</li>\n<li>Price down + volume up: panic or distribution; price down + volume down: selling eases, may stabilise.</li>\n<li>Low-volume launch at lows, high-volume stall at highs are the two key turning signals.</li>\n</ul>\n<blockquote>\n<p>📌 Price is the result, volume is the evidence; rallies without volume are often fake breakouts.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"Volume & basic volume-price relationships","description":"Volume-Price · Volume = shares traded per unit time, re","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb07","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/kb07.md";
				const url = "/stock-blog/en/blog/kb07";
				function rawContent() {
					return "   \n                                                  \n                                                                      \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 7/31 of *Stock Knowledge 101* 〔Volume-Price〕.\n\n- Volume = shares traded per unit time, reflecting participation.\n- Price up + volume up: healthy, funded rally; price up + volume down: weak, caution.\n- Price down + volume up: panic or distribution; price down + volume down: selling eases, may stabilise.\n- Low-volume launch at lows, high-volume stall at highs are the two key turning signals.\n\n\n> 📌 Price is the result, volume is the evidence; rallies without volume are often fake breakouts.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
