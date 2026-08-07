import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_SeEljiWQ.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<h1 id=\"index-funds-in-a-bear-market\">Index funds in a bear market</h1>\n<blockquote>\n<p>⚠️ Placeholder: this section will be replaced with the translated article. Outline only.</p>\n</blockquote>\n<h2 id=\"key-points\">Key points</h2>\n<ul>\n<li>(TBD) 指数基金熊市回归估值策略：PE&#x3C;30% 建仓分批加仓，PE 分级减仓至清仓。</li>\n<li>In a bear market, valuation still rules: build below PE 30%, scale out as PE climbs to 100%.</li>\n</ul>\n<h2 id=\"recap\">Recap</h2>\n<p>Full text to be added. Paid sections unlock after a tip (min ¥1).</p>";

				const frontmatter = {"title":"Index funds in a bear market","description":"指数基金熊市的买点与卖出纪律（英文翻译待补充）。","layout":"../../../layouts/BlogPost.astro","series":"Xiaobei Fund Strategy","free":false,"lang":"en","altLang":"中文","altHref":"/","pubDate":"2026-08-07T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/ch19-index-bear.md";
				const url = "/stock-blog/en/blog/ch19-index-bear";
				function rawContent() {
					return "   \n                                     \n                                       \n                                       \n                             \n           \n        \n           \n          \n                   \n   \n\n# Index funds in a bear market\n\n> ⚠️ Placeholder: this section will be replaced with the translated article. Outline only.\n\n## Key points\n\n- (TBD) 指数基金熊市回归估值策略：PE<30% 建仓分批加仓，PE 分级减仓至清仓。\n- In a bear market, valuation still rules: build below PE 30%, scale out as PE climbs to 100%.\n\n## Recap\n\nFull text to be added. Paid sections unlock after a tip (min ¥1).\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"index-funds-in-a-bear-market","text":"Index funds in a bear market"},{"depth":2,"slug":"key-points","text":"Key points"},{"depth":2,"slug":"recap","text":"Recap"}];
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
