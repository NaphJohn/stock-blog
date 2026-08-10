import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../chunks/BlogPost_Dc_DXSsH.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<blockquote>\n<p>本节为《基金策略》基础知识补充第 6 篇。对应很多新手最关心的问题：股票到底怎么买？为什么有人说”做空”？普通人能不能做空？</p>\n</blockquote>\n<h2 id=\"一做多long先买后卖赚涨的钱\">一、做多（Long）：先买后卖，赚”涨”的钱</h2>\n<p><strong>做多 = 低价买入、高价卖出，中间的差价就是利润。</strong> 这是所有人最熟悉的玩法，A 股里绝大多数散户只做多。</p>\n<p>一句话记忆：<strong>看多就买，涨了再卖。</strong></p>\n<p>比如你觉得某只股票现在 10 元被低估，买入；等涨到 13 元卖出，每股赚 3 元。你的<strong>最大亏损有限</strong>——最坏情况公司退市，最多亏掉本金。</p>\n<blockquote>\n<p>💡 做多和前面章节的定投、网格、高股息完全兼容：定投是”机械地做多”，网格是”在做多的底仓上高抛低吸”。</p>\n</blockquote>\n<h2 id=\"二做空short先卖后买赚跌的钱\">二、做空（Short）：先卖后买，赚”跌”的钱</h2>\n<p><strong>做空 = 借来股票先高价卖出，等跌了再低价买回归还，赚中间差价。</strong></p>\n<p>流程是这样的：</p>\n<ol>\n<li>你判断某股票现在 13 元”太贵了，要跌”；</li>\n<li>从券商<strong>借</strong>来股票，按 13 元卖掉，手里拿到现金；</li>\n<li>股价真跌到 10 元，你花 10 元买回归还借的股票；</li>\n<li>每股赚 3 元（忽略借券利息和交易费用）。</li>\n</ol>\n<p><strong>做空的最大风险：亏损理论上是”无限”的。</strong> 因为股价上涨没有天花板——你 13 元借来卖了，万一它涨到 30、50 元，你得用更高的价格买回，亏多少都可能无底洞。所以做空是专业玩家的游戏，散户慎用。</p>\n<h2 id=\"三普通人怎么买做多的股票手把手四步\">三、普通人怎么”买做多的股票”？手把手四步</h2>\n<p>很多人卡在第一步：股票到底去哪买？答案是<strong>证券账户</strong>（券商 App），不是银行、也不是支付宝的基金代销（那是买基金，不是买个股）。</p>\n<p><strong>第一步：开户</strong></p>\n<ul>\n<li>下载一家券商 App（如东方财富、华泰涨乐财富通、中信、国泰君安等）；</li>\n<li>准备：身份证 + 一张银行储蓄卡；</li>\n<li>流程：注册 → 上传身份证 → 视频见证（确认是你本人）→ 设置交易密码 → 等审核（通常当天或次日生效）。</li>\n</ul>\n<p><strong>第二步：银证转账</strong></p>\n<ul>\n<li>在 App 里把银行卡的钱”转入”证券资金账户（这叫<strong>银证转账</strong>，秒到）；</li>\n<li>只有资金账户里的钱才能用来买股票。</li>\n</ul>\n<p><strong>第三步：选股 + 下单</strong></p>\n<ul>\n<li>搜索股票代码或名称（如 <code>600519</code> 贵州茅台、<code>510300</code> 沪深 300ETF）；</li>\n<li>下单方式有两种：\n<ul>\n<li><strong>限价单</strong>：你指定一个价格，只有到这个价才成交（适合不着急、想买便宜点）；</li>\n<li><strong>市价单</strong>：按当前最优价立刻成交（适合急用，但价格可能不理想）。</li>\n</ul>\n</li>\n</ul>\n<p><strong>第四步：卖出（T+1）</strong></p>\n<ul>\n<li>A 股规则：<strong>今天买的股票，要到下一个交易日才能卖</strong>（T+1）；</li>\n<li>卖出后资金回到资金账户，再<strong>银证转账</strong>回银行卡即可（卖出当日”可用不可取”，次日可取）。</li>\n</ul>\n<blockquote>\n<p>💡 新手建议：与其直接买个股，不如先从<strong>宽基 ETF</strong> 开始（比如沪深 300ETF <code>510300</code>、中证 A500ETF <code>563360</code>），一手（100 股）才几百块，分散风险、不会踩单只股票雷。</p>\n</blockquote>\n<h2 id=\"四a-股里做空有哪些真实工具\">四、A 股里”做空”有哪些真实工具？</h2>\n<p>普通散户能接触到的做空渠道很少，而且<strong>都有高门槛</strong>：</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>工具</th><th>怎么赚下跌</th><th>开户门槛</th><th>适合谁</th></tr></thead><tbody><tr><td><strong>融券</strong></td><td>向券商借股票卖出，跌了买回归还</td><td>两融账户：50 万资产 + 2 年交易经验</td><td>资金量大的进阶玩家</td></tr><tr><td><strong>股指期货</strong>（IF / IH / IC）</td><td>在中金所卖空指数合约，指数跌就赚</td><td>50 万验资 + 知识测试</td><td>机构 / 专业户</td></tr><tr><td><strong>ETF / 股指期权</strong></td><td>买入<strong>认沽期权</strong>（看跌期权），标的跌就赚</td><td>50 万 + 模拟交易经历</td><td>懂期权的玩家</td></tr><tr><td>反向 / 杠杆产品</td><td>部分市场有反向 ETF，A 股极少</td><td>同普通账户</td><td>仅海外 / 港股通散户</td></tr></tbody></table>\n<blockquote>\n<p>⚠️ 注意：A 股<strong>没有真正的”反向 ETF”<strong>让你无门槛做空；普通账户（无两融）只能做多，不能做空。想做空必须开</strong>融资融券账户</strong>，且资金门槛 50 万。</p>\n</blockquote>\n<h2 id=\"五做多-vs-做空一图看懂\">五、做多 vs 做空，一图看懂</h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>维度</th><th>做多（Long）</th><th>做空（Short）</th></tr></thead><tbody><tr><td>操作顺序</td><td>先买后卖</td><td>先卖后买</td></tr><tr><td>赚钱方向</td><td>涨</td><td>跌</td></tr><tr><td>最大亏损</td><td>本金（有限）</td><td>理论上无限</td></tr><tr><td>开户门槛</td><td>普通账户即可</td><td>两融 / 期货 / 期权（50 万）</td></tr><tr><td>散户常用度</td><td>99% 的人在用</td><td>极少数专业户</td></tr></tbody></table>\n<h2 id=\"六给散户的实在建议\">六、给散户的实在建议</h2>\n<ol>\n<li><strong>先把”做多 + 定投”做扎实</strong>：宽基 ETF 周定投、低估时加仓、高估时减仓，这套对普通人最友好；</li>\n<li><strong>做空别碰为妙</strong>：亏损无限、还要付借券利息，新手十做九亏；</li>\n<li><strong>买卖纪律不变</strong>：回看前面的章节——买点 = 52 周高 × 0.85，卖点 = × 0.97，别追阳线。</li>\n</ol>\n<blockquote>\n<p>⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，开户与交易决策需谨慎。</p>\n</blockquote>";

				const frontmatter = {"title":"做多与做空基础：散户怎么开户买股票、怎么押下跌","description":"讲清做多（先买后卖赚上涨）与做空（先卖后买赚下跌）的本质区别；手把手说清楚普通散户怎么开证券账户、银证转账、下单买股票；以及 A 股里做空有哪些真实可用的工具和门槛。","layout":"../../layouts/BlogPost.astro","series":"基金策略","free":false,"lang":"zh","altLang":"English","altHref":"/en/","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/blog/ch21-long-short.md";
				const url = "/stock-blog/blog/ch21-long-short";
				function rawContent() {
					return "   \n                                \n                                                                                                  \n                                    \n            \n           \n        \n                \n             \n                   \n   \n\n> 本节为《基金策略》基础知识补充第 6 篇。对应很多新手最关心的问题：股票到底怎么买？为什么有人说\"做空\"？普通人能不能做空？\n\n## 一、做多（Long）：先买后卖，赚\"涨\"的钱\n\n**做多 = 低价买入、高价卖出，中间的差价就是利润。** 这是所有人最熟悉的玩法，A 股里绝大多数散户只做多。\n\n一句话记忆：**看多就买，涨了再卖。**\n\n比如你觉得某只股票现在 10 元被低估，买入；等涨到 13 元卖出，每股赚 3 元。你的**最大亏损有限**——最坏情况公司退市，最多亏掉本金。\n\n> 💡 做多和前面章节的定投、网格、高股息完全兼容：定投是\"机械地做多\"，网格是\"在做多的底仓上高抛低吸\"。\n\n## 二、做空（Short）：先卖后买，赚\"跌\"的钱\n\n**做空 = 借来股票先高价卖出，等跌了再低价买回归还，赚中间差价。**\n\n流程是这样的：\n\n1. 你判断某股票现在 13 元\"太贵了，要跌\"；\n2. 从券商**借**来股票，按 13 元卖掉，手里拿到现金；\n3. 股价真跌到 10 元，你花 10 元买回归还借的股票；\n4. 每股赚 3 元（忽略借券利息和交易费用）。\n\n**做空的最大风险：亏损理论上是\"无限\"的。** 因为股价上涨没有天花板——你 13 元借来卖了，万一它涨到 30、50 元，你得用更高的价格买回，亏多少都可能无底洞。所以做空是专业玩家的游戏，散户慎用。\n\n## 三、普通人怎么\"买做多的股票\"？手把手四步\n\n很多人卡在第一步：股票到底去哪买？答案是**证券账户**（券商 App），不是银行、也不是支付宝的基金代销（那是买基金，不是买个股）。\n\n**第一步：开户**\n- 下载一家券商 App（如东方财富、华泰涨乐财富通、中信、国泰君安等）；\n- 准备：身份证 + 一张银行储蓄卡；\n- 流程：注册 → 上传身份证 → 视频见证（确认是你本人）→ 设置交易密码 → 等审核（通常当天或次日生效）。\n\n**第二步：银证转账**\n- 在 App 里把银行卡的钱\"转入\"证券资金账户（这叫**银证转账**，秒到）；\n- 只有资金账户里的钱才能用来买股票。\n\n**第三步：选股 + 下单**\n- 搜索股票代码或名称（如 `600519` 贵州茅台、`510300` 沪深 300ETF）；\n- 下单方式有两种：\n  - **限价单**：你指定一个价格，只有到这个价才成交（适合不着急、想买便宜点）；\n  - **市价单**：按当前最优价立刻成交（适合急用，但价格可能不理想）。\n\n**第四步：卖出（T+1）**\n- A 股规则：**今天买的股票，要到下一个交易日才能卖**（T+1）；\n- 卖出后资金回到资金账户，再**银证转账**回银行卡即可（卖出当日\"可用不可取\"，次日可取）。\n\n> 💡 新手建议：与其直接买个股，不如先从**宽基 ETF** 开始（比如沪深 300ETF `510300`、中证 A500ETF `563360`），一手（100 股）才几百块，分散风险、不会踩单只股票雷。\n\n## 四、A 股里\"做空\"有哪些真实工具？\n\n普通散户能接触到的做空渠道很少，而且**都有高门槛**：\n\n| 工具 | 怎么赚下跌 | 开户门槛 | 适合谁 |\n|------|-----------|---------|--------|\n| **融券** | 向券商借股票卖出，跌了买回归还 | 两融账户：50 万资产 + 2 年交易经验 | 资金量大的进阶玩家 |\n| **股指期货**（IF / IH / IC） | 在中金所卖空指数合约，指数跌就赚 | 50 万验资 + 知识测试 | 机构 / 专业户 |\n| **ETF / 股指期权** | 买入**认沽期权**（看跌期权），标的跌就赚 | 50 万 + 模拟交易经历 | 懂期权的玩家 |\n| 反向 / 杠杆产品 | 部分市场有反向 ETF，A 股极少 | 同普通账户 | 仅海外 / 港股通散户 |\n\n> ⚠️ 注意：A 股**没有真正的\"反向 ETF\"**让你无门槛做空；普通账户（无两融）只能做多，不能做空。想做空必须开**融资融券账户**，且资金门槛 50 万。\n\n## 五、做多 vs 做空，一图看懂\n\n| 维度 | 做多（Long） | 做空（Short） |\n|------|-------------|--------------|\n| 操作顺序 | 先买后卖 | 先卖后买 |\n| 赚钱方向 | 涨 | 跌 |\n| 最大亏损 | 本金（有限） | 理论上无限 |\n| 开户门槛 | 普通账户即可 | 两融 / 期货 / 期权（50 万） |\n| 散户常用度 | 99% 的人在用 | 极少数专业户 |\n\n## 六、给散户的实在建议\n\n1. **先把\"做多 + 定投\"做扎实**：宽基 ETF 周定投、低估时加仓、高估时减仓，这套对普通人最友好；\n2. **做空别碰为妙**：亏损无限、还要付借券利息，新手十做九亏；\n3. **买卖纪律不变**：回看前面的章节——买点 = 52 周高 × 0.85，卖点 = × 0.97，别追阳线。\n\n> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，开户与交易决策需谨慎。\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"一做多long先买后卖赚涨的钱","text":"一、做多（Long）：先买后卖，赚”涨”的钱"},{"depth":2,"slug":"二做空short先卖后买赚跌的钱","text":"二、做空（Short）：先卖后买，赚”跌”的钱"},{"depth":2,"slug":"三普通人怎么买做多的股票手把手四步","text":"三、普通人怎么”买做多的股票”？手把手四步"},{"depth":2,"slug":"四a-股里做空有哪些真实工具","text":"四、A 股里”做空”有哪些真实工具？"},{"depth":2,"slug":"五做多-vs-做空一图看懂","text":"五、做多 vs 做空，一图看懂"},{"depth":2,"slug":"六给散户的实在建议","text":"六、给散户的实在建议"}];
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
