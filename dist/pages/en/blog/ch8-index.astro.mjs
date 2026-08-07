import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_SeEljiWQ.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<h1 id=\"hold-index-funds-long-term-valuation--dca-multiples\">Hold index funds long-term: valuation &#x26; DCA multiples</h1>\n<blockquote>\n<p>⚠️ Placeholder: this section will be replaced with the translated article. Outline only.</p>\n</blockquote>\n<h2 id=\"key-points\">Key points</h2>\n<ul>\n<li>(TBD) 宽基定投的加倍与止盈规则。</li>\n<li>Use a system instead of predictions: stagger buys, DCA, stop-loss.</li>\n<li>Set executable buy/sell rules from valuation and your cash flow.</li>\n</ul>\n<h2 id=\"recap\">Recap</h2>\n<p>Full text to be added. Paid sections unlock after a tip (min ¥1).</p>";

				const frontmatter = {"title":"Hold index funds long-term: valuation & DCA multiples","description":"宽基定投的加倍与止盈规则。","layout":"../../../layouts/BlogPost.astro","series":"Xiaobei Fund Strategy","free":false,"lang":"en","altLang":"中文","altHref":"/","pubDate":"2026-08-06T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/ch8-index.md";
				const url = "/stock-blog/en/blog/ch8-index";
				function rawContent() {
					return "   \n                                                              \n                            \n                                       \n                             \n           \n        \n           \n          \n                   \n   \n\n# Hold index funds long-term: valuation & DCA multiples\n\n> ⚠️ Placeholder: this section will be replaced with the translated article. Outline only.\n\n## Key points\n\n- (TBD) 宽基定投的加倍与止盈规则。\n- Use a system instead of predictions: stagger buys, DCA, stop-loss.\n- Set executable buy/sell rules from valuation and your cash flow.\n\n## Recap\n\nFull text to be added. Paid sections unlock after a tip (min ¥1).\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"hold-index-funds-long-term-valuation--dca-multiples","text":"Hold index funds long-term: valuation & DCA multiples"},{"depth":2,"slug":"key-points","text":"Key points"},{"depth":2,"slug":"recap","text":"Recap"}];
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
