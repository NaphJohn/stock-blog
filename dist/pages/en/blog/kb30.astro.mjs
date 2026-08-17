import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 30/31 of <em>Stock Knowledge 101</em> 〔Position〕.</p>\n</blockquote>\n<ul>\n<li>Staggered buying: don’t go all-in; split 3~5 tranches at different prices/times to average down.</li>\n<li>Single-name cap: one stock ideally ≤10%~15% of portfolio to avoid one landmine sinking it.</li>\n<li>Pyramid adding: the lower it falls, the larger each tranche; inverted pyramid is most dangerous.</li>\n<li>Keep cash: always reserve 10%~30% for black swans and opportunities.</li>\n</ul>\n<blockquote>\n<p>📌 Never fill the first tranche; position management keeps you alive more than maximising gains.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"Position sizing & staggered buying","description":"Position · Staggered buying: don't go all-in; split","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb30","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb30.md";
				const url = "/stock-blog/en/blog/kb30";
				function rawContent() {
					return "   \n                                           \n                                                                  \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 30/31 of *Stock Knowledge 101* 〔Position〕.\n\n- Staggered buying: don't go all-in; split 3~5 tranches at different prices/times to average down.\n- Single-name cap: one stock ideally ≤10%~15% of portfolio to avoid one landmine sinking it.\n- Pyramid adding: the lower it falls, the larger each tranche; inverted pyramid is most dangerous.\n- Keep cash: always reserve 10%~30% for black swans and opportunities.\n\n\n> 📌 Never fill the first tranche; position management keeps you alive more than maximising gains.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
