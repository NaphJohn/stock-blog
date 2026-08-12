import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_b0DU9Y3K.mjs';
import 'piccolore';
import { $ as $$BlogPost } from '../../../chunks/BlogPost_DNhH03SJ.mjs';
export { renderers } from '../../../renderers.mjs';

const html = () => "<blockquote>\n<p>This is Lesson 1 (free) of the <em>Fund Strategy</em> series. Below is a four-step DCA framework anyone can follow.</p>\n</blockquote>\n<p>The biggest enemy of dollar-cost averaging is not market volatility — it is “trading by feel”. The core of the four-step method is to write down the rules for <em>when to buy, how much, and when to sell</em> in advance, so discipline replaces emotion.</p>\n<h2 id=\"step-1-pick-the-asset-and-the-horizon\">Step 1: Pick the asset and the horizon</h2>\n<ul>\n<li><strong>Pick the asset</strong>: decide what this money goes into — a broad index, a sector index, an active fund, or bonds. Their risk and volatility differ enormously.</li>\n<li><strong>Pick the horizon</strong>: DCA “buys time”, so think in terms of at least 3–5 years. Start only with money you can afford to lose.</li>\n</ul>\n<h2 id=\"step-2-set-the-rules-valuation-anchors\">Step 2: Set the rules (valuation anchors)</h2>\n<p>Don’t predict levels — set anchors:</p>\n<ul>\n<li>Use valuation (e.g. PE percentile, 52-week range) to split the market into undervalued / fair / overvalued.</li>\n<li>Buy more when cheap, buy normally when fair, buy less or pause when expensive.</li>\n<li>Write the rule as one sentence, e.g. “double the DCA below the 20th percentile of the 52-week range, stop above the 80th”.</li>\n</ul>\n<h2 id=\"step-3-set-position-size-and-cadence\">Step 3: Set position size and cadence</h2>\n<ul>\n<li><strong>Position cap</strong>: no single asset should exceed a set share of investable capital (e.g. a single sector ETF under 20%–30%) — avoid going all-in.</li>\n<li><strong>Cadence</strong>: weekly or monthly DCA spreads cost over time instead of one lump sum.</li>\n<li><strong>Cash buffer</strong>: keep 3–6 months of living expenses in cash so you are never forced to sell at a low.</li>\n</ul>\n<h2 id=\"step-4-rebalance-and-take-profit\">Step 4: Rebalance and take profit</h2>\n<ul>\n<li><strong>Rebalance</strong>: periodically (e.g. every six months) pull allocations back to target weights.</li>\n<li><strong>Take profit</strong>: trim in batches when a target return is hit or valuation turns expensive.</li>\n<li><strong>Review</strong>: log every buy/sell rationale and review it twice a year to refine the rules.</li>\n</ul>\n<h2 id=\"recap\">Recap</h2>\n<p>The essence of the four-step method is <strong>front-loading the decisions</strong>: set the rules while calm, then only execute them when volatile. Lessons 2–4 expand on “picking sector funds”, “reading prosperity cycles”, and “managing position and cadence”.</p>\n<blockquote>\n<p>⚠️ This article is a framework illustration and not investment or trading advice. Markets are risky; decide with care.</p>\n</blockquote>";

				const frontmatter = {"title":"DCA Strategy: the four-step method","description":"A four-step DCA framework an ordinary investor can actually follow.","layout":"../../../layouts/BlogPost.astro","series":"Fund Strategy","free":true,"lang":"en","altLang":"中文","altHref":"/","pubDate":"2026-08-06T00:00:00.000Z"};
				const file = "/Users/hangkai/WorkBuddy/Claw/stock-blog/src/pages/en/blog/ch1-intro.md";
				const url = "/stock-blog/en/blog/ch1-intro";
				function rawContent() {
					return "   \n                                           \n                                                                                  \n                                       \n                     \n          \n        \n           \n          \n                   \n   \n\n> This is Lesson 1 (free) of the *Fund Strategy* series. Below is a four-step DCA framework anyone can follow.\n\nThe biggest enemy of dollar-cost averaging is not market volatility — it is \"trading by feel\". The core of the four-step method is to write down the rules for *when to buy, how much, and when to sell* in advance, so discipline replaces emotion.\n\n## Step 1: Pick the asset and the horizon\n\n- **Pick the asset**: decide what this money goes into — a broad index, a sector index, an active fund, or bonds. Their risk and volatility differ enormously.\n- **Pick the horizon**: DCA \"buys time\", so think in terms of at least 3–5 years. Start only with money you can afford to lose.\n\n## Step 2: Set the rules (valuation anchors)\n\nDon't predict levels — set anchors:\n\n- Use valuation (e.g. PE percentile, 52-week range) to split the market into undervalued / fair / overvalued.\n- Buy more when cheap, buy normally when fair, buy less or pause when expensive.\n- Write the rule as one sentence, e.g. \"double the DCA below the 20th percentile of the 52-week range, stop above the 80th\".\n\n## Step 3: Set position size and cadence\n\n- **Position cap**: no single asset should exceed a set share of investable capital (e.g. a single sector ETF under 20%–30%) — avoid going all-in.\n- **Cadence**: weekly or monthly DCA spreads cost over time instead of one lump sum.\n- **Cash buffer**: keep 3–6 months of living expenses in cash so you are never forced to sell at a low.\n\n## Step 4: Rebalance and take profit\n\n- **Rebalance**: periodically (e.g. every six months) pull allocations back to target weights.\n- **Take profit**: trim in batches when a target return is hit or valuation turns expensive.\n- **Review**: log every buy/sell rationale and review it twice a year to refine the rules.\n\n## Recap\n\nThe essence of the four-step method is **front-loading the decisions**: set the rules while calm, then only execute them when volatile. Lessons 2–4 expand on \"picking sector funds\", \"reading prosperity cycles\", and \"managing position and cadence\".\n\n> ⚠️ This article is a framework illustration and not investment or trading advice. Markets are risky; decide with care.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"step-1-pick-the-asset-and-the-horizon","text":"Step 1: Pick the asset and the horizon"},{"depth":2,"slug":"step-2-set-the-rules-valuation-anchors","text":"Step 2: Set the rules (valuation anchors)"},{"depth":2,"slug":"step-3-set-position-size-and-cadence","text":"Step 3: Set position size and cadence"},{"depth":2,"slug":"step-4-rebalance-and-take-profit","text":"Step 4: Rebalance and take profit"},{"depth":2,"slug":"recap","text":"Recap"}];
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
