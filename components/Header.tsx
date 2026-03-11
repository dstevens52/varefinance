'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/va-irrrl', label: 'VA Streamline' },
  { href: '/va-cash-out', label: 'VA Cash-Out' },
  { href: '/va-purchase', label: 'VA Purchase' },
  { href: '/blog', label: 'Learn' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-navy-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-0 shrink-0">
            <span className="font-bold text-xl text-gold-400 tracking-tight">VARE</span>
            <span className="font-semibold text-xl text-white tracking-tight">finance</span>
            <span className="text-sm font-medium text-white/50 tracking-tight">.com</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-gold-400'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-950 border-t border-navy-800">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-1 ${
                  pathname === href ? 'text-gold-400' : 'text-white/80'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-4 py-2 rounded-md text-center transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
