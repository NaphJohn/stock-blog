import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_Dmw8qGdY.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 11/31 of <em>Stock Knowledge 101</em> 〔Indicators〕.</p>\n</blockquote>\n<ul>\n<li>MACD measures momentum via the gap between fast and slow MAs.</li>\n<li>DIF(fast)=EMA12−EMA26; DEA(slow)=9-day smooth of DIF; bars=2×(DIF−DEA).</li>\n<li>Growing red bars = strengthening bull momentum; growing green = bear; shrinking bars = fading momentum.</li>\n<li>Above the zero line is bullish territory, below is bearish; a cross above the line is more reliable.</li>\n</ul>\n<blockquote>\n<p>📌 MACD trio: line for direction (DIF/DEA), bars for strength, axis for territory.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"MACD: DIF, DEA, red/green bars","description":"Indicators · MACD measures momentum via the gap betwe","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb11","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/kb11.md";
				const url = "/stock-blog/en/blog/kb11";
				function rawContent() {
					return "   \n                                       \n                                                                    \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 11/31 of *Stock Knowledge 101* 〔Indicators〕.\n\n- MACD measures momentum via the gap between fast and slow MAs.\n- DIF(fast)=EMA12−EMA26; DEA(slow)=9-day smooth of DIF; bars=2×(DIF−DEA).\n- Growing red bars = strengthening bull momentum; growing green = bear; shrinking bars = fading momentum.\n- Above the zero line is bullish territory, below is bearish; a cross above the line is more reliable.\n\n\n> 📌 MACD trio: line for direction (DIF/DEA), bars for strength, axis for territory.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
