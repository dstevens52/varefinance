'use client'

import React, { useState, useMemo } from 'react'

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
  if (principal <= 0) return 0
  if (annualRate === 0) return principal / (termYears * 12)
  const r = annualRate / 100 / 12
  const n = termYears * 12
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

function getFundingFeePct(
  loanType: string,
  isSubsequent: boolean,
  downPctBucket: string,
): number {
  if (loanType === 'irrrl') return 0.5
  if (loanType === 'cashout') return isSubsequent ? 3.3 : 2.15
  // purchase
  if (downPctBucket === '10') return 1.25
  if (downPctBucket === '5') return 1.5
  return isSubsequent ? 3.3 : 2.15
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
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
        margin: '0 0 16px',
      }}
    >
      {children}
    </h3>
  )
}

function ResultCard({
  label,
  value,
  sub,
  highlight,
}: {
  label: string
  value: string
  sub?: string
  highlight?: boolean
}) {
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
      {sub && (
        <div style={{ fontSize: '13px', color: '#64748b', marginTop: '6px' }}>{sub}</div>
      )}
    </div>
  )
}

type LoanType = 'purchase' | 'irrrl' | 'cashout'

export default function VAFundingFeeCalculator() {
  const [loanType, setLoanType] = useState<LoanType>('purchase')
  const [isSubsequent, setIsSubsequent] = useState(false)
  const [downPctBucket, setDownPctBucket] = useState('0')
  const [loanAmount, setLoanAmount] = useState('350000')
  const [exempt, setExempt] = useState(false)

  const result = useMemo(() => {
    const amount = parseFloat(loanAmount.replace(/,/g, '')) || 0
    if (amount <= 0) return null

    const feePct = exempt ? 0 : getFundingFeePct(loanType, isSubsequent, downPctBucket)
    const feeAmount = amount * (feePct / 100)
    const newLoanAmount = amount + feeAmount
    const monthlyImpact = calcMonthlyPayment(feeAmount, 6, 30)
    const monthlyWithFee = calcMonthlyPayment(newLoanAmount, 6, 30)
    const monthlyWithout = calcMonthlyPayment(amount, 6, 30)

    return { feePct, feeAmount, newLoanAmount, monthlyImpact, monthlyWithFee, monthlyWithout, amount }
  }, [loanType, isSubsequent, downPctBucket, loanAmount, exempt])

  const loanTypeOptions: { value: LoanType; label: string }[] = [
    { value: 'purchase', label: 'Purchase' },
    { value: 'irrrl', label: 'VA Streamline (IRRRL)' },
    { value: 'cashout', label: 'Cash-Out Refinance' },
  ]

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
          VA Funding Fee Calculator
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
          How Much Is Your VA Funding Fee?
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
          Select your loan type and usage history to see your exact funding fee — and
          what it costs if you roll it into the loan.
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

          {/* Loan type selector */}
          <div style={{ marginBottom: '28px' }}>
            <div
              style={{
                display: 'flex',
                gap: '8px',
                padding: '4px',
                backgroundColor: '#0f1d32',
                borderRadius: '10px',
                border: '1px solid #1e3a5f',
              }}
            >
              {loanTypeOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setLoanType(opt.value)}
                  style={{
                    flex: 1,
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                    backgroundColor: loanType === opt.value ? '#c5a44e' : 'transparent',
                    color: loanType === opt.value ? '#0a1628' : '#94a3b8',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Loan details section */}
          <div style={{ marginBottom: '24px' }}>
            <SectionHeader>Loan Details</SectionHeader>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>

              {/* Loan amount */}
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
                  Loan Amount
                </label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#0f1d32',
                    border: '1px solid #1e3a5f',
                    borderRadius: '8px',
                    overflow: 'hidden',
                  }}
                >
                  <span
                    style={{
                      padding: '12px 0 12px 14px',
                      color: '#64748b',
                      fontSize: '16px',
                      fontWeight: 500,
                    }}
                  >
                    $
                  </span>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="350,000"
                    style={{
                      flex: 1,
                      padding: '12px 14px 12px 4px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#e2e8f0',
                      fontSize: '16px',
                      fontWeight: 500,
                      width: '100%',
                    }}
                  />
                </div>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  {loanType === 'purchase' ? 'Total loan amount (not purchase price)' : 'Your current loan balance'}
                </span>
              </div>

              {/* VA loan usage — hidden for IRRRL */}
              {loanType !== 'irrrl' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    VA Loan Benefit Usage
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { value: false, label: 'First use', sub: 'You have not used your VA loan benefit before' },
                      { value: true, label: 'Subsequent use', sub: 'You have used your VA loan benefit before' },
                    ].map((opt) => (
                      <label
                        key={String(opt.value)}
                        onClick={() => setIsSubsequent(opt.value)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 14px',
                          backgroundColor: isSubsequent === opt.value ? '#0f1d32' : 'transparent',
                          border: `1px solid ${isSubsequent === opt.value ? '#c5a44e' : '#1e3a5f'}`,
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                      >
                        <span
                          style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            border: `2px solid ${isSubsequent === opt.value ? '#c5a44e' : '#475569'}`,
                            backgroundColor: isSubsequent === opt.value ? '#c5a44e' : 'transparent',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {isSubsequent === opt.value && (
                            <span
                              style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: '#0a1628',
                                display: 'block',
                              }}
                            />
                          )}
                        </span>
                        <span>
                          <span style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0', display: 'block' }}>
                            {opt.label}
                          </span>
                          <span style={{ fontSize: '12px', color: '#64748b' }}>{opt.sub}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* IRRRL usage note */}
              {loanType === 'irrrl' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#0c2340',
                    border: '1px solid #1a3a6a',
                    borderRadius: '8px',
                    padding: '14px',
                    gap: '10px',
                  }}
                >
                  <span style={{ color: '#93c5fd', fontSize: '18px', flexShrink: 0 }}>ℹ</span>
                  <p style={{ fontSize: '13px', color: '#93c5fd', margin: 0, lineHeight: 1.5 }}>
                    The IRRRL funding fee is always <strong>0.5%</strong> regardless of first or subsequent use.
                  </p>
                </div>
              )}
            </div>

            {/* Down payment — Purchase only */}
            {loanType === 'purchase' && (
              <div style={{ marginTop: '16px' }}>
                <label
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Down Payment
                </label>
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    padding: '4px',
                    backgroundColor: '#0f1d32',
                    borderRadius: '10px',
                    border: '1px solid #1e3a5f',
                  }}
                >
                  {[
                    { value: '0', label: 'Less than 5%' },
                    { value: '5', label: '5% or more' },
                    { value: '10', label: '10% or more' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setDownPctBucket(opt.value)}
                      style={{
                        flex: 1,
                        padding: '10px 8px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 600,
                        transition: 'all 0.2s',
                        backgroundColor: downPctBucket === opt.value ? '#c5a44e' : 'transparent',
                        color: downPctBucket === opt.value ? '#0a1628' : '#94a3b8',
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <span style={{ fontSize: '12px', color: '#64748b', display: 'block', marginTop: '6px' }}>
                  A higher down payment reduces the funding fee for purchase loans.
                </span>
              </div>
            )}
          </div>

          {/* Exemption */}
          <div>
            <SectionHeader>Exemption Status</SectionHeader>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 16px',
                backgroundColor: exempt ? '#0d3d2e' : '#0f1d32',
                border: `1px solid ${exempt ? '#1a7a54' : '#1e3a5f'}`,
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onClick={() => setExempt(!exempt)}
            >
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '4px',
                  border: `2px solid ${exempt ? '#c5a44e' : '#1e3a5f'}`,
                  backgroundColor: exempt ? '#c5a44e' : 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.2s',
                }}
              >
                {exempt && (
                  <span style={{ color: '#0a1628', fontWeight: 700, fontSize: '14px' }}>✓</span>
                )}
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0' }}>
                  I am exempt from the VA Funding Fee
                </div>
                <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                  Service-connected disability rating, Purple Heart recipient, or surviving spouse of a veteran who died in service or from a service-connected disability
                </div>
              </div>
            </div>
          </div>
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
              Your Results
            </h3>

            {/* Exemption banner */}
            {exempt && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  backgroundColor: '#0d3d2e',
                  border: '1px solid #1a7a54',
                  borderRadius: '10px',
                  marginBottom: '20px',
                }}
              >
                <span style={{ color: '#4ade80', fontSize: '24px', flexShrink: 0 }}>✓</span>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#4ade80' }}>
                    Funding fee waived — $0 due
                  </div>
                  <div style={{ fontSize: '13px', color: '#86efac', marginTop: '4px' }}>
                    Veterans with a service-connected disability rating, Purple Heart recipients, and surviving spouses are exempt from the VA funding fee under 38 U.S.C. § 3729(c).
                  </div>
                </div>
              </div>
            )}

            {/* Key metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '12px',
                marginBottom: '24px',
              }}
            >
              <ResultCard
                label="Funding Fee Rate"
                value={exempt ? '0%' : `${result.feePct}%`}
                sub={
                  loanType === 'irrrl'
                    ? 'Fixed rate for all IRRRLs'
                    : loanType === 'cashout'
                    ? isSubsequent ? 'Subsequent use rate' : 'First use rate'
                    : downPctBucket === '10'
                    ? '10%+ down purchase'
                    : downPctBucket === '5'
                    ? '5%+ down purchase'
                    : `${isSubsequent ? 'Subsequent' : 'First'} use, <5% down`
                }
              />
              <ResultCard
                label="Funding Fee Amount"
                value={exempt ? '$0' : formatCurrency(result.feeAmount)}
                sub={`On a ${formatCurrency(result.amount)} loan`}
                highlight={!exempt && result.feeAmount > 0}
              />
              <ResultCard
                label="New Loan if Financed"
                value={exempt ? formatCurrency(result.amount) : formatCurrency(result.newLoanAmount)}
                sub={exempt ? 'No fee added' : `+${formatCurrency(result.feeAmount)} rolled in`}
              />
              <ResultCard
                label="Monthly Cost of Fee"
                value={exempt ? '$0' : formatCurrencyExact(result.monthlyImpact)}
                sub="At 6%, 30-yr estimate"
              />
            </div>

            {/* Breakdown */}
            {!exempt && (
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
                  Financing Breakdown
                </div>
                {[
                  { label: 'Loan amount', value: formatCurrency(result.amount) },
                  { label: `VA funding fee (${result.feePct}%)`, value: formatCurrency(result.feeAmount) },
                  { label: 'New loan amount (fee financed)', value: formatCurrency(result.newLoanAmount), bold: true },
                  { label: 'Est. monthly payment without fee (6%, 30-yr)', value: formatCurrencyExact(result.monthlyWithout) },
                  { label: 'Est. monthly payment with fee financed (6%, 30-yr)', value: formatCurrencyExact(result.monthlyWithFee), bold: true },
                  { label: 'Monthly impact of financing the fee', value: `+${formatCurrencyExact(result.monthlyImpact)}`, bold: true },
                ].map((row, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px 0',
                      borderTop: row.bold ? '1px solid #1e3a5f' : 'none',
                      marginTop: row.bold ? '4px' : 0,
                    }}
                  >
                    <span style={{ fontSize: '14px', color: row.bold ? '#e2e8f0' : '#94a3b8', fontWeight: row.bold ? 600 : 400 }}>
                      {row.label}
                    </span>
                    <span style={{ fontSize: '14px', color: row.bold ? '#c5a44e' : '#94a3b8', fontWeight: row.bold ? 700 : 500 }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

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
                What This Means
              </div>
              <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: 1.7, margin: 0 }}>
                {exempt
                  ? `As an exempt veteran, you owe no funding fee on this loan. This saves you ${formatCurrency((parseFloat(loanAmount.replace(/,/g, '')) || 0) * (getFundingFeePct(loanType, isSubsequent, downPctBucket) / 100))} compared to a non-exempt borrower in the same situation. Your exemption status should be verified by your lender using your Certificate of Eligibility.`
                  : loanType === 'irrrl'
                  ? `The IRRRL funding fee of 0.5% is the lowest available and is the same regardless of how many times you've used your VA benefit. On a ${formatCurrency(result.amount)} loan, the fee is ${formatCurrency(result.feeAmount)}. Most veterans roll it into the loan rather than paying out of pocket — the monthly cost is only ${formatCurrencyExact(result.monthlyImpact)} at a 6% rate.`
                  : `Your funding fee of ${result.feePct}% equals ${formatCurrency(result.feeAmount)} on this loan. Most VA borrowers finance the fee rather than paying it at closing — it adds ${formatCurrencyExact(result.monthlyImpact)}/month to the payment at a 6% rate. If you believe you may qualify for an exemption, confirm your status with the VA before closing.`}
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
              Monthly payment estimates assume a 6% interest rate and 30-year term for illustrative purposes only.
              Actual rates and payments will vary. Consult a VA-approved lender for precise figures.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
