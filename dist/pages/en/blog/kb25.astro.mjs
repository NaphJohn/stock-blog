import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 25/31 of <em>Stock Knowledge 101</em> 〔Financials〕.</p>\n</blockquote>\n<ul>\n<li>Revenue/earnings growth: is the company getting bigger and stronger; watch base effects.</li>\n<li>Operating CFO / net profit (cash-collection ratio): closer to 1 better, profit has cash behind it.</li>\n<li>R&#x26;D expense ratio: for tech/semis, input intensity decides future competitiveness.</li>\n<li>Receivables growing faster than revenue = possibly inflating sales on credit; quality suspect.</li>\n</ul>\n<blockquote>\n<p>📌 Growth = growth rate, quality = cash-collection ratio; receivables outrunning revenue is a red flag.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"Growth & quality metrics","description":"Financials · Revenue/earnings growth: is the company ","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb25","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb25.md";
				const url = "/stock-blog/en/blog/kb25";
				function rawContent() {
					return "   \n                                 \n                                                                    \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 25/31 of *Stock Knowledge 101* 〔Financials〕.\n\n- Revenue/earnings growth: is the company getting bigger and stronger; watch base effects.\n- Operating CFO / net profit (cash-collection ratio): closer to 1 better, profit has cash behind it.\n- R&D expense ratio: for tech/semis, input intensity decides future competitiveness.\n- Receivables growing faster than revenue = possibly inflating sales on credit; quality suspect.\n\n\n> 📌 Growth = growth rate, quality = cash-collection ratio; receivables outrunning revenue is a red flag.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
