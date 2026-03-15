'use client'

import React, { useState, useMemo, useEffect } from 'react'

// ── Date helpers ──────────────────────────────────────────────────────────────

function toInputValue(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function parseInputDate(value: string): Date | null {
  if (!value) return null
  // Parse as local date (avoid UTC shift from new Date(str))
  const [y, m, d] = value.split('-').map(Number)
  if (!y || !m || !d) return null
  return new Date(y, m - 1, d)
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

function addMonths(date: Date, months: number): Date {
  const d = new Date(date)
  d.setMonth(d.getMonth() + months)
  return d
}

function defaultFirstPayment(closing: Date): Date {
  // 1st of the month two months after closing
  return new Date(closing.getFullYear(), closing.getMonth() + 2, 1)
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function daysBetween(a: Date, b: Date): number {
  return Math.ceil((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: '14px',
        fontWeight: 700,
        color: '#c5a44e',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        margin: '0 0 16px',
        paddingBottom: '8px',
        borderBottom: '1px solid #1e3a5f',
      }}
    >
      {children}
    </h3>
  )
}

function DateField({
  label,
  value,
  onChange,
  helpText,
  id,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  helpText?: string
  id: string
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label
        htmlFor={id}
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
      <input
        id={id}
        type="date"
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
          colorScheme: 'dark',
        }}
      />
      {helpText && (
        <span style={{ fontSize: '12px', color: '#64748b' }}>{helpText}</span>
      )}
    </div>
  )
}

function MilestoneRow({
  label,
  date,
  isBinding,
  isPast,
}: {
  label: string
  date: Date
  isBinding: boolean
  isPast: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
        borderRadius: '8px',
        backgroundColor: isBinding ? '#1a3352' : '#0f1d32',
        border: `1px solid ${isBinding ? '#c5a44e' : '#1e3a5f'}`,
      }}
    >
      <div>
        <div
          style={{
            fontSize: '13px',
            color: isBinding ? '#c5a44e' : '#94a3b8',
            fontWeight: isBinding ? 700 : 500,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          {label}
          {isBinding && (
            <span
              style={{
                marginLeft: '8px',
                fontSize: '10px',
                backgroundColor: '#c5a44e',
                color: '#0a1628',
                padding: '1px 6px',
                borderRadius: '4px',
                fontWeight: 700,
                letterSpacing: '0.06em',
              }}
            >
              BINDING
            </span>
          )}
        </div>
        <div style={{ fontSize: '16px', fontWeight: 600, color: '#e2e8f0', marginTop: '2px' }}>
          {formatDate(date)}
        </div>
      </div>
      <div
        style={{
          fontSize: '12px',
          fontWeight: 600,
          color: isPast ? '#4ade80' : '#94a3b8',
          textAlign: 'right',
        }}
      >
        {isPast ? '✓ Passed' : 'Upcoming'}
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function IRRRLEligibilityCalculator() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [closingDateStr, setClosingDateStr] = useState(toInputValue(today))
  const [firstPaymentStr, setFirstPaymentStr] = useState(
    toInputValue(defaultFirstPayment(today)),
  )
  const [userEditedPayment, setUserEditedPayment] = useState(false)

  // Auto-update first payment when closing date changes (unless user overrode it)
  useEffect(() => {
    if (userEditedPayment) return
    const closing = parseInputDate(closingDateStr)
    if (!closing) return
    setFirstPaymentStr(toInputValue(defaultFirstPayment(closing)))
  }, [closingDateStr, userEditedPayment])

  const result = useMemo(() => {
    const closing = parseInputDate(closingDateStr)
    const firstPayment = parseInputDate(firstPaymentStr)
    if (!closing || !firstPayment) return null

    // 210-day rule: note date of new loan ≥ 210 days after first payment due date
    const date210 = addDays(firstPayment, 210)

    // 6-payment rule: 6th payment is 5 months after first payment
    const date6Payments = addMonths(firstPayment, 5)

    // Eligible date is the LATER of the two
    const eligibleDate = date210 > date6Payments ? date210 : date6Payments
    const bindingRule = date210 > date6Payments ? '210-day' : '6-payment'

    const daysRemaining = daysBetween(today, eligibleDate)
    const isEligible = daysRemaining <= 0

    return {
      date210,
      date6Payments,
      eligibleDate,
      bindingRule,
      daysRemaining: Math.max(0, daysRemaining),
      isEligible,
    }
  }, [closingDateStr, firstPaymentStr]) // eslint-disable-line react-hooks/exhaustive-deps

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
          IRRRL Eligibility Calculator
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
          When Can I Do a VA Streamline Refinance?
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
          Enter your current loan&apos;s closing date and first payment date to see
          exactly when you meet the VA&apos;s two seasoning requirements.
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
        {/* Inputs */}
        <div style={{ padding: '28px' }}>
          <SectionHeader>Your Current VA Loan</SectionHeader>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <DateField
              id="closing-date"
              label="Closing Date"
              value={closingDateStr}
              onChange={(v) => {
                setClosingDateStr(v)
                setUserEditedPayment(false) // reset override so auto-calc kicks in
              }}
              helpText="The date you closed on your current VA loan"
            />
            <DateField
              id="first-payment-date"
              label="First Payment Date"
              value={firstPaymentStr}
              onChange={(v) => {
                setFirstPaymentStr(v)
                setUserEditedPayment(true)
              }}
              helpText="Typically the 1st of the month, two months after closing"
            />
          </div>

          {userEditedPayment && (
            <button
              onClick={() => {
                const closing = parseInputDate(closingDateStr)
                if (closing) setFirstPaymentStr(toInputValue(defaultFirstPayment(closing)))
                setUserEditedPayment(false)
              }}
              style={{
                marginTop: '10px',
                background: 'none',
                border: 'none',
                color: '#64748b',
                fontSize: '12px',
                cursor: 'pointer',
                textDecoration: 'underline',
                padding: 0,
              }}
            >
              Reset first payment to default
            </button>
          )}
        </div>

        {/* Results */}
        {result && (
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
              Seasoning Requirements
            </h3>

            {/* Milestone rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              <MilestoneRow
                label="210 days from first payment due date"
                date={result.date210}
                isBinding={result.bindingRule === '210-day'}
                isPast={result.date210 <= today}
              />
              <MilestoneRow
                label="6 monthly payments made"
                date={result.date6Payments}
                isBinding={result.bindingRule === '6-payment'}
                isPast={result.date6Payments <= today}
              />
            </div>

            {/* Eligible date */}
            <div
              style={{
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: result.isEligible ? '#0d3d2e' : '#0f1d32',
                border: `1px solid ${result.isEligible ? '#1a7a54' : '#1e3a5f'}`,
                marginBottom: '16px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: result.isEligible ? '#86efac' : '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '8px',
                }}
              >
                Earliest IRRRL Eligible Date
              </div>
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: result.isEligible ? '#4ade80' : '#e2e8f0',
                  marginBottom: '4px',
                }}
              >
                {formatDate(result.eligibleDate)}
              </div>
              <div style={{ fontSize: '13px', color: result.isEligible ? '#86efac' : '#64748b' }}>
                Determined by the {result.bindingRule === '210-day' ? '210-day' : '6-payment'} requirement
              </div>
            </div>

            {/* Status badge */}
            {result.isEligible ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  padding: '18px 20px',
                  backgroundColor: '#0d3d2e',
                  border: '1px solid #1a7a54',
                  borderRadius: '10px',
                }}
              >
                <span style={{ color: '#4ade80', fontSize: '24px', flexShrink: 0, lineHeight: 1 }}>✓</span>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#4ade80', marginBottom: '4px' }}>
                    Based on these dates, you meet the VA seasoning requirements today.
                  </div>
                  <div style={{ fontSize: '13px', color: '#86efac', lineHeight: 1.6 }}>
                    You have made at least 6 monthly payments and it has been at least 210 days since
                    your first payment due date. You may be eligible to apply for a VA IRRRL — contact
                    a VA-approved lender to confirm eligibility and check current rates.
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  padding: '18px 20px',
                  backgroundColor: '#0c2340',
                  border: '1px solid #1a3a6a',
                  borderRadius: '10px',
                }}
              >
                <span style={{ color: '#93c5fd', fontSize: '24px', flexShrink: 0, lineHeight: 1 }}>ℹ</span>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#93c5fd', marginBottom: '4px' }}>
                    {result.daysRemaining} day{result.daysRemaining !== 1 ? 's' : ''} remaining until eligible
                  </div>
                  <div style={{ fontSize: '13px', color: '#bfdbfe', lineHeight: 1.6 }}>
                    Your earliest eligible IRRRL closing date is <strong>{formatDate(result.eligibleDate)}</strong>.
                    You can start shopping rates and gathering lender quotes before then — just know the
                    loan cannot close until that date.
                  </div>
                </div>
              </div>
            )}

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
              This calculator determines seasoning eligibility only. IRRRL eligibility also requires
              occupancy certification, a net tangible benefit, and lender-specific credit requirements.
              Consult a VA-approved lender to confirm all eligibility conditions are met.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
