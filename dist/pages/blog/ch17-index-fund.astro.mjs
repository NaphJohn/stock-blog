import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../chunks/BlogPost_DNhH03SJ.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<blockquote>\n<p>🖼️ <strong>配图待补充</strong>：本节封面，待补充后替换。</p>\n</blockquote>\n<p>我们这里所讲的指数基金指的宽基，比如：沪深 300、创业板。</p>\n<p>在我们投资指数型基金时，必须明确<strong>指数型基金并非是没有风险的基金</strong>。</p>\n<p>现在很多机构在讲解指数型基金投资的时候，往往用巴菲特的言论来引导大家，企图以一种「低风险、不操心、稳赚钱」的特性定义指数型基金。</p>\n<p>当然，也许在美股资本市场（比如纳斯达克 100、标普 500），长周期来看，的确有这三个特性。</p>\n<p>但是很遗憾，我们自己市场不是，我们市场上不同的指数基金，差异巨大。</p>\n<p>为了尽量降低风险，尊重历史规律，给出了<strong>两个优选指数的标准</strong>：</p>\n<blockquote>\n<p>🖼️ <strong>配图待补充</strong>：优选指数两条标准示意，待补充后替换。</p>\n</blockquote>\n<h2 id=\"第一成立周期要超过-5-年\">第一，成立周期要超过 5 年</h2>\n<p>那些短期内成立的热门指数，我们暂时不会关注。</p>\n<p>原因是，大家自己去看每个指数成立的时候的市场热度，现在各个基金公司，指数编制部门，真的没有办法吐槽，真的是什么热门就开始编制指数！编制完了，涨一下就跌的没谱！</p>\n<p>现在新指数上市说夸张点就和新股上市差不多！</p>\n<h2 id=\"第二持续创新高的次数\">第二，持续创新高的次数</h2>\n<p>我们优选的指数仍然需要它具备长期的上涨性，长周期来看，它是上涨的，才真正具备长期投资的价值。</p>\n<blockquote>\n<p>⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p>\n</blockquote>";

				const frontmatter = {"title":"如何选择优质的指数基金","description":"优选宽基指数两条标准：成立超 5 年、长期持续创新高。","layout":"../../layouts/BlogPost.astro","series":"基金策略","free":false,"lang":"zh","altLang":"English","altHref":"/en/","pubDate":"2026-08-07T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/blog/ch17-index-fund.md";
				const url = "/stock-blog/blog/ch17-index-fund";
				function rawContent() {
					return "   \n                    \n                                          \n                                    \n            \n           \n        \n                \n             \n                   \n   \n\n> 🖼️ **配图待补充**：本节封面，待补充后替换。\n\n我们这里所讲的指数基金指的宽基，比如：沪深 300、创业板。\n\n在我们投资指数型基金时，必须明确**指数型基金并非是没有风险的基金**。\n\n现在很多机构在讲解指数型基金投资的时候，往往用巴菲特的言论来引导大家，企图以一种「低风险、不操心、稳赚钱」的特性定义指数型基金。\n\n当然，也许在美股资本市场（比如纳斯达克 100、标普 500），长周期来看，的确有这三个特性。\n\n但是很遗憾，我们自己市场不是，我们市场上不同的指数基金，差异巨大。\n\n为了尽量降低风险，尊重历史规律，给出了**两个优选指数的标准**：\n\n> 🖼️ **配图待补充**：优选指数两条标准示意，待补充后替换。\n\n## 第一，成立周期要超过 5 年\n\n那些短期内成立的热门指数，我们暂时不会关注。\n\n原因是，大家自己去看每个指数成立的时候的市场热度，现在各个基金公司，指数编制部门，真的没有办法吐槽，真的是什么热门就开始编制指数！编制完了，涨一下就跌的没谱！\n\n现在新指数上市说夸张点就和新股上市差不多！\n\n## 第二，持续创新高的次数\n\n我们优选的指数仍然需要它具备长期的上涨性，长周期来看，它是上涨的，才真正具备长期投资的价值。\n\n> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"第一成立周期要超过-5-年","text":"第一，成立周期要超过 5 年"},{"depth":2,"slug":"第二持续创新高的次数","text":"第二，持续创新高的次数"}];
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
