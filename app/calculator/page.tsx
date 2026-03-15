import type { Metadata } from 'next'
import Link from 'next/link'
import VARefinanceCalculator from '@/components/VARefinanceCalculator'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'VA Refinance Calculator — Should I Refinance My VA Loan?',
  description:
    'Free VA refinance calculator for veterans. Enter your current loan details and new rate to instantly see your monthly savings, break-even point, lifetime interest savings, and whether you meet VA requirements.',
  openGraph: {
    title: 'VA Refinance Calculator — Should I Refinance My VA Loan?',
    description: 'Instantly calculate your VA refinance savings, break-even point, and VA requirement checks.',
  },
}

export default function CalculatorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'VA Refinance Calculator', path: '/calculator' },
      ])} />

      {/* Calculator */}
      <section className="bg-navy-950 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <VARefinanceCalculator />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-navy-900 text-white py-10 px-4 border-t border-navy-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
            VA Refinance <span className="text-gold-400">Calculator</span>
          </h2>
          <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
            Plug in your numbers to see your estimated monthly savings, break-even timeline, and whether the refinance meets VA guidelines — before you ever talk to a lender.
          </p>
        </div>
      </section>

      {/* More VA Calculators */}
      <section className="bg-navy-900 py-8 px-4 border-t border-navy-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4">More VA Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/calculator/funding-fee" className="flex items-start gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-5 transition-colors group">
              <div className="text-2xl">💰</div>
              <div>
                <h3 className="font-semibold text-white text-sm group-hover:text-gold-400 transition-colors mb-1">VA Funding Fee Calculator</h3>
                <p className="text-white/50 text-xs leading-relaxed">Calculate your exact funding fee by loan type, usage history, and down payment. See the cost if you finance it.</p>
              </div>
            </Link>
            <Link href="/calculator/irrrl-eligibility" className="flex items-start gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-5 transition-colors group">
              <div className="text-2xl">📅</div>
              <div>
                <h3 className="font-semibold text-white text-sm group-hover:text-gold-400 transition-colors mb-1">IRRRL Eligibility Date Calculator</h3>
                <p className="text-white/50 text-xs leading-relaxed">Enter your closing and first payment dates to see exactly when you meet the VA's 210-day and 6-payment seasoning rules.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Context links */}
      <section className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-navy-900 mb-6 text-center">Want to understand the numbers behind the calculator?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                href: '/va-irrrl',
                title: 'VA Streamline Refinance',
                body: 'Learn how the IRRRL works, eligibility rules, and what the 0.5% net tangible benefit requirement means in practice.',
              },
              {
                href: '/va-cash-out',
                title: 'VA Cash-Out Refinance',
                body: 'Understand how cash-out transactions are structured, what the 2.15% funding fee covers, and when it makes sense.',
              },
              {
                href: '/blog/va-irrrl-vs-conventional-refinance',
                title: 'IRRRL vs Conventional Refinance',
                body: 'See a detailed comparison of VA IRRRL and conventional refinance costs, requirements, and long-term savings.',
              },
            ].map(card => (
              <Link key={card.href} href={card.href} className="block group bg-navy-50 hover:bg-navy-100 border border-gray-200 rounded-xl p-5 transition-colors">
                <h3 className="font-semibold text-navy-900 mb-2 group-hover:text-navy-700">{card.title} →</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
