import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 26/31 of <em>Stock Knowledge 101</em> 〔Valuation〕.</p>\n</blockquote>\n<ul>\n<li>PE = price/eps; years to recoup at current earnings, lower = ‘cheaper’ (in theory).</li>\n<li>Static PE (last year), TTM (trailing 4Q, most used), dynamic (forecast this year).</li>\n<li>Cyclical stocks show lowest PE at profit peaks — a trap; loss-makers have no meaningful PE.</li>\n<li>PE only compares within the same industry and with growth; an isolated number means nothing.</li>\n</ul>\n<blockquote>\n<p>📌 Low PE ≠ cheap: cyclical PE is lowest at peaks (most dangerous); high-growth PE ≠ expensive.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"PE price-earnings ratio","description":"Valuation · PE = price/eps; years to recoup at curre","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb26","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb26.md";
				const url = "/stock-blog/en/blog/kb26";
				function rawContent() {
					return "   \n                                \n                                                                   \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 26/31 of *Stock Knowledge 101* 〔Valuation〕.\n\n- PE = price/eps; years to recoup at current earnings, lower = 'cheaper' (in theory).\n- Static PE (last year), TTM (trailing 4Q, most used), dynamic (forecast this year).\n- Cyclical stocks show lowest PE at profit peaks — a trap; loss-makers have no meaningful PE.\n- PE only compares within the same industry and with growth; an isolated number means nothing.\n\n\n> 📌 Low PE ≠ cheap: cyclical PE is lowest at peaks (most dangerous); high-growth PE ≠ expensive.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
