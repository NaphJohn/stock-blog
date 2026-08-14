---
title: "Getting started with indicators: MACD / PE / PB in one picture"
description: "Indicator primer · One picture to understand the three core indicators MACD, PE, PB — what they are, how to read them, how to use them. The first stop for beginners."
layout: ../../../layouts/BlogPost.astro
series: Stock Knowledge 101
series_short: Getting Started
free: true
level: beginner
lang: en
altLang: 中文
altHref: /blog/guide-indicators-101
pubDate: 2026-08-14
---

> This is the **intro** to *Stock Knowledge 101* — for readers who have never touched technical or valuation indicators. After this one page you'll have the overall framework needed for the later single-topic deep dives like kb09 / kb11 / kb26.

**One-line summary**: **MACD reads "momentum and direction", PE / PB read "how expensive it is"**. Use the trio together: right direction + enough momentum + reasonable valuation = a safer entry.

## 1. What does each of the three indicators do?

- **MACD** (technical · momentum)
  - Full name: Moving Average Convergence Divergence
  - What it does: draws the "gap between fast and slow moving averages" as a line + red/green bars, to read the **strength and direction of price up/down movement**
  - Where to see it: the panel below the price chart — DIF line / DEA line / red-green bars
  - How to use: golden cross = bullish, death cross = bearish, divergence = reversal warning (see [kb11] / [kb12] / [kb14])

- **PE (Price/Earnings ratio)** (fundamental · valuation)
  - Full name: Price / Earnings per Share (price ÷ earnings per share)
  - What it does: how many years to break even at current earnings (theoretical)
  - Reading the number: PE=10 → break even in 10 years ("cheap"); PE=100 → 100 years ("expensive")
  - How to use: compare within the same industry + PE percentile ([kb26]). **Lower is not always better** — depends on industry and growth

- **PB (Price/Book ratio)** (fundamental · valuation)
  - Full name: Price / Book value per Share (price ÷ net assets per share)
  - What it does: how much the market price marks up the company's "net worth"
  - Best for: asset-heavy sectors like banks, real estate, resources ([kb27])
  - How to use: PB<1 often means the market doubts asset quality; PB>5 is pricey (industry-dependent)

## 2. One picture to understand the trio

<div class="fig">
<svg viewBox="0 0 680 440" role="img" aria-label="MACD/PE/PB trio positioning chart">
  <text x="40" y="28" font-size="15" font-weight="bold" fill="#111827">Trio positioning: MACD (momentum) + PE (earnings valuation) + PB (asset valuation)</text>

  <!-- price -->
  <rect x="40" y="55" width="600" height="95" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="50" y="76" font-size="12" font-weight="bold" fill="#0f172a">① Price (candles + moving averages)</text>
  <path d="M60,140 C150,120 200,130 260,100 C320,72 380,90 440,70 C500,55 560,68 620,60" fill="none" stroke="#1f2937" stroke-width="2"/>
  <line x1="60" y1="120" x2="620" y2="120" stroke="#9ca3af" stroke-dasharray="3 3" stroke-width="1"/>
  <text x="50" y="148" font-size="10" fill="#6b7280">→ trend: moving averages ([kb09])</text>

  <!-- MACD -->
  <rect x="40" y="165" width="600" height="130" fill="#eff6ff" stroke="#93c5fd"/>
  <text x="50" y="186" font-size="12" font-weight="bold" fill="#1d4ed8">② MACD (momentum / direction)</text>

  <line x1="55" y1="252" x2="370" y2="252" stroke="#9ca3af" stroke-width="1"/>
  <text x="55" y="248" font-size="8" fill="#6b7280">0</text>
  <path d="M55,266 C100,263 135,258 175,250 C215,242 250,240 290,226 C320,216 350,214 370,210" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <path d="M55,258 C100,257 135,254 175,250 C215,247 250,248 290,237 C320,231 350,229 370,226" fill="none" stroke="#ea580c" stroke-width="2"/>
  <circle cx="175" cy="250" r="3.5" fill="#16a34a"/>
  <text x="128" y="238" font-size="9" fill="#16a34a">golden cross</text>
  <rect x="300" y="244" width="5" height="8" fill="#16a34a"/>
  <rect x="308" y="247" width="5" height="5" fill="#16a34a"/>
  <rect x="316" y="252" width="5" height="4" fill="#dc2626"/>
  <rect x="324" y="252" width="5" height="5" fill="#dc2626"/>
  <rect x="332" y="252" width="5" height="7" fill="#dc2626"/>
  <text x="55" y="284" font-size="9" fill="#6b7280">green bars↑=momentum up · red bars↓=momentum down</text>

  <text x="400" y="206" font-size="10.5" fill="#1f2937">DIF (fast) = EMA12 − EMA26</text>
  <text x="400" y="222" font-size="10.5" fill="#1f2937">DEA (slow) = 9-day smooth of DIF</text>
  <text x="400" y="238" font-size="10.5" fill="#1f2937">bars = 2 × (DIF − DEA)</text>
  <text x="400" y="257" font-size="10" fill="#16a34a">golden cross (DIF above DEA) = bullish</text>
  <text x="400" y="271" font-size="10" fill="#dc2626">death cross = bearish · divergence = reversal warning</text>
  <text x="400" y="287" font-size="9" fill="#6b7280">→ details: [kb11] (basics) / [kb12] (divergence) / [kb14] (reading)</text>

  <!-- valuation -->
  <rect x="40" y="310" width="290" height="100" fill="#fef3c7" stroke="#fcd34d"/>
  <text x="50" y="331" font-size="12" font-weight="bold" fill="#b45309">③ PE (earnings valuation)</text>
  <text x="50" y="351" font-size="11" fill="#1f2937">PE = price / earnings per share</text>
  <text x="50" y="368" font-size="10" fill="#6b7280">- smaller = "cheaper" (same industry)</text>
  <text x="50" y="383" font-size="10" fill="#6b7280">- PE percentile beats absolute value</text>
  <text x="50" y="400" font-size="10" fill="#6b7280">→ see [kb26]</text>

  <rect x="350" y="310" width="290" height="100" fill="#f0fdf4" stroke="#86efac"/>
  <text x="360" y="331" font-size="12" font-weight="bold" fill="#15803d">④ PB (asset valuation)</text>
  <text x="360" y="351" font-size="11" fill="#1f2937">PB = price / book value per share</text>
  <text x="360" y="368" font-size="10" fill="#6b7280">- banks / real estate / resources (asset-heavy)</text>
  <text x="360" y="383" font-size="10" fill="#6b7280">- PB&lt;1 not always cheap (asset quality)</text>
  <text x="360" y="400" font-size="10" fill="#6b7280">→ see [kb27]</text>
</svg>
<div class="cap">Fig: the "division of labor" of the three indicators — price / MACD for technicals, PE / PB for fundamental valuation</div>
</div>

## 3. How to use the trio

| Scenario | Trio signal | What to do |
|---|---|---|
| Uptrend + momentum strengthening + reasonable valuation | Price above MA60 + MACD golden cross above zero + PE in bottom 30% of 5-yr range | Good entry (ride the trend + cheap valuation) |
| Uptrend + momentum weakening | Price still above MA60 + MACD bearish divergence | Caution, prepare to reduce |
| Downtrend + cheap valuation | Price below MA60 + PE in bottom 20% of history | Don't catch a falling knife; wait for reversal signal (MACD golden cross) then scale in |
| Uptrend + overvaluation | Price strong + PE above 80% of history | Don't chase; if holding, consider taking profit in tranches |

## 4. Traps beginners fall into

1. **Blind faith in a single indicator**: buying on MACD golden cross or low PE alone is wrong — a golden cross can be a bounce midpoint, a low PE can be a "value trap" (declining industry).
2. **Comparing PE / PB across industries**: comparing a tech stock PE=30 with a bank PE=6 is meaningless. Each industry has its own reasonable range.
3. **Treating MACD as a predictor**: MACD is a **lagging** indicator — use it to **confirm** a trend, not to predict tops/bottoms.
4. **Looking at absolute value, not percentile**: is PE=15 expensive or cheap? It depends on its **percentile over the past 5 years**. Percentile matters more than the absolute number.

## 5. Suggested reading order after this

- Want "momentum" details → [kb11 MACD basics] → [kb12 MACD divergence] → [kb14 reading MACD]
- Want "valuation" details → [kb26 PE deep dive] → [kb27 PB / PS] → [kb28 PEG / DCF]
- Want "how to combine" → [kb19 indicator combo practice]
- Want "why just a few is enough" → [How to pick important indicators (meta-method)] (#)

> 📌 Remember in one line: **MACD reads direction and strength, PE / PB read expensiveness; combine the three and you beat any "buy on golden cross" rule.**

> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.
