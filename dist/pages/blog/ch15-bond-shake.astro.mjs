import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../chunks/BlogPost_Dc_DXSsH.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<blockquote>\n<p>🖼️ <strong>配图待补充</strong>：本节封面，待补充后替换。</p>\n</blockquote>\n<p>今天我们继续讲解债券基金在震荡市如何投资？</p>\n<h2 id=\"买入策略\">买入策略</h2>\n<p>震荡市的时候，不同于牛市，回调很容易出现，所以我们要做的事情就是：<strong>在回撤的时候买入为主</strong>。</p>\n<blockquote>\n<p>🖼️ <strong>配图待补充</strong>：债券基金震荡市回撤买入示意，待补充后替换。</p>\n</blockquote>\n<p>① 先统计历史震荡月度回撤幅度，计算出震荡市历史月度回撤均值；</p>\n<p>② 当<strong>当前月度表现比月度回撤均值还差</strong>的时候，一次性买入。</p>\n<blockquote>\n<p>📌 举例：某只债券型基金在过去震荡市时月度平均回撤在 <strong>-0.5%</strong>，本月回撤在 <strong>-1.2%</strong>，已经比历史平均回撤均值大了，这个时候选择一次性买入。</p>\n</blockquote>\n<h2 id=\"卖出策略\">卖出策略</h2>\n<p>因为债券型基金的收益一直比较稳定，长期看风险可控，回撤较小。</p>\n<p>所以我们可以把<strong>收益容忍条件放宽</strong>，并且在震荡市会<strong>至少保留 1/2 的仓位</strong>持有。</p>\n<p>① 当<strong>本年年度收益 ＞ 历史平均年度收益的 50%</strong>，且<strong>本月的月度收益 ＞ 历次震荡市月度平均收益</strong>时，卖出 1/2；</p>\n<p>② 剩余 1/2 仓位继续寻找新的买点。</p>\n<blockquote>\n<p>⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p>\n</blockquote>";

				const frontmatter = {"title":"债券基金在震荡市周期的投资策略","description":"债券基金在震荡市回撤买入为主，放宽收益容忍、至少保留 1/2 仓位。","layout":"../../layouts/BlogPost.astro","series":"基金策略","free":false,"lang":"zh","altLang":"English","altHref":"/en/","pubDate":"2026-08-07T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/blog/ch15-bond-shake.md";
				const url = "/stock-blog/blog/ch15-bond-shake";
				function rawContent() {
					return "   \n                        \n                                                 \n                                    \n            \n           \n        \n                \n             \n                   \n   \n\n> 🖼️ **配图待补充**：本节封面，待补充后替换。\n\n今天我们继续讲解债券基金在震荡市如何投资？\n\n## 买入策略\n\n震荡市的时候，不同于牛市，回调很容易出现，所以我们要做的事情就是：**在回撤的时候买入为主**。\n\n> 🖼️ **配图待补充**：债券基金震荡市回撤买入示意，待补充后替换。\n\n① 先统计历史震荡月度回撤幅度，计算出震荡市历史月度回撤均值；\n\n② 当**当前月度表现比月度回撤均值还差**的时候，一次性买入。\n\n> 📌 举例：某只债券型基金在过去震荡市时月度平均回撤在 **-0.5%**，本月回撤在 **-1.2%**，已经比历史平均回撤均值大了，这个时候选择一次性买入。\n\n## 卖出策略\n\n因为债券型基金的收益一直比较稳定，长期看风险可控，回撤较小。\n\n所以我们可以把**收益容忍条件放宽**，并且在震荡市会**至少保留 1/2 的仓位**持有。\n\n① 当**本年年度收益 ＞ 历史平均年度收益的 50%**，且**本月的月度收益 ＞ 历次震荡市月度平均收益**时，卖出 1/2；\n\n② 剩余 1/2 仓位继续寻找新的买点。\n\n> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。\n";
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
