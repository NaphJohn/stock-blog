---
title: "Active funds in a ranging market"
description: "In a ranging market buy dips not rallies: buy in one shot when YTD return is below 50% of the annualised average; once it exceeds that, sell half and hold a half position."
layout: ../../../layouts/BlogPost.astro
series: Fund Strategy
free: false
lang: en
altLang: 中文
altHref: /
pubDate: 2026-08-08
---

> This is Section 8 of the *Fund Strategy* series. A ranging market is a stock-game of existing money — the active-fund playbook must be more defensive than in a bull: the one-liner is **buy dips, not rallies**.

<div class="fig">
<svg viewBox="0 0 680 300" role="img" aria-label="Active fund in a ranging market: buy on dips below the 50% annualised line, sell half above it">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">Ranging market: buy dips, sell half at the top</text>
  <rect x="40" y="150" width="600" height="110" fill="#059669" opacity="0.10"/>
  <line x1="40" y1="150" x2="640" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="7 5"/>
  <text x="44" y="144" font-size="12" fill="#dc2626">50% of annualised return (baseline)</text>
  <text x="60" y="178" font-size="12.5" fill="#b91c1c" font-weight="bold">Sell-half zone: YTD &gt; 50% annualised &amp; month beats avg → sell half</text>
  <text x="60" y="252" font-size="12.5" fill="#047857" font-weight="bold">Buy-dip zone: YTD &lt; 50% annualised &amp; drawdown ok → buy in one shot</text>
  <path d="M40,118 C120,92 170,96 230,138 C290,182 330,208 380,198 C440,186 470,148 520,118 C570,90 610,98 650,128"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <circle cx="380" cy="198" r="6" fill="#059669"/>
  <text x="380" y="218" font-size="12" fill="#059669" text-anchor="middle">BUY</text>
  <circle cx="520" cy="118" r="6" fill="#dc2626"/>
  <text x="520" y="106" font-size="12" fill="#dc2626" text-anchor="middle">SELL 1/2</text>
</svg>
<div class="cap">Figure: ranging-market overview — below the 50%-of-annualised baseline is the buy-dip zone; above it is the sell-half zone.</div>
</div>

How should we invest in active funds during a ranging market?

Unlike a bull market, where we can be slightly aggressive, a ranging market is a stock-game of existing capital, so our strategy is relatively conservative.

## 1. Adding on dips (buying)

First, we require **this year's return to be below 50% of the average annualised return**, ensuring enough upside remains.

Then we step in when the **current month / week's return is in a drawdown**, and that drawdown is close to the average monthly drawdown seen across past ranging markets.

In a bull we can buy rallies, but in a ranging market — and the bear that may follow — we generally choose to **buy dips**. That is how we expand the profit space to offset the lower win rate.

<div class="fig">
<svg viewBox="0 0 680 300" role="img" aria-label="Buy on dips: when the monthly drawdown nears the ranging-market average">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">Buy the dip: step in when the monthly drawdown nears the ranging average</text>
  <line x1="40" y1="90" x2="640" y2="90" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="7 5" opacity="0.8"/>
  <text x="548" y="84" font-size="11" fill="#dc2626">50% annualised line</text>
  <rect x="200" y="90" width="140" height="120" fill="#dc2626" opacity="0.06"/>
  <text x="208" y="222" font-size="11" fill="#6b7280">Monthly drawdown zone (≈ ranging avg)</text>
  <path d="M40,120 C110,95 160,100 200,110 C250,160 290,182 340,176 C400,168 470,120 540,110 C600,102 630,108 660,112"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <circle cx="340" cy="176" r="7" fill="#059669"/>
  <text x="340" y="164" font-size="12" fill="#059669" text-anchor="middle">BUY DIP</text>
  <line x1="340" y1="189" x2="340" y2="201" stroke="#059669" stroke-width="2"/>
  <text x="44" y="252" font-size="12" fill="#047857">✓ YTD &lt; 50% annualised　✓ drawdown ≈ ranging avg　✓ buy in one shot</text>
  <text x="44" y="278" font-size="12" fill="#6b7280">Buy dips not rallies — more shares at lower prices offsets lower win rate.</text>
</svg>
<div class="cap">Figure: when NAV falls below the 50%-of-annualised line and the monthly drawdown nears the historical ranging average, buy the dip in one shot.</div>
</div>

The concrete buy conditions are:

1. The fund's YTD return < 50% of its average annualised return;
2. The current monthly drawdown is close to the historical ranging-market average monthly drawdown;
3. Buy in one shot.

## 2. Trimming on strength (selling)

In a ranging market we don't expect returns to exceed the average annualised return and approach the historical maximum.

We sell **half** when the fund's YTD return **exceeds 50% of its past average annualised return** AND its current month/week performance **exceeds the historical ranging-market average monthly return**, holding the remaining half.

The reason: a ranging market is followed by a bull, and by many accounts a ranging market is just another name for a *structural bull* — so we can't be sure an active fund won't evolve into a bull run. If we went fully to cash, we might have to buy back at a higher cost in the bull.

So we choose a mathematically higher-efficiency approach called **half-position swing** — averaging down and amplifying profit.

<div class="fig">
<svg viewBox="0 0 680 320" role="img" aria-label="Half-position swing: sell half at the top, buy back on pullbacks, average down">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">Half-position swing: sell half at the top, buy back on dips</text>
  <line x1="40" y1="70" x2="640" y2="70" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="7 5" opacity="0.85"/>
  <text x="470" y="64" font-size="11" fill="#dc2626">Sell trigger: YTD &gt; 50% annualised &amp; month beats avg</text>
  <path d="M40,150 C120,95 160,60 180,55 C220,48 250,110 300,150 C350,190 390,205 430,200 C480,194 540,70 600,58 C640,52 662,100 680,120"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <circle cx="180" cy="55" r="6" fill="#dc2626"/>
  <text x="180" y="44" font-size="11" fill="#dc2626" text-anchor="middle">SELL 1/2</text>
  <circle cx="600" cy="58" r="6" fill="#dc2626"/>
  <text x="600" y="47" font-size="11" fill="#dc2626" text-anchor="middle">SELL 1/2</text>
  <circle cx="430" cy="200" r="6" fill="#059669"/>
  <text x="430" y="220" font-size="11" fill="#059669" text-anchor="middle">BUY BACK</text>
  <polyline points="40,252 250,252 430,218 600,218 680,192" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <text x="44" y="272" font-size="11" fill="#b45309">Average cost (steps down after each buy-back)</text>
  <text x="44" y="300" font-size="12" fill="#047857">✓ Never fully exit (avoid buying back higher in a bull)　✓ Swing halves to average down &amp; amplify profit</text>
</svg>
<div class="cap">Figure: when NAV crosses the sell trigger, sell half and keep half; buy back on pullbacks — each round lowers the average cost and amplifies profit.</div>
</div>

The concrete sell conditions are:

1. The fund's YTD return > 50% of its average annualised return;
2. The current monthly return > the historical ranging-market average monthly return;
3. Sell half, hold a half position.

## Recap

The essence of trading active funds in a ranging market: **buy in one shot when it dips enough, sell half when it rises enough**. Don't chase the historical maximum, and don't go fully to cash and miss the bull — use the half-position swing to average down and amplify profit through the range, turning the uncertainty of a "structural bull" into an edge.

> ⚠️ This article is a methodological framework illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.
