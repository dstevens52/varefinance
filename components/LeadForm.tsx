'use client'

import { useState } from 'react'

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois',
  'Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts',
  'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
  'New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota',
  'Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
  'South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington',
  'West Virginia','Wisconsin','Wyoming',
]

interface FormData {
  name: string
  phone: string
  email: string
  state: string
  loanType: string
  currentRate: string
  loanBalance: string
  purchasePrice: string
  downPayment: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  state: '',
  loanType: '',
  currentRate: '',
  loanBalance: '',
  purchasePrice: '',
  downPayment: '',
}

const inputClass = 'w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-navy-700 bg-white'

export default function LeadForm({ defaultLoanType = '' }: { defaultLoanType?: string }) {
  const [form, setForm] = useState<FormData>({ ...initialForm, loanType: defaultLoanType })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const isPurchase = form.loanType === 'VA Home Purchase'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or call us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">You&apos;re all set!</h3>
        <p className="text-green-700">
          Thank you for reaching out. A VA loan specialist will review your information and be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            id="name" name="name" type="text" required
            value={form.name} onChange={handleChange} placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input
            id="phone" name="phone" type="tel" required
            value={form.phone} onChange={handleChange} placeholder="(555) 555-5555"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
        <input
          id="email" name="email" type="email" required
          value={form.email} onChange={handleChange} placeholder="john@example.com"
          className={inputClass}
        />
      </div>

      {/* State */}
      <div>
        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State *</label>
        <select
          id="state" name="state" required
          value={form.state} onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select state...</option>
          {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Loan Type */}
      <div>
        <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-1">I&apos;m interested in *</label>
        <select
          id="loanType" name="loanType" required
          value={form.loanType} onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select loan type...</option>
          <option value="VA IRRRL (Streamline Refinance)">VA IRRRL (Streamline Refinance)</option>
          <option value="VA Cash-Out Refinance">VA Cash-Out Refinance</option>
          <option value="VA Home Purchase">VA Home Purchase</option>
        </select>
      </div>

      {/* Conditional fields */}
      {isPurchase ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-700 mb-1">Purchase Price</label>
            <input
              id="purchasePrice" name="purchasePrice" type="text"
              value={form.purchasePrice} onChange={handleChange} placeholder="e.g. $350,000"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700 mb-1">Estimated Down Payment</label>
            <input
              id="downPayment" name="downPayment" type="text"
              value={form.downPayment} onChange={handleChange} placeholder="e.g. $10,000"
              className={inputClass}
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="currentRate" className="block text-sm font-medium text-gray-700 mb-1">Current Interest Rate</label>
            <input
              id="currentRate" name="currentRate" type="text"
              value={form.currentRate} onChange={handleChange} placeholder="e.g. 6.5%"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="loanBalance" className="block text-sm font-medium text-gray-700 mb-1">Estimated Loan Balance</label>
            <input
              id="loanBalance" name="loanBalance" type="text"
              value={form.loanBalance} onChange={handleChange} placeholder="e.g. $280,000"
              className={inputClass}
            />
          </div>
        </div>
      )}

      {status === 'error' && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-white font-semibold py-3 rounded-md transition-colors text-base"
      >
        {status === 'submitting' ? 'Sending...' : 'Get My Free Consultation'}
      </button>

      {/* TCPA consent language */}
      <p className="text-xs text-gray-400 leading-relaxed">
        By clicking &ldquo;Get My Free Consultation,&rdquo; you consent to receive calls, text messages, and emails from VARefinance.com at the number and email provided. You agree this constitutes your electronic signature. Consent is not required to purchase. Message and data rates may apply. Reply STOP to opt out of text messages at any time.
      </p>
    </form>
  )
}
