import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 27/31 of <em>Stock Knowledge 101</em> 〔Valuation〕.</p>\n</blockquote>\n<ul>\n<li>PB = price/book value; suits asset-heavy sectors (banks/property) for liquidation value.</li>\n<li>PS = price/sales; suits not-yet-profitable high-growth (early SaaS/e-commerce).</li>\n<li>Never compare PE across industries; compare same track + historical percentile.</li>\n<li>Valuation percentile: where current PE/PB sits in its own 10%~90% history, more practical than absolute.</li>\n</ul>\n<blockquote>\n<p>📌 Pick the right ruler: profit-stable → PE, asset-heavy → PB, unprofitable → PS; watch historical percentile.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"PB, PS & cross-sectional valuation","description":"Valuation · PB = price/book value; suits asset-heavy","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb27","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb27.md";
				const url = "/stock-blog/en/blog/kb27";
				function rawContent() {
					return "   \n                                           \n                                                                   \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 27/31 of *Stock Knowledge 101* 〔Valuation〕.\n\n- PB = price/book value; suits asset-heavy sectors (banks/property) for liquidation value.\n- PS = price/sales; suits not-yet-profitable high-growth (early SaaS/e-commerce).\n- Never compare PE across industries; compare same track + historical percentile.\n- Valuation percentile: where current PE/PB sits in its own 10%~90% history, more practical than absolute.\n\n\n> 📌 Pick the right ruler: profit-stable → PE, asset-heavy → PB, unprofitable → PS; watch historical percentile.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
