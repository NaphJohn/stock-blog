---
title: "Active funds in a bear market"
description: "In a bear market use staggered DCA only after time and space are both in place; trim half on a monthly rebound over the average, swing to lower cost."
layout: ../../../layouts/BlogPost.astro
series: Fund Strategy
free: false
lang: en
altLang: 中文
altHref: /
pubDate: 2026-08-07
---

<div class="fig">
<svg viewBox="0 0 680 300" role="img" aria-label="Bear market time+space both in place: smile-interval curve, decline near 50% of time and drawdown at avg, buy zone">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">Bear 'time + space' both in place: only then staggered DCA</text>
  <line x1="40" y1="250" x2="640" y2="250" stroke="#6b7280" stroke-width="1.4"/>
  <text x="40" y="270" font-size="11" fill="#6b7280">Time → (decline duration since last net-value high)</text>
  <path d="M40,70 C140,70 200,72 260,110 C320,148 380,205 470,222 C540,235 600,238 640,240"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <text x="44" y="62" font-size="11" fill="#374151">Last net-value high</text>
  <line x1="340" y1="40" x2="340" y2="250" stroke="#059669" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="276" y="54" font-size="11" fill="#047857">Time in place ≈ 50% of smile-interval length</text>
  <line x1="40" y1="200" x2="640" y2="200" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="470" y="194" font-size="11" fill="#b91c1c">Space in place: drawdown ≥ avg bear max drawdown</text>
  <rect x="340" y="200" width="300" height="50" fill="#059669" opacity="0.10"/>
  <text x="356" y="225" font-size="11.5" fill="#047857" font-weight="bold">Both-in-place buy zone (staggered DCA)</text>
  <circle cx="470" cy="222" r="5" fill="#059669"/>
  <line x1="470" y1="227" x2="470" y2="244" stroke="#059669" stroke-width="2"/>
  <circle cx="540" cy="231" r="5" fill="#059669"/>
  <line x1="540" y1="236" x2="540" y2="246" stroke="#059669" stroke-width="2"/>
</svg>
<div class="cap">Figure: Starting from the 'last net-value high', NAV falls to form the bear. When the decline duration nears 50% of the full smile interval (time in place) AND the drawdown reaches the historical bear-market average max drawdown (space in place), their intersection is the staggered-DCA buy zone.</div>
</div>

> This is Lesson 9 of the *Fund Strategy* series. Compared with a ranging market, the bear-market tactic is more conservative — the core is **staggered DCA only after both time and space are in place**, not a one-shot buy.

How to invest in active funds during a bear market?

Compared with a ranging market, the bear-market tactic is more conservative.

## 1. Buy strategy

In a bear market, buying an active fund must be considered along two dimensions: **time** and **space**.

So how do we locate space and time?

### 1. Time in place

We measure the time of each bull-bear cycle's new-high interval — i.e. the time of each complete "smile interval" — then compute how long it has been falling from the most recent new high.

We consider time to be in place when the decline duration approaches **50%** of the prior complete smile-interval length — the decline is near the tail of the time cycle's bottom.

### 2. Space in place

We measure the maximum drawdown of each historical bear cycle, compute the average maximum drawdown across historical bear cycles, and when this fund's drawdown is **greater than and near that average**, we consider **space basically in place**.

### 3. Staggered DCA

If both time and space are in place, we also watch the current month's drop.

When the monthly drop is **greater than the historical bear-market average monthly drop**, we trim and add in tranches — staggered DCA.

<div class="fig">
<svg viewBox="0 0 680 300" role="img" aria-label="Bear buy three conditions: space drawdown, time 50%, monthly drop all required before staggered DCA">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">Bear buy: three conditions — all must hold before staggered DCA</text>
  <rect x="40" y="60" width="180" height="60" rx="8" fill="#059669" opacity="0.10"/>
  <text x="56" y="88" font-size="12" fill="#047857" font-weight="bold">① Space in place</text>
  <text x="56" y="108" font-size="11" fill="#374151">drawdown &gt; avg bear max DD</text>
  <rect x="250" y="60" width="180" height="60" rx="8" fill="#5b3df2" opacity="0.10"/>
  <text x="266" y="88" font-size="12" fill="#4c1d95" font-weight="bold">② Time in place</text>
  <text x="266" y="108" font-size="11" fill="#374151">decline ≈ 50% of new-high dur.</text>
  <rect x="460" y="60" width="180" height="60" rx="8" fill="#dc2626" opacity="0.10"/>
  <text x="476" y="88" font-size="12" fill="#b91c1c" font-weight="bold">③ Monthly drop widens</text>
  <text x="476" y="108" font-size="11" fill="#374151">monthly drop &gt; avg bear drop</text>
  <rect x="200" y="170" width="280" height="56" rx="8" fill="#111827" opacity="0.06"/>
  <text x="340" y="194" font-size="12.5" fill="#111827" font-weight="bold" text-anchor="middle">All three together → staggered DCA (not one-shot)</text>
  <text x="340" y="214" font-size="11" fill="#6b7280" text-anchor="middle">Decompose with multiple entries to dissolve downside risk and time cost</text>
  <text x="40" y="262" font-size="11.5" fill="#6b7280">The three steps map to the text: drawdown avg / 50% duration / monthly-drop threshold — all required.</text>
</svg>
<div class="cap">Figure: A bear-market buy needs space (drawdown enough), time (decline long enough) and monthly drop (wide enough) all at once, then staggered DCA — not a one-shot bottom-fish.</div>
</div>

Here **DCA is mandatory**. In many places we suggest one-shot buying, but in a bear market the required move is staggered DCA, because only staggered DCA decomposes the risk with multiple entries, dissolving possible downside risk and time cost.

Specific buy conditions:

1. This year's drawdown > the average max drawdown of past bear phases;
2. This decline's duration ≈ 50% of the longest historical new-high duration;
3. Monthly drop > the average monthly drop of past bear phases;
4. Add in tranches.

## 2. Sell strategy

Many may wonder: why have a sell strategy in a bear market — shouldn't we just keep DCA-ing?

The main purpose is to **boost investor confidence, improve the holding experience, and lower cost**.

A bear market does fluctuate; we trim when the fund's **monthly return exceeds its historical bear-market average positive return**.

The tactic is to **cut half**. We don't cut all because the shares are cheap and valuable, so we buy again when it keeps underperforming, keeping a **half-position swing tactic** in the bear market to lower cost and risk.

<div class="fig">
<svg viewBox="0 0 680 320" role="img" aria-label="Bear half-position swing: sell 1/2 on rebound over avg, buy back on drops, avg cost drifts down">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">Bear half-position swing: sell 1/2 on rebound over avg, buy back on drops</text>
  <line x1="40" y1="70" x2="640" y2="70" stroke="#f59e0b" stroke-width="1.4" stroke-dasharray="7 5" opacity="0.85"/>
  <text x="470" y="64" font-size="11" fill="#b45309">Sell trigger: monthly return &gt; bear avg positive return</text>
  <path d="M40,200 C110,210 150,150 200,130 C260,108 300,160 350,175 C410,192 460,110 520,100 C580,90 620,150 660,175"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <circle cx="200" cy="130" r="6" fill="#dc2626"/>
  <text x="200" y="119" font-size="11" fill="#b91c1c" text-anchor="middle">sell 1/2</text>
  <circle cx="460" cy="110" r="6" fill="#dc2626"/>
  <text x="460" y="99" font-size="11" fill="#b91c1c" text-anchor="middle">sell 1/2</text>
  <circle cx="350" cy="175" r="6" fill="#059669"/>
  <text x="350" y="195" font-size="11" fill="#047857" text-anchor="middle">buy back</text>
  <circle cx="600" cy="150" r="6" fill="#059669"/>
  <text x="600" y="140" font-size="11" fill="#047857" text-anchor="middle">buy back</text>
  <polyline points="40,250 250,250 460,200 600,200 680,185" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <text x="44" y="272" font-size="11" fill="#b45309">Avg cost (drifts down after each buyback)</text>
  <text x="44" y="300" font-size="12" fill="#047857">✓ Don't clear all: cheap shares are precious　✓ half swing: sell half on rebound, buy back on drops, lower cost repeatedly</text>
</svg>
<div class="cap">Figure: A bear also fluctuates — when the monthly rebound exceeds the bear average positive return, trim half (not all, shares are cheap), then buy back as NAV falls again; each buyback lowers the average cost.</div>
</div>

Specific sell conditions:

1. The fund's monthly return > the average return of past bear phases;
2. Sell 1/2, keep a half position.

## Summary

The essence of active-fund bear-market tactics: **start staggered DCA only when time and space are both in place and the monthly drop widens**; when a monthly rebound exceeds the average, sell half and buy back on the way down — use tranches to dissolve downside risk, use the half-position swing to lower cost. The worst move in a bear is an all-in; staggered DCA is the key to survival.

> ⚠️ This article is a methodological framework for illustration only and does not constitute any investment or trading advice. Markets carry risk; decisions require caution.
