import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_Dmw8qGdY.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 23/31 of <em>Stock Knowledge 101</em> 〔Financials〕.</p>\n</blockquote>\n<ul>\n<li>Operating cash flow: main-business cash; sustained positive = healthy; negative = warning.</li>\n<li>Investing cash flow: expansion/M&#x26;A usually negative (spending); judge with strategy.</li>\n<li>Financing cash flow: borrowing/issuance positive, dividends/repayment negative.</li>\n<li>Free cash flow = operating CFO − capex; long-term positive and growing = quality cash cow.</li>\n</ul>\n<blockquote>\n<p>📌 Net profit can be dressed up; operating cash flow is hard to fake; long divergence needs explanation.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"Reading the cash flow statement","description":"Financials · Operating cash flow: main-business cash;","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb23","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/kb23.md";
				const url = "/stock-blog/en/blog/kb23";
				function rawContent() {
					return "   \n                                        \n                                                                    \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 23/31 of *Stock Knowledge 101* 〔Financials〕.\n\n- Operating cash flow: main-business cash; sustained positive = healthy; negative = warning.\n- Investing cash flow: expansion/M&A usually negative (spending); judge with strategy.\n- Financing cash flow: borrowing/issuance positive, dividends/repayment negative.\n- Free cash flow = operating CFO − capex; long-term positive and growing = quality cash cow.\n\n\n> 📌 Net profit can be dressed up; operating cash flow is hard to fake; long divergence needs explanation.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
