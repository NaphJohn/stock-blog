import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DNhH03SJ.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>⚠️ Placeholder: this section will be replaced with the translated article. Outline only.</p>\n</blockquote>\n<h2 id=\"key-points\">Key points</h2>\n<ul>\n<li>(TBD) Buy on drawdowns when YTD return is below 50% of annualised average; buy in one shot.</li>\n<li>Sell half when YTD return exceeds 50% of annualised average and monthly return beats the historical ranging-market average; hold a half position.</li>\n<li>“Half-position swing” — average down, amplify profit, don’t fully exit before a possible bull leg.</li>\n</ul>\n<h2 id=\"recap\">Recap</h2>\n<p>Full text to be added.</p>";

				const frontmatter = {"title":"Active funds in a ranging market","description":"震荡市买跌不买涨：年化收益未达 50% 时逢回撤一次性买入，达标后卖一半保持半仓波动。","layout":"../../../layouts/BlogPost.astro","series":"Fund Strategy","free":false,"lang":"en","altLang":"中文","altHref":"/","pubDate":"2026-08-08T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/ch8-index.md";
				const url = "/stock-blog/en/blog/ch8-index";
				function rawContent() {
					return "   \n                                         \n                                                          \n                                       \n                     \n           \n        \n           \n          \n                   \n   \n\n> ⚠️ Placeholder: this section will be replaced with the translated article. Outline only.\n\n## Key points\n\n- (TBD) Buy on drawdowns when YTD return is below 50% of annualised average; buy in one shot.\n- Sell half when YTD return exceeds 50% of annualised average and monthly return beats the historical ranging-market average; hold a half position.\n- \"Half-position swing\" — average down, amplify profit, don't fully exit before a possible bull leg.\n\n## Recap\n\nFull text to be added.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"key-points","text":"Key points"},{"depth":2,"slug":"recap","text":"Recap"}];
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
