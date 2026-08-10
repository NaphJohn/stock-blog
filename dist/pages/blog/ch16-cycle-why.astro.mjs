import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../chunks/BlogPost_Dc_DXSsH.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<blockquote>\n<p>🖼️ <strong>配图待补充</strong>：本节封面，待补充后替换。</p>\n</blockquote>\n<p>为什么要强调周期择时？</p>\n<p>市场上面绝大多数的投资机构是不择时的，他们认为好的基金经理和好的投资标的长期来看是上涨的，找到优质的投资标的然后直接买入并长期持有是普遍做法。</p>\n<p>但是，必须强调的是，<strong>投资机构的目标和我们与普通投资人的目标是不一致的</strong>。</p>\n<p>投资机构主要靠管理费用赚钱，而我们和普通投资人朋友主要靠投资标的上涨和分红来赚钱。</p>\n<p>所以<strong>屁股决定脑袋，我们是必须要择时的！</strong></p>\n<p>同时为了优良的持基体验，我们还希望尽可能地在不同周期，我们都尽量可以赚到钱。</p>\n<p>此外，<strong>中国的资本市场和美国的资本市场的底层逻辑是不一致的</strong>。</p>\n<p>我们大多数时候是一个震荡的市场，而不像美国是一个长期震荡上扬的市场，所以在熊市买、在牛市卖，是我们要在目前这个市场赚到超额收益的核心前提之一。</p>\n<p>另外一个投资的前提是：<strong>即便基金经理选择的标的再优质，他们必然也要跟随周期波动而波动</strong>。</p>\n<p>所以本质来说，不是我们不相信长期价值，而是我们更信奉<strong>周期是资本市场的运行的核心规律之一</strong>。</p>\n<blockquote>\n<p>⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。</p>\n</blockquote>";

				const frontmatter = {"title":"为什么会强调周期择时","description":"为什么普通投资者必须周期择时：机构靠管理费、我们靠上涨与分红，且 A 股多为震荡市。","layout":"../../layouts/BlogPost.astro","series":"基金策略","free":false,"lang":"zh","altLang":"English","altHref":"/en/","pubDate":"2026-08-07T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/blog/ch16-cycle-why.md";
				const url = "/stock-blog/blog/ch16-cycle-why";
				function rawContent() {
					return "   \n                   \n                                                         \n                                    \n            \n           \n        \n                \n             \n                   \n   \n\n> 🖼️ **配图待补充**：本节封面，待补充后替换。\n\n为什么要强调周期择时？\n\n市场上面绝大多数的投资机构是不择时的，他们认为好的基金经理和好的投资标的长期来看是上涨的，找到优质的投资标的然后直接买入并长期持有是普遍做法。\n\n但是，必须强调的是，**投资机构的目标和我们与普通投资人的目标是不一致的**。\n\n投资机构主要靠管理费用赚钱，而我们和普通投资人朋友主要靠投资标的上涨和分红来赚钱。\n\n所以**屁股决定脑袋，我们是必须要择时的！**\n\n同时为了优良的持基体验，我们还希望尽可能地在不同周期，我们都尽量可以赚到钱。\n\n此外，**中国的资本市场和美国的资本市场的底层逻辑是不一致的**。\n\n我们大多数时候是一个震荡的市场，而不像美国是一个长期震荡上扬的市场，所以在熊市买、在牛市卖，是我们要在目前这个市场赚到超额收益的核心前提之一。\n\n另外一个投资的前提是：**即便基金经理选择的标的再优质，他们必然也要跟随周期波动而波动**。\n\n所以本质来说，不是我们不相信长期价值，而是我们更信奉**周期是资本市场的运行的核心规律之一**。\n\n> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。\n";
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
