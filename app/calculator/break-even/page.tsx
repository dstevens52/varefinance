import type { Metadata } from 'next'
import Link from 'next/link'
import BreakEvenCalculator from '@/components/BreakEvenCalculator'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'VA Refinance Break-Even Calculator',
  description:
    'Calculate how long it takes to recoup your VA refinance closing costs. See whether your refinance passes the VA\'s 36-month recoupment guideline.',
}

export default function BreakEvenPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'VA Refinance Calculator', path: '/calculator' },
        { name: 'Break-Even Calculator', path: '/calculator/break-even' },
      ])} />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-1.5 text-gold-400 text-sm font-medium mb-5">
            Free Educational Tool
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            VA Refinance <span className="text-gold-400">Break-Even Calculator</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Find out how long it takes to recoup your closing costs — and whether the refinance makes financial sense.
          </p>
          <Link href="/calculator" className="text-white/50 hover:text-white/80 text-sm transition-colors">
            ← Back to full VA Refinance Calculator
          </Link>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-navy-950 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <BreakEvenCalculator />
        </div>
      </section>

      {/* Educational section */}
      <section className="bg-white py-14 px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy-900 mb-5">Understanding Break-Even</h2>

          <div className="prose max-w-none text-gray-700 text-sm leading-relaxed space-y-4">
            <p>
              The break-even point is the number of months you need to stay in your home for a
              refinance to pay off. It&apos;s calculated by dividing your total closing costs by
              your monthly payment savings:
            </p>
            <div className="bg-navy-50 rounded-xl px-6 py-4 font-mono text-navy-900 text-center text-sm">
              Break-even (months) = Closing Costs ÷ Monthly Savings
            </div>
            <p>
              If your closing costs are $4,500 and your new loan saves you $180 per month, your
              break-even is 25 months. If you sell or refinance again before month 25, the
              refinance costs you money. After month 25, every month is net savings.
            </p>

            <h3 className="text-lg font-bold text-navy-900 mt-6 mb-2">The VA&apos;s 36-Month Recoupment Rule</h3>
            <p>
              For VA IRRRL (Streamline Refinance) transactions, the VA requires that allowable
              closing costs be recouped through monthly savings within 36 months. This is a legal
              requirement — not a guideline — and lenders must certify that the loan meets it before
              it can receive a VA guaranty. If your break-even is over 36 months, the IRRRL may not
              be eligible as structured, and the lender may need to reduce fees to bring it into
              compliance.
            </p>
            <p>
              Note: the 36-month recoupment calculation uses a specific subset of fees — lender
              origination fees, title fees, and other third-party charges. It excludes the VA
              funding fee, escrow deposits, prepaid interest, and taxes. That&apos;s why this
              calculator asks you to enter closing costs excluding those items.
            </p>

            <h3 className="text-lg font-bold text-navy-900 mt-6 mb-2">ARM-to-Fixed Conversions</h3>
            <p>
              If you&apos;re converting from an adjustable-rate VA loan to a fixed rate, your new
              payment may be higher than your current payment — which means there&apos;s no monthly
              savings to divide into. That&apos;s normal. For ARM-to-fixed IRRRLs, the VA recognizes
              payment stability as a benefit in its own right, and the 36-month recoupment rule
              applies differently. In this case, the lender generally cannot charge recoupable fees
              at all if the payment is not decreasing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {[
              {
                href: '/calculator',
                title: 'Full VA Refinance Calculator',
                body: 'Compare IRRRL vs Cash-Out, estimate funding fees, and check net tangible benefit requirements.',
              },
              {
                href: '/blog/va-irrrl-closing-costs',
                title: 'VA IRRRL Closing Costs',
                body: 'What each cost category covers and what you can roll into the loan vs. pay out of pocket.',
              },
              {
                href: '/blog/va-irrrl-net-tangible-benefit',
                title: 'Net Tangible Benefit Explained',
                body: 'How the 36-month recoupment rule works, what counts toward it, and what is excluded.',
              },
            ].map(card => (
              <Link key={card.href} href={card.href} className="block group bg-navy-50 hover:bg-navy-100 border border-gray-200 rounded-xl p-5 transition-colors">
                <h3 className="font-semibold text-navy-900 mb-2 text-sm group-hover:text-navy-700">{card.title} →</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{card.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
