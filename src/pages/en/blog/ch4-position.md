---
title: "Sector-fund strategy for a choppy market"
description: "In a sideways market, 'follow the trend, fade the wobble': pick strong sectors with 3 rules, scale in over 3 tranches, and trim by deviation from the 20-day line."
layout: ../../../layouts/BlogPost.astro
series: Fund Strategy
free: true
lang: en
altLang: 中文
altHref: /blog/ch4-position
pubDate: 2026-08-11
---

In a **choppy (sideways) market** — one that whips back and forth with no clean trend — sector funds (semiconductor, new-energy, healthcare thematic ETFs) punish "buy-high-sell-low" behavior most of all. The whole discipline boils down to eight words: **follow the trend, fade the wobble**. When the bigger trend is up, you only buy on a small pullback; once it has run, you trim by the rules and turn "sell-high, buy-low" into an executable system.

> This is Section 4 (free) of the *Fund Strategy* series — focused on the **buy and sell discipline inside a choppy market**.

## 1. Follow the trend: use moving averages to spot a strong sector

The simplest way to tell whether a sector is in a strong phase is the moving averages:

- Price **above the 120-day line**: the sector hasn't made a new low in 120 sessions — strong on a half-year view;
- The **20 / 30 / 60-day lines are in bullish alignment** (shorter above longer, all rising): recent 1-month, 1.5-month and 3-month trends are up;
- Confirm with **main-force inflows**. When all three agree, the sector is in a strong phase.

## 2. Fade the wobble: once the trend is set, buy the dip

After strength is confirmed, the best entry is *not* a chase — it's a **small counter-trend pullback**, which improves your reward-to-risk. Below are the quantifiable buy/sell rules.

## 3. Buy rules (3 conditions + 3 tranches)

**First clear three hard conditions before entering the buy zone:**

1. NAV has **not made a new low for 3 straight months**, and the last 3-month volume > **115%** of the prior 3-month volume (volume leads price — money is coming in);
2. The **20 / 30 / 60-day lines were in bullish alignment**, with the 60-day line flattening and turning up;
3. In the 2 months **before** the pullback, the gain was **no more than 20%** and the MAs were converging (avoid buying a bubble top).

**Once met, scale in by pullback depth (buy more as it falls, lowering cost and lifting reward-to-risk):**

- NAV pulls back **below the 20-day line but above the 60-day line** → add **1×**;
- NAV pulls back **below the 30-day line but above the 60-day line** → add **1.5×**;
- NAV pulls back **below the 60-day line but above the 120-day line** → add **2×**.

<div class="fig">
<svg viewBox="0 0 680 300" role="img" aria-label="Three-tranche buy on moving averages in a choppy market">
  <defs>
    <linearGradient id="zone_en" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#6ee7b7" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#6ee7b7" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <rect x="40" y="205" width="600" height="48" fill="url(#zone_en)"/>
  <line x1="40" y1="252" x2="640" y2="248" stroke="#9ca3af" stroke-width="2"/>
  <line x1="40" y1="205" x2="640" y2="202" stroke="#9ca3af" stroke-width="2"/>
  <line x1="40" y1="160" x2="640" y2="158" stroke="#9ca3af" stroke-width="2"/>
  <line x1="40" y1="118" x2="640" y2="116" stroke="#9ca3af" stroke-width="2"/>
  <text x="648" y="252" font-size="11" fill="#6b7280">120d</text>
  <text x="648" y="205" font-size="11" fill="#6b7280">60d</text>
  <text x="648" y="160" font-size="11" fill="#6b7280">30d</text>
  <text x="648" y="118" font-size="11" fill="#6b7280">20d</text>
  <path d="M40,92 C140,60 200,58 260,70 C330,84 350,150 380,150 C430,150 450,182 480,182 C530,182 545,228 575,225 C610,222 630,170 650,150"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <circle cx="380" cy="150" r="6" fill="#059669"/>
  <text x="380" y="138" font-size="12" fill="#059669" text-anchor="middle">+1x</text>
  <circle cx="480" cy="182" r="6" fill="#059669"/>
  <text x="480" y="200" font-size="12" fill="#059669" text-anchor="middle">+1.5x</text>
  <circle cx="575" cy="225" r="6" fill="#059669"/>
  <text x="575" y="244" font-size="12" fill="#059669" text-anchor="middle">+2x</text>
  <text x="80" y="108" font-size="11" fill="#5b3df2">Strong zone (price &gt; 20d)</text>
  <text x="90" y="240" font-size="11" fill="#047857">Add zone (between 60d &amp; 120d — deeper = bigger)</text>
</svg>
<div class="cap">Price above the 120-day line = strong zone. As it falls through the 20 / 30 / 60-day lines, scale in over 3 tranches — the deeper the pullback, the larger the add.</div>
</div>

Why three tranches? In a choppy market you **can't easily raise the win rate**, so you raise reward-to-risk instead — via staggered buys and "buy-more-on-the-way-down" that average your cost lower.

## 4. Sell rules (trim by deviation)

During an uptrend, use the **deviation of NAV from the 20-day line** as the trim rule:

- Deviation **over 5%** → trim **1/3**;
- Deviation **over 8%** → trim another **1/3**;
- Deviation **over 10%** → **close** the position.

<div class="fig">
<svg viewBox="0 0 680 300" role="img" aria-label="Trim by deviation from the 20-day line in a choppy market">
  <line x1="40" y1="220" x2="640" y2="150" stroke="#9ca3af" stroke-width="2.5"/>
  <text x="48" y="240" font-size="11" fill="#6b7280">20-day line (base)</text>
  <line x1="40" y1="172" x2="640" y2="102" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="6 5" opacity="0.7"/>
  <line x1="40" y1="150" x2="640" y2="80" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="6 5" opacity="0.7"/>
  <line x1="40" y1="128" x2="640" y2="58" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="6 5" opacity="0.7"/>
  <text x="540" y="98" font-size="11" fill="#dc2626">+5% trim 1/3</text>
  <text x="540" y="76" font-size="11" fill="#dc2626">+8% trim 1/3</text>
  <text x="540" y="54" font-size="11" fill="#dc2626">+10% close</text>
  <path d="M40,220 C160,210 220,150 300,128 C360,112 400,98 440,90 C500,80 540,110 600,150 C630,168 640,180 650,182"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <circle cx="300" cy="128" r="6" fill="#dc2626"/>
  <circle cx="440" cy="90" r="6" fill="#dc2626"/>
  <circle cx="520" cy="78" r="6" fill="#dc2626"/>
  <text x="300" y="148" font-size="11" fill="#dc2626" text-anchor="middle">trim 1/3</text>
  <text x="445" y="82" font-size="11" fill="#dc2626" text-anchor="middle">trim 1/3</text>
  <text x="525" y="68" font-size="11" fill="#dc2626" text-anchor="middle">close</text>
</svg>
<div class="cap">The further price strays above the 20-day line, the larger the deviation. At 5% / 8% / 10% trim 1/3, 1/3, then close — bank the profit.</div>
</div>

Why trim this way? A choppy market **grinds back and forth for a long time** (especially non-lead sectors); if you don't take profit at the top you get whipped around. "Sell-high" banks the gain, then "buy-low" on the pullback lifts your hit rate. This is the opposite of "just hold forever" — our goal is to **make money off the fund's moves**, not to white-knuckle through volatility on faith.

> ⚠️ This article is a framework illustration only and is not investment or trading advice. Markets are risky; decide with care.
