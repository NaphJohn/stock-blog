import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 21/31 of <em>Stock Knowledge 101</em> 〔Financials〕.</p>\n</blockquote>\n<ul>\n<li>Core chain: revenue → COGS → gross margin → three expenses → operating profit → net profit.</li>\n<li>Gross margin=(revenue−COGS)/revenue; higher = more pricing power/moat.</li>\n<li>Look at attributable net profit, not total profit (the former is what shareholders earn).</li>\n<li>Watch trend and non-recurring gains (one-off asset sales should be stripped).</li>\n</ul>\n<blockquote>\n<p>📌 Gross margin decides life-or-death; attributable net = ownership; discount one-off gains.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"Reading the income statement","description":"Financials · Core chain: revenue → COGS → gross margi","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb21","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb21.md";
				const url = "/stock-blog/en/blog/kb21";
				function rawContent() {
					return "   \n                                     \n                                                                    \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 21/31 of *Stock Knowledge 101* 〔Financials〕.\n\n- Core chain: revenue → COGS → gross margin → three expenses → operating profit → net profit.\n- Gross margin=(revenue−COGS)/revenue; higher = more pricing power/moat.\n- Look at attributable net profit, not total profit (the former is what shareholders earn).\n- Watch trend and non-recurring gains (one-off asset sales should be stripped).\n\n\n> 📌 Gross margin decides life-or-death; attributable net = ownership; discount one-off gains.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
