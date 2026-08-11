---
title: "Buy/sell playbook for 4 fund types: sector / active / bond / index"
description: "The four core fund types for DCA and allocation — sector, active, bond, index — differ in what they track and how they move. This piece explains the differences and gives each a buy/sell discipline with concrete numbers."
layout: ../../../layouts/BlogPost.astro
series: Fund Strategy
free: true
lang: en
altLang: 中文
altHref: /blog/ch24-fund-types
pubDate: 2026-08-11
---

Doing DCA or building an allocation means dealing with four fund types: **sector funds, active funds, bond funds, index funds**. They all look like "funds", but what they track, how much they swing, and where the returns come from are completely different — so the buy/sell methods must differ too. This article clarifies the differences, then gives each a buy/sell discipline with **concrete numbers**.

> This is Section 24 (free) of the *Fund Strategy* series — an expansion and summary of Section 4 ("sector-fund strategy in a choppy market").

## 1. How the four fund types differ

| Type | Tracks / earns | Volatility | Best for | Example |
|---|---|---|---|---|
| **Sector fund** (thematic ETF) | A single industry/theme index (semis, new-energy, healthcare); earns **industry cycle + valuation** | High (most exciting) | "Follow the trend, fade the wobble" on strong sectors | Semiconductor ETF, Robotics ETF, Biotech ETF |
| **Index fund** (broad ETF) | A broad index (CSI 300, STAR 50, Nasdaq 100); earns **market β + valuation** | Medium | Long-term DCA, valuation grid | CSI 300 ETF, STAR 50 ETF, S&P 500 ETF |
| **Active fund** (active equity) | Manager's stock-picking; earns **excess return α** | Medium–High (manager-dependent) | Trust the manager; DCA + add on drawdown | Active equity fund |
| **Bond fund** (pure-bond / treasury ETF) | Bonds; earns **coupon + rate-driven gains** | Low (the anchor) | Portfolio defense; negatively correlated with equities | Pure-bond fund, Treasury ETF |

One-line memory: **sector = cycle, index = valuation, active = manager, bond = rates**.

## 2. Buy/sell discipline per type (with numbers)

### 1. Sector fund — three MA tranches in, three deviation tranches out (see Section 4)

- **Buy (3 conditions + 3 tranches)**: NAV no new low for 3 months, and last-3-month volume > **115%** of prior 3 months; 20/30/60-day lines bullish, 60-day flattening up; gain in prior 2 months < **20%**.
  - Pulls back **below 20-day, above 60-day** → add **1×**;
  - **below 30-day** → add **1.5×**;
  - **below 60-day, above 120-day** → add **2×**.
- **Sell (deviation rule)**: deviation from 20-day line **>5%** trim **1/3**; **>8%** trim another **1/3**; **>10%** close.

### 2. Index fund — valuation percentile + grid + DCA

- **Buy**: when PE/PB historical percentile **<30%**, **double the DCA**; every **5%** drop adds **1 unit** (grid); pullback to the **250-day line** adds 1×.
- **Sell**: valuation percentile **>70%** trim **1/3**; holding annualized return reaches **+15%** take profit **1/3**; break below the year-line with deteriorating fundamentals → close.
- **Cadence**: DCA base **1 unit/week**; grid step **5%**.

### 3. Bond fund — rate cycle + drawdown adds

- **Buy**: 10Y treasury yield **>2.6%** (rates high) add; NAV drawdown **>1.5%** add **1 unit**; widen credit spreads → allocate.
- **Sell**: 10Y yield **<2.0%** (rates bottom) trim; pure-bond annualized **>4.5%** take profit; new NAV high trim **1/3**.
- **Discipline**: pure-bond annualized target **3%–4%**; only add after drawdown **>2%** (avoid catching credit risk falling knives).

### 4. Active fund — manager + drawdown + DCA

- **Buy**: manager α stable (information ratio **>0.5**), max drawdown below peers, weekly DCA; NAV drawdown **>15%** add **1 unit**.
- **Sell**: new NAV high trim **10%**; manager change / style drift trim **1/3**; Sharpe **<0.5** move to watch.
- **Cadence**: DCA **1 unit/week**; drawdown-add threshold **15%**.

## 3. One-table cheat sheet

| Type | Buy / add | Sell / trim | Key numbers |
|---|---|---|---|
| Sector | Strong sector, wait for dip: below 20d → +1×; below 30d → +1.5×; below 60d → +2× | Deviation from 20d: 5%/8%/10% → trim 1/3 / 1/3 / close | 3mo no new low + vol >115% + prior-2mo gain <20% |
| Index | Valuation <30% double DCA; every −5% add 1 unit; year-line add 1× | Valuation >70% trim 1/3; +15% annualized take 1/3; break year-line close | DCA 1 unit/week; grid step 5% |
| Bond | 10Y >2.6% add; drawdown >1.5% add 1 unit | 10Y <2.0% trim; annualized >4.5% take profit; new high trim 1/3 | Pure-bond 3%–4%/yr; add only after >2% drawdown |
| Active | Stable α + DCA; drawdown >15% add 1 unit | New high trim 10%; manager change trim 1/3; Sharpe <0.5 watch | DCA 1 unit/week; drawdown threshold 15% |

## 4. How to combine them

- **Anchor**: bond funds (low vol, negatively correlated with stocks) form the base so the portfolio never panics.
- **Core β**: index funds for long-term DCA — capture the market's long-term rise.
- **Satellite α**: sector + active funds for punch, using the discipline above to sell-high/buy-low. Never go all-in.
- Sizing reference: the **5-3-2** rule from *How to Invest ¥100k* (50% defense / 30% arbitrage / 20% DCA) — turn "dare to sell when up, dare to buy when down" into a routine.

> ⚠️ This article is a framework illustration only and is not investment or trading advice. Markets are risky; decide with care.
