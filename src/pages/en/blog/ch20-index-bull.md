---
title: "Index funds in a bull market"
description: "In a bull market, just keep investing: buy consistently and hold long-term, add on pullbacks that hold, use one loose drawdown line as protection."
layout: ../../../layouts/BlogPost.astro
series: Fund Strategy
free: false
lang: en
altLang: 中文
altHref: /blog/ch20-index-bull
pubDate: 2026-08-12
---

> ⚠️ **Draft · pending your confirmation**: Built on the "bull → ranging → bear" framework. Your core rule for a bull market is **"in a bull, just keep investing"** — keep buying and hold long-term, don't fiddle with every wiggle. Rewritten below accordingly; please confirm the buy/sell numbers.

How should we invest in index funds during a bull market?

The logic of a bull market differs from both bear and ranging markets — a bear earns valuation mean-reversion, a ranging market earns swings, while a **bull earns the positive feedback of trend and sentiment**. Two mistakes to avoid: getting off too early and losing the position, or, caught up in the rally, going all-in with no discipline.

So the core of a bull-market strategy is just six words: **in a bull, keep investing**.

<div class="fig">
<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bull market keep investing and add-up">
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
  <text class="mk" x="158" y="178" fill="#1a8a3a">① trend confirmed · start</text>
  <circle cx="280" cy="150" r="5" fill="#1565c0"/>
  <text class="mk" x="288" y="148" fill="#1565c0">② pullback holds · add</text>
  <text class="lbl" x="410" y="100">③ 60d hold · add more</text>
  <text class="lbl" x="44" y="240">time →</text>
</svg>
</div>

## 1. Buying strategy: keep investing, stay invested

In a bull market we do not "catch the bottom" — we **keep investing once the trend is confirmed, and add on pullbacks**. The core action is "buy", not "wait".

- (0) **Base position**: build it as soon as the trend confirms; don't wait for "cheaper" — in a bull, waiting for a pullback often means buying higher.
- (1) **Steady cadence**: keep buying via DCA/batches; don't stop out of fear just because it's up.
- (2) **Pullback to the 20-day line holds, volume dries up** → add (one extra tranche).
- (3) **Pullback to the 60-day line holds, still in the up-channel** → add more (a bit more aggressive in a bull, but never beyond the planned cap).

> In one line: **a bull has no top call, but also no chasing the spike**. Replace "call the top and go empty" with "keep investing + add on pullbacks" — capture the main upswing without going all-in at the peak.

## 2. Selling strategy: don't get off easily, just one protection line

The worst of a bull is "sell a bit, run, then chase higher". So the rule: **hold still most of the time, with one loose drawdown line** that triggers a trim.

- Drawdown from peak **≤ 20%** → **do nothing, keep holding** (let profits run with the trend);
- Drawdown **20% ~ 25%** → trim **1/3** (trend may be weakening, take some off the table);
- Drawdown **> 25%** or **break of the 120-day line (year line)** → cut to half or exit, move to watch mode for the next cycle.

<div class="fig">
<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bull market loose drawdown protection">
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
  <line x1="40" y1="108" x2="650" y2="108" stroke="#1a8a3a" stroke-dasharray="5 4"/>
  <text class="band" x="470" y="104" fill="#1a8a3a">≤20% · hold still</text>
  <line x1="40" y1="128" x2="650" y2="128" stroke="#b8860b" stroke-dasharray="5 4"/>
  <text class="band" x="470" y="124" fill="#b8860b">20~25% · trim 1/3</text>
  <line x1="40" y1="160" x2="650" y2="160" stroke="#c0392b" stroke-dasharray="5 4"/>
  <text class="band" x="470" y="156" fill="#c0392b">>25%/break year-line · exit</text>
  <circle cx="470" cy="70" r="4" fill="#b8860b"/>
  <text class="mk" x="300" y="150" fill="#444">in a bull, hold most of the time — guard just one line</text>
</svg>
</div>

## Summary

The essence of index funds in a bull market: **in a bull, keep investing — buy consistently and hold long-term, add on pullbacks that hold; use one loose "20% drawdown from peak" line as protection, no frequent trading, no early exit**. Do "DCA + hold" all the way through, and let the trend make the money for you.

> 📚 Same series: ranging market → [ch18 Index funds in a ranging market](/en/blog/ch18-index-shake) ｜ bear market → [ch19 Index funds in a bear market](/en/blog/ch19-index-bear).

> ⚠️ This article is a framework illustration only and does not constitute any investment or trading advice. Markets carry risk; decisions require caution.
