import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_CYDbQRlG.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../chunks/BlogPost_Dmw8qGdY.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<blockquote>\n<p>本节为《股票知识小课堂》第 29/31 课〔分红〕。</p>\n</blockquote>\n<ul>\n<li>股息率=每股分红/股价，衡量现金回报，高股息股(银行/能源)常是压舱石。</li>\n<li>分红率=分红/净利润，代表公司愿意把多少利润回馈股东。</li>\n<li>回购：公司买回自家股票，直接提升每股价值，美股常见、A股近年增多。</li>\n<li>高股息≠无脑买：股价大跌时股息率会虚高，要确认分红可持续（盈利稳）。</li>\n</ul>\n<div class=\"fig\">\n<svg viewBox=\"0 0 680 250\" role=\"img\" aria-label=\"分红、股息率与回购\">\n<text x=\"40\" y=\"26\" font-size=\"14\" fill=\"#111827\" font-weight=\"bold\">分红、股息率与回购</text>\n<circle cx=\"200\" cy=\"130\" r=\"55\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2\"></circle>\n<text x=\"200\" y=\"126\" font-size=\"13\" fill=\"#92400e\" text-anchor=\"middle\">分红</text>\n<text x=\"200\" y=\"144\" font-size=\"11\" fill=\"#92400e\" text-anchor=\"middle\">现金回报</text>\n<circle cx=\"430\" cy=\"130\" r=\"55\" fill=\"#dbeafe\" stroke=\"#1a6fd6\" stroke-width=\"2\"></circle>\n<text x=\"430\" y=\"135\" font-size=\"12\" fill=\"#1e40af\" text-anchor=\"middle\">回购</text>\n<text x=\"40\" y=\"220\" font-size=\"12\" fill=\"#6b7280\">股息率看现金回报；回购直接提升每股价值。先问：能持续吗？</text>\n</svg>\n<div class=\"cap\">图：分红、股息率与回购</div>\n</div>\n<blockquote>\n<p>📌 股息率看现金回报，但先问这分红能持续吗；回购是另一种回馈。</p>\n</blockquote>\n<blockquote>\n<p>⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p>\n</blockquote>";

				const frontmatter = {"title":"分红、股息率与回购","description":"分红 · 股息率=每股分红/股价，衡量现金回报，高股息股(银行/能源)常是压舱石。","layout":"../../layouts/BlogPost.astro","series":"股票知识小课堂","free":true,"lang":"zh","altLang":"English","altHref":"/en/blog/kb29","pubDate":"2026-08-11T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/blog/kb29.md";
				const url = "/stock-blog/blog/kb29";
				function rawContent() {
					return "   \n                  \n                                                        \n                                    \n               \n          \n        \n                \n                      \n                   \n   \n>本节为《股票知识小课堂》第 29/31 课〔分红〕。\n\n- 股息率=每股分红/股价，衡量现金回报，高股息股(银行/能源)常是压舱石。\n- 分红率=分红/净利润，代表公司愿意把多少利润回馈股东。\n- 回购：公司买回自家股票，直接提升每股价值，美股常见、A股近年增多。\n- 高股息≠无脑买：股价大跌时股息率会虚高，要确认分红可持续（盈利稳）。\n\n<div class=\"fig\">\n<svg viewBox=\"0 0 680 250\" role=\"img\" aria-label=\"分红、股息率与回购\">\n<text x=\"40\" y=\"26\" font-size=\"14\" fill=\"#111827\" font-weight=\"bold\">分红、股息率与回购</text>\n<circle cx=\"200\" cy=\"130\" r=\"55\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2\"/>\n<text x=\"200\" y=\"126\" font-size=\"13\" fill=\"#92400e\" text-anchor=\"middle\">分红</text>\n<text x=\"200\" y=\"144\" font-size=\"11\" fill=\"#92400e\" text-anchor=\"middle\">现金回报</text>\n<circle cx=\"430\" cy=\"130\" r=\"55\" fill=\"#dbeafe\" stroke=\"#1a6fd6\" stroke-width=\"2\"/>\n<text x=\"430\" y=\"135\" font-size=\"12\" fill=\"#1e40af\" text-anchor=\"middle\">回购</text>\n<text x=\"40\" y=\"220\" font-size=\"12\" fill=\"#6b7280\">股息率看现金回报；回购直接提升每股价值。先问：能持续吗？</text>\n</svg>\n<div class=\"cap\">图：分红、股息率与回购</div>\n</div>\n\n> 📌 股息率看现金回报，但先问这分红能持续吗；回购是另一种回馈。\n\n> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。\n";
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
