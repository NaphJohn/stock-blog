---
title: "How to pick a quality active fund"
description: "Core standard (new high every cycle, beat CSI 300) + auxiliary conditions (tenure, sentiment, scores) — pick the best of the best."
layout: ../../../layouts/BlogPost.astro
series: Fund Strategy
free: false
lang: en
altLang: 中文
altHref: /
pubDate: 2026-08-07
---

<div class="fig">
<svg viewBox="0 0 680 300" role="img" aria-label="Quality active fund selection funnel: from the whole market down to selected">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">Pick the best of the best: active-fund selection funnel</text>
  <polygon points="120,60 560,60 500,110 180,110" fill="#5b3df2" opacity="0.12"/>
  <text x="340" y="92" font-size="12" fill="#111827" text-anchor="middle">All 18,000+ funds</text>
  <polygon points="180,120 500,120 450,165 230,165" fill="#5b3df2" opacity="0.20"/>
  <text x="340" y="148" font-size="12" fill="#111827" text-anchor="middle">Core: new high every cycle + beat CSI 300</text>
  <polygon points="230,175 450,175 410,215 270,215" fill="#059669" opacity="0.20"/>
  <text x="340" y="200" font-size="11.5" fill="#047857" text-anchor="middle">Aux: tenure&gt;5 / sentiment&gt;3 / score&gt;3</text>
  <polygon points="270,225 410,225 380,258 300,258" fill="#dc2626" opacity="0.18"/>
  <text x="340" y="247" font-size="12" fill="#b91c1c" text-anchor="middle" font-weight="bold">【Selected】</text>
  <text x="44" y="282" font-size="11.5" fill="#6b7280">Layer by layer: pass the core hard standard first, then use auxiliary conditions to control risk and add certainty, leaving a few selected names.</text>
</svg>
<div class="cap">Figure: The active-fund selection funnel — first filter by the core "new high every cycle + beat CSI 300", then narrow with tenure / sentiment / score, yielding the app's 【Selected】 tags.</div>
</div>

Earlier we covered the standard for judging a quality fund; today we analyse how to pick a quality active fund.
Drawing on years of research, we have distilled a set of standards for quality active funds.

## 1) Core standard

In every cycle it keeps making new highs, and across 14 historical bull-bear cycles it beats the CSI 300.

<div class="fig">
<svg viewBox="0 0 680 300" role="img" aria-label="Core standard: fund NAV stays above CSI 300 across 14 bull-bear cycles">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">Core standard: NAV vs CSI 300, beat long-term</text>
  <path d="M40,210 C120,180 200,150 280,140 C380,128 460,110 560,90 C620,78 650,70 668,66"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <path d="M40,210 C120,205 200,202 280,200 C380,197 460,195 560,193 C620,192 650,191 668,190"
        fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="540" y="84" font-size="11" fill="#4c1d95">This fund</text>
  <text x="540" y="208" font-size="11" fill="#6b7280">CSI 300</text>
  <text x="40" y="250" font-size="11.5" fill="#047857">✓ New high in every bull-bear cycle　✓ Beat CSI 300 in all 14 historical cycles</text>
  <text x="44" y="274" font-size="11.5" fill="#6b7280">Only one core standard: survive bull and bear to make new highs, and stay above the benchmark long-term.</text>
</svg>
<div class="cap">Figure: The fund NAV (purple) stays above the CSI 300 (grey dashed) long-term and makes a new high every cycle, beating the benchmark — the hard core standard for active funds.</div>
</div>

## 2) Auxiliary conditions

Mainly to keep the historical pattern durable, control risk and add certainty.

**① Tenure > 5 years**
Only such funds can withstand long-cycle time validation, ensuring the pattern is durable.

**② Sector sentiment > 3 points**
Based on the fund's sector weight, combined with analyst consensus and a 1–3 year forward estimate — mainly to raise certainty. (How to judge sector sentiment? See Section 3.)

**③ Excess-return score and volatility score both > 3 points**
We score and rank the fund's historical performance across cycles, taking the top 40% — i.e. above 3 points.

Only active funds meeting the above can possibly trigger our strategy signals.

We also tighten some conditions further, picking the best of the best — these are the funds tagged 【精选】 (Selected) inside the app.

> ⚠️ This article is a methodological framework for illustration only and does not constitute any investment or trading advice. Markets carry risk; decisions require caution.
