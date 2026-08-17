import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 29/31 of <em>Stock Knowledge 101</em> 〔Dividends〕.</p>\n</blockquote>\n<ul>\n<li>Dividend yield = dividend per share / price, cash return; high-dividend stocks are often anchors.</li>\n<li>Payout ratio = dividend/net profit, how much profit returned to shareholders.</li>\n<li>Buyback: company repurchases its own stock, directly lifts per-share value; rising in A-shares.</li>\n<li>High yield ≠ blind buy: when price crashes yield looks inflated; confirm dividend is sustainable.</li>\n</ul>\n<blockquote>\n<p>📌 Yield shows cash return, but first ask is the dividend sustainable; buyback is another form of reward.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"Dividends, yield & buybacks","description":"Dividends · Dividend yield = dividend per share / pr","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb29","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb29.md";
				const url = "/stock-blog/en/blog/kb29";
				function rawContent() {
					return "   \n                                    \n                                                                   \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 29/31 of *Stock Knowledge 101* 〔Dividends〕.\n\n- Dividend yield = dividend per share / price, cash return; high-dividend stocks are often anchors.\n- Payout ratio = dividend/net profit, how much profit returned to shareholders.\n- Buyback: company repurchases its own stock, directly lifts per-share value; rising in A-shares.\n- High yield ≠ blind buy: when price crashes yield looks inflated; confirm dividend is sustainable.\n\n\n> 📌 Yield shows cash return, but first ask is the dividend sustainable; buyback is another form of reward.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
