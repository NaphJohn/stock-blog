import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_Dmw8qGdY.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 28/31 of <em>Stock Knowledge 101</em> 〔Valuation〕.</p>\n</blockquote>\n<ul>\n<li>PEG = PE / earnings growth (%), PEG&#x3C;1 often seen as growth-matched valuation.</li>\n<li>PEG ties ‘expensive or not’ to ‘grows fast or not’, fairer than PE alone.</li>\n<li>DCF = discount future annual free cash flows to today; ultimate model but assumptions are very sensitive.</li>\n<li>Practice: rough-screen with PEG, set zones by historical valuation percentile, more operable than precise DCF.</li>\n</ul>\n<blockquote>\n<p>📌 PEG&#x3C;1 = good value-for-growth; DCF tells you valuation is future cash flows, but don’t worship precise numbers.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"PEG and DCF, simply","description":"Valuation · PEG = PE / earnings growth (%), PEG<1 of","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb28","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/kb28.md";
				const url = "/stock-blog/en/blog/kb28";
				function rawContent() {
					return "   \n                            \n                                                                   \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 28/31 of *Stock Knowledge 101* 〔Valuation〕.\n\n- PEG = PE / earnings growth (%), PEG<1 often seen as growth-matched valuation.\n- PEG ties 'expensive or not' to 'grows fast or not', fairer than PE alone.\n- DCF = discount future annual free cash flows to today; ultimate model but assumptions are very sensitive.\n- Practice: rough-screen with PEG, set zones by historical valuation percentile, more operable than precise DCF.\n\n\n> 📌 PEG<1 = good value-for-growth; DCF tells you valuation is future cash flows, but don't worship precise numbers.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
