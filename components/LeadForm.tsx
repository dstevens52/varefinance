'use client'

import { useState } from 'react'

interface FormData {
  name: string
  phone: string
  email: string
  loanType: string
  currentRate: string
  loanBalance: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  loanType: '',
  currentRate: '',
  loanBalance: '',
}

export default function LeadForm({ defaultLoanType = '' }: { defaultLoanType?: string }) {
  const [form, setForm] = useState<FormData>({ ...initialForm, loanType: defaultLoanType })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-navy-700"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 555-5555"
            className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-navy-700"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-navy-700"
        />
      </div>

      <div>
        <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-1">I&apos;m interested in *</label>
        <select
          id="loanType"
          name="loanType"
          required
          value={form.loanType}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-navy-700 bg-white"
        >
          <option value="">Select loan type...</option>
          <option value="VA IRRRL (Streamline Refinance)">VA IRRRL (Streamline Refinance)</option>
          <option value="VA Cash-Out Refinance">VA Cash-Out Refinance</option>
          <option value="VA Home Purchase">VA Home Purchase</option>
          <option value="Not Sure">Not Sure — Help Me Decide</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="currentRate" className="block text-sm font-medium text-gray-700 mb-1">Current Interest Rate</label>
          <input
            id="currentRate"
            name="currentRate"
            type="text"
            value={form.currentRate}
            onChange={handleChange}
            placeholder="e.g. 6.5%"
            className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-navy-700"
          />
        </div>
        <div>
          <label htmlFor="loanBalance" className="block text-sm font-medium text-gray-700 mb-1">Estimated Loan Balance</label>
          <input
            id="loanBalance"
            name="loanBalance"
            type="text"
            value={form.loanBalance}
            onChange={handleChange}
            placeholder="e.g. $280,000"
            className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-navy-700"
          />
        </div>
      </div>

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

      <p className="text-xs text-gray-500 text-center">
        No obligation. No pressure. Your information is kept private.
      </p>
    </form>
  )
}
