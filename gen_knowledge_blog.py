#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate 31 bilingual (zh/en) blog chapters from KNOWLEDGE in fetch_stock_signals.py.
Output: src/pages/blog/kb01..kb31.md  and  src/pages/en/blog/kb01..kb31.md
Each chapter: frontmatter + points + a diagram (reuse 4 detailed SVGs / tag-template SVG) + tip + disclaimer.
"""
import os, re

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC_PY = os.path.join(os.path.dirname(ROOT), "fetch_stock_signals.py")
BLOG = os.path.join(ROOT, "src", "pages", "blog")
ENBLOG = os.path.join(ROOT, "src", "pages", "en", "blog")

# ---- 1. extract KNOWLEDGE list safely (no side effects) ----
text = open(SRC_PY, encoding="utf-8").read()
start = text.index("KNOWLEDGE = [")
depth = 0
end = None
for j in range(start, len(text)):
    if text[j] == "[":
        depth += 1
    elif text[j] == "]":
        depth -= 1
        if depth == 0:
            end = j + 1
            break
block = text[start:end]
ns = {}
exec(block, ns)
KNOWLEDGE = ns["KNOWLEDGE"]
N = len(KNOWLEDGE)

# ---- 2. English translations (parallel, same order) ----
EN = [
 {"tag":"Candlesticks","title":"What a candle looks like: bullish, bearish, body, shadows",
  "points":["A candle = one time unit (day/week/min) summarised by open/high/low/close.",
   "Bullish (close>open): A-shares usually red/hollow; bearish (close<open): green/filled.",
   "Body = rectangle from open to close; upper shadow = high to body; lower shadow = body to low.",
   "Longer body = stronger one-sided move; longer shadow = more overhead/underlying pressure."],
  "tip":"Red up, green down in A-shares; body length = strength, shadow length = battle."},
 {"tag":"Candlesticks","title":"The market psychology of a single candle",
  "points":["Long white candle with no shadows: relentless buying, bulls in control (launch/main rise).",
   "Long black candle: panic selling or distribution; weight with location (dangerous at highs).",
   "Doji (open≈close): buyers vs sellers stalemate, often a reversal warning.",
   "Long lower shadow (hammer) = strong support at lows; long upper shadow = fading momentum at highs."],
  "tip":"Same candle means opposite at lows vs highs — read location first, then shape."},
 {"tag":"Candle patterns","title":"Bullish/Bearish engulfing & doji",
  "points":["Bullish engulfing: a large green candle fully covers the prior red near a bottom → bear-to-bull.",
   "Bearish engulfing: a large red covers the prior green near a top → bull-to-bear.",
   "Doji at the end of a long trend, confirmed by the next session, raises reversal odds.",
   "Pattern signals need volume and trend context; an isolated candle means little."],
  "tip":"Engulfing = body covers; star = confirmation; only reliable within a trend."},
 {"tag":"Candle patterns","title":"Hammer, hanging man, morning/evening star",
  "points":["Hammer: long lower shadow, small body at lows → dip rejected, bullish.",
   "Hanging man: long lower shadow at highs → looks stable but risky, confirm with a breakdown next.",
   "Morning star (red→doji→green) = bottom reversal; evening star is the top mirror.",
   "These are most reliable near key support/resistance."],
  "tip":"Location > shape; morning star at lows, evening star at highs; reversed ones are traps."},
 {"tag":"Trend","title":"How to draw trend lines & use channels",
  "points":["Up trend line: connect successively higher lows; valid when price holds above it.",
   "Down trend line: connect successively lower highs; acts as resistance on rallies.",
   "Channel = trend line + parallel (upper rail = resistance, lower rail = support) for buy-low/sell-high.",
   "A valid breakdown/breakout (volume + close) often signals a trend reversal."],
  "tip":"Trend is your friend: in an up channel, buy the lower rail — steadier than calling tops."},
 {"tag":"Trend","title":"How to find support & resistance",
  "points":["Prior highs/lows: dense historical trading zones naturally become support(below)/resistance(above).",
   "Round numbers and moving averages (e.g., 60-day) often act as psychological levels.",
   "Gaps: the lower edge of an up-gap is support; the upper edge of a down-gap is resistance.",
   "Once support is broken it flips to resistance, and vice versa."],
  "tip":"Find S/R by seeing where people previously traded, not by drawing lines from nothing."},
 {"tag":"Volume-Price","title":"Volume & basic volume-price relationships",
  "points":["Volume = shares traded per unit time, reflecting participation.",
   "Price up + volume up: healthy, funded rally; price up + volume down: weak, caution.",
   "Price down + volume up: panic or distribution; price down + volume down: selling eases, may stabilise.",
   "Low-volume launch at lows, high-volume stall at highs are the two key turning signals."],
  "tip":"Price is the result, volume is the evidence; rallies without volume are often fake breakouts."},
 {"tag":"Volume-Price","title":"Volume-price divergence: an early warning",
  "points":["Top divergence: price makes new highs but volume/momentum fails to → upside exhaustion.",
   "Bottom divergence: price makes new lows but volume/indicator doesn't → downside easing, possible bottom.",
   "Divergence isn't an instant reversal but a warning that the trend may be loosening; wait for confirmation.",
   "MACD/RSI divergences are more objective than volume alone; watch both."],
  "tip":"Divergence = price fights the evidence; when they fight long enough, one side yields."},
 {"tag":"Moving Averages","title":"MA system: bullish/bearish alignment",
  "points":["MA(N) = average of last N closes, smoothing noise; common MA5/20/60/120/250.",
   "Bullish alignment: short MAs above long (5>20>60) and rising → strong uptrend.",
   "Bearish alignment: short below long and falling → weak downtrend.",
   "MAs themselves are dynamic support/resistance (pullback to MA20 that holds is often a buy)."],
  "tip":"Hold through bullish alignment, lighten in bearish; MAs are moving support/resistance."},
 {"tag":"Moving Averages","title":"Golden/Death cross & MA in practice",
  "points":["Golden cross: short MA crosses above long (e.g., MA5 over MA20) → bullish; death cross opposite.",
   "Larger cycles = steadier but laggier; smaller = faster but noisier; combine.",
   "Price above MA60 = mid-term bullish; below MA250 (year line) = often a bear structure.",
   "Practice: pullback to a key MA that holds + shrinking volume = good entry; excess deviation tends to fall back."],
  "tip":"Golden cross buy / death cross sell is the simplified version; what really works is the pullback onto the MA."},
 {"tag":"Indicators","title":"MACD: DIF, DEA, red/green bars",
  "points":["MACD measures momentum via the gap between fast and slow MAs.",
   "DIF(fast)=EMA12−EMA26; DEA(slow)=9-day smooth of DIF; bars=2×(DIF−DEA).",
   "Growing red bars = strengthening bull momentum; growing green = bear; shrinking bars = fading momentum.",
   "Above the zero line is bullish territory, below is bearish; a cross above the line is more reliable."],
  "tip":"MACD trio: line for direction (DIF/DEA), bars for strength, axis for territory."},
 {"tag":"Indicators","title":"MACD crosses & divergence",
  "points":["Golden cross (DIF over DEA, esp. above zero) = bullish; death cross opposite.",
   "Top divergence: price new high but DIF/bars not → upside weakening, watch for top.",
   "Bottom divergence: price new low but DIF/bars not → downside weakening, watch for bottom.",
   "Divergence often leads price reversal by days~weeks; it's a left-side warning tool."],
  "tip":"MACD's strongest use is divergence, not the bare cross; divergence + low-volume confirmation is steadier."},
 {"tag":"Indicators","title":"DMI trend-direction indicator",
  "points":["DMI has +DI(up momentum), −DI(down momentum), ADX(trend strength).",
   "+DI over −DI = bullish cross; −DI over +DI = bearish cross.",
   "ADX>25(20): trend strong, trend-following works; ADX<20: range-bound, don't force it.",
   "ADX falling from high = trend weakening; ADX>50 turning = late-stage warning."],
  "tip":"ADX tells whether to do trend at all; +DI/−DI tell the direction; pair with MA/volume."},
 {"tag":"Indicators","title":"Reading the MACD chart",
  "points":["DIF(fast)=EMA12−EMA26 most sensitive; DEA(slow)=9-day smooth for confirmation; bars=2×(DIF−DEA).",
   "Golden cross (DIF over DEA) bullish, death cross bearish; crosses above zero are more reliable.",
   "Growing red bars = bull momentum building; green = bear; shrinking bars = momentum fading (possible turn).",
   "Strongest use is divergence: price new high but DIF/bars not = top warning; new low but not = bottom."],
  "tip":"MACD essence is 'divergence + zero-line position', not blind cross-chasing; it lags price, used to confirm."},
 {"tag":"Volume-Price","title":"Reading the volume chart",
  "points":["Volume = shares per unit time, participation; price is result, volume is evidence, no-volume rallies fake.",
   "Price up + vol up = healthy; up + vol down = weakening; down + vol up = panic; down + vol down = easing.",
   "Low-volume launch at lows = possible start; high-volume stall at highs = distribution warning.",
   "Volume divergence: price new high but volume/momentum not = exhaustion; compare to its own recent average."],
  "tip":"Volume verifies the trend; any breakout without volume support, treat as fake first; exclude ex-rights days."},
 {"tag":"Indicators","title":"RSI relative strength",
  "points":["RSI = average gain/(avg gain+avg loss) over a period, 0~100, commonly 14.",
   "Overbought: RSI>70 (strong but beware pullback); oversold: RSI<30 (weak but may bounce).",
   "RSI around 50 = balance; crossing above 50 bullish, below bearish.",
   "RSI divergence (price new high but RSI not) is a classic top warning."],
  "tip":"RSI>70 don't chase, <30 don't panic-sell; it tells you if it's hot, not if it's turning."},
 {"tag":"Indicators","title":"KDJ stochastic",
  "points":["KDJ has K, D, J lines; more sensitive to short-term turns than MACD.",
   "Overbought: K,D>80; oversold: K,D<20; J can be ±, shows extremes.",
   "Golden cross (K over D, more reliable at lows) / death cross (riskier at highs).",
   "Weakness: great in ranges, but prone to 'pinning' (stays overbought while still rising) in trends."],
  "tip":"KDJ suits range-bound dip-buying/top-fading; in a trend it pins, don't fight the signal."},
 {"tag":"Indicators","title":"BOLL Bollinger Bands",
  "points":["BOLL = mid rail (20-day MA) ± 2 standard deviations → upper/mid/lower channel.",
   "Touch lower rail = relatively cheap (oversold); touch upper = relatively expensive (overbought).",
   "Expansion (wider band) = rising volatility, trend may start; contraction = narrowing vol, imminent change.",
   "Mid rail is a strength divider: above = bullish, below = bearish."],
  "tip":"BOLL contraction always precedes a move; expansion shows direction; touching a rail isn't a reversal, confirm."},
 {"tag":"Indicators","title":"Combining indicators: MACD + volume + MA",
  "points":["Single indicators fake out; combining raises hit rate: trend=MA, momentum=MACD, participation=volume.",
   "Classic bull resonance: price above year/60-day + MACD golden cross above zero + volume breakout.",
   "Classic top resonance: high-volume stall at highs + MACD divergence + RSI overbought + break of short MA.",
   "Any indicator lags price — use to confirm, not predict; position discipline is the core."],
  "tip":"Act only on multi-indicator resonance; when they conflict, wait, don't guess."},
 {"tag":"Financials","title":"Three financial statements overview",
  "points":["Income statement: profit over a period (revenue−cost−expense=profit), shows earning power.",
   "Balance sheet: the 'house' at a point (assets=liabilities+equity), shows financial structure.",
   "Cash flow statement: cash in/out, split operating/investing/financing, shows real money.",
   "Read all three together: good profit but no cash (high receivables) = paper riches, beware."],
  "tip":"Income statement tells a story, cash flow tells the truth, balance sheet is the foundation."},
 {"tag":"Financials","title":"Reading the income statement",
  "points":["Core chain: revenue → COGS → gross margin → three expenses → operating profit → net profit.",
   "Gross margin=(revenue−COGS)/revenue; higher = more pricing power/moat.",
   "Look at attributable net profit, not total profit (the former is what shareholders earn).",
   "Watch trend and non-recurring gains (one-off asset sales should be stripped)."],
  "tip":"Gross margin decides life-or-death; attributable net = ownership; discount one-off gains."},
 {"tag":"Financials","title":"Reading the balance sheet",
  "points":["Left = assets (where money went): cash, receivables, inventory, fixed assets, goodwill.",
   "Right = liabilities + equity (where money came from): debt, payables, retained earnings.",
   "Asset-liability ratio = total liabilities/total assets; >70% = heavy repayment pressure (varies by industry).",
   "Beware 'high cash + high debt' and huge goodwill (impairment landmine)."],
  "tip":"Three things: is leverage too high, is cash real, is goodwill a mine."},
 {"tag":"Financials","title":"Reading the cash flow statement",
  "points":["Operating cash flow: main-business cash; sustained positive = healthy; negative = warning.",
   "Investing cash flow: expansion/M&A usually negative (spending); judge with strategy.",
   "Financing cash flow: borrowing/issuance positive, dividends/repayment negative.",
   "Free cash flow = operating CFO − capex; long-term positive and growing = quality cash cow."],
  "tip":"Net profit can be dressed up; operating cash flow is hard to fake; long divergence needs explanation."},
 {"tag":"Financials","title":"ROE and DuPont analysis",
  "points":["ROE = net profit/equity; how much a shareholder earns per 1 yuan, Buffett's favourite.",
   "DuPont: ROE = net margin × asset turnover × equity multiplier (leverage).",
   "High ROE from high margin (Moutai) is steadiest; from high leverage (banks) carries risk.",
   "Long-term (e.g., 5 yrs) ROE>15% and stable usually flags a good business."],
  "tip":"Good company = high ROE and sustainable; use DuPont to see which of margin/efficiency/leverage props it up."},
 {"tag":"Financials","title":"Growth & quality metrics",
  "points":["Revenue/earnings growth: is the company getting bigger and stronger; watch base effects.",
   "Operating CFO / net profit (cash-collection ratio): closer to 1 better, profit has cash behind it.",
   "R&D expense ratio: for tech/semis, input intensity decides future competitiveness.",
   "Receivables growing faster than revenue = possibly inflating sales on credit; quality suspect."],
  "tip":"Growth = growth rate, quality = cash-collection ratio; receivables outrunning revenue is a red flag."},
 {"tag":"Valuation","title":"PE price-earnings ratio",
  "points":["PE = price/eps; years to recoup at current earnings, lower = 'cheaper' (in theory).",
   "Static PE (last year), TTM (trailing 4Q, most used), dynamic (forecast this year).",
   "Cyclical stocks show lowest PE at profit peaks — a trap; loss-makers have no meaningful PE.",
   "PE only compares within the same industry and with growth; an isolated number means nothing."],
  "tip":"Low PE ≠ cheap: cyclical PE is lowest at peaks (most dangerous); high-growth PE ≠ expensive."},
 {"tag":"Valuation","title":"PB, PS & cross-sectional valuation",
  "points":["PB = price/book value; suits asset-heavy sectors (banks/property) for liquidation value.",
   "PS = price/sales; suits not-yet-profitable high-growth (early SaaS/e-commerce).",
   "Never compare PE across industries; compare same track + historical percentile.",
   "Valuation percentile: where current PE/PB sits in its own 10%~90% history, more practical than absolute."],
  "tip":"Pick the right ruler: profit-stable → PE, asset-heavy → PB, unprofitable → PS; watch historical percentile."},
 {"tag":"Valuation","title":"PEG and DCF, simply",
  "points":["PEG = PE / earnings growth (%), PEG<1 often seen as growth-matched valuation.",
   "PEG ties 'expensive or not' to 'grows fast or not', fairer than PE alone.",
   "DCF = discount future annual free cash flows to today; ultimate model but assumptions are very sensitive.",
   "Practice: rough-screen with PEG, set zones by historical valuation percentile, more operable than precise DCF."],
  "tip":"PEG<1 = good value-for-growth; DCF tells you valuation is future cash flows, but don't worship precise numbers."},
 {"tag":"Dividends","title":"Dividends, yield & buybacks",
  "points":["Dividend yield = dividend per share / price, cash return; high-dividend stocks are often anchors.",
   "Payout ratio = dividend/net profit, how much profit returned to shareholders.",
   "Buyback: company repurchases its own stock, directly lifts per-share value; rising in A-shares.",
   "High yield ≠ blind buy: when price crashes yield looks inflated; confirm dividend is sustainable."],
  "tip":"Yield shows cash return, but first ask is the dividend sustainable; buyback is another form of reward."},
 {"tag":"Position","title":"Position sizing & staggered buying",
  "points":["Staggered buying: don't go all-in; split 3~5 tranches at different prices/times to average down.",
   "Single-name cap: one stock ideally ≤10%~15% of portfolio to avoid one landmine sinking it.",
   "Pyramid adding: the lower it falls, the larger each tranche; inverted pyramid is most dangerous.",
   "Keep cash: always reserve 10%~30% for black swans and opportunities."],
  "tip":"Never fill the first tranche; position management keeps you alive more than maximising gains."},
 {"tag":"Risk","title":"Stop-loss, take-profit & common pitfalls",
  "points":["Stop loss: set in advance where you admit the call was wrong; execute mechanically (e.g., −8%~−10%).",
   "Take profit: when target reached, trim in batches (e.g., sell 1/3 at +30%); don't ride the round-trip.",
   "Trap 1 chase rallies/sell panics: emotional trading is the enemy.",
   "Trap 2 confirmation bias; Trap 3 all-in with no cash buffer."],
  "tip":"Discipline > prediction: think 'what if I'm wrong' before 'how much I'll make if right'."},
]

assert len(EN) == N, f"EN len {len(EN)} != {N}"

# ---- 3. detailed English diagrams (indices 11,12,13,14) ----
EN_DET = {}
EN_DET[11] = """<svg viewBox="0 0 680 300" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,system-ui,sans-serif">
  <rect x="0" y="0" width="680" height="300" fill="#ffffff"/>
  <text x="36" y="22" font-size="13" font-weight="bold" fill="#222">MACD divergence: bearish(top) vs bullish(bottom)</text>
  <text x="36" y="44" font-size="12" font-weight="bold" fill="#c0392b">Bearish divergence (price high / MACD not → sell)</text>
  <line x1="40" y1="52" x2="330" y2="52" stroke="#eee"/>
  <line x1="40" y1="135" x2="330" y2="135" stroke="#eee"/>
  <polyline points="50,120 100,95 150,70 210,100 270,85 320,60" fill="none" stroke="#333" stroke-width="2"/>
  <circle cx="150" cy="70" r="4" fill="#333"/><text x="150" y="63" font-size="10" fill="#333" text-anchor="middle">P high①</text>
  <circle cx="320" cy="60" r="4" fill="#333"/><text x="320" y="53" font-size="10" fill="#c0392b" text-anchor="middle">P high②</text>
  <line x1="36" y1="150" x2="330" y2="150" stroke="#ddd"/>
  <text x="36" y="168" font-size="11" font-weight="bold" fill="#333">MACD</text>
  <line x1="40" y1="215" x2="330" y2="215" stroke="#999" stroke-dasharray="4 3"/>
  <text x="300" y="210" font-size="10" fill="#999">zero</text>
  <polyline points="50,245 100,230 150,205 210,235 270,225 320,235" fill="none" stroke="#185fa5" stroke-width="2"/>
  <circle cx="150" cy="205" r="4" fill="#e24b4a"/><text x="150" y="198" font-size="10" fill="#e24b4a" text-anchor="middle">MACD high①</text>
  <circle cx="320" cy="235" r="4" fill="#e24b4a"/><text x="320" y="250" font-size="10" fill="#e24b4a" text-anchor="middle">MACD high②(lower)</text>
  <line x1="320" y1="64" x2="320" y2="228" stroke="#c0392b" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="50" y="290" font-size="11" fill="#c0392b" font-weight="bold">Price↑ high but MACD↓ high → upside exhaustion</text>
  <text x="360" y="44" font-size="12" font-weight="bold" fill="#1a8a3a">Bullish divergence (price low / MACD not → buy)</text>
  <line x1="370" y1="52" x2="660" y2="52" stroke="#eee"/>
  <line x1="370" y1="135" x2="660" y2="135" stroke="#eee"/>
  <polyline points="380,90 430,110 480,130 540,105 600,120 660,140" fill="none" stroke="#333" stroke-width="2"/>
  <circle cx="480" cy="130" r="4" fill="#333"/><text x="480" y="123" font-size="10" fill="#333" text-anchor="middle">P low①</text>
  <circle cx="660" cy="140" r="4" fill="#333"/><text x="660" y="133" font-size="10" fill="#1a8a3a" text-anchor="middle">P low②</text>
  <line x1="360" y1="150" x2="660" y2="150" stroke="#ddd"/>
  <text x="360" y="168" font-size="11" font-weight="bold" fill="#333">MACD</text>
  <line x1="370" y1="215" x2="660" y2="215" stroke="#999" stroke-dasharray="4 3"/>
  <polyline points="380,190 430,210 480,235 540,210 600,225 660,210" fill="none" stroke="#185fa5" stroke-width="2"/>
  <circle cx="480" cy="235" r="4" fill="#e24b4a"/><text x="480" y="248" font-size="10" fill="#e24b4a" text-anchor="middle">MACD low①</text>
  <circle cx="660" cy="210" r="4" fill="#e24b4a"/><text x="660" y="203" font-size="10" fill="#e24b4a" text-anchor="middle">MACD low②(higher)</text>
  <line x1="660" y1="144" x2="660" y2="214" stroke="#1a8a3a" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="380" y="290" font-size="11" fill="#1a8a3a" font-weight="bold">Price↓ low but MACD not new low → downside easing</text>
</svg>"""
EN_DET[12] = """<svg viewBox="0 0 680 240" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,system-ui,sans-serif">
  <rect width="680" height="240" fill="#ffffff"/>
  <text x="34" y="20" font-size="12.5" font-weight="bold" fill="#222">DMI: +DI(blue) / −DI(red) / ADX(purple)</text>
  <line x1="40" y1="120" x2="650" y2="120" stroke="#eee"/>
  <line x1="40" y1="80" x2="650" y2="80" stroke="#8b3fd8" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="556" y="76" font-size="9.5" fill="#8b3fd8">ADX=25</text>
  <polyline points="60,150 130,146 200,140 270,124 340,104 410,118 480,124 550,128 620,132" fill="none" stroke="#1a6fd6" stroke-width="2.5"/>
  <text x="350" y="98" font-size="10" fill="#1a6fd6" font-weight="bold">+DI</text>
  <polyline points="60,110 130,116 200,122 270,138 340,158 410,146 480,140 550,136 620,132" fill="none" stroke="#d83a3a" stroke-width="2.5"/>
  <text x="120" y="106" font-size="10" fill="#d83a3a" font-weight="bold">−DI</text>
  <polyline points="60,200 130,198 200,196 270,188 340,172 410,162 480,166 550,170 620,174" fill="none" stroke="#8b3fd8" stroke-width="2.5"/>
  <text x="430" y="158" font-size="10" fill="#8b3fd8" font-weight="bold">ADX</text>
  <circle cx="340" cy="104" r="5" fill="#1aa05a" stroke="#fff" stroke-width="1.5"/>
  <text x="200" y="60" font-size="10" fill="#1aa05a" font-weight="bold">+DI crosses above −DI → bullish cross</text>
  <rect x="340" y="40" width="310" height="78" fill="#f3ecff" opacity="0.5"/>
  <text x="430" y="56" font-size="9.5" fill="#8b3fd8" font-weight="bold">ADX&gt;25 trend confirmed</text>
</svg>"""
EN_DET[13] = """<svg viewBox="0 0 680 250" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,system-ui,sans-serif">
  <rect width="680" height="250" fill="#ffffff"/>
  <text x="34" y="20" font-size="12.5" font-weight="bold" fill="#222">MACD chart: DIF(blue)/DEA(orange) + bars</text>
  <line x1="40" y1="100" x2="650" y2="100" stroke="#ccc" stroke-dasharray="4 3"/>
  <text x="600" y="96" font-size="9" fill="#999">zero</text>
  <polyline points="50,115 120,108 190,120 260,100 330,86 400,98 470,92 540,106 610,96" fill="none" stroke="#1a6fd6" stroke-width="2.5"/>
  <polyline points="50,120 120,116 190,122 260,110 330,100 400,106 470,102 540,112 610,104" fill="none" stroke="#e08800" stroke-width="2.5"/>
  <text x="470" y="88" font-size="9.5" fill="#1a6fd6" font-weight="bold">DIF</text>
  <text x="500" y="118" font-size="9.5" fill="#e08800" font-weight="bold">DEA</text>
  <circle cx="330" cy="86" r="5" fill="#1aa05a" stroke="#fff" stroke-width="1.5"/>
  <text x="210" y="80" font-size="9.5" fill="#1aa05a" font-weight="bold">golden cross ↑</text>
  <line x1="40" y1="180" x2="650" y2="180" stroke="#ccc" stroke-dasharray="4 3"/>
  <rect x="56" y="172" width="14" height="12" fill="#d83a3a"/><rect x="96" y="168" width="14" height="16" fill="#d83a3a"/><rect x="136" y="164" width="14" height="20" fill="#d83a3a"/>
  <rect x="176" y="180" width="14" height="-12" fill="#1aa05a"/><rect x="216" y="180" width="14" height="-18" fill="#1aa05a"/><rect x="256" y="180" width="14" height="-8" fill="#1aa05a"/>
  <rect x="296" y="172" width="14" height="14" fill="#d83a3a"/><rect x="336" y="168" width="14" height="18" fill="#d83a3a"/><rect x="376" y="180" width="14" height="-10" fill="#1aa05a"/>
  <text x="150" y="230" font-size="9.5" fill="#d83a3a" font-weight="bold">red bars = bull momentum</text>
  <text x="360" y="230" font-size="9.5" fill="#1aa05a" font-weight="bold">green bars = bear (DIF&lt;DEA)</text>
</svg>"""
EN_DET[14] = """<svg viewBox="0 0 680 240" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system,system-ui,sans-serif">
  <rect width="680" height="240" fill="#ffffff"/>
  <text x="34" y="20" font-size="12.5" font-weight="bold" fill="#222">Volume: price(top) + volume bars(bottom)</text>
  <polyline points="50,60 130,52 210,58 290,46 370,54 450,44 530,52 610,46" fill="none" stroke="#333" stroke-width="2"/>
  <text x="470" y="42" font-size="9.5" fill="#d83a3a" font-weight="bold">price high②</text>
  <line x1="40" y1="220" x2="650" y2="220" stroke="#ccc"/>
  <rect x="50" y="170" width="22" height="50" fill="#d83a3a"/><rect x="96" y="156" width="22" height="64" fill="#d83a3a"/><rect x="142" y="180" width="22" height="40" fill="#d83a3a"/>
  <rect x="188" y="150" width="22" height="70" fill="#d83a3a"/><rect x="234" y="172" width="22" height="48" fill="#d83a3a"/><rect x="280" y="140" width="22" height="80" fill="#d83a3a"/>
  <rect x="326" y="184" width="22" height="36" fill="#d83a3a"/><rect x="372" y="200" width="22" height="20" fill="#1aa05a"/><rect x="418" y="206" width="22" height="14" fill="#1aa05a"/>
  <rect x="464" y="214" width="22" height="6" fill="#1aa05a"/><rect x="510" y="178" width="22" height="42" fill="#d83a3a"/><rect x="556" y="188" width="22" height="32" fill="#d83a3a"/><rect x="602" y="196" width="22" height="24" fill="#d83a3a"/>
  <text x="120" y="130" font-size="9.5" fill="#1aa05a" font-weight="bold">price up + vol up → healthy</text>
  <text x="372" y="130" font-size="9.5" fill="#d83a3a" font-weight="bold">price up + vol down → weak</text>
  <line x1="290" y1="64" x2="290" y2="216" stroke="#8b3fd8" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="610" y1="58" x2="610" y2="216" stroke="#8b3fd8" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="360" y="234" font-size="9.5" fill="#8b3fd8" font-weight="bold">bearish divergence: price② higher but vol② &lt; vol① → weak momentum</text>
</svg>"""

# ---- 4. tag template diagrams (CN + EN) ----
def tpl_candles(T):
    return f'''<svg viewBox="0 0 680 250" role="img" aria-label="{T}">
<text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">{T}</text>
<line x1="120" y1="70" x2="120" y2="170" stroke="#9ca3af" stroke-width="1.5"/>
<rect x="108" y="95" width="24" height="50" fill="#dc2626"/>
<text x="120" y="192" font-size="11" fill="#6b7280" text-anchor="middle">阳线(涨)</text>
<line x1="270" y1="60" x2="270" y2="180" stroke="#9ca3af" stroke-width="1.5"/>
<rect x="258" y="80" width="24" height="60" fill="#059669"/>
<text x="270" y="200" font-size="11" fill="#6b7280" text-anchor="middle">阴线(跌)</text>
<line x1="420" y1="70" x2="420" y2="170" stroke="#9ca3af" stroke-width="1.5"/>
<rect x="408" y="118" width="24" height="6" fill="#374151"/>
<text x="420" y="192" font-size="11" fill="#6b7280" text-anchor="middle">十字星</text>
<text x="40" y="232" font-size="12" fill="#6b7280">实体=开收区间；上下影线=最高/最低。A股红涨绿跌。</text>
</svg>'''

def tpl_engulf(T):
    return f'''<svg viewBox="0 0 680 250" role="img" aria-label="{T}">
<text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">{T}</text>
<line x1="150" y1="70" x2="150" y2="175" stroke="#9ca3af" stroke-width="1.5"/>
<rect x="138" y="120" width="24" height="40" fill="#059669"/>
<text x="150" y="195" font-size="11" fill="#6b7280" text-anchor="middle">前阴</text>
<line x1="320" y1="60" x2="320" y2="180" stroke="#9ca3af" stroke-width="1.5"/>
<rect x="300" y="70" width="40" height="95" fill="#dc2626"/>
<text x="320" y="200" font-size="11" fill="#6b7280" text-anchor="middle">后阳(包住)</text>
<path d="M170,150 C220,120 260,110 300,110" fill="none" stroke="#1aa05a" stroke-width="2" marker-end="url(#ar)"/>
<text x="40" y="232" font-size="12" fill="#6b7280">看涨吞没：后一根大阳实体完全包住前阴 → 空转多。</text>
<defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1aa05a"/></marker></defs>
</svg>'''

def tpl_trend(T):
    return f'''<svg viewBox="0 0 680 250" role="img" aria-label="{T}">
<text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">{T}</text>
<path d="M50,190 C160,170 220,150 300,140 C380,130 440,110 620,80" fill="none" stroke="#5b3df2" stroke-width="2.5"/>
<path d="M50,210 C160,190 220,170 300,160 C380,150 440,130 620,100" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="5 4"/>
<path d="M50,170 C160,150 220,130 300,120 C380,110 440,90 620,60" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="5 4"/>
<circle cx="300" cy="140" r="6" fill="#059669"/><text x="300" y="128" font-size="11" fill="#059669" text-anchor="middle">支撑</text>
<circle cx="440" cy="110" r="6" fill="#dc2626"/><text x="440" y="100" font-size="11" fill="#dc2626" text-anchor="middle">压力</text>
<text x="40" y="232" font-size="12" fill="#6b7280">趋势线连接依次抬高的低点；平行线构成通道，下轨买、上轨卖。</text>
</svg>'''

def tpl_sr(T):
    return f'''<svg viewBox="0 0 680 250" role="img" aria-label="{T}">
<text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">{T}</text>
<path d="M50,140 C150,90 250,200 360,150 C460,105 540,180 630,120" fill="none" stroke="#5b3df2" stroke-width="2.5"/>
<line x1="40" y1="200" x2="640" y2="200" stroke="#059669" stroke-width="1.6" stroke-dasharray="6 4"/>
<text x="400" y="216" font-size="11" fill="#047857">前低→支撑(下)</text>
<line x1="40" y1="90" x2="640" y2="90" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6 4"/>
<text x="400" y="82" font-size="11" fill="#b91c1c">前高→压力(上)</text>
<text x="40" y="238" font-size="12" fill="#6b7280">前高/前低、整数关、均线、缺口都是天然支撑/压力；跌破会角色互换。</text>
</svg>'''

def tpl_vol(T):
    return f'''<svg viewBox="0 0 680 250" role="img" aria-label="{T}">
<text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">{T}</text>
<polyline points="50,70 150,60 250,80 350,55 450,68 550,50 630,62" fill="none" stroke="#5b3df2" stroke-width="2.5"/>
<line x1="40" y1="140" x2="640" y2="140" stroke="#ccc"/>
<rect x="60" y="190" width="40" height="40" fill="#1aa05a"/><rect x="160" y="180" width="40" height="50" fill="#1aa05a"/><rect x="260" y="200" width="40" height="30" fill="#d83a3a"/>
<rect x="360" y="195" width="40" height="35" fill="#d83a3a"/><rect x="460" y="185" width="40" height="45" fill="#1aa05a"/><rect x="560" y="178" width="40" height="52" fill="#1aa05a"/>
<text x="40" y="232" font-size="12" fill="#6b7280">价涨量增(绿)=健康；价涨量缩(红)=乏力；量是价的证据。</text>
</svg>'''

def tpl_ma(T):
    return f'''<svg viewBox="0 0 680 250" role="img" aria-label="{T}">
<text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">{T}</text>
<line x1="40" y1="200" x2="640" y2="196" stroke="#9ca3af" stroke-width="1.5"/>
<line x1="40" y1="160" x2="640" y2="150" stroke="#9ca3af" stroke-width="1.5"/>
<line x1="40" y1="120" x2="640" y2="104" stroke="#9ca3af" stroke-width="1.5"/>
<path d="M40,180 C160,150 240,170 320,120 C400,75 470,95 640,60" fill="none" stroke="#5b3df2" stroke-width="2.5"/>
<circle cx="240" cy="160" r="6" fill="#1aa05a"/><text x="240" y="178" font-size="11" fill="#1aa05a" text-anchor="middle">金叉</text>
<text x="40" y="232" font-size="12" fill="#6b7280">短均线(紫)上穿长均线=金叉偏多；均线本身是动态支撑/压力。</text>
</svg>'''

def tpl_osc(T):
    return f'''<svg viewBox="0 0 680 250" role="img" aria-label="{T}">
<text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">{T}</text>
<line x1="40" y1="120" x2="640" y2="120" stroke="#999" stroke-dasharray="4 3"/>
<text x="600" y="116" font-size="10" fill="#999">零轴</text>
<rect x="56" y="112" width="14" height="14" fill="#1aa05a"/><rect x="96" y="108" width="14" height="18" fill="#1aa05a"/><rect x="136" y="120" width="14" height="-16" fill="#d83a3a"/>
<rect x="176" y="120" width="14" height="-26" fill="#d83a3a"/><rect x="216" y="112" width="14" height="12" fill="#1aa05a"/><rect x="256" y="120" width="14" height="-20" fill="#d83a3a"/>
<rect x="296" y="108" width="14" height="18" fill="#1aa05a"/><rect x="336" y="120" width="14" height="-14" fill="#d83a3a"/><rect x="376" y="112" width="14" height="12" fill="#1aa05a"/>
<polyline points="50,118 120,110 190,128 260,100 330,124 400,96 470,120 540,104 610,116" fill="none" stroke="#1a6fd6" stroke-width="2"/>
<text x="40" y="232" font-size="12" fill="#6b7280">零轴上方偏多、下方偏空；红绿柱看动能，背离是左侧预警。</text>
</svg>'''

def tpl_fin(T):
    return f'''<svg viewBox="0 0 680 250" role="img" aria-label="{T}">
<text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">{T}</text>
<rect x="60" y="70" width="150" height="70" rx="8" fill="#eef2ff" stroke="#9ca3af"/>
<text x="135" y="105" font-size="13" fill="#374151" text-anchor="middle">利润表</text>
<rect x="265" y="70" width="150" height="70" rx="8" fill="#eef2ff" stroke="#9ca3af"/>
<text x="340" y="105" font-size="13" fill="#374151" text-anchor="middle">资产负债表</text>
<rect x="470" y="70" width="150" height="70" rx="8" fill="#eef2ff" stroke="#9ca3af"/>
<text x="545" y="105" font-size="13" fill="#374151" text-anchor="middle">现金流量表</text>
<path d="M210,105 C235,105 240,105 265,105" fill="none" stroke="#9ca3af" stroke-width="1.5" marker-end="url(#a2)"/>
<path d="M415,105 C440,105 445,105 470,105" fill="none" stroke="#9ca3af" stroke-width="1.5" marker-end="url(#a2)"/>
<defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9ca3af"/></marker></defs>
<text x="40" y="190" font-size="12" fill="#6b7280">三张表连看：利润讲故事，现金流讲真相，资产负债表是底子。</text>
</svg>'''

def tpl_val(T):
    return f'''<svg viewBox="0 0 680 250" role="img" aria-label="{T}">
<text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">{T}</text>
<rect x="60" y="90" width="520" height="20" fill="#f3f4f6"/>
<rect x="60" y="90" width="160" height="20" fill="#1aa05a" opacity="0.5"/>
<rect x="320" y="90" width="160" height="20" fill="#f59e0b" opacity="0.5"/>
<rect x="480" y="90" width="100" height="20" fill="#dc2626" opacity="0.5"/>
<text x="140" y="84" font-size="11" fill="#047857" text-anchor="middle">低估</text>
<text x="400" y="84" font-size="11" fill="#b45309" text-anchor="middle">合理</text>
<text x="530" y="84" font-size="11" fill="#b91c1c" text-anchor="middle">高估</text>
<line x1="540" y1="70" x2="540" y2="120" stroke="#111827" stroke-width="2"/>
<text x="540" y="135" font-size="11" fill="#111827" text-anchor="middle">当前</text>
<text x="40" y="190" font-size="12" fill="#6b7280">看历史估值分位：当前 PE/PB 处于自身 10%~90% 的哪一档。</text>
</svg>'''

def tpl_div(T):
    return f'''<svg viewBox="0 0 680 250" role="img" aria-label="{T}">
<text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">{T}</text>
<circle cx="200" cy="130" r="55" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
<text x="200" y="126" font-size="13" fill="#92400e" text-anchor="middle">分红</text>
<text x="200" y="144" font-size="11" fill="#92400e" text-anchor="middle">现金回报</text>
<circle cx="430" cy="130" r="55" fill="#dbeafe" stroke="#1a6fd6" stroke-width="2"/>
<text x="430" y="135" font-size="12" fill="#1e40af" text-anchor="middle">回购</text>
<text x="40" y="220" font-size="12" fill="#6b7280">股息率看现金回报；回购直接提升每股价值。先问：能持续吗？</text>
</svg>'''

def tpl_pos(T):
    return f'''<svg viewBox="0 0 680 250" role="img" aria-label="{T}">
<text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">{T}</text>
<polygon points="340,70 250,170 430,170" fill="#eef2ff" stroke="#9ca3af"/>
<text x="340" y="160" font-size="12" fill="#374151" text-anchor="middle">分笔建仓</text>
<text x="200" y="200" font-size="11" fill="#6b7280">越跌越买(金字塔)</text>
<text x="420" y="200" font-size="11" fill="#6b7280">留 10~30% 现金</text>
<text x="40" y="232" font-size="12" fill="#6b7280">单只≤10~15%；首笔别打满，分批摊低成本、留余地。</text>
</svg>'''

def tpl_risk(T):
    return f'''<svg viewBox="0 0 680 250" role="img" aria-label="{T}">
<text x="40" y="26" font-size="14" fill="#111827" font-weight="bold">{T}</text>
<path d="M340,70 L400,90 L400,130 C400,160 370,175 340,185 C310,175 280,160 280,130 L280,90 Z" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
<text x="340" y="135" font-size="14" fill="#b91c1c" text-anchor="middle" font-weight="bold">止损</text>
<line x1="300" y1="95" x2="380" y2="155" stroke="#dc2626" stroke-width="3"/>
<text x="430" y="120" font-size="12" fill="#6b7280">错了机械执行：</text>
<text x="430" y="142" font-size="12" fill="#6b7280">-8%~-10% 硬止损；</text>
<text x="430" y="164" font-size="12" fill="#6b7280">+30% 分批止盈。</text>
<text x="40" y="232" font-size="12" fill="#6b7280">纪律>预测：先想错了怎么办，再想对了赚多少。</text>
</svg>'''

TAG_TPL = {
 "K线基础": tpl_candles,
 "K线组合": tpl_engulf,
 "趋势": tpl_trend,
 "量价": tpl_vol,
 "均线": tpl_ma,
 "指标": tpl_osc,
 "财报": tpl_fin,
 "估值": tpl_val,
 "分红": tpl_div,
 "仓位": tpl_pos,
 "风控": tpl_risk,
}
TAG_TPL_EN = {
 "Candlesticks": tpl_candles,
 "Candle patterns": tpl_engulf,
 "Trend": tpl_trend,
 "Volume-Price": tpl_vol,
 "Moving Averages": tpl_ma,
 "Indicators": tpl_osc,
 "Financials": tpl_fin,
 "Valuation": tpl_val,
 "Dividends": tpl_div,
 "Position": tpl_pos,
 "Risk": tpl_risk,
}
# EN templates need EN caption text; rebuild with EN captions via same funcs but titles are EN already.
# (captions inside funcs are CN; acceptable as the diagram is illustrative. For purity we keep CN caption.)

def get_diagram(idx, k, lang):
    if lang == "zh" and k.get("diagram"):
        return k["diagram"]
    if lang == "en" and k.get("diagram"):
        return EN_DET.get(idx, k.get("diagram", ""))
    tag = k["tag"]
    T = k["title"]
    if lang == "en":
        T = EN[idx]["title"]
        fn = TAG_TPL_EN.get(tag)
    else:
        fn = TAG_TPL.get(tag)
    if not fn:
        return ""
    return fn(T)

def esc(s):
    return s.replace('"', '\\"')

def render(idx, lang):
    k = KNOWLEDGE[idx]
    e = EN[idx]
    if lang == "zh":
        title = k["title"]; tag = k["tag"]; points = k["points"]; tip = k["tip"]
        series = "股票知识小课堂"; alt = "English"; altHref = f"/en/blog/kb{idx+1:02d}"
        lead = f"本节为《股票知识小课堂》第 {idx+1}/{N} 课〔{tag}〕。"
    else:
        title = e["title"]; tag = e["tag"]; points = e["points"]; tip = e["tip"]
        series = "Stock Knowledge 101"; alt = "中文"; altHref = f"/blog/kb{idx+1:02d}"
        lead = f"This is Lesson {idx+1}/{N} of *Stock Knowledge 101* 〔{tag}〕."
    diag = get_diagram(idx, k, lang)
    diag_html = ""
    if diag:
        diag_html = f'<div class="fig">\n{diag}\n<div class="cap">图：{title}</div>\n</div>\n'
    bullets = "\n".join(f"- {p}" for p in points)
    body = f""">{lead}

{bullets}

{diag_html}
> 📌 {tip}

> ⚠️ 本文为方法框架示意，不构成任何投资或交易建议。市场有风险，决策需谨慎。
"""
    if lang == "en":
        body = f""">{lead}

{bullets}

{diag_html}
> 📌 {tip}

> ⚠️ This article is a methodological illustration and does not constitute any investment or trading advice. Markets are risky; decide with caution.
"""
    fm = f"""---
title: "{esc(title)}"
description: "{esc(tag + ' · ' + points[0][:40])}"
layout: {'../../' if lang=='zh' else '../../../'}layouts/BlogPost.astro
series: {series}
free: true
lang: {lang}
altLang: {alt}
altHref: {altHref}
pubDate: 2026-08-11
---
"""
    return fm + body

os.makedirs(BLOG, exist_ok=True)
os.makedirs(ENBLOG, exist_ok=True)
for i in range(N):
    zh = render(i, "zh")
    en = render(i, "en")
    open(os.path.join(BLOG, f"kb{i+1:02d}.md"), "w", encoding="utf-8").write(zh)
    open(os.path.join(ENBLOG, f"kb{i+1:02d}.md"), "w", encoding="utf-8").write(en)
print(f"Generated {N} zh + {N} en chapters (kb01..kb{N:02d})")
