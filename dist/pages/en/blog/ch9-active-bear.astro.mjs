import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DNhH03SJ.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>⚠️ Placeholder: this section will be replaced with the translated article. Outline only.</p>\n</blockquote>\n<h2 id=\"key-points\">Key points</h2>\n<ul>\n<li>(TBD) Buy only when <em>time</em> (drawdown ≈ 50% of last full smile-cycle length) AND <em>space</em> (drawdown ≈ historical bear-market average max drawdown) are both in place.</li>\n<li>Use <strong>staggered DCA</strong> in a bear market — never one-shot — to dilute downside and time cost.</li>\n<li>Sell half when monthly return beats the historical bear-market average; keep a half position and swing to lower cost.</li>\n</ul>\n<h2 id=\"recap\">Recap</h2>\n<p>Full text to be added.</p>";

				const frontmatter = {"title":"Active funds in a bear market","description":"熊市时间+空间双到位后分批定投，月度反弹超均值时减半仓波段操作，降低成本。","layout":"../../../layouts/BlogPost.astro","series":"Fund Strategy","free":false,"lang":"en","altLang":"中文","altHref":"/","pubDate":"2026-08-08T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/ch9-active-bear.md";
				const url = "/stock-blog/en/blog/ch9-active-bear";
				function rawContent() {
					return "   \n                                      \n                                                    \n                                       \n                     \n           \n        \n           \n          \n                   \n   \n\n> ⚠️ Placeholder: this section will be replaced with the translated article. Outline only.\n\n## Key points\n\n- (TBD) Buy only when *time* (drawdown ≈ 50% of last full smile-cycle length) AND *space* (drawdown ≈ historical bear-market average max drawdown) are both in place.\n- Use **staggered DCA** in a bear market — never one-shot — to dilute downside and time cost.\n- Sell half when monthly return beats the historical bear-market average; keep a half position and swing to lower cost.\n\n## Recap\n\nFull text to be added.";
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
