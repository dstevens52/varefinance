import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'VA Home Purchase Loan — Buy a Home With No Down Payment',
  description:
    'Use your VA benefit to purchase a home with no down payment, no PMI, and competitive rates. Learn how VA home purchase loans work for veterans and military families.',
}

const faqs = [
  {
    question: 'Can I really buy a home with no down payment?',
    answer: 'Yes. One of the most powerful VA loan benefits is the ability to purchase a home with 0% down payment, up to the conforming loan limit. There is no minimum down payment required for eligible veterans. This allows you to preserve savings and build equity immediately without the 3–20% down payment required by most conventional loans.',
  },
  {
    question: 'What is a VA funding fee for a purchase loan?',
    answer: 'The VA funding fee for a purchase loan ranges from 1.25% to 3.3% of the loan amount, depending on your down payment and whether this is your first time using the VA loan benefit. Veterans with a service-connected disability rating of 10% or more are typically exempt from this fee entirely. The fee can be rolled into the loan.',
  },
  {
    question: 'What types of properties can I buy with a VA loan?',
    answer: 'VA loans can be used for single-family homes, condominiums (in VA-approved condo projects), manufactured homes meeting VA standards, and multi-unit properties (up to 4 units, if you intend to occupy one as your primary residence). Investment properties and vacation homes are not eligible.',
  },
  {
    question: 'Is there a VA loan limit?',
    answer: 'For veterans with full VA entitlement (no outstanding VA loans), there is no loan limit as of 2020 — meaning there is no cap on how much you can borrow with $0 down. Veterans with reduced entitlement may have a loan limit based on the conforming loan limits in their county.',
  },
  {
    question: 'How does the VA appraisal work for a purchase?',
    answer: 'A VA-certified appraiser must assess the property to confirm it meets VA minimum property requirements (MPRs) for safety, soundness, and sanitation. If the home does not meet MPRs, the seller must make repairs before the loan can close. The appraisal also establishes the home\'s market value, which limits the amount the VA will guarantee.',
  },
]

export default function VAPurchasePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'VA Home Purchase Loan', path: '/va-purchase' },
      ])} />
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-1.5 text-gold-400 text-sm font-medium mb-6">
            VA Home Benefits
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            VA Home Purchase Loan<br />
            <span className="text-gold-400">No Down Payment Required</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed mb-8">
            Your military service earns you one of the most powerful home-buying tools available. VA purchase loans offer $0 down, no PMI, and rates that consistently beat the market.
          </p>
          <Link href="#how-it-works" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3.5 rounded-md transition-colors">
            See How the Process Works
          </Link>
        </div>
      </section>

      {/* Key benefits */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-3">Why VA Purchase Loans Stand Apart</h2>
          <p className="text-gray-500 text-center mb-10">Benefits earned through your service — unavailable through conventional financing</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '$0 Down Payment', body: 'Qualified veterans can purchase a home without any down payment. On a $400,000 home, that means keeping $40,000–$80,000 in your pocket compared to conventional financing.' },
              { title: 'No Private Mortgage Insurance', body: 'Conventional loans require PMI when you put down less than 20%. VA loans never require PMI — saving veterans $100–$300+ per month on a typical loan.' },
              { title: 'Competitive Interest Rates', body: 'VA loan rates are consistently among the lowest available — often 0.25%–0.5% below conventional loan rates for the same credit profile.' },
              { title: 'Limited Closing Costs', body: 'The VA limits what lenders can charge veterans at closing. Sellers can also pay all of a veteran\'s closing costs, making it possible to buy with truly zero out-of-pocket costs.' },
              { title: 'No Prepayment Penalty', body: 'Pay off your VA loan early, make extra payments, or sell your home at any time without penalty — complete financial flexibility.' },
              { title: 'Reusable Benefit', body: 'Your VA loan benefit is not a one-time use. After paying off a VA loan, your entitlement is restored and can be used again on a future home purchase.' },
            ].map(b => (
              <div key={b.title} className="bg-navy-50 rounded-xl p-6">
                <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who qualifies */}
      <section className="bg-navy-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Basic Eligibility Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { group: 'Veterans', req: 'Served 90 days during wartime or 181 days during peacetime, and discharged under conditions other than dishonorable.' },
              { group: 'Active Duty', req: 'Currently serving with at least 90 continuous days on active duty.' },
              { group: 'National Guard & Reserves', req: 'At least 6 years of service, or 90 days active duty under Title 10 federal orders, including during wartime.' },
              { group: 'Surviving Spouses', req: 'Un-remarried surviving spouses of veterans who died in service or from a service-connected disability.' },
            ].map(e => (
              <div key={e.group} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-gold-400 mb-2">{e.group}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{e.req}</p>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-sm text-center mt-6">
            Full eligibility rules are determined by the VA. A lender can help you obtain a Certificate of Eligibility (COE) in minutes.
          </p>
        </div>
      </section>

      {/* How process works */}
      <section id="how-it-works" className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">The VA Purchase Process</h2>
          <div className="space-y-5">
            {[
              { num: '01', title: 'Get Pre-Approved', body: 'Work with a VA-approved lender to get pre-approved. The lender will pull your credit, verify income, and issue a pre-approval letter showing sellers you are a serious buyer.' },
              { num: '02', title: 'Find a Home', body: 'Work with a real estate agent familiar with VA transactions. The home must be your primary residence and meet VA Minimum Property Requirements.' },
              { num: '03', title: 'Make an Offer', body: 'Your agent submits an offer. VA buyers can request that the seller pay all closing costs — a powerful negotiating tool in many markets.' },
              { num: '04', title: 'VA Appraisal', body: 'After the offer is accepted, the VA orders an appraisal to verify property value and condition. The lender submits the appraisal request to the VA.' },
              { num: '05', title: 'Underwriting & Close', body: 'The lender finalizes underwriting and schedules closing. Most VA purchases close in 30–45 days from the accepted offer.' },
            ].map(step => (
              <div key={step.num} className="flex gap-5 p-5 bg-navy-50 rounded-xl">
                <div className="text-gold-500 font-bold text-xl font-mono w-10 shrink-0">{step.num}</div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Already own a home? */}
      <section className="bg-gold-50 border-y border-gold-100 py-12 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-navy-900 mb-3">Already Own a Home?</h2>
            <p className="text-gray-600 mb-4">If you purchased your home with a VA loan and want to lower your rate, the VA IRRRL is the fastest path. Want cash from your equity? A VA Cash-Out Refinance may be right for you.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/va-irrrl" className="bg-navy-800 hover:bg-navy-900 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors text-center">VA IRRRL (Streamline)</Link>
              <Link href="/va-cash-out" className="bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors text-center">VA Cash-Out Refinance</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-8">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Educational CTA */}
      <section className="bg-navy-800 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Also Explore VA Refinancing Options</h2>
          <p className="text-white/70 mb-7">
            Already own a home with a VA loan? Learn how to lower your rate or access your equity through VA refinancing programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/va-irrrl" className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3 rounded-md transition-colors">
              VA Streamline Refinance
            </Link>
            <Link href="/va-cash-out" className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3 rounded-md transition-colors">
              VA Cash-Out Refinance
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
