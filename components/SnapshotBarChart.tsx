'use client'

const chartData = [
  { label: 'Q1 22', value: 55 },
  { label: 'Q2 22', value: 48 },
  { label: 'Q3 22', value: 35 },
  { label: 'Q4 22', value: 22 },
  { label: 'Q1 23', value: 18 },
  { label: 'Q2 23', value: 16 },
  { label: 'Q3 23', value: 15 },
  { label: 'Q4 23', value: 16 },
  { label: 'Q1 24', value: 18 },
  { label: 'Q2 24', value: 20 },
  { label: 'Q3 24', value: 22 },
  { label: 'Q4 24', value: 25 },
  { label: 'Q1 25', value: 28 },
  { label: 'Q2 25', value: 32 },
  { label: 'Q3 25', value: 35 },
  { label: 'Q4 25', value: 39 },
]

// SVG layout constants
const W = 760
const H = 260
const ML = 42  // left margin for Y-axis labels
const MR = 8
const MT = 10
const MB = 52  // bottom margin for rotated X labels

const IW = W - ML - MR  // inner width
const IH = H - MT - MB  // inner height

const MAX_VAL = 60
const N = chartData.length
const SLOT_W = IW / N
const BAR_W = Math.round(SLOT_W * 0.62)
const BAR_OFF = (SLOT_W - BAR_W) / 2

const Y_TICKS = [0, 10, 20, 30, 40, 50, 60]

export default function SnapshotBarChart() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      role="img"
      aria-label="Bar chart showing refinances as a percentage of total mortgage lending from Q1 2022 to Q4 2025"
    >
      {/* Horizontal grid lines + Y-axis labels */}
      {Y_TICKS.map(v => {
        const y = MT + IH - (v / MAX_VAL) * IH
        return (
          <g key={v}>
            <line
              x1={ML}
              y1={y}
              x2={W - MR}
              y2={y}
              stroke="#e5e7eb"
              strokeWidth={v === 0 ? 1 : 0.5}
            />
            <text
              x={ML - 5}
              y={y + 3.5}
              textAnchor="end"
              fontSize={9}
              fill="#9ca3af"
            >
              {v}%
            </text>
          </g>
        )
      })}

      {/* Bars + X-axis labels */}
      {chartData.map((d, i) => {
        const barH = (d.value / MAX_VAL) * IH
        const bx = ML + i * SLOT_W + BAR_OFF
        const by = MT + IH - barH
        const cx = ML + i * SLOT_W + SLOT_W / 2
        const ly = MT + IH + 7
        const isHighlight = i >= 12

        return (
          <g key={d.label}>
            <rect
              x={bx}
              y={by}
              width={BAR_W}
              height={barH}
              fill={isHighlight ? '#1b3a6b' : '#d3d1c7'}
              rx={2}
            />
            <text
              x={cx}
              y={ly}
              textAnchor="end"
              fontSize={9}
              fill={isHighlight ? '#1b3a6b' : '#6b7280'}
              fontWeight={isHighlight ? 600 : 400}
              transform={`rotate(-45, ${cx}, ${ly})`}
            >
              {d.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
