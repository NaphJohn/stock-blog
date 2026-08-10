import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../chunks/BlogPost_Dc_DXSsH.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<blockquote>\n<p>🖼️ <strong>配图待补充</strong>：本节封面，待补充后替换。</p>\n</blockquote>\n<p>指数基金在熊市该如何投资呢？</p>\n<p>最适合指数型基金的投资策略<strong>仍然是估值策略</strong>。</p>\n<p>因为在熊市的时候，市场极度悲观，投资者参与很少，所以估值策略可以让我们比较安心地建仓。</p>\n<p>虽然估值策略的投资周期很长，但是<strong>其确定性却非常高</strong>！</p>\n<blockquote>\n<p>🖼️ <strong>配图待补充</strong>：熊市估值策略建仓示意，待补充后替换。</p>\n</blockquote>\n<h2 id=\"买入策略\">买入策略</h2>\n<ul>\n<li>在 <strong>PE &#x3C; 30%</strong> 的时候，准备开始建仓；</li>\n<li>净值每往下跌 <strong>2%</strong> 进行分批加仓；</li>\n<li>每往下跌 2%，增加 <strong>0.1</strong> 的加仓仓位。</li>\n</ul>\n<h2 id=\"卖出策略\">卖出策略</h2>\n<ul>\n<li>PE 大于 <strong>60%</strong>，减仓 20%；</li>\n<li>PE 大于 <strong>70%</strong>，减仓 20%；</li>\n<li>PE 大于 <strong>80%</strong>，减仓 20%；如果净值短期内从最高点下跌超过 <strong>8%</strong>，清仓；</li>\n<li>PE 大于 <strong>90%</strong>，减仓 20%；如果净值短期内从最高点下跌超过 <strong>10%</strong> 的时候，清仓；</li>\n<li>PE 大于 <strong>100%</strong>，直接清仓。</li>\n</ul>\n<blockquote>\n<p>⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p>\n</blockquote>";

				const frontmatter = {"title":"指数基金在熊市周期的投资策略","description":"指数基金熊市回归估值策略：PE<30% 建仓分批加仓，PE 分级减仓至清仓。","layout":"../../layouts/BlogPost.astro","series":"基金策略","free":false,"lang":"zh","altLang":"English","altHref":"/en/","pubDate":"2026-08-07T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/blog/ch19-index-bear.md";
				const url = "/stock-blog/blog/ch19-index-bear";
				function rawContent() {
					return "   \n                       \n                                                     \n                                    \n            \n           \n        \n                \n             \n                   \n   \n\n> 🖼️ **配图待补充**：本节封面，待补充后替换。\n\n指数基金在熊市该如何投资呢？\n\n最适合指数型基金的投资策略**仍然是估值策略**。\n\n因为在熊市的时候，市场极度悲观，投资者参与很少，所以估值策略可以让我们比较安心地建仓。\n\n虽然估值策略的投资周期很长，但是**其确定性却非常高**！\n\n> 🖼️ **配图待补充**：熊市估值策略建仓示意，待补充后替换。\n\n## 买入策略\n\n- 在 **PE < 30%** 的时候，准备开始建仓；\n- 净值每往下跌 **2%** 进行分批加仓；\n- 每往下跌 2%，增加 **0.1** 的加仓仓位。\n\n## 卖出策略\n\n- PE 大于 **60%**，减仓 20%；\n- PE 大于 **70%**，减仓 20%；\n- PE 大于 **80%**，减仓 20%；如果净值短期内从最高点下跌超过 **8%**，清仓；\n- PE 大于 **90%**，减仓 20%；如果净值短期内从最高点下跌超过 **10%** 的时候，清仓；\n- PE 大于 **100%**，直接清仓。\n\n> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"买入策略","text":"买入策略"},{"depth":2,"slug":"卖出策略","text":"卖出策略"}];
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
