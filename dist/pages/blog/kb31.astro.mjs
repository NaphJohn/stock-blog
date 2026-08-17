import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../chunks/BlogPost_DVC32pQ4.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<blockquote>\n<p>本节为《股票知识小课堂》第 31/31 课〔风控〕。</p>\n</blockquote>\n<ul>\n<li>止损：买入前定好跌到哪认错，机械执行，避免亏损扩大（如-8%~-10%硬止损）。</li>\n<li>止盈：达到目标收益分批落袋（如+30%卖1/3），别因贪婪坐过山车。</li>\n<li>误区1 追涨杀跌：涨了怕错过、跌了怕更跌，情绪化操作是大敌。</li>\n<li>误区2 确认偏误：只信看涨证据、忽略风险信号；误区3 满仓梭哈、无现金缓冲。</li>\n</ul>\n<div class=\"fig\">\n<svg viewBox=\"0 0 680 250\" role=\"img\" aria-label=\"止损止盈与常见投资误区\">\n<text x=\"40\" y=\"26\" font-size=\"14\" fill=\"#111827\" font-weight=\"bold\">止损止盈与常见投资误区</text>\n<path d=\"M340,70 L400,90 L400,130 C400,160 370,175 340,185 C310,175 280,160 280,130 L280,90 Z\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"></path>\n<text x=\"340\" y=\"135\" font-size=\"14\" fill=\"#b91c1c\" text-anchor=\"middle\" font-weight=\"bold\">止损</text>\n<line x1=\"300\" y1=\"95\" x2=\"380\" y2=\"155\" stroke=\"#dc2626\" stroke-width=\"3\"></line>\n<text x=\"430\" y=\"120\" font-size=\"12\" fill=\"#6b7280\">错了机械执行：</text>\n<text x=\"430\" y=\"142\" font-size=\"12\" fill=\"#6b7280\">-8%~-10% 硬止损；</text>\n<text x=\"430\" y=\"164\" font-size=\"12\" fill=\"#6b7280\">+30% 分批止盈。</text>\n<text x=\"40\" y=\"232\" font-size=\"12\" fill=\"#6b7280\">纪律>预测：先想错了怎么办，再想对了赚多少。</text>\n</svg>\n<div class=\"cap\">图：止损止盈与常见投资误区</div>\n</div>\n<blockquote>\n<p>📌 纪律>预测：先想错了怎么办，再想对了赚多少。</p>\n</blockquote>\n<blockquote>\n<p>⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p>\n</blockquote>";

				const frontmatter = {"title":"止损止盈与常见投资误区","description":"风控 · 止损：买入前定好跌到哪认错，机械执行，避免亏损扩大（如-8%~-10%硬止损）。","layout":"../../layouts/BlogPost.astro","series":"股票知识小课堂","free":true,"lang":"zh","altLang":"English","altHref":"/en/blog/kb31","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/_stock_blog_src/src/pages/blog/kb31.md";
				const url = "/stock-blog/blog/kb31";
				function rawContent() {
					return "   \n                    \n                                                            \n                                    \n               \n          \n        \n                \n                      \n                   \n   \n>本节为《股票知识小课堂》第 31/31 课〔风控〕。\n\n- 止损：买入前定好跌到哪认错，机械执行，避免亏损扩大（如-8%~-10%硬止损）。\n- 止盈：达到目标收益分批落袋（如+30%卖1/3），别因贪婪坐过山车。\n- 误区1 追涨杀跌：涨了怕错过、跌了怕更跌，情绪化操作是大敌。\n- 误区2 确认偏误：只信看涨证据、忽略风险信号；误区3 满仓梭哈、无现金缓冲。\n\n<div class=\"fig\">\n<svg viewBox=\"0 0 680 250\" role=\"img\" aria-label=\"止损止盈与常见投资误区\">\n<text x=\"40\" y=\"26\" font-size=\"14\" fill=\"#111827\" font-weight=\"bold\">止损止盈与常见投资误区</text>\n<path d=\"M340,70 L400,90 L400,130 C400,160 370,175 340,185 C310,175 280,160 280,130 L280,90 Z\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<text x=\"340\" y=\"135\" font-size=\"14\" fill=\"#b91c1c\" text-anchor=\"middle\" font-weight=\"bold\">止损</text>\n<line x1=\"300\" y1=\"95\" x2=\"380\" y2=\"155\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n<text x=\"430\" y=\"120\" font-size=\"12\" fill=\"#6b7280\">错了机械执行：</text>\n<text x=\"430\" y=\"142\" font-size=\"12\" fill=\"#6b7280\">-8%~-10% 硬止损；</text>\n<text x=\"430\" y=\"164\" font-size=\"12\" fill=\"#6b7280\">+30% 分批止盈。</text>\n<text x=\"40\" y=\"232\" font-size=\"12\" fill=\"#6b7280\">纪律>预测：先想错了怎么办，再想对了赚多少。</text>\n</svg>\n<div class=\"cap\">图：止损止盈与常见投资误区</div>\n</div>\n\n> 📌 纪律>预测：先想错了怎么办，再想对了赚多少。\n\n> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。\n";
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
