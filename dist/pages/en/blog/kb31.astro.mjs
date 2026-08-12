import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_Dmw8qGdY.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 31/31 of <em>Stock Knowledge 101</em> 〔Risk〕.</p>\n</blockquote>\n<ul>\n<li>Stop loss: set in advance where you admit the call was wrong; execute mechanically (e.g., −8%~−10%).</li>\n<li>Take profit: when target reached, trim in batches (e.g., sell 1/3 at +30%); don’t ride the round-trip.</li>\n<li>Trap 1 chase rallies/sell panics: emotional trading is the enemy.</li>\n<li>Trap 2 confirmation bias; Trap 3 all-in with no cash buffer.</li>\n</ul>\n<blockquote>\n<p>📌 Discipline > prediction: think ‘what if I’m wrong’ before ‘how much I’ll make if right’.</p>\n</blockquote>\n<blockquote>\n<p>⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.</p>\n</blockquote>";

				const frontmatter = {"title":"Stop-loss, take-profit & common pitfalls","description":"Risk · Stop loss: set in advance where you admi","layout":"../../../layouts/BlogPost.astro","series":"Stock Knowledge 101","free":true,"lang":"en","altLang":"中文","altHref":"/blog/kb31","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/kb31.md";
				const url = "/stock-blog/en/blog/kb31";
				function rawContent() {
					return "   \n                                                 \n                                                              \n                                       \n                           \n          \n        \n           \n                   \n                   \n   \n>This is Lesson 31/31 of *Stock Knowledge 101* 〔Risk〕.\n\n- Stop loss: set in advance where you admit the call was wrong; execute mechanically (e.g., −8%~−10%).\n- Take profit: when target reached, trim in batches (e.g., sell 1/3 at +30%); don't ride the round-trip.\n- Trap 1 chase rallies/sell panics: emotional trading is the enemy.\n- Trap 2 confirmation bias; Trap 3 all-in with no cash buffer.\n\n\n> 📌 Discipline > prediction: think 'what if I'm wrong' before 'how much I'll make if right'.\n\n> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.\n";
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
