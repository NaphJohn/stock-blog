import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../chunks/BlogPost_Dmw8qGdY.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<blockquote>\n<p>本节为《股票知识小课堂》第 30/31 课〔仓位〕。</p>\n</blockquote>\n<ul>\n<li>分笔建仓：看好的标的不要一把梭，分3~5笔在不同价位/时间买入，摊低成本、留余地。</li>\n<li>单只上限：个股持仓建议不超总仓位10%~15%，避免一个雷拖垮组合。</li>\n<li>金字塔加仓：价格越跌、单笔金额越大（低位多买）；倒金字塔（越涨越买）最危险。</li>\n<li>留现金：永远保留10%~30%现金，应对黑天鹅和机会。</li>\n</ul>\n<div class=\"fig\">\n<svg viewBox=\"0 0 680 250\" role=\"img\" aria-label=\"仓位管理与分笔建仓\">\n<text x=\"40\" y=\"26\" font-size=\"14\" fill=\"#111827\" font-weight=\"bold\">仓位管理与分笔建仓</text>\n<polygon points=\"340,70 250,170 430,170\" fill=\"#eef2ff\" stroke=\"#9ca3af\"></polygon>\n<text x=\"340\" y=\"160\" font-size=\"12\" fill=\"#374151\" text-anchor=\"middle\">分笔建仓</text>\n<text x=\"200\" y=\"200\" font-size=\"11\" fill=\"#6b7280\">越跌越买(金字塔)</text>\n<text x=\"420\" y=\"200\" font-size=\"11\" fill=\"#6b7280\">留 10~30% 现金</text>\n<text x=\"40\" y=\"232\" font-size=\"12\" fill=\"#6b7280\">单只≤10~15%；首笔别打满，分批摊低成本、留余地。</text>\n</svg>\n<div class=\"cap\">图：仓位管理与分笔建仓</div>\n</div>\n<blockquote>\n<p>📌 第一笔永远别打满；仓位管理让你活下来比赚最多更重要。</p>\n</blockquote>\n<blockquote>\n<p>⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p>\n</blockquote>";

				const frontmatter = {"title":"仓位管理与分笔建仓","description":"仓位 · 分笔建仓：看好的标的不要一把梭，分3~5笔在不同价位/时间买入，摊低成本、留余地","layout":"../../layouts/BlogPost.astro","series":"股票知识小课堂","free":true,"lang":"zh","altLang":"English","altHref":"/en/blog/kb30","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/blog/kb30.md";
				const url = "/stock-blog/blog/kb30";
				function rawContent() {
					return "   \n                  \n                                                            \n                                    \n               \n          \n        \n                \n                      \n                   \n   \n>本节为《股票知识小课堂》第 30/31 课〔仓位〕。\n\n- 分笔建仓：看好的标的不要一把梭，分3~5笔在不同价位/时间买入，摊低成本、留余地。\n- 单只上限：个股持仓建议不超总仓位10%~15%，避免一个雷拖垮组合。\n- 金字塔加仓：价格越跌、单笔金额越大（低位多买）；倒金字塔（越涨越买）最危险。\n- 留现金：永远保留10%~30%现金，应对黑天鹅和机会。\n\n<div class=\"fig\">\n<svg viewBox=\"0 0 680 250\" role=\"img\" aria-label=\"仓位管理与分笔建仓\">\n<text x=\"40\" y=\"26\" font-size=\"14\" fill=\"#111827\" font-weight=\"bold\">仓位管理与分笔建仓</text>\n<polygon points=\"340,70 250,170 430,170\" fill=\"#eef2ff\" stroke=\"#9ca3af\"/>\n<text x=\"340\" y=\"160\" font-size=\"12\" fill=\"#374151\" text-anchor=\"middle\">分笔建仓</text>\n<text x=\"200\" y=\"200\" font-size=\"11\" fill=\"#6b7280\">越跌越买(金字塔)</text>\n<text x=\"420\" y=\"200\" font-size=\"11\" fill=\"#6b7280\">留 10~30% 现金</text>\n<text x=\"40\" y=\"232\" font-size=\"12\" fill=\"#6b7280\">单只≤10~15%；首笔别打满，分批摊低成本、留余地。</text>\n</svg>\n<div class=\"cap\">图：仓位管理与分笔建仓</div>\n</div>\n\n> 📌 第一笔永远别打满；仓位管理让你活下来比赚最多更重要。\n\n> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。\n";
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
