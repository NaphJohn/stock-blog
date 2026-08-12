import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../chunks/BlogPost_DNhH03SJ.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<blockquote>\n<p>🖼️ <strong>配图待补充</strong>：本节封面，待补充后替换。</p>\n</blockquote>\n<p>前面提到了判断优质基金的标准，今天接着分析如何选择优质的主动基金？</p>\n<p>结合多年投研经验，整理出了一套优质主动基金的标准。</p>\n<h2 id=\"1核心标准\">1）核心标准</h2>\n<p>在每一轮的周期表现中都能持续创新高，并且在历史 14 个牛熊周期都能跑赢沪深300。</p>\n<blockquote>\n<p>🖼️ <strong>配图待补充</strong>：核心标准示意（净值曲线 vs 沪深300），待补充后替换。</p>\n</blockquote>\n<h2 id=\"2辅助条件\">2）辅助条件</h2>\n<p>主要是为了保证历史数据规律能够延续，管控风险和增加确定性。</p>\n<p><strong>① 成立周期 > 5 年</strong></p>\n<p>这样的基金才能经得起长周期的时间验证，确保数据的规律是可以延续的。</p>\n<p><strong>② 行业景气度 > 3 分</strong></p>\n<p>我们根据基金的行业权重占比，结合行业分析师一致预期，以及对未来 1–3 的数据进行测算而来，主要目的也是为了提高基金的确定性。</p>\n<p>如何判断行业的景气度？（详见第 3 节）</p>\n<p><strong>③ 超额收益评分、波动率评分均 > 3 分</strong></p>\n<p>我们将基金的历史表现情况进行不同周期的打分和排序，取表现最好的前 40% 的基金的结果，即大于 3 分。</p>\n<p>只有符合以上条件的主动基金，才有可能触发的策略信号。</p>\n<p>另外，我们还对部分条件做了进一步收窄，优中选优，也就是 APP 内带有【精选】标签的基金。</p>\n<blockquote>\n<p>⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p>\n</blockquote>";

				const frontmatter = {"title":"如何选择优质的主动基金","description":"核心标准（每轮牛熊创新高、跑赢沪深300）+ 辅助条件（年限、景气度、评分），优中选优。","layout":"../../layouts/BlogPost.astro","series":"基金策略","free":false,"lang":"zh","altLang":"English","altHref":"/en/","pubDate":"2026-08-07T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/blog/ch7-bond.md";
				const url = "/stock-blog/blog/ch7-bond";
				function rawContent() {
					return "   \n                    \n                                                           \n                                    \n            \n           \n        \n                \n             \n                   \n   \n\n> 🖼️ **配图待补充**：本节封面，待补充后替换。\n\n前面提到了判断优质基金的标准，今天接着分析如何选择优质的主动基金？\n\n结合多年投研经验，整理出了一套优质主动基金的标准。\n\n## 1）核心标准\n\n在每一轮的周期表现中都能持续创新高，并且在历史 14 个牛熊周期都能跑赢沪深300。\n\n> 🖼️ **配图待补充**：核心标准示意（净值曲线 vs 沪深300），待补充后替换。\n\n## 2）辅助条件\n\n主要是为了保证历史数据规律能够延续，管控风险和增加确定性。\n\n**① 成立周期 > 5 年**\n\n这样的基金才能经得起长周期的时间验证，确保数据的规律是可以延续的。\n\n**② 行业景气度 > 3 分**\n\n我们根据基金的行业权重占比，结合行业分析师一致预期，以及对未来 1–3 的数据进行测算而来，主要目的也是为了提高基金的确定性。\n\n如何判断行业的景气度？（详见第 3 节）\n\n**③ 超额收益评分、波动率评分均 > 3 分**\n\n我们将基金的历史表现情况进行不同周期的打分和排序，取表现最好的前 40% 的基金的结果，即大于 3 分。\n\n只有符合以上条件的主动基金，才有可能触发的策略信号。\n\n另外，我们还对部分条件做了进一步收窄，优中选优，也就是 APP 内带有【精选】标签的基金。\n\n> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"1核心标准","text":"1）核心标准"},{"depth":2,"slug":"2辅助条件","text":"2）辅助条件"}];
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
