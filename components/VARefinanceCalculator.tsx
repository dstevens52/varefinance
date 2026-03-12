'use client'

import { useState, useMemo } from 'react'
import React from 'react'

const formatCurrency = (num: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num)

const formatCurrencyExact = (num: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num)

function calcMonthlyPayment(principal: number, annualRate: number, termYears: number) {
  if (annualRate === 0) return principal / (termYears * 12)
  const r = annualRate / 100 / 12
  const n = termYears * 12
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function calcRemainingBalance(
  originalPrincipal: number,
  annualRate: number,
  termYears: number,
  yearsPaid: number,
) {
  const r = annualRate / 100 / 12
  const n = termYears * 12
  const p = yearsPaid * 12
  if (annualRate === 0) return originalPrincipal * (1 - p / n)
  const payment = calcMonthlyPayment(originalPrincipal, annualRate, termYears)
  return (payment * (Math.pow(1 + r, n) - Math.pow(1 + r, p))) / (r * Math.pow(1 + r, n))
}

type BadgeStatus = 'pass' | 'fail' | 'warn' | 'info'

function StatusBadge({ status, children }: { status: BadgeStatus; children: React.ReactNode }) {
  const colors: Record<BadgeStatus, { bg: string; border: string; text: string; icon: string }> = {
    pass: { bg: '#0d3d2e', border: '#1a7a54', text: '#4ade80', icon: '✓' },
    fail: { bg: '#3d1519', border: '#7a1a22', text: '#f87171', icon: '✗' },
    warn: { bg: '#3d2e0d', border: '#7a5a1a', text: '#fbbf24', icon: '!' },
    info: { bg: '#0c2340', border: '#1a3a6a', text: '#93c5fd', icon: 'i' },
  }
  const c = colors[status] || colors.info
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 16px',
        borderRadius: '8px',
        backgroundColor: c.bg,
        border: `1px solid ${c.border}`,
        color: c.text,
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: 1.5,
      }}
    >
      <span
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: c.border,
          color: c.text,
          fontWeight: 700,
          fontSize: '13px',
          flexShrink: 0,
        }}
      >
        {c.icon}
      </span>
      <span>{children}</span>
    </div>
  )
}

interface InputFieldProps {
  label: string
  value: string
  onChange: (v: string) => void
  prefix?: string
  suffix?: string
  placeholder?: string
  helpText?: string
}

function InputField({ label, value, onChange, prefix, suffix, placeholder, helpText }: InputFieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label
        style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#94a3b8',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        {label}
      </label>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#0f1d32',
          border: '1px solid #1e3a5f',
          borderRadius: '8px',
          overflow: 'hidden',
          transition: 'border-color 0.2s',
        }}
      >
        {prefix && (
          <span
            style={{
              padding: '12px 0 12px 14px',
              color: '#64748b',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={{
            flex: 1,
            padding: prefix ? '12px 14px 12px 4px' : '12px 14px',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#e2e8f0',
            fontSize: '16px',
            fontWeight: 500,
            width: '100%',
          }}
        />
        {suffix && (
          <span
            style={{
              padding: '12px 14px 12px 0',
              color: '#64748b',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            {suffix}
          </span>
        )}
      </div>
      {helpText && <span style={{ fontSize: '12px', color: '#64748b' }}>{helpText}</span>}
    </div>
  )
}

interface SelectFieldProps {
  label: string
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
}

function SelectField({ label, value, onChange, options }: SelectFieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label
        style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#94a3b8',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: '12px 14px',
          backgroundColor: '#0f1d32',
          border: '1px solid #1e3a5f',
          borderRadius: '8px',
          color: '#e2e8f0',
          fontSize: '16px',
          fontWeight: 500,
          outline: 'none',
          cursor: 'pointer',
          appearance: 'auto',
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

interface ResultCardProps {
  label: string
  value: string
  sub?: string
  highlight?: boolean
}

function ResultCard({ label, value, sub, highlight }: ResultCardProps) {
  return (
    <div
      style={{
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: highlight ? '#1a3352' : '#0f1d32',
        border: highlight ? '1px solid #c5a44e' : '1px solid #1e3a5f',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#94a3b8',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: '8px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: '28px',
          fontWeight: 700,
          color: highlight ? '#c5a44e' : '#e2e8f0',
          lineHeight: 1.2,
        }}
      >
        {value}
      </div>
      {sub && <div style={{ fontSize: '13px', color: '#64748b', marginTop: '6px' }}>{sub}</div>}
    </div>
  )
}

export default function VARefinanceCalculator() {
  const [loanBalance, setLoanBalance] = useState('300000')
  const [currentRate, setCurrentRate] = useState('6.5')
  const [currentTermYears, setCurrentTermYears] = useState('30')
  const [yearsPaid, setYearsPaid] = useState('3')
  const [newRate, setNewRate] = useState('5.5')
  const [newTermYears, setNewTermYears] = useState('30')
  const [closingCostsPct, setClosingCostsPct] = useState('1')
  const [fundingFeeExempt, setFundingFeeExempt] = useState(false)
  const [refiType, setRefiType] = useState('irrrl')
  const [isSubsequentUse, setIsSubsequentUse] = useState(false)
  const [wantsCashOut, setWantsCashOut] = useState(false)
  const [cashOutAmount, setCashOutAmount] = useState('50000')

  const results = useMemo(() => {
    const bal = parseFloat(loanBalance) || 0
    const cRate = parseFloat(currentRate) || 0
    const cTerm = parseInt(currentTermYears) || 30
    const yPaid = parseFloat(yearsPaid) || 0
    const nRate = parseFloat(newRate) || 0
    const nTerm = parseInt(newTermYears) || 30
    const ccPct = parseFloat(closingCostsPct) || 0

    if (bal <= 0 || cRate <= 0 || nRate <= 0) return null

    const remainingBalance = bal

    const cashOut = refiType === 'cashout' && wantsCashOut ? parseFloat(cashOutAmount) || 0 : 0
    const isTypeII = refiType === 'cashout' && wantsCashOut && cashOut > 0

    let fundingFeePct = 0
    if (!fundingFeeExempt) {
      if (refiType === 'irrrl') {
        fundingFeePct = 0.5
      } else {
        fundingFeePct = isSubsequentUse ? 3.3 : 2.15
      }
    }
    const fundingFee = (remainingBalance + cashOut) * (fundingFeePct / 100)
    const closingCosts = remainingBalance * (ccPct / 100)
    const totalCosts = fundingFee + closingCosts

    const newLoanAmount = remainingBalance + totalCosts + cashOut

    const currentMonthly = calcMonthlyPayment(
      remainingBalance,
      cRate,
      cTerm - yPaid > 0 ? cTerm - yPaid : 1,
    )
    const newMonthly = calcMonthlyPayment(newLoanAmount, nRate, nTerm)
    const monthlySavings = currentMonthly - newMonthly

    const currentRemainingMonths = Math.max((cTerm - yPaid) * 12, 1)
    const totalCurrentRemaining = currentMonthly * currentRemainingMonths
    const currentRemainingInterest = totalCurrentRemaining - remainingBalance

    const newTotalPayments = newMonthly * nTerm * 12
    const newTotalInterest = newTotalPayments - newLoanAmount

    const lifetimeInterestSavings = currentRemainingInterest - newTotalInterest

    const breakEvenMonths =
      monthlySavings > 0 ? Math.ceil(totalCosts / monthlySavings) : Infinity

    const rateReduction = cRate - nRate
    const meetsNTB = refiType === 'irrrl' ? rateReduction >= 0.5 : true

    const recoupmentApplies = refiType === 'irrrl' || (refiType === 'cashout' && !isTypeII)
    const meetsRecoupment = !recoupmentApplies || breakEvenMonths <= 36

    return {
      remainingBalance,
      fundingFee,
      closingCosts,
      totalCosts,
      newLoanAmount,
      currentMonthly,
      newMonthly,
      monthlySavings,
      lifetimeInterestSavings,
      breakEvenMonths,
      rateReduction,
      meetsNTB,
      meetsRecoupment,
      recoupmentApplies,
      isTypeII,
      cashOut,
      fundingFeePct,
    }
  }, [
    loanBalance,
    currentRate,
    currentTermYears,
    yearsPaid,
    newRate,
    newTermYears,
    closingCostsPct,
    fundingFeeExempt,
    refiType,
    isSubsequentUse,
    wantsCashOut,
    cashOutAmount,
  ])

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
        maxWidth: '820px',
        margin: '0 auto',
        color: '#e2e8f0',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '40px 20px 32px' }}>
        <div
          style={{
            fontSize: '12px',
            fontWeight: 700,
            color: '#c5a44e',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '12px',
          }}
        >
          VA Refinance Decision Tool
        </div>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#ffffff',
            margin: '0 0 12px',
            lineHeight: 1.2,
          }}
        >
          Should I Refinance My VA Loan?
        </h1>
        <p
          style={{
            fontSize: '16px',
            color: '#94a3b8',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Enter your current loan details and the new terms you&apos;re considering.
          We&apos;ll calculate your savings, break-even point, and check if you meet VA
          requirements.
        </p>
      </div>

      {/* Calculator body */}
      <div
        style={{
          backgroundColor: '#0a1628',
          borderRadius: '16px',
          border: '1px solid #1e3a5f',
          overflow: 'hidden',
        }}
      >
        {/* Inputs section */}
        <div style={{ padding: '28px' }}>
          {/* Refinance type selector */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '28px',
              padding: '4px',
              backgroundColor: '#0f1d32',
              borderRadius: '10px',
              border: '1px solid #1e3a5f',
            }}
          >
            {[
              { value: 'irrrl', label: 'VA Streamline (IRRRL)' },
              { value: 'cashout', label: 'VA Cash-Out Refinance' },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setRefiType(opt.value)}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  backgroundColor: refiType === opt.value ? '#c5a44e' : 'transparent',
                  color: refiType === opt.value ? '#0a1628' : '#94a3b8',
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Current loan */}
          <div style={{ marginBottom: '24px' }}>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#c5a44e',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
                paddingBottom: '8px',
                borderBottom: '1px solid #1e3a5f',
              }}
            >
              Your Current Loan
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <InputField
                label="Current Loan Balance"
                value={loanBalance}
                onChange={setLoanBalance}
                prefix="$"
                placeholder="300,000"
                helpText="Amount you currently owe"
              />
              <InputField
                label="Current Interest Rate"
                value={currentRate}
                onChange={setCurrentRate}
                suffix="%"
                placeholder="6.5"
              />
              <SelectField
                label="Original Loan Term"
                value={currentTermYears}
                onChange={setCurrentTermYears}
                options={[
                  { value: '30', label: '30 years' },
                  { value: '25', label: '25 years' },
                  { value: '20', label: '20 years' },
                  { value: '15', label: '15 years' },
                ]}
              />
              <InputField
                label="Years Paid So Far"
                value={yearsPaid}
                onChange={setYearsPaid}
                suffix="years"
                placeholder="3"
              />
            </div>
          </div>

          {/* New loan */}
          <div style={{ marginBottom: '24px' }}>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#c5a44e',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
                paddingBottom: '8px',
                borderBottom: '1px solid #1e3a5f',
              }}
            >
              New Loan Terms
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <InputField
                label="New Interest Rate"
                value={newRate}
                onChange={setNewRate}
                suffix="%"
                placeholder="5.5"
              />
              <SelectField
                label="New Loan Term"
                value={newTermYears}
                onChange={setNewTermYears}
                options={[
                  { value: '30', label: '30 years' },
                  { value: '25', label: '25 years' },
                  { value: '20', label: '20 years' },
                  { value: '15', label: '15 years' },
                ]}
              />
            </div>
          </div>

          {/* Cash-Out Options — only shown for cash-out refi type */}
          {refiType === 'cashout' && (
            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#c5a44e',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '16px',
                  paddingBottom: '8px',
                  borderBottom: '1px solid #1e3a5f',
                }}
              >
                Cash-Out Options
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  alignItems: 'end',
                }}
              >
                <SelectField
                  label="VA Loan Usage"
                  value={isSubsequentUse ? 'subsequent' : 'first'}
                  onChange={(v) => setIsSubsequentUse(v === 'subsequent')}
                  options={[
                    { value: 'first', label: 'First time use (2.15% fee)' },
                    { value: 'subsequent', label: 'Subsequent use (3.3% fee)' },
                  ]}
                />
                <SelectField
                  label="Are you taking cash out?"
                  value={wantsCashOut ? 'yes' : 'no'}
                  onChange={(v) => setWantsCashOut(v === 'yes')}
                  options={[
                    { value: 'no', label: 'No — rate/term change only (Type I)' },
                    { value: 'yes', label: 'Yes — I want cash from equity (Type II)' },
                  ]}
                />
              </div>
              {wantsCashOut && (
                <div style={{ marginTop: '16px' }}>
                  <InputField
                    label="How much cash do you want?"
                    value={cashOutAmount}
                    onChange={setCashOutAmount}
                    prefix="$"
                    placeholder="50,000"
                    helpText="This will be added to your new loan balance"
                  />
                </div>
              )}
            </div>
          )}

          {/* Costs & Fees */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#c5a44e',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
                paddingBottom: '8px',
                borderBottom: '1px solid #1e3a5f',
              }}
            >
              Costs &amp; Fees
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                alignItems: 'end',
              }}
            >
              <InputField
                label="Estimated Closing Costs"
                value={closingCostsPct}
                onChange={setClosingCostsPct}
                suffix="%"
                helpText="Lender fees, title, etc. (typically 1–2%)"
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 0' }}>
                <div
                  onClick={() => setFundingFeeExempt(!fundingFeeExempt)}
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '4px',
                    border: `2px solid ${fundingFeeExempt ? '#c5a44e' : '#1e3a5f'}`,
                    backgroundColor: fundingFeeExempt ? '#c5a44e' : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s',
                  }}
                >
                  {fundingFeeExempt && (
                    <span style={{ color: '#0a1628', fontWeight: 700, fontSize: '14px' }}>✓</span>
                  )}
                </div>
                <label
                  onClick={() => setFundingFeeExempt(!fundingFeeExempt)}
                  style={{ fontSize: '14px', color: '#94a3b8', cursor: 'pointer', lineHeight: 1.4 }}
                >
                  I&apos;m exempt from the VA Funding Fee
                  <span style={{ display: 'block', fontSize: '12px', color: '#64748b' }}>
                    (Service-connected disability, Purple Heart, surviving spouse)
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Results section */}
        {results && (
          <div
            style={{
              borderTop: '2px solid #1e3a5f',
              padding: '28px',
              backgroundColor: '#070f1d',
            }}
          >
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#c5a44e',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '20px',
              }}
            >
              Your Results
            </h3>

            {/* Key metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '12px',
                marginBottom: '24px',
              }}
            >
              <ResultCard
                label={results.monthlySavings >= 0 ? 'Monthly Savings' : 'Monthly Increase'}
                value={formatCurrencyExact(Math.abs(results.monthlySavings))}
                sub={`${formatCurrencyExact(results.currentMonthly)} → ${formatCurrencyExact(results.newMonthly)}`}
                highlight={results.monthlySavings > 0}
              />
              <ResultCard
                label="Break-Even Point"
                value={
                  results.breakEvenMonths === Infinity ? 'N/A' : `${results.breakEvenMonths} months`
                }
                sub={`${formatCurrency(results.totalCosts)} in total costs`}
              />
              <ResultCard
                label={
                  results.lifetimeInterestSavings >= 0
                    ? 'Lifetime Interest Savings'
                    : 'Lifetime Interest Increase'
                }
                value={formatCurrency(Math.abs(results.lifetimeInterestSavings))}
                sub="Over remaining loan life"
                highlight={results.lifetimeInterestSavings > 0}
              />
            </div>

            {/* Cost breakdown */}
            <div
              style={{
                backgroundColor: '#0f1d32',
                borderRadius: '10px',
                border: '1px solid #1e3a5f',
                padding: '16px 20px',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '12px',
                }}
              >
                Cost Breakdown
              </div>
              {[
                {
                  label: `VA Funding Fee (${results.fundingFeePct}%)`,
                  value: formatCurrency(results.fundingFee),
                  bold: false,
                },
                {
                  label: `Closing Costs (${closingCostsPct}%)`,
                  value: formatCurrency(results.closingCosts),
                  bold: false,
                },
                ...(results.cashOut > 0
                  ? [{ label: 'Cash Out Amount', value: formatCurrency(results.cashOut), bold: false }]
                  : []),
                {
                  label: 'Total Costs (fees only)',
                  value: formatCurrency(results.totalCosts),
                  bold: true,
                },
                {
                  label:
                    results.cashOut > 0
                      ? 'New Loan Amount (balance + costs + cash out)'
                      : 'New Loan Amount (with costs rolled in)',
                  value: formatCurrency(results.newLoanAmount),
                  bold: true,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 0',
                    borderTop: item.bold ? '1px solid #1e3a5f' : 'none',
                    marginTop: item.bold ? '4px' : 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
                      color: item.bold ? '#e2e8f0' : '#94a3b8',
                      fontWeight: item.bold ? 600 : 400,
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: '14px',
                      color: item.bold ? '#e2e8f0' : '#94a3b8',
                      fontWeight: item.bold ? 600 : 500,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* VA requirement checks */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '4px',
                }}
              >
                VA Requirement Checks
              </div>

              {refiType === 'irrrl' && (
                <StatusBadge status={results.meetsNTB ? 'pass' : 'fail'}>
                  <strong>Net Tangible Benefit:</strong>{' '}
                  {results.meetsNTB
                    ? `Your rate drops ${results.rateReduction.toFixed(2)}% — meets the VA's 0.5% minimum reduction requirement for fixed-to-fixed IRRRL.`
                    : `Your rate only drops ${results.rateReduction.toFixed(2)}% — the VA requires at least a 0.5% reduction for a fixed-to-fixed IRRRL. (Exception: ARM-to-fixed conversions have different rules.)`}
                </StatusBadge>
              )}

              {refiType === 'cashout' && (
                <StatusBadge status="info">
                  <strong>Refinance Type:</strong>{' '}
                  {results.isTypeII
                    ? `Type II Cash-Out — you're borrowing ${formatCurrency(results.cashOut)} beyond your current balance. The 36-month recoupment requirement does not apply to Type II.`
                    : `Type I Cash-Out — your new loan does not exceed your current payoff amount. The 36-month recoupment requirement applies.`}
                </StatusBadge>
              )}

              {results.recoupmentApplies && (
                <StatusBadge
                  status={
                    results.breakEvenMonths <= 36
                      ? 'pass'
                      : results.breakEvenMonths <= 48
                        ? 'warn'
                        : 'fail'
                  }
                >
                  <strong>36-Month Recoupment:</strong>{' '}
                  {results.breakEvenMonths === Infinity
                    ? "Your new payment is higher — you won't recoup closing costs through monthly savings."
                    : results.breakEvenMonths <= 36
                      ? `You'll recoup closing costs in ${results.breakEvenMonths} months — within the VA's 36-month guideline.`
                      : `It will take ${results.breakEvenMonths} months to recoup costs — exceeds the VA's 36-month guideline. Some lenders may still approve with additional justification.`}
                </StatusBadge>
              )}

              {!results.recoupmentApplies && (
                <StatusBadge status="info">
                  <strong>36-Month Recoupment:</strong> Does not apply to Type II cash-out
                  refinances. However, your break-even on closing costs is{' '}
                  {results.breakEvenMonths === Infinity
                    ? 'not achievable through monthly savings alone (your payment is higher).'
                    : `${results.breakEvenMonths} months — worth considering as you evaluate this refinance.`}
                </StatusBadge>
              )}

              <StatusBadge status={results.monthlySavings > 0 ? 'pass' : 'warn'}>
                <strong>Monthly Payment:</strong>{' '}
                {results.monthlySavings > 0
                  ? `Your payment drops by ${formatCurrencyExact(results.monthlySavings)}/month — that's ${formatCurrency(results.monthlySavings * 12)}/year back in your pocket.`
                  : results.isTypeII
                    ? `Your payment increases by ${formatCurrencyExact(Math.abs(results.monthlySavings))}/month. This is expected when taking cash out of your equity.`
                    : `Your payment increases by ${formatCurrencyExact(Math.abs(results.monthlySavings))}/month. This may still make sense if you're shortening your term or switching from an ARM to a fixed rate.`}
              </StatusBadge>
            </div>

            {/* Bottom line */}
            <div
              style={{
                backgroundColor: '#0f1d32',
                borderRadius: '10px',
                border: '1px solid #1e3a5f',
                padding: '20px',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '8px',
                }}
              >
                The Bottom Line
              </div>
              <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: 1.7, margin: 0 }}>
                {results.isTypeII
                  ? `You're accessing ${formatCurrency(results.cashOut)} from your home equity. Your monthly payment will ${results.monthlySavings >= 0 ? `decrease by ${formatCurrencyExact(results.monthlySavings)}` : `increase by ${formatCurrencyExact(Math.abs(results.monthlySavings))}`}/month. Compare this to the cost of alternative borrowing options like a HELOC or personal loan — VA cash-out rates are typically much lower. Make sure the cash serves a purpose that justifies the added monthly cost, such as paying off high-interest debt, home improvements, or other financial goals.`
                  : results.monthlySavings > 0 && results.meetsNTB && results.meetsRecoupment
                    ? `Based on these numbers, refinancing looks like a strong move. You'd save ${formatCurrencyExact(results.monthlySavings)} per month, recoup your costs in ${results.breakEvenMonths} months, and save ${formatCurrency(results.lifetimeInterestSavings)} in interest over the life of the loan. These are estimates — your actual rate, fees, and savings will depend on your lender, credit profile, and current market conditions.`
                    : results.monthlySavings > 0 && results.meetsNTB && !results.meetsRecoupment
                      ? `You'd save monthly, but it would take ${results.breakEvenMonths} months to recoup your closing costs. If you plan to stay in the home long enough, it may still be worth it. Talk to a lender about your specific situation and whether they can reduce closing costs.`
                      : results.monthlySavings > 0 && !results.meetsNTB
                        ? `You'd save ${formatCurrencyExact(results.monthlySavings)} per month, but the rate reduction doesn't meet the VA's net tangible benefit requirement for a fixed-to-fixed IRRRL. If you're converting from an ARM to a fixed rate, different rules apply. Otherwise, consider waiting for a better rate.`
                        : `Based on these numbers, refinancing may not make sense right now. Your new payment would be higher, which can be justified if you're shortening your term to build equity faster or switching from an ARM to a fixed rate for payment stability. Otherwise, consider waiting for a lower rate.`}
              </p>
            </div>

            {/* Disclaimer */}
            <p
              style={{
                fontSize: '11px',
                color: '#475569',
                lineHeight: 1.6,
                marginTop: '20px',
                textAlign: 'center',
              }}
            >
              This calculator is for educational purposes only and is not a loan offer, commitment,
              or guarantee. Actual rates, fees, and savings will vary based on your credit profile,
              lender, and market conditions. Consult a VA-approved lender for personalized advice.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
