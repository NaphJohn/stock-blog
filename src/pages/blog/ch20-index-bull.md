---
title: "指数基金在牛市周期的投资策略"
description: "指数基金牛市顺势持有+移动止盈：站上均线建仓、回踩不破加仓，按最高点回撤分级止盈。"
layout: ../../layouts/BlogPost.astro
series: 基金策略
free: false
lang: zh
altLang: English
altHref: /en/blog/ch20-index-bull
pubDate: 2026-08-12
---

> ⚠️ **草稿 · 待你确认**：你说要更新「牛市以及熊市」策略，但粘贴的是「震荡市 + 熊市」两段（已分别对应 ch18 / ch19）。本节是按同一「牛 → 震 → 熊」框架补齐的**牛市草稿**，待你提供确切的牛市买入 / 卖出规则后替换。

指数基金在牛市该如何投资呢？

牛市的底层逻辑和熊市、震荡市都不同——熊市赚估值回归、震荡市赚波动，**牛市赚的是趋势与情绪的正反馈**。这时候最忌讳两件事：一是过早下车把筹码丢掉，二是涨上头了无纪律地一把梭追高。

所以牛市的策略核心只有八个字：**顺势持有，移动止盈**。

<div class="fig">
<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="牛市建仓与加仓示意">
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
  <text class="mk" x="158" y="178" fill="#1a8a3a">① 站上20日线·建首仓</text>
  <circle cx="280" cy="150" r="5" fill="#1565c0"/>
  <text class="mk" x="288" y="148" fill="#1565c0">② 回踩20日线·加仓</text>
  <text class="lbl" x="410" y="100">③ 回踩60日线不破·再加仓</text>
  <text class="lbl" x="44" y="240">时间 →</text>
</svg>
</div>

## 一、买入策略

牛市的买入不是「抄底」，而是**确认趋势后上车、回踩时加仓**。

**前提条件**：指数站上 20 日线，且 20 / 60 / 120 日均线呈多头排列（短期线在长线之上），量能温和放大，回撤不破前低。

- （1）**站上 20 日线、趋势确认** → 建立首仓（1 倍基准）；
- （2）**回踩 20 日线不破、缩量企稳** → 加仓（再 1 倍）；
- （3）**回踩 60 日线不破、仍在上升通道** → 再加仓（牛市可略偏积极，但不超过你给该指数的计划仓位上限）。

> 牛市里「回调就是上车机会」，但前提是回调不破关键均线。一旦跌破 120 日线，说明趋势可能转弱，停止加仓、转入止盈纪律。

## 二、卖出策略（移动止盈）

牛市不止盈，利润容易坐过山车。我们用**「从最高点回撤」**做移动止盈线，而不是死守一个固定目标价：

- 从最高点回撤 **≤ 8%** → 继续持有，不动；
- 从最高点回撤 **8% ~ 15%** → 减仓 **1/3**；
- 从最高点回撤 **15% ~ 25%** → 再减 **1/2**（累计减掉约 2/3，留 1/3 观察）；
- 从最高点回撤 **> 25%** 或 **跌破 120 日线** → 清仓，转观察区等下一轮。

<div class="fig">
<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="移动止盈回撤分级示意">
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
  <line x1="40" y1="64"  x2="650" y2="64"  stroke="#1a8a3a" stroke-dasharray="5 4"/>
  <text class="band" x="500" y="60" fill="#1a8a3a">回撤 8% · 持有</text>
  <line x1="40" y1="92"  x2="650" y2="92"  stroke="#b8860b" stroke-dasharray="5 4"/>
  <text class="band" x="500" y="88" fill="#b8860b">回撤 15% · 减1/3</text>
  <line x1="40" y1="128" x2="650" y2="128" stroke="#c0392b" stroke-dasharray="5 4"/>
  <text class="band" x="500" y="124" fill="#c0392b">回撤 25% · 清仓</text>
  <circle cx="470" cy="70" r="4" fill="#b8860b"/>
  <text class="mk" x="300" y="150" fill="#444">回撤扩大 → 分级减仓，把利润留住</text>
</svg>
</div>

## 小结

牛市指数基金的操作精髓：**趋势确认后上车、回踩不破加仓；用「最高点回撤」做移动止盈，回撤 8% 起减、25% 清仓**。牛市不猜顶，但必须设回撤线——让你既吃得到主升浪，又不把利润全吐回去。

> 📚 同系列：震荡市见 [ch18 指数基金在震荡市周期的投资策略](/blog/ch18-index-shake) ｜ 熊市见 [ch19 指数基金在熊市周期的投资策略](/blog/ch19-index-bear)。

> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。
