import type { Metadata } from 'next'
import Link from 'next/link'
import VAFundingFeeCalculator from '@/components/VAFundingFeeCalculator'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'VA Funding Fee Calculator — 2026 Rates by Loan Type',
  description:
    'Calculate your exact VA funding fee for a purchase, IRRRL, or cash-out refinance. See your fee percentage, dollar amount, and the monthly cost if you finance it into the loan.',
  openGraph: {
    title: 'VA Funding Fee Calculator — 2026 Rates by Loan Type',
    description: 'Instantly calculate your VA funding fee based on loan type, usage history, and down payment.',
  },
}

const feeTable = [
  {
    category: 'Purchase — First Use',
    rows: [
      { down: 'Less than 5%', fee: '2.15%' },
      { down: '5% or more', fee: '1.50%' },
      { down: '10% or more', fee: '1.25%' },
    ],
  },
  {
    category: 'Purchase — Subsequent Use',
    rows: [
      { down: 'Less than 5%', fee: '3.30%' },
      { down: '5% or more', fee: '1.50%' },
      { down: '10% or more', fee: '1.25%' },
    ],
  },
  {
    category: 'VA Streamline Refinance (IRRRL)',
    rows: [
      { down: 'Any (first or subsequent use)', fee: '0.50%' },
    ],
  },
  {
    category: 'Cash-Out Refinance — First Use',
    rows: [
      { down: 'Any down payment', fee: '2.15%' },
    ],
  },
  {
    category: 'Cash-Out Refinance — Subsequent Use',
    rows: [
      { down: 'Any down payment', fee: '3.30%' },
    ],
  },
]

export default function FundingFeeCalculatorPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'VA Refinance Calculator', path: '/calculator' },
        { name: 'VA Funding Fee Calculator', path: '/calculator/funding-fee' },
      ])} />

      {/* Calculator — first on page */}
      <section className="bg-navy-950 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <VAFundingFeeCalculator />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-navy-900 text-white py-10 px-4 border-t border-navy-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
            VA Funding Fee <span className="text-gold-400">Reference</span>
          </h2>
          <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
            The VA funding fee is a one-time charge paid at closing or financed into the loan. The rate depends on your loan type, whether it&apos;s your first time using the VA benefit, and your down payment amount.
          </p>
          <Link href="/calculator" className="inline-block mt-4 text-white/50 hover:text-white/80 text-sm transition-colors">
            ← Back to VA Refinance Decision Tool
          </Link>
        </div>
      </section>

      {/* Fee table */}
      <section className="bg-white py-14 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy-900 mb-2">2026 VA Funding Fee Table</h2>
          <p className="text-gray-600 text-sm mb-8">
            Rates effective as of 2020 under the Blue Water Navy Vietnam Veterans Act. These rates apply to loans closed on or after January 1, 2020.
          </p>

          <div className="space-y-6">
            {feeTable.map((section) => (
              <div key={section.category} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-navy-900 px-5 py-3">
                  <h3 className="font-semibold text-white text-sm">{section.category}</h3>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy-50 border-b border-gray-200">
                      <th className="text-left px-5 py-2.5 text-navy-700 font-semibold">Down Payment</th>
                      <th className="text-right px-5 py-2.5 text-navy-700 font-semibold">Funding Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-5 py-3 text-gray-700">{row.down}</td>
                        <td className="px-5 py-3 text-right font-semibold text-navy-900">{row.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-gold-50 border border-gold-200 rounded-xl p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-navy-900">Exemptions:</strong> Veterans with a service-connected disability rating, Purple Heart recipients, and surviving spouses of veterans who died in service or from a service-connected disability are exempt from the funding fee entirely. Confirm your exemption status with the VA before closing.
            </p>
          </div>
        </div>
      </section>

      {/* Educational section */}
      <section className="bg-navy-50 py-14 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy-900 mb-5">Understanding the VA Funding Fee</h2>

          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              The VA funding fee is a one-time charge that helps sustain the VA home loan program for future veterans. Unlike mortgage insurance on conventional or FHA loans, the funding fee is a flat percentage paid once — not an ongoing monthly cost.
            </p>
            <p>
              Most veterans choose to finance the fee rather than pay it out of pocket at closing. When financed, the fee is added to the loan balance and repaid over the life of the loan. The monthly cost is modest — on a $350,000 loan with a 2.15% fee ($7,525), financing it at 5.5% over 30 years adds about $43/month to the payment.
            </p>
            <p>
              If you are rated as having a service-connected disability by the VA, you are exempt from the funding fee entirely. Your lender will verify your exempt status through your Certificate of Eligibility (COE). Make sure your disability rating is on file with the VA before you apply so the exemption can be applied at closing.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/blog/va-funding-fee-2026"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Read: VA Funding Fee Complete Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Context links */}
      <section className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-navy-900 mb-6 text-center">More VA Loan Tools &amp; Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                href: '/calculator',
                title: 'VA Refinance Decision Tool',
                body: 'Compare IRRRL vs. Cash-Out, estimate total costs, and check whether your refinance meets VA requirements.',
              },
              {
                href: '/va-irrrl',
                title: 'VA Streamline Refinance',
                body: 'Learn how the IRRRL works and why its 0.5% funding fee makes it one of the least expensive ways to refinance.',
              },
              {
                href: '/va-cash-out',
                title: 'VA Cash-Out Refinance',
                body: 'Understand the 2.15% and 3.3% funding fee rates that apply to cash-out transactions.',
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
