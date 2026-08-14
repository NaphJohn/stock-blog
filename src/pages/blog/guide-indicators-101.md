---
title: "指标入门：MACD / PE / PB 一张图讲清"
description: "指标入门 · 一张图讲清 MACD、PE、PB 三大基础指标是什么、怎么读、怎么用，新手第一站。"
layout: ../../layouts/BlogPost.astro
series: 股票知识小课堂
series_short: 入门指南
free: true
level: 入门
lang: zh
altLang: English
pubDate: 2026-08-14
---

> 本文是《股票知识小课堂》的**导论**——给完全没接触过技术指标 / 估值指标的新手。读完这一篇，你就有了后文 kb09 / kb11 / kb26 等"单项"详解所需的整体框架。

**一句话总结**：**MACD 看"动能和方向"，PE / PB 看"贵不贵"**。三件套组合起来用：方向对 + 动能足 + 估值合理 = 较安全买点。

## 一、三大指标各管什么

- **MACD**（技术面 · 动能指标）
  - 全称：指数平滑异同移动平均线（Moving Average Convergence Divergence）
  - 干什么：把"快慢两条均线的差"画成线 + 红绿柱，看**价格上涨 / 下跌的动能和方向**
  - 在哪看：股价图下面那一栏，DIF 线 / DEA 线 / 红绿柱
  - 怎么用：金叉偏多、死叉偏空、背离看反转（详见 [kb11] / [kb12] / [kb14]）

- **PE 市盈率**（基本面 · 估值指标）
  - 全称：Price / Earnings per Share（股价 ÷ 每股盈利）
  - 干什么：按当前盈利**多少年回本**（理论值）
  - 数字含义：PE=10 → 10 年回本（"便宜"）；PE=100 → 100 年（"贵"）
  - 怎么用：同行业内横向比 + PE 分位（[kb26]）。**不是越低越好**，要看行业属性和增速

- **PB 市净率**（基本面 · 估值指标）
  - 全称：Price / Book value per Share（股价 ÷ 每股净资产）
  - 干什么：市价相对公司"家底"贵了多少
  - 适用：银行、地产、资源等**重资产**行业（[kb27]）
  - 怎么用：PB<1 通常意味着市场认为资产可能有问题；PB>5 偏贵（行业而定）

## 二、一张图看懂三件套

<div class="fig">
<svg viewBox="0 0 680 380" role="img" aria-label="MACD/PE/PB 三大指标定位图">
  <text x="40" y="28" font-size="15" font-weight="bold" fill="#111827">三件套定位：MACD（动能） + PE（盈利估值） + PB（资产估值）</text>

  <!-- 股价区 -->
  <rect x="40" y="55" width="600" height="100" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="50" y="76" font-size="12" font-weight="bold" fill="#0f172a">① 股价（K线 + 均线）</text>
  <path d="M60,140 C150,120 200,130 260,100 C320,72 380,90 440,70 C500,55 560,68 620,60" fill="none" stroke="#1f2937" stroke-width="2"/>
  <line x1="60" y1="120" x2="620" y2="120" stroke="#9ca3af" stroke-dasharray="3 3" stroke-width="1"/>
  <text x="50" y="148" font-size="10" fill="#6b7280">→ 趋势看均线（[kb09]）</text>

  <!-- MACD 区 -->
  <rect x="40" y="165" width="600" height="80" fill="#eff6ff" stroke="#93c5fd"/>
  <text x="50" y="186" font-size="12" font-weight="bold" fill="#1d4ed8">② MACD（动能 / 方向）</text>
  <text x="50" y="208" font-size="11" fill="#1f2937">DIF 线 + DEA 线 + 红绿柱</text>
  <rect x="170" y="195" width="6" height="14" fill="#16a34a"/>
  <rect x="180" y="195" width="6" height="10" fill="#16a34a"/>
  <rect x="190" y="195" width="6" height="6" fill="#16a34a"/>
  <rect x="200" y="200" width="6" height="3" fill="#dc2626"/>
  <rect x="210" y="200" width="6" height="2" fill="#dc2626"/>
  <text x="240" y="215" font-size="10" fill="#6b7280">金叉 = 偏多 / 死叉 = 偏空 / 背离 = 反转预警</text>
  <text x="50" y="235" font-size="10" fill="#6b7280">→ 详解：[kb11]（基础）/ [kb12]（背离）/ [kb14]（看图）</text>

  <!-- 估值区 -->
  <rect x="40" y="255" width="290" height="100" fill="#fef3c7" stroke="#fcd34d"/>
  <text x="50" y="276" font-size="12" font-weight="bold" fill="#b45309">③ PE 市盈率（盈利估值）</text>
  <text x="50" y="296" font-size="11" fill="#1f2937">PE = 股价 / 每股收益</text>
  <text x="50" y="313" font-size="10" fill="#6b7280">- 数字越小越"便宜"（同行业对比）</text>
  <text x="50" y="328" font-size="10" fill="#6b7280">- PE 分位比绝对值更有参考价值</text>
  <text x="50" y="345" font-size="10" fill="#6b7280">→ 详见 [kb26]</text>

  <rect x="350" y="255" width="290" height="100" fill="#f0fdf4" stroke="#86efac"/>
  <text x="360" y="276" font-size="12" font-weight="bold" fill="#15803d">④ PB 市净率（资产估值）</text>
  <text x="360" y="296" font-size="11" fill="#1f2937">PB = 股价 / 每股净资产</text>
  <text x="360" y="313" font-size="10" fill="#6b7280">- 银行 / 地产 / 资源 等重资产必备</text>
  <text x="360" y="328" font-size="10" fill="#6b7280">- PB&lt;1 不一定便宜（看资产质量）</text>
  <text x="360" y="345" font-size="10" fill="#6b7280">→ 详见 [kb27]</text>
</svg>
<div class="cap">图：三大指标的"位置分工"——股价 / MACD 看技术面，PE / PB 看基本面估值</div>
</div>

## 三、怎么用这"三件套"

| 情景 | 三件套信号 | 怎么动 |
|---|---|---|
| 趋势向上 + 动能转强 + 估值合理 | 价格在 MA60 上 + MACD 零轴上金叉 + PE 处于近 5 年 30% 分位以下 | 较优买点（顺大势 + 低估值） |
| 趋势向上 + 动能转弱 | 价格还在 MA60 上 + MACD 顶背离 | 警惕，准备减仓 |
| 趋势向下 + 估值便宜 | 价格跌破 MA60 + PE 历史 20% 分位以下 | 不接飞刀，等反转信号（MACD 金叉）再分批 |
| 趋势向上 + 估值高估 | 价格强势 + PE 历史 80% 分位以上 | 不追高，已有仓考虑分批止盈 |

## 四、新手最容易踩的坑

1. **单指标盲信**：MACD 金叉就买、PE 低就买，都是错的——金叉可能是反弹中继、PE 低可能是"价值陷阱"（行业在衰退）。
2. **PE / PB 不分行业**：把科技股 PE=30 跟银行 PE=6 放一起比，毫无意义。每个行业有自己的合理区间。
3. **MACD 当预测工具**：MACD 是**滞后**指标，用来**确认**趋势，不用来预测顶部 / 底部。
4. **只看绝对值不看分位**：当前 PE=15 算贵还是便宜？答案取决于它**在历史 5 年里处于什么分位**。分位比绝对值重要。

## 五、读完这篇之后，建议阅读顺序

- 想看"动能"细节 → [kb11 MACD 基础] → [kb12 MACD 背离] → [kb14 MACD 看图]
- 想看"估值"细节 → [kb26 PE 详解] → [kb27 PB / PS] → [kb28 PEG / DCF]
- 想看"怎么组合" → [kb19 指标组合实战]
- 想看"为什么只学这几个就够" → [如何挑选重要指标（元方法）](#)

> 📌 一句话记住：**MACD 看方向和力度，PE / PB 看贵不贵，三者一组合，胜过任何"金叉买入"**。

> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。
