import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 19/31 of <em>Stock Knowledge 101</em> 〔Indicators〕.</p>\n</blockquote>\n<ul>\n<li>Single indicators fake out; combining raises hit rate: trend=MA, momentum=MACD, participation=volume.</li>\n<li>Classic bull resonance: price above year/60-day + MACD golden cross above zero + volume breakout.</li>\n<li>Classic top resonance: high-volume stall at highs + MACD divergence + RSI overbought + break of short MA.</li>\n<li>Any indicator lags price — use to confirm, not predict; position discipline is the core.</li>\n</ul>\n<blockquote>\n<p>📌 Act only on multi-indicator resonance; when they conflict, wait, don’t guess.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"Combining indicators: MACD + volume + MA","description":"Indicators · Single indicators fake out; combining ra","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb19","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb19.md";
				const url = "/stock-blog/en/blog/kb19";
				function rawContent() {
					return "   \n                                                 \n                                                                    \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 19/31 of *Stock Knowledge 101* 〔Indicators〕.\n\n- Single indicators fake out; combining raises hit rate: trend=MA, momentum=MACD, participation=volume.\n- Classic bull resonance: price above year/60-day + MACD golden cross above zero + volume breakout.\n- Classic top resonance: high-volume stall at highs + MACD divergence + RSI overbought + break of short MA.\n- Any indicator lags price — use to confirm, not predict; position discipline is the core.\n\n\n> 📌 Act only on multi-indicator resonance; when they conflict, wait, don't guess.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
