import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../chunks/BlogPost_Dmw8qGdY.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<blockquote>\n<p>本节为《股票知识小课堂》第 28/31 课〔估值〕。</p>\n</blockquote>\n<ul>\n<li>PEG=PE/盈利增速(%)，PEG&#x3C;1常被视作估值匹配成长（如PE30、增速40→PEG0.75）。</li>\n<li>PEG把贵不贵和长不长得快挂钩，比单看PE公平。</li>\n<li>DCF（现金流折现）= 把公司未来每年自由现金流折成今天的价值，是估值终极模型但假设极敏感。</li>\n<li>实战：用PEG粗筛、用历史估值分位定买卖区间，比精确DCF更可操作。</li>\n</ul>\n<div class=\"fig\">\n<svg viewBox=\"0 0 680 250\" role=\"img\" aria-label=\"PEG 与 DCF 简易理解\">\n<text x=\"40\" y=\"26\" font-size=\"14\" fill=\"#111827\" font-weight=\"bold\">PEG 与 DCF 简易理解</text>\n<rect x=\"60\" y=\"90\" width=\"520\" height=\"20\" fill=\"#f3f4f6\"></rect>\n<rect x=\"60\" y=\"90\" width=\"160\" height=\"20\" fill=\"#1aa05a\" opacity=\"0.5\"></rect>\n<rect x=\"320\" y=\"90\" width=\"160\" height=\"20\" fill=\"#f59e0b\" opacity=\"0.5\"></rect>\n<rect x=\"480\" y=\"90\" width=\"100\" height=\"20\" fill=\"#dc2626\" opacity=\"0.5\"></rect>\n<text x=\"140\" y=\"84\" font-size=\"11\" fill=\"#047857\" text-anchor=\"middle\">低估</text>\n<text x=\"400\" y=\"84\" font-size=\"11\" fill=\"#b45309\" text-anchor=\"middle\">合理</text>\n<text x=\"530\" y=\"84\" font-size=\"11\" fill=\"#b91c1c\" text-anchor=\"middle\">高估</text>\n<line x1=\"540\" y1=\"70\" x2=\"540\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"></line>\n<text x=\"540\" y=\"135\" font-size=\"11\" fill=\"#111827\" text-anchor=\"middle\">当前</text>\n<text x=\"40\" y=\"190\" font-size=\"12\" fill=\"#6b7280\">看历史估值分位：当前 PE/PB 处于自身 10%~90% 的哪一档。</text>\n</svg>\n<div class=\"cap\">图：PEG 与 DCF 简易理解</div>\n</div>\n<blockquote>\n<p>📌 PEG&#x3C;1性价比高；DCF告诉你估值本质是看未来现金流，但别迷信精确数字。</p>\n</blockquote>\n<blockquote>\n<p>⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p>\n</blockquote>";

				const frontmatter = {"title":"PEG 与 DCF 简易理解","description":"估值 · PEG=PE/盈利增速(%)，PEG<1常被视作估值匹配成长（如PE30、增速4","layout":"../../layouts/BlogPost.astro","series":"股票知识小课堂","free":true,"lang":"zh","altLang":"English","altHref":"/en/blog/kb28","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/blog/kb28.md";
				const url = "/stock-blog/blog/kb28";
				function rawContent() {
					return "   \n                       \n                                                            \n                                    \n               \n          \n        \n                \n                      \n                   \n   \n>本节为《股票知识小课堂》第 28/31 课〔估值〕。\n\n- PEG=PE/盈利增速(%)，PEG<1常被视作估值匹配成长（如PE30、增速40→PEG0.75）。\n- PEG把贵不贵和长不长得快挂钩，比单看PE公平。\n- DCF（现金流折现）= 把公司未来每年自由现金流折成今天的价值，是估值终极模型但假设极敏感。\n- 实战：用PEG粗筛、用历史估值分位定买卖区间，比精确DCF更可操作。\n\n<div class=\"fig\">\n<svg viewBox=\"0 0 680 250\" role=\"img\" aria-label=\"PEG 与 DCF 简易理解\">\n<text x=\"40\" y=\"26\" font-size=\"14\" fill=\"#111827\" font-weight=\"bold\">PEG 与 DCF 简易理解</text>\n<rect x=\"60\" y=\"90\" width=\"520\" height=\"20\" fill=\"#f3f4f6\"/>\n<rect x=\"60\" y=\"90\" width=\"160\" height=\"20\" fill=\"#1aa05a\" opacity=\"0.5\"/>\n<rect x=\"320\" y=\"90\" width=\"160\" height=\"20\" fill=\"#f59e0b\" opacity=\"0.5\"/>\n<rect x=\"480\" y=\"90\" width=\"100\" height=\"20\" fill=\"#dc2626\" opacity=\"0.5\"/>\n<text x=\"140\" y=\"84\" font-size=\"11\" fill=\"#047857\" text-anchor=\"middle\">低估</text>\n<text x=\"400\" y=\"84\" font-size=\"11\" fill=\"#b45309\" text-anchor=\"middle\">合理</text>\n<text x=\"530\" y=\"84\" font-size=\"11\" fill=\"#b91c1c\" text-anchor=\"middle\">高估</text>\n<line x1=\"540\" y1=\"70\" x2=\"540\" y2=\"120\" stroke=\"#111827\" stroke-width=\"2\"/>\n<text x=\"540\" y=\"135\" font-size=\"11\" fill=\"#111827\" text-anchor=\"middle\">当前</text>\n<text x=\"40\" y=\"190\" font-size=\"12\" fill=\"#6b7280\">看历史估值分位：当前 PE/PB 处于自身 10%~90% 的哪一档。</text>\n</svg>\n<div class=\"cap\">图：PEG 与 DCF 简易理解</div>\n</div>\n\n> 📌 PEG<1性价比高；DCF告诉你估值本质是看未来现金流，但别迷信精确数字。\n\n> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。\n";
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
