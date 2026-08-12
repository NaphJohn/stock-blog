import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../chunks/BlogPost_DNhH03SJ.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<blockquote>\n<p>🖼️ <strong>配图待补充</strong>：本节封面，待补充后替换。</p>\n</blockquote>\n<p>指数基金在震荡市该如何投资呢？</p>\n<p>在震荡市里面，指数估值低点已经被填平，重新进入了震荡上行阶段时，我们的投资就不能够按照估值的投资逻辑来进行投资了。</p>\n<p>因为震荡市的投资逻辑不是投资长线的逻辑，而是<strong>震荡市的波动收益为主</strong>，所以我们的策略是<strong>买震荡上涨阶段的回调区间，赚的是波动收益</strong>。</p>\n<blockquote>\n<p>🖼️ <strong>配图待补充</strong>：震荡市「买回调赚波动」逻辑示意，待补充后替换。</p>\n</blockquote>\n<h2 id=\"买入策略\">买入策略</h2>\n<p><strong>前提条件</strong>：指数走势在 120 日均线以上，20 / 30 / 60 中期均线呈现带量的多头排列且处于收敛的状态，且前期涨幅不超过 15%。</p>\n<p>苛刻的条件为了保证现在指数在<strong>由震荡市走向中期强势阶段</strong>，且这种强势未来可延续。</p>\n<ul>\n<li>（1）当 K 线回调到 <strong>20 日线以下、60 日线以上</strong>，买入 1 倍；</li>\n<li>（2）当 K 线回调到 <strong>30 日线以下、60 日线以上</strong>，买入 1.5 倍；</li>\n<li>（3）当 K 线回调到 <strong>60 日线以上、120 日线以上</strong>时，买入 2 倍。</li>\n</ul>\n<h2 id=\"卖出策略\">卖出策略</h2>\n<ul>\n<li>（1）指数 K 线向上乖离度超过 20 日均线 <strong>5%</strong>，减仓 1/3；</li>\n<li>（2）指数 K 线向上乖离度超过 20 日均线 <strong>8%</strong>，减仓 1/2；</li>\n<li>（3）指数 K 线向上乖离度超过 20 日均线 <strong>10%</strong>，清仓。</li>\n</ul>\n<blockquote>\n<p>⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p>\n</blockquote>";

				const frontmatter = {"title":"指数基金在震荡市周期的投资策略","description":"指数基金震荡市买回调赚波动收益：均线多头收敛前提下的分级倍投与乖离度卖出。","layout":"../../layouts/BlogPost.astro","series":"基金策略","free":false,"lang":"zh","altLang":"English","altHref":"/en/","pubDate":"2026-08-07T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/blog/ch18-index-shake.md";
				const url = "/stock-blog/blog/ch18-index-shake";
				function rawContent() {
					return "   \n                        \n                                                    \n                                    \n            \n           \n        \n                \n             \n                   \n   \n\n> 🖼️ **配图待补充**：本节封面，待补充后替换。\n\n指数基金在震荡市该如何投资呢？\n\n在震荡市里面，指数估值低点已经被填平，重新进入了震荡上行阶段时，我们的投资就不能够按照估值的投资逻辑来进行投资了。\n\n因为震荡市的投资逻辑不是投资长线的逻辑，而是**震荡市的波动收益为主**，所以我们的策略是**买震荡上涨阶段的回调区间，赚的是波动收益**。\n\n> 🖼️ **配图待补充**：震荡市「买回调赚波动」逻辑示意，待补充后替换。\n\n## 买入策略\n\n**前提条件**：指数走势在 120 日均线以上，20 / 30 / 60 中期均线呈现带量的多头排列且处于收敛的状态，且前期涨幅不超过 15%。\n\n苛刻的条件为了保证现在指数在**由震荡市走向中期强势阶段**，且这种强势未来可延续。\n\n- （1）当 K 线回调到 **20 日线以下、60 日线以上**，买入 1 倍；\n- （2）当 K 线回调到 **30 日线以下、60 日线以上**，买入 1.5 倍；\n- （3）当 K 线回调到 **60 日线以上、120 日线以上**时，买入 2 倍。\n\n## 卖出策略\n\n- （1）指数 K 线向上乖离度超过 20 日均线 **5%**，减仓 1/3；\n- （2）指数 K 线向上乖离度超过 20 日均线 **8%**，减仓 1/2；\n- （3）指数 K 线向上乖离度超过 20 日均线 **10%**，清仓。\n\n> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。\n";
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
