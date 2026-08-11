---
title: "主动基金在熊市周期的投资策略"
description: "熊市时间+空间双到位后分批定投，月度反弹超均值时减半仓波段操作，降低成本。"
layout: ../../layouts/BlogPost.astro
series: 基金策略
free: false
lang: zh
altLang: English
altHref: /en/
pubDate: 2026-08-08
---

<div class="fig">
<svg viewBox="0 0 680 300" role="img" aria-label="主动基金熊市时间到位+空间到位：微笑区间曲线，下跌时长约50%且回撤超均值时双到位买入">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">熊市「时间+空间」双到位：才开始分批定投</text>
  <line x1="40" y1="250" x2="640" y2="250" stroke="#6b7280" stroke-width="1.4"/>
  <text x="40" y="270" font-size="11" fill="#6b7280">时间 →（自上一轮净值新高起算的下跌时长）</text>
  <path d="M40,70 C140,70 200,72 260,110 C320,148 380,205 470,222 C540,235 600,238 640,240"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <text x="44" y="62" font-size="11" fill="#374151">上一轮净值新高</text>
  <line x1="340" y1="40" x2="340" y2="250" stroke="#059669" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="276" y="54" font-size="11" fill="#047857">时间到位 ≈ 微笑区间时长的 50%</text>
  <line x1="40" y1="200" x2="640" y2="200" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="470" y="194" font-size="11" fill="#b91c1c">空间到位：回撤 ≥ 熊市最大回撤均值</text>
  <rect x="340" y="200" width="300" height="50" fill="#059669" opacity="0.10"/>
  <text x="356" y="225" font-size="11.5" fill="#047857" font-weight="bold">双到位买入区（分批定投）</text>
  <circle cx="470" cy="222" r="5" fill="#059669"/>
  <line x1="470" y1="227" x2="470" y2="244" stroke="#059669" stroke-width="2"/>
  <circle cx="540" cy="231" r="5" fill="#059669"/>
  <line x1="540" y1="236" x2="540" y2="246" stroke="#059669" stroke-width="2"/>
</svg>
<div class="cap">图：以「上一轮净值新高」为起点，净值一路回落形成熊市。当下跌时长接近完整微笑区间的 50%（时间到位）、且回撤已触及历史熊市最大回撤均值（空间到位），二者交汇区即为分批定投的买入区。</div>
</div>

> 本节为《基金策略》专栏第 9 节。相对于震荡市，熊市的策略会更加保守——核心是**时间与空间双到位后分批定投**，而不是一次性买入。

主动基金在熊市周期如何投资？

相对于震荡市，熊市的策略会更加保守。

## 一、买入策略

在熊市阶段，主动型基金的买入要在**时间**和**空间**两个维度考虑。

那么是怎么定位空间和时间的呢？

### 1. 时间到位

我们要测算每一轮牛熊周期的创新高周期时间，也就是说每一个完整**微笑区间**的时间周期，然后计算最近创新高净值到现在已经下跌的时长。

我们认为下跌时间接近之前完整微笑区间时间周期的 **50%** 时，下跌基本接近时间周期底部的尾部阶段，这时就是**时间到位**的表现！

### 2. 空间到位

我们会测算历史每一轮熊市周期的最大回撤，计算历史熊市周期最大回撤均值，当本轮基金回撤**大于和接近熊市周期最大回撤均值**时，我们就认为**空间也基本到位**。

### 3. 分批定投

如果时间和空间同时都到位，那么我们还要观察的是当月月度跌幅表现情况。

当月度跌幅的表现**大于历史熊市平均月度跌幅**时，逐笔减仓，分批定投。

<div class="fig">
<svg viewBox="0 0 680 300" role="img" aria-label="熊市买入三条件：空间回撤达标、时间50%到位、月度跌幅放大，三者同时满足才分批定投">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">熊市买入三条件：同时满足才分批定投</text>
  <rect x="40" y="60" width="180" height="60" rx="8" fill="#059669" opacity="0.10"/>
  <text x="56" y="88" font-size="12" fill="#047857" font-weight="bold">① 空间到位</text>
  <text x="56" y="108" font-size="11" fill="#374151">回撤 &gt; 熊市最大回撤均值</text>
  <rect x="250" y="60" width="180" height="60" rx="8" fill="#5b3df2" opacity="0.10"/>
  <text x="266" y="88" font-size="12" fill="#4c1d95" font-weight="bold">② 时间到位</text>
  <text x="266" y="108" font-size="11" fill="#374151">下跌时长 ≈ 创新高时长50%</text>
  <rect x="460" y="60" width="180" height="60" rx="8" fill="#dc2626" opacity="0.10"/>
  <text x="476" y="88" font-size="12" fill="#b91c1c" font-weight="bold">③ 月度跌幅放大</text>
  <text x="476" y="108" font-size="11" fill="#374151">月度跌幅 &gt; 熊市月均跌幅</text>
  <text x="40" y="160" font-size="13" fill="#111827" text-anchor="middle" x="340">↓</text>
  <rect x="200" y="170" width="280" height="56" rx="8" fill="#111827" opacity="0.06"/>
  <text x="340" y="194" font-size="12.5" fill="#111827" font-weight="bold" text-anchor="middle">三者同时满足 → 分批定投（不一次买）</text>
  <text x="340" y="214" font-size="11" fill="#6b7280" text-anchor="middle">用次数分解，化解下跌风险与时间成本</text>
  <text x="40" y="262" font-size="11.5" fill="#6b7280">三步条件对应正文：回撤均值 / 50% 时长 / 月度跌幅阈值，缺一不可。</text>
</svg>
<div class="cap">图：熊市买入需空间（回撤达标）、时间（跌够 50% 时长）、月度跌幅（放大）三条件同时成立，才启动分批定投，而非一次性抄底。</div>
</div>

这里**必须要定投**。在很多地方我们都建议大家一次性买入，但是熊市必须要做的是分批定投，因为只有分批定投，才能用次数的分解来化解可能存在的下跌风险和时间成本。

具体买入条件是：

1. 该基金今年回撤 ＞ 历次熊市阶段最大回撤均值；
2. 本轮下跌时长 ≈ 历史最长创新高时长的 50%；
3. 月度跌幅 > 历次熊市阶段月度平均跌幅；
4. 分批加仓。

## 二、卖出策略

可能很多人不理解：熊市为什么还要有卖出策略，不是应该一直定投吗？

主要目的还是为了**增加投资者的信心，提高持基体验，降低持仓成本**。

因为熊市其实也有波动，我们会在这个基金**当月收益大于它历次熊市阶段平均正收益**的时候，减仓。

的策略是**减仓一半**。不全减的原因还是便宜，且有价值的筹码更应该珍惜，所以我们会在它继续表现较差时再次买入，在熊市的时候依然保持**半仓操作的波段策略**去降低成本和风险。

<div class="fig">
<svg viewBox="0 0 680 320" role="img" aria-label="熊市半仓波段：月度反弹超均值卖1/2，继续下跌买回，平均成本下移">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">熊市半仓波段：反弹超均值卖 1/2，跌回再买</text>
  <line x1="40" y1="70" x2="640" y2="70" stroke="#f59e0b" stroke-width="1.4" stroke-dasharray="7 5" opacity="0.85"/>
  <text x="470" y="64" font-size="11" fill="#b45309">卖出触发：月度收益 &gt; 熊市平均正收益</text>
  <path d="M40,200 C110,210 150,150 200,130 C260,108 300,160 350,175 C410,192 460,110 520,100 C580,90 620,150 660,175"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <circle cx="200" cy="130" r="6" fill="#dc2626"/>
  <text x="200" y="119" font-size="11" fill="#b91c1c" text-anchor="middle">卖1/2</text>
  <circle cx="460" cy="110" r="6" fill="#dc2626"/>
  <text x="460" y="99" font-size="11" fill="#b91c1c" text-anchor="middle">卖1/2</text>
  <circle cx="350" cy="175" r="6" fill="#059669"/>
  <text x="350" y="195" font-size="11" fill="#047857" text-anchor="middle">买回</text>
  <circle cx="600" cy="150" r="6" fill="#059669"/>
  <text x="600" y="140" font-size="11" fill="#047857" text-anchor="middle">买回</text>
  <polyline points="40,250 250,250 460,200 600,200 680,185" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <text x="44" y="272" font-size="11" fill="#b45309">平均成本（每轮买回后下移）</text>
  <text x="44" y="300" font-size="12" fill="#047857">✓ 不全清：便宜筹码珍惜　✓ 半仓波段：反弹卖一半、跌回买，反复摊低成本</text>
</svg>
<div class="cap">图：熊市也有波动——月度反弹超过熊市平均正收益时减一半（不全清，因筹码便宜），净值继续下跌再买回，每轮买回都把平均成本往下挪。</div>
</div>

具体卖出条件是：

1. 该基金月度收益 > 历次熊市阶段平均收益；
2. 卖出 1/2，保持半仓。

## 小结

熊市主动基金的操作精髓：**时间、空间双到位 + 月度跌幅放大，才开始分批定投**；遇到月度反弹超均值就卖一半，跌回来再买——用分批化解下跌风险，用半仓波段摊低成本。熊市最忌一把梭，分批定投才是活下去的关键。

> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。