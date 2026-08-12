import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_Dmw8qGdY.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 3/31 of <em>Stock Knowledge 101</em> 〔Candle patterns〕.</p>\n</blockquote>\n<ul>\n<li>Bullish engulfing: a large green candle fully covers the prior red near a bottom → bear-to-bull.</li>\n<li>Bearish engulfing: a large red covers the prior green near a top → bull-to-bear.</li>\n<li>Doji at the end of a long trend, confirmed by the next session, raises reversal odds.</li>\n<li>Pattern signals need volume and trend context; an isolated candle means little.</li>\n</ul>\n<blockquote>\n<p>📌 Engulfing = body covers; star = confirmation; only reliable within a trend.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"Bullish/Bearish engulfing & doji","description":"Candle patterns · Bullish engulfing: a large green candle ","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb03","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/kb03.md";
				const url = "/stock-blog/en/blog/kb03";
				function rawContent() {
					return "   \n                                         \n                                                                         \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 3/31 of *Stock Knowledge 101* 〔Candle patterns〕.\n\n- Bullish engulfing: a large green candle fully covers the prior red near a bottom → bear-to-bull.\n- Bearish engulfing: a large red covers the prior green near a top → bull-to-bear.\n- Doji at the end of a long trend, confirmed by the next session, raises reversal odds.\n- Pattern signals need volume and trend context; an isolated candle means little.\n\n\n> 📌 Engulfing = body covers; star = confirmation; only reliable within a trend.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
