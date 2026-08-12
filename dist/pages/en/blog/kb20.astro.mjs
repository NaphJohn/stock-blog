import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_Dmw8qGdY.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 20/31 of <em>Stock Knowledge 101</em> 〔Financials〕.</p>\n</blockquote>\n<ul>\n<li>Income statement: profit over a period (revenue−cost−expense=profit), shows earning power.</li>\n<li>Balance sheet: the ‘house’ at a point (assets=liabilities+equity), shows financial structure.</li>\n<li>Cash flow statement: cash in/out, split operating/investing/financing, shows real money.</li>\n<li>Read all three together: good profit but no cash (high receivables) = paper riches, beware.</li>\n</ul>\n<blockquote>\n<p>📌 Income statement tells a story, cash flow tells the truth, balance sheet is the foundation.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"Three financial statements overview","description":"Financials · Income statement: profit over a period (","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb20","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/kb20.md";
				const url = "/stock-blog/en/blog/kb20";
				function rawContent() {
					return "   \n                                            \n                                                                    \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 20/31 of *Stock Knowledge 101* 〔Financials〕.\n\n- Income statement: profit over a period (revenue−cost−expense=profit), shows earning power.\n- Balance sheet: the 'house' at a point (assets=liabilities+equity), shows financial structure.\n- Cash flow statement: cash in/out, split operating/investing/financing, shows real money.\n- Read all three together: good profit but no cash (high receivables) = paper riches, beware.\n\n\n> 📌 Income statement tells a story, cash flow tells the truth, balance sheet is the foundation.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
