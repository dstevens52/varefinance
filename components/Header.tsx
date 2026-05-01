'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/va-irrrl', label: 'VA Streamline' },
  { href: '/va-cash-out', label: 'VA Cash-Out' },
  { href: '/va-purchase', label: 'VA Purchase' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

const calculatorLinks = [
  { href: '/calculator', label: 'Refinance Decision Tool' },
  { href: '/calculator/funding-fee', label: 'Funding Fee Calculator' },
  { href: '/calculator/irrrl-eligibility', label: 'IRRRL Eligibility Calculator' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [calcOpen, setCalcOpen] = useState(false)
  const pathname = usePathname()

  const isCalcActive = pathname.startsWith('/calculator')

  return (
    <header className="sticky top-0 z-50 bg-navy-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-0 shrink-0">
            <span className="font-bold text-xl text-gold-400 tracking-tight">VA</span>
            <span className="font-semibold text-xl text-white tracking-tight">Refinance.com</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href ? 'text-gold-400' : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Calculators dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCalcOpen(true)}
              onMouseLeave={() => setCalcOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isCalcActive ? 'text-gold-400' : 'text-white/80 hover:text-white'
                }`}
                onClick={() => setCalcOpen(!calcOpen)}
                aria-expanded={calcOpen}
              >
                Calculators
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${calcOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {calcOpen && (
                <>
                <div className="absolute top-full left-0 right-0 h-1" />
                <div className="absolute right-0 top-full mt-1 w-56 bg-navy-950 border border-navy-800 rounded-xl shadow-xl overflow-hidden">
                  {calculatorLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setCalcOpen(false)}
                      className={`block px-4 py-3 text-sm transition-colors border-t border-navy-800 first:border-t-0 ${
                        pathname === href
                          ? 'text-gold-400 bg-navy-800'
                          : 'text-white/80 hover:text-white hover:bg-navy-800'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                </>
              )}
            </div>
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
            <div className="border-t border-navy-800 pt-3 mt-1">
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Calculators</p>
              {calculatorLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm font-medium py-1 ${
                    pathname === href ? 'text-gold-400' : 'text-white/80'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
