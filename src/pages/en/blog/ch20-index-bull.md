---
title: "Index funds in a bull market"
description: "Ride the trend and trail a stop: build on the 20-day breakout, add on pullbacks that hold, scale out by drawdown from the peak."
layout: ../../../layouts/BlogPost.astro
series: Fund Strategy
free: false
lang: en
altLang: 中文
altHref: /blog/ch20-index-bull
pubDate: 2026-08-12
---

> ⚠️ **Draft · pending your confirmation**: You asked to update the "bull and bear" strategies, but pasted the "ranging + bear" texts (now ch18 / ch19). This chapter is a **bull-market draft** built on the same "bull → ranging → bear" framework, to be replaced once you provide the exact bull-market buy/sell rules.

How should we invest in index funds during a bull market?

The logic of a bull market differs from both bear and ranging markets — a bear earns valuation mean-reversion, a ranging market earns swings, while a **bull earns the positive feedback of trend and sentiment**. Two mistakes to avoid: getting off too early and losing the position, or, caught up in the rally, going all-in with no discipline.

So the core of a bull-market strategy is just eight words: **ride the trend, trail the stop**.

<div class="fig">
<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bull market build and add-up示意">
  <style>
    .ax{stroke:#bbb;stroke-width:1}
    .ma120{stroke:#9aa0a6;stroke-width:2;fill:none}
    .ma60{stroke:#f0a500;stroke-width:2;fill:none}
    .ma20{stroke:#1565c0;stroke-width:2;fill:none}
    .price{stroke:#d63031;stroke-width:2.5;fill:none}
    .mk{font-size:12px;font-weight:700}
    .lbl{font-size:12px;fill:#444}
  </style>
  <line class="ax" x1="40" y1="220" x2="650" y2="220"/>
  <line class="ax" x1="40" y1="20" x2="40" y2="220"/>
  <polyline class="ma120" points="40,205 150,200 280,195 410,188 540,182 650,178"/>
  <polyline class="ma60"  points="40,200 150,188 280,172 410,150 540,128 650,112"/>
  <polyline class="ma20"  points="40,198 150,180 280,150 410,112 540,80  650,52"/>
  <polyline class="price" points="40,196 150,168 280,128 410,80 540,44 650,28"/>
  <circle cx="150" cy="180" r="5" fill="#1a8a3a"/>
  <text class="mk" x="158" y="178" fill="#1a8a3a">① break 20d · first entry</text>
  <circle cx="280" cy="150" r="5" fill="#1565c0"/>
  <text class="mk" x="288" y="148" fill="#1565c0">② pullback holds · add</text>
  <text class="lbl" x="410" y="100">③ 60d hold · add more</text>
  <text class="lbl" x="44" y="240">time →</text>
</svg>
</div>

## 1. Buying strategy

In a bull market we do not "catch the bottom" — we **get on after the trend is confirmed, and add on pullbacks**.

**Preconditions**: the index stands above the 20-day line, with 20 / 60 / 120-day MAs in a bullish stack (shorter above longer), volume gently expanding, and pullbacks not breaking prior lows.

- (1) **Above the 20-day line, trend confirmed** → open the first position (1× base);
- (2) **Pullback to the 20-day line holds, volume dries up** → add (another 1×);
- (3) **Pullback to the 60-day line holds, still in the up-channel** → add more (a bit more aggressive in a bull, but never beyond the planned cap for that index).

> In a bull, "a pullback is a chance to get on" — but only while it holds the key均线. Once it breaks the 120-day line, the trend may be weakening: stop adding and switch to the profit-taking rules.

## 2. Selling strategy (trailing stop)

Without taking profits in a bull, gains easily round-trip. We use **"drawdown from the peak"** as a trailing stop, not a fixed target price:

- Drawdown from peak **≤ 8%** → hold, do nothing;
- Drawdown **8% ~ 15%** → trim **1/3**;
- Drawdown **15% ~ 25%** → trim another **1/2** (cumulatively ~2/3 off, keep 1/3 to watch);
- Drawdown **> 25%** or **break of the 120-day line** → exit fully, move to watch mode for the next cycle.

<div class="fig">
<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trailing stop by drawdown">
  <style>
    .ax{stroke:#bbb;stroke-width:1}
    .curve{stroke:#d63031;stroke-width:2.5;fill:none}
    .band{font-size:12px;font-weight:700}
    .mk{font-size:12px;font-weight:700}
  </style>
  <line class="ax" x1="40" y1="220" x2="650" y2="220"/>
  <line class="ax" x1="40" y1="20" x2="40" y2="220"/>
  <polyline class="curve" points="40,170 150,120 280,60 410,48 470,70 540,110 620,160"/>
  <circle cx="410" cy="48" r="4" fill="#d63031"/>
  <text class="mk" x="416" y="42" fill="#d63031">peak</text>
  <line x1="40" y1="64"  x2="650" y2="64"  stroke="#1a8a3a" stroke-dasharray="5 4"/>
  <text class="band" x="500" y="60" fill="#1a8a3a">-8% · hold</text>
  <line x1="40" y1="92"  x2="650" y2="92"  stroke="#b8860b" stroke-dasharray="5 4"/>
  <text class="band" x="500" y="88" fill="#b8860b">-15% · trim 1/3</text>
  <line x1="40" y1="128" x2="650" y2="128" stroke="#c0392b" stroke-dasharray="5 4"/>
  <text class="band" x="500" y="124" fill="#c0392b">-25% · exit</text>
  <circle cx="470" cy="70" r="4" fill="#b8860b"/>
  <text class="mk" x="300" y="150" fill="#444">wider drawdown → scale out, keep the profit</text>
</svg>
</div>

## Summary

The essence of index funds in a bull market: **get on after the trend confirms, add on pullbacks that hold; trail a stop by drawdown from the peak — trim from -8%, exit at -25%**. In a bull we do not call the top, but we must set a drawdown line — so we can ride the main upswing without giving all the profit back.

> 📚 Same series: ranging market → [ch18 Index funds in a ranging market](/en/blog/ch18-index-shake) ｜ bear market → [ch19 Index funds in a bear market](/en/blog/ch19-index-bear).

> ⚠️ This article is a framework illustration only and does not constitute any investment or trading advice. Markets carry risk; decisions require caution.
