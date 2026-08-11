---
title: "主动基金在震荡市周期的投资策略"
description: "震荡市买跌不买涨：年化收益未达 50% 时逢回撤一次性买入，达标后卖一半保持半仓波动。"
layout: ../../layouts/BlogPost.astro
series: 基金策略
free: false
lang: zh
altLang: English
altHref: /en/
pubDate: 2026-08-08
---

> 本节为《基金策略》专栏第 8 节。震荡市是资金的存量博弈市场，主动基金的策略要比牛市更保守——核心一句话：**买跌，不买涨**。

<div class="fig">
<svg viewBox="0 0 680 300" role="img" aria-label="主动基金震荡市买卖总览：年化收益50%线下方买跌、上方卖一半">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">主动基金震荡市：买跌不买涨，涨到位卖一半</text>
  <rect x="40" y="150" width="600" height="110" fill="#059669" opacity="0.10"/>
  <line x1="40" y1="150" x2="640" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="7 5"/>
  <text x="44" y="144" font-size="12" fill="#dc2626">年化收益 50% 基准线</text>
  <text x="60" y="178" font-size="12.5" fill="#b91c1c" font-weight="bold">卖1/2区：今年收益 &gt; 50% 年化 且 当月超均 → 卖一半保持半仓</text>
  <text x="60" y="252" font-size="12.5" fill="#047857" font-weight="bold">买跌区：今年收益 &lt; 50% 年化 且 月度回撤到位 → 一次性买入</text>
  <path d="M40,118 C120,92 170,96 230,138 C290,182 330,208 380,198 C440,186 470,148 520,118 C570,90 610,98 650,128"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <circle cx="380" cy="198" r="6" fill="#059669"/>
  <text x="380" y="218" font-size="12" fill="#059669" text-anchor="middle">买</text>
  <circle cx="520" cy="118" r="6" fill="#dc2626"/>
  <text x="520" y="106" font-size="12" fill="#dc2626" text-anchor="middle">卖1/2</text>
</svg>
<div class="cap">图：震荡市买卖总览——年化收益 50% 基准线下方为买跌区，上方为卖 1/2 区；净值回落到位买、涨到位卖一半。</div>
</div>

主动基金在震荡市周期如何投资呢？

不同于牛市的略微激进的投资策略，震荡市是一个资金的存量博弈市场，震荡市的策略我们会相对保守一些。

## 一、加仓策略（买入）

首先需要满足的就是**本年度收益小于年化平均收益的 50%**，确保后续有足够的上涨空间；

然后我们会选择当月 / 当周的收益处于**回撤阶段**的时候介入，且这个回撤要接近历次震荡市的月度平均回撤。

牛市我们可以买涨，但是震荡市和后面的熊市我们普遍情况下会选择**买跌**的方式，这样才能有效地扩大收益空间，来对冲盈利胜率下降的风险。

<div class="fig">
<svg viewBox="0 0 680 300" role="img" aria-label="震荡市买跌：月度回撤接近震荡市均值时买入">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">买跌：在月度回撤接近震荡市均值时介入</text>
  <line x1="40" y1="90" x2="640" y2="90" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="7 5" opacity="0.8"/>
  <text x="548" y="84" font-size="11" fill="#dc2626">年化50%线</text>
  <rect x="200" y="90" width="140" height="120" fill="#dc2626" opacity="0.06"/>
  <text x="208" y="222" font-size="11" fill="#6b7280">月度回撤区间（≈震荡市均值）</text>
  <path d="M40,120 C110,95 160,100 200,110 C250,160 290,182 340,176 C400,168 470,120 540,110 C600,102 630,108 660,112"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <circle cx="340" cy="176" r="7" fill="#059669"/>
  <text x="340" y="164" font-size="12" fill="#059669" text-anchor="middle">买跌</text>
  <line x1="340" y1="189" x2="340" y2="201" stroke="#059669" stroke-width="2"/>
  <text x="44" y="252" font-size="12" fill="#047857">✓ 今年收益 &lt; 年化50%　✓ 月度回撤 ≈ 震荡市月均　✓ 一次性买入</text>
  <text x="44" y="278" font-size="12" fill="#6b7280">买跌而非买涨，用更低价格扩大份额，对冲胜率下降风险。</text>
</svg>
<div class="cap">图：当净值回落到「年化收益 50% 线」下方、且月度回撤接近震荡市历史均值时，一次性买跌介入。</div>
</div>

具体的买入条件是：

1. 该基金今年收益 < 平均年化收益的 50%；
2. 当前月度回撤接近历次震荡市的月度平均回撤；
3. 一次性买入。

## 二、减仓策略（卖出）

震荡市场，我们不期望它能够超过平均年化收益、接近历史最大收益。

我们会在这个基金本年的收益**超过它过去年化平均收益 50%**的时候，并且它当月和当周的表现**超过了它历史震荡市阶段的月度平均收益**，卖掉 1/2，保持半仓。

主要原因还是震荡市往后衔接的是牛市，且在市场观点里，震荡市的另外一个叫法叫做**结构性牛市**，所以我们很难确定主动型基金会不会向牛市演化。

如果清仓，我们可能会用更高的成本在牛市买回来。

因此我们选择了一种在数学上盈利性价比更高的方式，叫做**半仓波动**——摊低成本，放大利润。

<div class="fig">
<svg viewBox="0 0 680 320" role="img" aria-label="半仓波动：卖一半保留半仓，回调再买回，反复摊低成本">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">半仓波动：涨到位卖一半，回调买回，摊低成本</text>
  <line x1="40" y1="70" x2="640" y2="70" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="7 5" opacity="0.85"/>
  <text x="470" y="64" font-size="11" fill="#dc2626">卖出触发：今年收益&gt;50%年化 &amp; 当月超均</text>
  <path d="M40,150 C120,95 160,60 180,55 C220,48 250,110 300,150 C350,190 390,205 430,200 C480,194 540,70 600,58 C640,52 662,100 680,120"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <circle cx="180" cy="55" r="6" fill="#dc2626"/>
  <text x="180" y="44" font-size="11" fill="#dc2626" text-anchor="middle">卖1/2</text>
  <circle cx="600" cy="58" r="6" fill="#dc2626"/>
  <text x="600" y="47" font-size="11" fill="#dc2626" text-anchor="middle">卖1/2</text>
  <circle cx="430" cy="200" r="6" fill="#059669"/>
  <text x="430" y="220" font-size="11" fill="#059669" text-anchor="middle">买回</text>
  <polyline points="40,252 250,252 430,218 600,218 680,192" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <text x="44" y="272" font-size="11" fill="#b45309">平均成本（每轮买回后下移）</text>
  <text x="44" y="300" font-size="12" fill="#047857">✓ 不清仓：避免牛市更高成本追回　✓ 半仓波动：震荡中反复摊低成本、放大利润</text>
</svg>
<div class="cap">图：净值涨过「卖出触发线」卖一半留半仓，回调再买回——每轮买回都把平均成本往下挪，用半仓波动放大利润。</div>
</div>

具体卖出条件是：

1. 该基金今年收益 > 50% 年化平均收益；
2. 当前月度收益 > 历次震荡市阶段月度平均收益；
3. 卖出 1/2，保持半仓。

## 小结

震荡市主动基金的操作精髓：**跌到位就一次买，涨到位就卖一半**。不贪历史最大收益，也不清仓踏空牛市——用半仓波动在震荡中摊低成本、放大利润，把"结构性牛市"的不确定性变成优势。

> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。
