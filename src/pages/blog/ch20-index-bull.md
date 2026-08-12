---
title: "指数基金在牛市周期的投资策略"
description: "指数基金牛市就一直投：持续买入并长期持有，回踩不破加仓，用宽松回撤线做保护而非频繁交易。"
layout: ../../layouts/BlogPost.astro
series: 基金策略
free: false
lang: zh
altLang: English
altHref: /en/blog/ch20-index-bull
pubDate: 2026-08-12
---

> ⚠️ **草稿 · 待你确认**：本节按「牛 → 震 → 熊」框架补齐。你给的牛市核心规则是 **「牛市就一直投」**——即持续买入并长期持有、不因短期涨跌乱动。下文已据此重写，仍请你确认买卖数字是否到位。

指数基金在牛市该如何投资呢？

牛市的底层逻辑和熊市、震荡市都不同——熊市赚估值回归、震荡市赚波动，**牛市赚的是趋势与情绪的正反馈**。这时候最忌讳两件事：一是过早下车把筹码丢掉，二是涨上头了无纪律地一把梭追高。

所以牛市的策略核心只有六个字：**牛市，就一直投**。

<div class="fig">
<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="牛市持续投入与加仓示意">
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
  <text class="mk" x="158" y="178" fill="#1a8a3a">① 趋势确认·开始投</text>
  <circle cx="280" cy="150" r="5" fill="#1565c0"/>
  <text class="mk" x="288" y="148" fill="#1565c0">② 回踩20日线·加仓</text>
  <text class="lbl" x="410" y="100">③ 回踩60日线不破·再加</text>
  <text class="lbl" x="44" y="240">时间 →</text>
</svg>
</div>

## 一、买入策略：一直投，不空仓

牛市的买入不是「抄底」，而是**确认趋势后持续投入、回踩时加仓**——核心动作是「买」，不是「等」。

- （0）**底仓：趋势一确认就建**，别等「更便宜」；牛市里等回调常等来更高；
- （1）**常规节奏**：按定投/分批持续买，不因短期涨而恐高停手；
- （2）**回踩 20 日线不破、缩量企稳** → 加仓（比平时多买一笔）；
- （3）**回踩 60 日线不破、仍在上升通道** → 再加仓（牛市可略偏积极，但不超过计划仓位上限）。

> 一句话：**牛不言顶，但也不追尖**。用「持续投 + 回踩加」代替「猜顶空仓」，既吃到主升浪，又不至于一把梭在高点。

## 二、卖出策略：不轻易下车，只设一条保护线

牛市最怕的是「赚了点就跑、跑完又追高」。所以原则是：**大部分时间持有不动，只设一条宽松的回撤保护线**，触发才减。

- 从最高点回撤 **≤ 20%** → **不动，继续持有**（让利润随趋势奔跑）；
- 从最高点回撤 **20% ~ 25%** → 减仓 **1/3**（趋势可能转弱，先落袋一部分）；
- 从最高点回撤 **> 25%** 或 **跌破 120 日线（年线）** → 减至半仓或清仓，转观察区等下一轮。

<div class="fig">
<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="牛市宽松回撤保护示意">
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
  <text class="mk" x="416" y="42" fill="#d63031">最高点</text>
  <line x1="40" y1="108" x2="650" y2="108" stroke="#1a8a3a" stroke-dasharray="5 4"/>
  <text class="band" x="470" y="104" fill="#1a8a3a">回撤≤20% · 持有不动</text>
  <line x1="40" y1="128" x2="650" y2="128" stroke="#b8860b" stroke-dasharray="5 4"/>
  <text class="band" x="470" y="124" fill="#b8860b">回撤20~25% · 减1/3</text>
  <line x1="40" y1="160" x2="650" y2="160" stroke="#c0392b" stroke-dasharray="5 4"/>
  <text class="band" x="470" y="156" fill="#c0392b">回撤>25%/破年线 · 清仓</text>
  <circle cx="470" cy="70" r="4" fill="#b8860b"/>
  <text class="mk" x="300" y="150" fill="#444">牛市长持：多数时间不动，只守一条线</text>
</svg>
</div>

## 小结

牛市指数基金的操作精髓：**牛市就一直投——持续买入并长期持有，回踩不破加仓；用一条宽松的「最高点回撤 20%」线做保护，不频繁交易、不轻易下车**。把「定投 + 持有」做到底，让趋势替你赚钱。

> 📚 同系列：震荡市见 [ch18 指数基金在震荡市周期的投资策略](/blog/ch18-index-shake) ｜ 熊市见 [ch19 指数基金在熊市周期的投资策略](/blog/ch19-index-bear)。

> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。
