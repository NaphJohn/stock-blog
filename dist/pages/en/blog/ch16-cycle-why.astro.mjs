import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_SeEljiWQ.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<h1 id=\"why-xiaobei-insists-on-cycle-timing\">Why Xiaobei insists on cycle timing</h1>\n<blockquote>\n<p>⚠️ Placeholder: this section will be replaced with the translated article. Outline only.</p>\n</blockquote>\n<h2 id=\"key-points\">Key points</h2>\n<ul>\n<li>(TBD) 为什么普通投资者必须周期择时：机构靠管理费、我们靠上涨与分红，且 A 股多为震荡市。</li>\n<li>Institutions earn fees; we earn upside &#x26; dividends — so we must time the cycle.</li>\n</ul>\n<h2 id=\"recap\">Recap</h2>\n<p>Full text to be added. Paid sections unlock after a tip (min ¥1).</p>";

				const frontmatter = {"title":"Why Xiaobei insists on cycle timing","description":"为什么普通投资者必须周期择时（英文翻译待补充）。","layout":"../../../layouts/BlogPost.astro","series":"Xiaobei Fund Strategy","free":false,"lang":"en","altLang":"中文","altHref":"/","pubDate":"2026-08-07T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/ch16-cycle-why.md";
				const url = "/stock-blog/en/blog/ch16-cycle-why";
				function rawContent() {
					return "   \n                                            \n                                       \n                                       \n                             \n           \n        \n           \n          \n                   \n   \n\n# Why Xiaobei insists on cycle timing\n\n> ⚠️ Placeholder: this section will be replaced with the translated article. Outline only.\n\n## Key points\n\n- (TBD) 为什么普通投资者必须周期择时：机构靠管理费、我们靠上涨与分红，且 A 股多为震荡市。\n- Institutions earn fees; we earn upside & dividends — so we must time the cycle.\n\n## Recap\n\nFull text to be added. Paid sections unlock after a tip (min ¥1).\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"why-xiaobei-insists-on-cycle-timing","text":"Why Xiaobei insists on cycle timing"},{"depth":2,"slug":"key-points","text":"Key points"},{"depth":2,"slug":"recap","text":"Recap"}];
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
