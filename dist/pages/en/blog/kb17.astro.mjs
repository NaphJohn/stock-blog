import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 17/31 of <em>Stock Knowledge 101</em> 〔Indicators〕.</p>\n</blockquote>\n<ul>\n<li>KDJ has K, D, J lines; more sensitive to short-term turns than MACD.</li>\n<li>Overbought: K,D>80; oversold: K,D&#x3C;20; J can be ±, shows extremes.</li>\n<li>Golden cross (K over D, more reliable at lows) / death cross (riskier at highs).</li>\n<li>Weakness: great in ranges, but prone to ‘pinning’ (stays overbought while still rising) in trends.</li>\n</ul>\n<blockquote>\n<p>📌 KDJ suits range-bound dip-buying/top-fading; in a trend it pins, don’t fight the signal.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"KDJ stochastic","description":"Indicators · KDJ has K, D, J lines; more sensitive to","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb17","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb17.md";
				const url = "/stock-blog/en/blog/kb17";
				function rawContent() {
					return "   \n                       \n                                                                    \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 17/31 of *Stock Knowledge 101* 〔Indicators〕.\n\n- KDJ has K, D, J lines; more sensitive to short-term turns than MACD.\n- Overbought: K,D>80; oversold: K,D<20; J can be ±, shows extremes.\n- Golden cross (K over D, more reliable at lows) / death cross (riskier at highs).\n- Weakness: great in ranges, but prone to 'pinning' (stays overbought while still rising) in trends.\n\n\n> 📌 KDJ suits range-bound dip-buying/top-fading; in a trend it pins, don't fight the signal.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
