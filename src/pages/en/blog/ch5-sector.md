---
title: "Sector funds in a bear market"
description: "In a bear market use staggered DCA: buy when the sector PB percentile is low enough, and take profit in batches when the PE percentile is high."
layout: ../../../layouts/BlogPost.astro
series: Fund Strategy
free: false
lang: en
altLang: 中文
altHref: /
pubDate: 2026-08-07
---

<div class="fig">
<svg viewBox="0 0 680 300" role="img" aria-label="Sector funds in a bear: valuation percentile scale, buy in the low zone and take profit in the high zone">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">Sector funds in a bear: buy only when valuation is low enough</text>
  <rect x="40" y="90" width="130" height="90" fill="#059669" opacity="0.20"/>
  <rect x="170" y="90" width="340" height="90" fill="#9ca3af" opacity="0.18"/>
  <rect x="510" y="90" width="130" height="90" fill="#dc2626" opacity="0.18"/>
  <text x="56" y="140" font-size="12" fill="#047857" font-weight="bold">Build zone</text>
  <text x="56" y="160" font-size="11" fill="#374151">PB percentile &lt; 20%</text>
  <text x="300" y="140" font-size="12" fill="#6b7280" font-weight="bold">Hold zone</text>
  <text x="300" y="160" font-size="11" fill="#374151">20% ~ 70%</text>
  <text x="540" y="140" font-size="12" fill="#b91c1c" font-weight="bold">Take-profit</text>
  <text x="540" y="160" font-size="11" fill="#374151">PE percentile &gt; 70%</text>
  <line x1="170" y1="90" x2="170" y2="180" stroke="#374151" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="510" y1="90" x2="510" y2="180" stroke="#374151" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="40" y="220" font-size="11" fill="#6b7280">X-axis = sector valuation percentile; in a bear market watch PB percentile — only act below 20% to improve reward-to-risk.</text>
  <circle cx="95" cy="135" r="6" fill="#059669"/>
  <text x="105" y="139" font-size="11" fill="#047857">Current (bear low)</text>
</svg>
<div class="cap">Figure: In a bear market the core of buying sector funds is "valuation low enough" — use PB percentile as the ruler: below 20% enters the build zone, above 70% (PE percentile) enters the staged take-profit zone.</div>
</div>

Today we continue with how to invest in sector funds during a bear market.

If we are in a bear market, we must prepare for a long-term hold — the investment horizon is 1–3 years or even longer. In that case, staggered buying is the better approach.

In a bear market, the first priority is to improve the reward-to-risk ratio, and only then the win rate. And there is only one way to improve the reward-to-risk ratio: **buy when valuation is low enough**.

## Buy strategy

In a bear market we focus on sectors with a solid net-asset base and low risk of sudden blow-ups. The relevant metric is the sector's **PB (price-to-book ratio)**.

1. Start building the position when the sector's **PB percentile falls below 20%**;
2. Because the bear-to-bull transition takes a long time, use staggered DCA to improve the holding experience;
3. After the initial position, add once every time NAV drops another 2%.

<div class="fig">
<svg viewBox="0 0 680 320" role="img" aria-label="Sector bear staggered buying: start below PB 20%, add once every 2% NAV drop">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">Staggered buying: start below PB 20%, add every 2% NAV drop</text>
  <path d="M40,70 C140,72 200,80 270,120 C340,160 400,200 470,214 C540,226 600,230 640,232"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <text x="44" y="62" font-size="11" fill="#374151">PB percentile (falls through the bear)</text>
  <line x1="40" y1="160" x2="640" y2="160" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="470" y="154" font-size="11" fill="#b91c1c">PB percentile = 20% (build line)</text>
  <rect x="40" y="160" width="250" height="70" fill="#059669" opacity="0.10"/>
  <text x="56" y="200" font-size="11.5" fill="#047857" font-weight="bold">Build zone (PB &lt; 20%)</text>
  <path d="M40,290 C140,288 200,286 270,278 C340,268 400,254 470,250 C540,246 600,246 640,246"
        fill="none" stroke="#9ca3af" stroke-width="1.6" stroke-dasharray="4 3"/>
  <text x="44" y="282" font-size="11" fill="#6b7280">NAV (add once every 2% drop →)</text>
  <circle cx="270" cy="278" r="5" fill="#059669"/>
  <circle cx="370" cy="270" r="5" fill="#059669"/>
  <circle cx="470" cy="250" r="5" fill="#059669"/>
  <line x1="270" y1="283" x2="270" y2="296" stroke="#059669" stroke-width="2"/>
  <line x1="370" y1="275" x2="370" y2="296" stroke="#059669" stroke-width="2"/>
  <line x1="470" y1="255" x2="470" y2="296" stroke="#059669" stroke-width="2"/>
  <text x="40" y="312" font-size="11.5" fill="#047857">✓ Start below PB&lt;20%　✓ add every 2% NAV drop　✓ staggered DCA improves holding experience</text>
</svg>
<div class="cap">Figure: Once PB percentile breaks below 20% you enter the build zone; after that, add once every 2% NAV drop, using staggered DCA to smooth bear-market cost and lift the reward-to-risk ratio.</div>
</div>

## Sell strategy

High-sentiment sectors easily get a "Davis double play" in up-cycles, so to maximise gains the sell strategy weighs both valuation and trend.

1. Trim 20% when the index **PE percentile > 70%**;
2. Trim another 20% when **PE percentile > 80%**;
3. Trim another 20% when **PE percentile > 90%**; if NAV drops more than 8% from its recent high in the short term, clear the position;
4. Trim another 20% when **PE percentile > 100%**; if NAV drops more than 10% from its recent high in the short term, clear the position.

There are two clearing rules, again for the strategy's validity and a closed feedback loop.

As for whether PE or PB can reach a new historical high, we don't bet on luck — we trust historical patterns.

The money beyond that is not what we chase through luck; certainty of profit matters more to us.

> ⚠️ This article is a methodological framework for illustration only and does not constitute any investment or trading advice. Markets carry risk; decisions require caution.
