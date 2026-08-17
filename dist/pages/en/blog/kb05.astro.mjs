import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 5/31 of <em>Stock Knowledge 101</em> 〔Trend〕.</p>\n</blockquote>\n<ul>\n<li>Up trend line: connect successively higher lows; valid when price holds above it.</li>\n<li>Down trend line: connect successively lower highs; acts as resistance on rallies.</li>\n<li>Channel = trend line + parallel (upper rail = resistance, lower rail = support) for buy-low/sell-high.</li>\n<li>A valid breakdown/breakout (volume + close) often signals a trend reversal.</li>\n</ul>\n<blockquote>\n<p>📌 Trend is your friend: in an up channel, buy the lower rail — steadier than calling tops.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"How to draw trend lines & use channels","description":"Trend · Up trend line: connect successively high","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb05","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/en/blog/kb05.md";
				const url = "/stock-blog/en/blog/kb05";
				function rawContent() {
					return "   \n                                               \n                                                               \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 5/31 of *Stock Knowledge 101* 〔Trend〕.\n\n- Up trend line: connect successively higher lows; valid when price holds above it.\n- Down trend line: connect successively lower highs; acts as resistance on rallies.\n- Channel = trend line + parallel (upper rail = resistance, lower rail = support) for buy-low/sell-high.\n- A valid breakdown/breakout (volume + close) often signals a trend reversal.\n\n\n> 📌 Trend is your friend: in an up channel, buy the lower rail — steadier than calling tops.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
