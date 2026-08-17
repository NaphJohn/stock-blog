import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 24/31 of <em>Stock Knowledge 101</em> 〔Financials〕.</p>\n</blockquote>\n<ul>\n<li>ROE = net profit/equity; how much a shareholder earns per 1 yuan, Buffett’s favourite.</li>\n<li>DuPont: ROE = net margin × asset turnover × equity multiplier (leverage).</li>\n<li>High ROE from high margin (Moutai) is steadiest; from high leverage (banks) carries risk.</li>\n<li>Long-term (e.g., 5 yrs) ROE>15% and stable usually flags a good business.</li>\n</ul>\n<blockquote>\n<p>📌 Good company = high ROE and sustainable; use DuPont to see which of margin/efficiency/leverage props it up.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"ROE and DuPont analysis","description":"Financials · ROE = net profit/equity; how much a shar","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb24","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb24.md";
				const url = "/stock-blog/en/blog/kb24";
				function rawContent() {
					return "   \n                                \n                                                                    \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 24/31 of *Stock Knowledge 101* 〔Financials〕.\n\n- ROE = net profit/equity; how much a shareholder earns per 1 yuan, Buffett's favourite.\n- DuPont: ROE = net margin × asset turnover × equity multiplier (leverage).\n- High ROE from high margin (Moutai) is steadiest; from high leverage (banks) carries risk.\n- Long-term (e.g., 5 yrs) ROE>15% and stable usually flags a good business.\n\n\n> 📌 Good company = high ROE and sustainable; use DuPont to see which of margin/efficiency/leverage props it up.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
