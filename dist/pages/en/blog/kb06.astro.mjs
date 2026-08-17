import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 6/31 of <em>Stock Knowledge 101</em> 〔Trend〕.</p>\n</blockquote>\n<ul>\n<li>Prior highs/lows: dense historical trading zones naturally become support(below)/resistance(above).</li>\n<li>Round numbers and moving averages (e.g., 60-day) often act as psychological levels.</li>\n<li>Gaps: the lower edge of an up-gap is support; the upper edge of a down-gap is resistance.</li>\n<li>Once support is broken it flips to resistance, and vice versa.</li>\n</ul>\n<blockquote>\n<p>📌 Find S/R by seeing where people previously traded, not by drawing lines from nothing.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"How to find support & resistance","description":"Trend · Prior highs/lows: dense historical tradi","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb06","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb06.md";
				const url = "/stock-blog/en/blog/kb06";
				function rawContent() {
					return "   \n                                         \n                                                               \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 6/31 of *Stock Knowledge 101* 〔Trend〕.\n\n- Prior highs/lows: dense historical trading zones naturally become support(below)/resistance(above).\n- Round numbers and moving averages (e.g., 60-day) often act as psychological levels.\n- Gaps: the lower edge of an up-gap is support; the upper edge of a down-gap is resistance.\n- Once support is broken it flips to resistance, and vice versa.\n\n\n> 📌 Find S/R by seeing where people previously traded, not by drawing lines from nothing.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
