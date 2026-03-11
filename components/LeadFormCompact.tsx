'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LeadFormCompact() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, loanType: 'Not Sure', phone: '', currentRate: '', loanBalance: '' }),
      })
    } finally {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-2">
        <p className="text-white font-semibold">Thank you! We&apos;ll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-end">
      <div className="flex-1">
        <label className="block text-white/80 text-xs mb-1">Your Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="First Last"
          className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold-400"
        />
      </div>
      <div className="flex-1">
        <label className="block text-white/80 text-xs mb-1">Email Address</label>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold-400"
        />
      </div>
      <button
        type="submit"
        className="bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors whitespace-nowrap"
      >
        Get Started
      </button>
      <Link href="/contact" className="text-white/60 hover:text-white text-xs self-center whitespace-nowrap">
        Full form →
      </Link>
    </form>
  )
}
