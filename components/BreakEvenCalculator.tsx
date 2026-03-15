'use client'

import React, { useState, useMemo } from 'react'

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

  const labelStyle: React.CSSProperties = {
    fontSize: '13px',
    fontWeight: 600,
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    display: 'block',
    marginBottom: '6px',
  }
  const inputWrapStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0f1d32',
    border: '1px solid #1e3a5f',
    borderRadius: '8px',
    overflow: 'hidden',
  }
  const prefixStyle: React.CSSProperties = {
    padding: '12px 0 12px 14px',
    color: '#64748b',
    fontSize: '16px',
    fontWeight: 500,
  }
  const inputStyle: React.CSSProperties = {
    flex: 1,
    padding: '12px 14px 12px 4px',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#e2e8f0',
    fontSize: '16px',
    fontWeight: 500,
    width: '100%',
  }
  const helperClass = 'text-xs mt-1.5'

  return (
    <div className="bg-navy-950 rounded-2xl p-6 sm:p-8">
      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <label style={labelStyle} htmlFor="closing-costs">
            Total Closing Costs
          </label>
          <div style={inputWrapStyle}>
            <span style={prefixStyle}>$</span>
            <input
              id="closing-costs"
              type="number"
              min="0"
              placeholder="e.g. 4500"
              value={closingCosts}
              onChange={e => setClosingCosts(e.target.value)}
              style={inputStyle}
            />
          </div>
          <p className={helperClass} style={{ color: '#64748b' }}>
            Include lender fees, title fees, and other closing costs. Exclude the VA funding fee and escrow/prepaids.
          </p>
        </div>

        <div>
          <label style={labelStyle} htmlFor="monthly-savings">
            Monthly Savings
          </label>
          <div style={inputWrapStyle}>
            <span style={prefixStyle}>$</span>
            <input
              id="monthly-savings"
              type="number"
              min="0"
              placeholder="e.g. 180"
              value={monthlySavings}
              onChange={e => setMonthlySavings(e.target.value)}
              style={inputStyle}
            />
          </div>
          <p className={helperClass} style={{ color: '#64748b' }}>
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
