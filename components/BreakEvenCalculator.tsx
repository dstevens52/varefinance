'use client'

import { useState, useMemo } from 'react'

function parseNum(val: string): number {
  const n = parseFloat(val.replace(/,/g, ''))
  return isNaN(n) ? 0 : n
}

export default function BreakEvenCalculator() {
  const [closingCosts, setClosingCosts] = useState('')
  const [monthlySavings, setMonthlySavings] = useState('')

  const costs = parseNum(closingCosts)
  const savings = parseNum(monthlySavings)

  const result = useMemo(() => {
    if (!closingCosts && !monthlySavings) return null
    if (savings <= 0) return { type: 'no-savings' as const }
    const months = Math.ceil(costs / savings)
    const years = Math.floor(months / 12)
    const remMonths = months % 12
    return { type: 'result' as const, months, years, remMonths }
  }, [costs, savings, closingCosts, monthlySavings])

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-4 py-3 text-navy-900 text-base focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent'
  const labelClass = 'block text-sm font-semibold text-navy-900 mb-1'
  const helperClass = 'text-xs text-gray-500 mt-1'

  return (
    <div className="bg-navy-950 rounded-2xl p-6 sm:p-8">
      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <label className={labelClass} htmlFor="closing-costs">
            Total Closing Costs ($)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
            <input
              id="closing-costs"
              type="number"
              min="0"
              placeholder="e.g. 4500"
              value={closingCosts}
              onChange={e => setClosingCosts(e.target.value)}
              className={`${inputClass} pl-7`}
            />
          </div>
          <p className={helperClass}>
            Include lender fees, title fees, and other closing costs. Exclude the VA funding fee and escrow/prepaids.
          </p>
        </div>

        <div>
          <label className={labelClass} htmlFor="monthly-savings">
            Monthly Savings ($)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
            <input
              id="monthly-savings"
              type="number"
              min="0"
              placeholder="e.g. 180"
              value={monthlySavings}
              onChange={e => setMonthlySavings(e.target.value)}
              className={`${inputClass} pl-7`}
            />
          </div>
          <p className={helperClass}>
            The difference between your current monthly P&amp;I payment and your new monthly P&amp;I payment.
          </p>
        </div>
      </div>

      {/* Results */}
      {result === null && (
        <div className="text-center text-white/40 text-sm py-6">
          Enter your closing costs and monthly savings above to see your break-even point.
        </div>
      )}

      {result?.type === 'no-savings' && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 text-amber-200 text-sm leading-relaxed">
          <p className="font-semibold mb-1">Break-even analysis doesn&apos;t apply here.</p>
          <p>
            If your new payment isn&apos;t lower than your current payment, a standard break-even
            calculation doesn&apos;t apply. This may be the case with ARM-to-fixed conversions where
            payment stability — not a lower payment — is the primary benefit.
          </p>
        </div>
      )}

      {result?.type === 'result' && (
        <div className="space-y-4">
          {/* Primary result */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <p className="text-white/60 text-sm mb-1">Break-even point</p>
            <p className="text-4xl font-bold text-white mb-1">
              {result.months} <span className="text-2xl font-normal text-white/70">months</span>
            </p>
            {result.months >= 12 && (
              <p className="text-white/50 text-sm">
                {result.years > 0 && `${result.years} year${result.years !== 1 ? 's' : ''}`}
                {result.years > 0 && result.remMonths > 0 && ', '}
                {result.remMonths > 0 && `${result.remMonths} month${result.remMonths !== 1 ? 's' : ''}`}
              </p>
            )}
          </div>

          {/* VA 36-month check */}
          {result.months <= 36 ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-start gap-3">
              <span className="text-green-400 text-lg mt-0.5">✓</span>
              <div>
                <p className="text-green-300 font-semibold text-sm">Passes VA 36-month recoupment guideline</p>
                <p className="text-green-200/70 text-sm mt-0.5">
                  Your break-even of {result.months} months is within the VA&apos;s 36-month recoupment
                  requirement for IRRRL refinances.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-start gap-3">
              <span className="text-amber-400 text-lg mt-0.5">⚠</span>
              <div>
                <p className="text-amber-300 font-semibold text-sm">Exceeds VA 36-month recoupment guideline</p>
                <p className="text-amber-200/70 text-sm mt-0.5">
                  Your break-even of {result.months} months exceeds the VA&apos;s 36-month recoupment
                  guideline for IRRRL refinances. This doesn&apos;t necessarily disqualify you, but it&apos;s
                  a sign to look carefully at your closing costs — they may be too high relative to
                  your monthly savings.
                </p>
              </div>
            </div>
          )}

          {/* Plain-English summary */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-white/80 text-sm leading-relaxed">
            You&apos;ll recoup your closing costs in <strong className="text-white">{result.months} months</strong>.
            If you plan to stay in your home longer than that, refinancing likely makes financial sense.
            {result.months > 36 && (
              <> Consider negotiating lower lender fees or discount points to bring the break-even under 36 months.</>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
