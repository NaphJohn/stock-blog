import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<blockquote>\n<p>本节为《股票知识小课堂》第 27/31 课〔估值〕。</p>\n</blockquote>\n<ul>\n<li>PB=股价/每股净资产，适合银行/地产等重资产行业（看清算价值）。</li>\n<li>PS=股价/每股营收，适合尚未盈利的高成长公司（如早期SaaS/电商）。</li>\n<li>跨行业不能比PE：科技股PE天然高于银行，应同赛道横向比+历史分位比。</li>\n<li>估值分位：当前PE/PB处于自身历史10%~90%的哪档，比绝对数字更实用。</li>\n</ul>\n<div class=\"fig\">\n<svg viewBox=\"0 0 680 250\" role=\"img\" aria-label=\"PB、PS 与估值横向对比\">\n<text x=\"40\" y=\"26\" font-size=\"14\" fill=\"#111827\" font-weight=\"bold\">PB、PS 与估值横向对比</text>\n<rect x=\"60\" y=\"90\" width=\"520\" height=\"20\" fill=\"#f3f4f6\"></rect>\n<rect x=\"60\" y=\"90\" width=\"160\" height=\"20\" fill=\"#1aa05a\" opacity=\"0.5\"></rect>\n<rect x=\"320\" y=\"90\" width=\"160\" height=\"20\" fill=\"#f59e0b\" opacity=\"0.5\"></rect>\n<rect x=\"480\" y=\"90\" width=\"100\" height=\"20\" fill=\"#dc2626\" opacity=\"0.5\"></rect>\n<text x=\"140\" y=\"84\" font-size=\"11\" fill=\"#047857\" text-anchor=\"middle\">低估</text>\n<text x=\"400\" y=\"84\" font-size=\"11\" fill=\"#b45309\" text-anchor=\"middle\">合理</text>\n<text x=\"530\" y=\"84\" font-size=\"11\" fill=\"#b91c1c\" text-anchor=\"middle\">高估</text>\n<line x1=\"540\" y1=\"70\" x2=\"540\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"></line>\n<text x=\"540\" y=\"135\" font-size=\"11\" fill=\"#111827\" text-anchor=\"middle\">当前</text>\n<text x=\"40\" y=\"190\" font-size=\"12\" fill=\"#6b7280\">看历史估值分位：当前 PE/PB 处于自身 10%~90% 的哪一档。</text>\n</svg>\n<div class=\"cap\">图：PB、PS 与估值横向对比</div>\n</div>\n<blockquote>\n<p>📌 选对尺子：盈利稳看PE、重资产看PB、未盈利看PS；更要看历史分位。</p>\n</blockquote>\n<blockquote>\n<p>⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p>\n</blockquote>";

				const frontmatter = {"title":"PB、PS 与估值横向对比","description":"估值 · PB=股价/每股净资产，适合银行/地产等重资产行业（看清算价值）。","layout":"../../layouts/BlogPost.astro","series":"股票知识小课堂","free":true,"lang":"zh","altLang":"English","altHref":"/en/blog/kb27","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/blog/kb27.md";
				const url = "/stock-blog/blog/kb27";
				function rawContent() {
					return "   \n                      \n                                                     \n                                    \n               \n          \n        \n                \n                      \n                   \n   \n>本节为《股票知识小课堂》第 27/31 课〔估值〕。\n\n- PB=股价/每股净资产，适合银行/地产等重资产行业（看清算价值）。\n- PS=股价/每股营收，适合尚未盈利的高成长公司（如早期SaaS/电商）。\n- 跨行业不能比PE：科技股PE天然高于银行，应同赛道横向比+历史分位比。\n- 估值分位：当前PE/PB处于自身历史10%~90%的哪档，比绝对数字更实用。\n\n<div class=\"fig\">\n<svg viewBox=\"0 0 680 250\" role=\"img\" aria-label=\"PB、PS 与估值横向对比\">\n<text x=\"40\" y=\"26\" font-size=\"14\" fill=\"#111827\" font-weight=\"bold\">PB、PS 与估值横向对比</text>\n<rect x=\"60\" y=\"90\" width=\"520\" height=\"20\" fill=\"#f3f4f6\"/>\n<rect x=\"60\" y=\"90\" width=\"160\" height=\"20\" fill=\"#1aa05a\" opacity=\"0.5\"/>\n<rect x=\"320\" y=\"90\" width=\"160\" height=\"20\" fill=\"#f59e0b\" opacity=\"0.5\"/>\n<rect x=\"480\" y=\"90\" width=\"100\" height=\"20\" fill=\"#dc2626\" opacity=\"0.5\"/>\n<text x=\"140\" y=\"84\" font-size=\"11\" fill=\"#047857\" text-anchor=\"middle\">低估</text>\n<text x=\"400\" y=\"84\" font-size=\"11\" fill=\"#b45309\" text-anchor=\"middle\">合理</text>\n<text x=\"530\" y=\"84\" font-size=\"11\" fill=\"#b91c1c\" text-anchor=\"middle\">高估</text>\n<line x1=\"540\" y1=\"70\" x2=\"540\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/>\n<text x=\"540\" y=\"135\" font-size=\"11\" fill=\"#111827\" text-anchor=\"middle\">当前</text>\n<text x=\"40\" y=\"190\" font-size=\"12\" fill=\"#6b7280\">看历史估值分位：当前 PE/PB 处于自身 10%~90% 的哪一档。</text>\n</svg>\n<div class=\"cap\">图：PB、PS 与估值横向对比</div>\n</div>\n\n> 📌 选对尺子：盈利稳看PE、重资产看PB、未盈利看PS；更要看历史分位。\n\n> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。\n";
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
