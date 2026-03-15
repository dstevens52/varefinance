import type { Metadata } from 'next'
import Link from 'next/link'
import IRRRLEligibilityCalculator from '@/components/IRRRLEligibilityCalculator'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'VA IRRRL Eligibility Date Calculator — When Can I Refinance?',
  description:
    'Find your earliest VA IRRRL eligibility date. Enter your closing date and first payment date to see when you meet the VA\'s 210-day and 6-payment seasoning requirements.',
  openGraph: {
    title: 'VA IRRRL Eligibility Date Calculator — When Can I Refinance?',
    description: 'See exactly when you meet the VA\'s two seasoning requirements for an IRRRL streamline refinance.',
  },
}

export default function IRRRLEligibilityPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'VA Refinance Calculator', path: '/calculator' },
        { name: 'IRRRL Eligibility Calculator', path: '/calculator/irrrl-eligibility' },
      ])} />

      {/* Calculator — first on page */}
      <section className="bg-navy-950 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <IRRRLEligibilityCalculator />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-navy-900 text-white py-10 px-4 border-t border-navy-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
            VA IRRRL <span className="text-gold-400">Seasoning Requirements</span>
          </h2>
          <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
            The VA requires veterans to meet two separate seasoning tests before closing on an IRRRL. Both must be satisfied — whichever comes later is your earliest eligible date.
          </p>
          <Link href="/calculator" className="inline-block mt-4 text-white/50 hover:text-white/80 text-sm transition-colors">
            ← Back to VA Refinance Decision Tool
          </Link>
        </div>
      </section>

      {/* Educational section */}
      <section className="bg-white py-14 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">The Two VA IRRRL Seasoning Rules</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-navy-900 px-5 py-3 flex items-center gap-3">
                <span className="text-gold-400 font-bold text-lg">1</span>
                <h3 className="font-semibold text-white text-sm">210-Day Rule</h3>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  The note date (closing date) of your new IRRRL must be at least <strong>210 days after the first payment due date</strong> on the loan being refinanced. This is a hard federal requirement under 38 CFR 36.4307 — no lender can waive it.
                </p>
                <p className="mt-3 text-gray-500">
                  Example: If your first payment was due January 1, the earliest your IRRRL can close is July 30 of the same year (210 days later).
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-navy-900 px-5 py-3 flex items-center gap-3">
                <span className="text-gold-400 font-bold text-lg">2</span>
                <h3 className="font-semibold text-white text-sm">6-Payment Rule</h3>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  You must have made <strong>at least 6 consecutive monthly payments</strong> on the loan being refinanced. The 6th payment is due 5 months after your first payment — both must be paid on time.
                </p>
                <p className="mt-3 text-gray-500">
                  Example: If your first payment was January 1, your 6th payment is due June 1. You cannot close your IRRRL before that date under this rule.
                </p>
              </div>
            </div>

            <div className="bg-navy-50 border border-navy-100 rounded-xl px-5 py-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong className="text-navy-900">Why the 210-day rule almost always wins:</strong> 210 days is approximately 7 months, while 6 payments are made by month 6. In practice, the 210-day clock determines the earliest eligible date for most veterans. The 6-payment rule only becomes the binding constraint if your loan term structure creates an unusually long payment cycle — which is rare with standard monthly VA loans.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong className="text-navy-900">These rules govern closing date, not application date.</strong> You can begin shopping lenders, locking a rate, and submitting an application before your eligibility date — you just cannot <em>close</em> until both tests are satisfied. Most of the IRRRL process can happen in advance.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                href: '/blog/va-loan-refinance-waiting-period',
                title: 'VA Refinance Waiting Period',
                body: 'A deeper look at the 210-day and 6-payment rules — including edge cases, lender overlays, and what happens if you miss a payment.',
              },
              {
                href: '/blog/va-irrrl-net-tangible-benefit',
                title: 'Net Tangible Benefit Explained',
                body: 'Seasoning is only one of the VA\'s IRRRL requirements. Learn about the net tangible benefit test and the 36-month recoupment rule.',
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="block group bg-navy-50 hover:bg-navy-100 border border-gray-200 rounded-xl p-5 transition-colors"
              >
                <h3 className="font-semibold text-navy-900 mb-2 group-hover:text-navy-700 text-sm">
                  {card.title} →
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">{card.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
