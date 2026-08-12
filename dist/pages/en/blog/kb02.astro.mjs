import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_Dmw8qGdY.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 2/31 of <em>Stock Knowledge 101</em> 〔Candlesticks〕.</p>\n</blockquote>\n<ul>\n<li>Long white candle with no shadows: relentless buying, bulls in control (launch/main rise).</li>\n<li>Long black candle: panic selling or distribution; weight with location (dangerous at highs).</li>\n<li>Doji (open≈close): buyers vs sellers stalemate, often a reversal warning.</li>\n<li>Long lower shadow (hammer) = strong support at lows; long upper shadow = fading momentum at highs.</li>\n</ul>\n<blockquote>\n<p>📌 Same candle means opposite at lows vs highs — read location first, then shape.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"The market psychology of a single candle","description":"Candlesticks · Long white candle with no shadows: relen","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb02","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/kb02.md";
				const url = "/stock-blog/en/blog/kb02";
				function rawContent() {
					return "   \n                                                 \n                                                                      \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 2/31 of *Stock Knowledge 101* 〔Candlesticks〕.\n\n- Long white candle with no shadows: relentless buying, bulls in control (launch/main rise).\n- Long black candle: panic selling or distribution; weight with location (dangerous at highs).\n- Doji (open≈close): buyers vs sellers stalemate, often a reversal warning.\n- Long lower shadow (hammer) = strong support at lows; long upper shadow = fading momentum at highs.\n\n\n> 📌 Same candle means opposite at lows vs highs — read location first, then shape.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
