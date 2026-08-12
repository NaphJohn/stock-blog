import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../chunks/BlogPost_DNhH03SJ.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<blockquote>\n<p>🖼️ <strong>配图待补充</strong>：本节封面，待补充后替换。</p>\n</blockquote>\n<p>判断优质基金的标准是什么？</p>\n<p>不同于市场上面诸多的判断条件和复杂的判断要素，在投研体系里，优质基金说到底只有一个标准：</p>\n<p><strong>净值在每一个牛熊周期都能够创新高并且都有超额收益。</strong></p>\n<p>简单来说就是每经历一轮牛市都能够赚钱，而且赚得还比别人多。</p>\n<p>即使你很不幸在最高点买入这个基金，至少在历史的规律里面你迟早都是能够回本的。</p>\n<blockquote>\n<p>🖼️ <strong>配图待补充（2 张）</strong>：净值穿越牛熊、持续创新高且跑赢的示意，待补充后替换。</p>\n</blockquote>\n<p>以上是通用标准，在面临不同类型基金还会适用于不同的条件因子，比如：</p>\n<p>基金规模、成立年限、波动率，景气度，还有最大回撤，阶段收益等，具体的指标会在每种类型基金讲解时详细说明。</p>\n<p>市场总共有超过 18000 只基金，但符合投资标准的只有 <strong>1233 只</strong>。</p>\n<blockquote>\n<p>⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p>\n</blockquote>";

				const frontmatter = {"title":"判断优质基金的标准是什么","description":"唯一标准：每一个牛熊周期都能创新高且跑赢；再叠加规模、年限、波动、景气度等因子。","layout":"../../layouts/BlogPost.astro","series":"基金策略","free":false,"lang":"zh","altLang":"English","altHref":"/en/","pubDate":"2026-08-07T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/blog/ch6-active.md";
				const url = "/stock-blog/blog/ch6-active";
				function rawContent() {
					return "   \n                     \n                                                       \n                                    \n            \n           \n        \n                \n             \n                   \n   \n\n> 🖼️ **配图待补充**：本节封面，待补充后替换。\n\n判断优质基金的标准是什么？\n\n不同于市场上面诸多的判断条件和复杂的判断要素，在投研体系里，优质基金说到底只有一个标准：\n\n**净值在每一个牛熊周期都能够创新高并且都有超额收益。**\n\n简单来说就是每经历一轮牛市都能够赚钱，而且赚得还比别人多。\n\n即使你很不幸在最高点买入这个基金，至少在历史的规律里面你迟早都是能够回本的。\n\n> 🖼️ **配图待补充（2 张）**：净值穿越牛熊、持续创新高且跑赢的示意，待补充后替换。\n\n以上是通用标准，在面临不同类型基金还会适用于不同的条件因子，比如：\n\n基金规模、成立年限、波动率，景气度，还有最大回撤，阶段收益等，具体的指标会在每种类型基金讲解时详细说明。\n\n市场总共有超过 18000 只基金，但符合投资标准的只有 **1233 只**。\n\n> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。\n";
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
