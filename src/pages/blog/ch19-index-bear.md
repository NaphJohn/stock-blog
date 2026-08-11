---
title: "指数基金在熊市周期的投资策略"
description: "指数基金熊市回归估值策略：PE<30% 建仓分批加仓，PE 分级减仓至清仓。"
layout: ../../layouts/BlogPost.astro
series: 基金策略
free: false
lang: zh
altLang: English
altHref: /en/
pubDate: 2026-08-07
---

<div class="fig">
<svg viewBox="0 0 680 300" role="img" aria-label="指数基金熊市封面：PE百分位刻度，低区建仓、高区分批减仓">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">指数基金熊市：回归估值，低 PE% 建仓</text>
  <rect x="40" y="90" width="130" height="90" fill="#059669" opacity="0.20"/>
  <rect x="170" y="90" width="290" height="90" fill="#9ca3af" opacity="0.18"/>
  <rect x="460" y="90" width="180" height="90" fill="#dc2626" opacity="0.16"/>
  <text x="56" y="140" font-size="12" fill="#047857" font-weight="bold">建仓区</text>
  <text x="56" y="160" font-size="11" fill="#374151">PE 百分位 &lt; 30%</text>
  <text x="300" y="140" font-size="12" fill="#6b7280" font-weight="bold">持有区</text>
  <text x="300" y="160" font-size="11" fill="#374151">30% ~ 60%</text>
  <text x="540" y="140" font-size="12" fill="#b91c1c" font-weight="bold">减仓区</text>
  <text x="540" y="160" font-size="11" fill="#374151">PE% &gt; 60% 起分批减</text>
  <line x1="170" y1="90" x2="170" y2="180" stroke="#374151" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="460" y1="90" x2="460" y2="180" stroke="#374151" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="95" cy="135" r="6" fill="#059669"/>
  <text x="105" y="139" font-size="11" fill="#047857">当前（熊市低位）</text>
  <text x="40" y="220" font-size="11.5" fill="#6b7280">熊市市场悲观、参与少，用估值策略安心建仓——确定性高，代价是周期长。</text>
</svg>
<div class="cap">图：指数基金熊市仍用估值策略——以 PE 百分位为尺，低于 30% 进建仓区，高于 60% 起分批减仓。</div>
</div>

指数基金在熊市该如何投资呢？

最适合指数型基金的投资策略**仍然是估值策略**。

因为在熊市的时候，市场极度悲观，投资者参与很少，所以估值策略可以让我们比较安心地建仓。

虽然估值策略的投资周期很长，但是**其确定性却非常高**！

<div class="fig">
<svg viewBox="0 0 680 320" role="img" aria-label="指数基金熊市估值建仓：PE跌破30%建仓，净值每跌2%加仓且仓位递增0.1">
  <text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">估值建仓：PE&lt;30% 起步，每跌 2% 加仓、仓位 +0.1</text>
  <path d="M40,70 C140,72 200,80 270,120 C340,162 400,200 470,214 C540,226 600,230 640,232"
        fill="none" stroke="#5b3df2" stroke-width="2.5"/>
  <text x="44" y="62" font-size="11" fill="#374151">PE 百分位（随熊市下行）</text>
  <line x1="40" y1="160" x2="640" y2="160" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="470" y="154" font-size="11" fill="#b91c1c">PE 百分位 = 30%（建仓线）</text>
  <rect x="40" y="160" width="250" height="70" fill="#059669" opacity="0.10"/>
  <text x="56" y="200" font-size="11.5" fill="#047857" font-weight="bold">建仓区（PE &lt; 30%）</text>
  <path d="M40,290 C140,288 200,286 270,278 C340,268 400,254 470,250 C540,246 600,246 640,246"
        fill="none" stroke="#9ca3af" stroke-width="1.6" stroke-dasharray="4 3"/>
  <text x="44" y="282" font-size="11" fill="#6b7280">净值（每跌 2% 加仓，仓位 +0.1）→</text>
  <circle cx="270" cy="278" r="5" fill="#059669"/>
  <circle cx="370" cy="270" r="5" fill="#059669"/>
  <circle cx="470" cy="250" r="5" fill="#059669"/>
  <line x1="270" y1="283" x2="270" y2="296" stroke="#059669" stroke-width="2"/>
  <line x1="370" y1="275" x2="370" y2="296" stroke="#059669" stroke-width="2"/>
  <line x1="470" y1="255" x2="470" y2="296" stroke="#059669" stroke-width="2"/>
  <text x="44" y="312" font-size="11.5" fill="#047857">✓ PE&lt;30% 建仓　✓ 每跌 2% 加仓　✓ 每跌 2% 仓位 +0.1（越跌越买）</text>
</svg>
<div class="cap">图：PE 百分位跌破 30% 即进入建仓区，此后净值每下跌 2% 加仓一次，且每次加仓仓位递增 0.1——越跌买得越多。</div>
</div>

## 买入策略

- 在 **PE < 30%** 的时候，准备开始建仓；
- 净值每往下跌 **2%** 进行分批加仓；
- 每往下跌 2%，增加 **0.1** 的加仓仓位。

## 卖出策略

- PE 大于 **60%**，减仓 20%；
- PE 大于 **70%**，减仓 20%；
- PE 大于 **80%**，减仓 20%；如果净值短期内从最高点下跌超过 **8%**，清仓；
- PE 大于 **90%**，减仓 20%；如果净值短期内从最高点下跌超过 **10%** 的时候，清仓；
- PE 大于 **100%**，直接清仓。

> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。
