import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../chunks/BlogPost_Dc_DXSsH.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<blockquote>\n<p>本节为《基金策略》基础知识补充第 3 篇。对应邮件里的「🔲 ETF 网格交易（卫星策略）」板块。</p>\n</blockquote>\n<p>网格交易，是<strong>不预测方向、只赚波动</strong>的策略——特别适合区间震荡的 ETF。</p>\n<h2 id=\"一网格是什么\">一、网格是什么？</h2>\n<p>在价格上划一条”网格带”，等距设若干档价位线：</p>\n<ul>\n<li>价格<strong>跌到某条线 → 买一格</strong>；</li>\n<li>价格<strong>涨回上一格 → 卖一格</strong>。</li>\n</ul>\n<p>靠反复的小差价，把碎片收益攒起来——<strong>积少成多，不赌单边</strong>。</p>\n<h2 id=\"二为什么用-etf-做网格\">二、为什么用 ETF 做网格？</h2>\n<p>选 <strong>宽基 ETF（如沪深 300ETF）或商品 ETF（如黄金 ETF）</strong>：</p>\n<ul>\n<li>它们长期向上但中途剧烈震荡，网格正好反复”高抛低吸”；</li>\n<li>ETF 不会退市、费率低、流动性好，比个股安全得多。</li>\n</ul>\n<h2 id=\"三怎么设一张网格\">三、怎么设一张网格？</h2>\n<p>以沪深 300ETF（现价约 4.76）为例：</p>\n<ol>\n<li><strong>定区间</strong>：±10%，即 4.28 – 5.24；</li>\n<li><strong>定档数</strong>：8 档，每档间隔约 0.12 元；</li>\n<li><strong>定每格金额</strong>：总预算 ¥30,000 ÷ 8 ≈ ¥3,750/格，取整为 <strong>700 股 ≈ ¥3,331</strong>；</li>\n<li><strong>挂单</strong>：下一档买入价 4.64（再跌 2.5%），下一档卖出价 4.88（再涨 2.5%）。</li>\n</ol>\n<h2 id=\"四两条铁律必看\">四、两条铁律（必看）</h2>\n<ul>\n<li><strong>跌破下沿</strong> → 停止买入，转为持有（别无限补仓）；</li>\n<li><strong>突破上沿</strong> → 仓位已清空，等回落再重建网格。</li>\n</ul>\n<h2 id=\"五和定投互补\">五、和定投互补</h2>\n<ul>\n<li><strong>定投</strong>：无脑打底、只买不卖，赚长期；</li>\n<li><strong>网格</strong>：在底仓上做波段，高抛低吸赚波动。</li>\n</ul>\n<p>同一只 ETF，定投管”长期”，网格管”波动”，不冲突。</p>\n<h2 id=\"六最大风险\">六、最大风险</h2>\n<p><strong>强单边趋势会失效</strong>：一直涨，网格早早卖光踏空；一直跌，网格一路买成重仓。所以单只网格预算控制在总仓 <strong>~6% 以内</strong>，把它当”卫星仓”，而不是主力。</p>\n<h2 id=\"七用你已持有的-etf-做网格\">七、用你已持有的 ETF 做网格</h2>\n<p>不用新开陌生仓位，直接用账户里已有的 ETF 做网格更顺手：</p>\n<ul>\n<li><strong>你已持有</strong>：中韩半导体 ETF(513310)、科创芯片 ETF(588200) 这类行业 ETF 波动大，网格”高抛低吸”机会更多；</li>\n<li><strong>你计划建仓</strong>：银行 ETF(560670) 这类高股息压舱石，建仓后也能切一小格资金跑网格增强收益。</li>\n</ul>\n<p>纪律完全一样：±10% 区间、8 档、每格固定金额，跌破下沿停买、突破上沿清仓。邮件「🔲 ETF 网格交易」板块会把<strong>网格卫星仓</strong>和<strong>你已持有的 ETF</strong> 一并列出，并给出每只的具体网格线与下一档价位。</p>\n<h2 id=\"八明日挂单模板实操\">八、明日挂单模板（实操）</h2>\n<p>每天收盘后，按”下一档买入价”挂一张<strong>限价单</strong>，等价格回落自动成交，不用盯盘：</p>\n<blockquote>\n<p>📌 限价买入 700 股 沪深300ETF(510300) @ 4.64（再跌 2.5% 触发）\n📌 限价买入 400 股 中韩半导体ETF(513310) @ X.XX（再跌 X% 触发）</p>\n</blockquote>\n<p>触发就买、涨回上一格就卖。每天只需花 2 分钟看一眼”下一档”价格要不要平移。邮件里”📅 明日网格挂单清单”已经帮你按<strong>最易触发</strong>的顺序排好，并标出<strong>明日优先挂单</strong>的标的。</p>\n<blockquote>\n<p>⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p>\n</blockquote>";

				const frontmatter = {"title":"ETF 网格交易基础：震荡市里积少成多","description":"网格交易是什么、为什么适合宽基/商品 ETF、怎么设区间和档位、跌破下沿和突破上沿的纪律，以及它和定投如何互补。","layout":"../../layouts/BlogPost.astro","series":"基金策略","free":false,"lang":"zh","altLang":"English","altHref":"/en/","pubDate":"2026-08-10T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/blog/ch12-grid-trading.md";
				const url = "/stock-blog/blog/ch12-grid-trading";
				function rawContent() {
					return "   \n                            \n                                                                       \n                                    \n            \n           \n        \n                \n             \n                   \n   \n\n> 本节为《基金策略》基础知识补充第 3 篇。对应邮件里的「🔲 ETF 网格交易（卫星策略）」板块。\n\n网格交易，是**不预测方向、只赚波动**的策略——特别适合区间震荡的 ETF。\n\n## 一、网格是什么？\n\n在价格上划一条\"网格带\"，等距设若干档价位线：\n\n- 价格**跌到某条线 → 买一格**；\n- 价格**涨回上一格 → 卖一格**。\n\n靠反复的小差价，把碎片收益攒起来——**积少成多，不赌单边**。\n\n## 二、为什么用 ETF 做网格？\n\n选 **宽基 ETF（如沪深 300ETF）或商品 ETF（如黄金 ETF）**：\n\n- 它们长期向上但中途剧烈震荡，网格正好反复\"高抛低吸\"；\n- ETF 不会退市、费率低、流动性好，比个股安全得多。\n\n## 三、怎么设一张网格？\n\n以沪深 300ETF（现价约 4.76）为例：\n\n1. **定区间**：±10%，即 4.28 – 5.24；\n2. **定档数**：8 档，每档间隔约 0.12 元；\n3. **定每格金额**：总预算 ¥30,000 ÷ 8 ≈ ¥3,750/格，取整为 **700 股 ≈ ¥3,331**；\n4. **挂单**：下一档买入价 4.64（再跌 2.5%），下一档卖出价 4.88（再涨 2.5%）。\n\n## 四、两条铁律（必看）\n\n- **跌破下沿** → 停止买入，转为持有（别无限补仓）；\n- **突破上沿** → 仓位已清空，等回落再重建网格。\n\n## 五、和定投互补\n\n- **定投**：无脑打底、只买不卖，赚长期；\n- **网格**：在底仓上做波段，高抛低吸赚波动。\n\n同一只 ETF，定投管\"长期\"，网格管\"波动\"，不冲突。\n\n## 六、最大风险\n\n**强单边趋势会失效**：一直涨，网格早早卖光踏空；一直跌，网格一路买成重仓。所以单只网格预算控制在总仓 **~6% 以内**，把它当\"卫星仓\"，而不是主力。\n\n## 七、用你已持有的 ETF 做网格\n\n不用新开陌生仓位，直接用账户里已有的 ETF 做网格更顺手：\n\n- **你已持有**：中韩半导体 ETF(513310)、科创芯片 ETF(588200) 这类行业 ETF 波动大，网格\"高抛低吸\"机会更多；\n- **你计划建仓**：银行 ETF(560670) 这类高股息压舱石，建仓后也能切一小格资金跑网格增强收益。\n\n纪律完全一样：±10% 区间、8 档、每格固定金额，跌破下沿停买、突破上沿清仓。邮件「🔲 ETF 网格交易」板块会把**网格卫星仓**和**你已持有的 ETF** 一并列出，并给出每只的具体网格线与下一档价位。\n\n## 八、明日挂单模板（实操）\n\n每天收盘后，按\"下一档买入价\"挂一张**限价单**，等价格回落自动成交，不用盯盘：\n\n> 📌 限价买入 700 股 沪深300ETF(510300) @ 4.64（再跌 2.5% 触发）\n> 📌 限价买入 400 股 中韩半导体ETF(513310) @ X.XX（再跌 X% 触发）\n\n触发就买、涨回上一格就卖。每天只需花 2 分钟看一眼\"下一档\"价格要不要平移。邮件里\"📅 明日网格挂单清单\"已经帮你按**最易触发**的顺序排好，并标出**明日优先挂单**的标的。\n\n> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"一网格是什么","text":"一、网格是什么？"},{"depth":2,"slug":"二为什么用-etf-做网格","text":"二、为什么用 ETF 做网格？"},{"depth":2,"slug":"三怎么设一张网格","text":"三、怎么设一张网格？"},{"depth":2,"slug":"四两条铁律必看","text":"四、两条铁律（必看）"},{"depth":2,"slug":"五和定投互补","text":"五、和定投互补"},{"depth":2,"slug":"六最大风险","text":"六、最大风险"},{"depth":2,"slug":"七用你已持有的-etf-做网格","text":"七、用你已持有的 ETF 做网格"},{"depth":2,"slug":"八明日挂单模板实操","text":"八、明日挂单模板（实操）"}];
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
