import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'VA Cash-Out Refinance — Tap Your Home Equity',
  description:
    'Access up to 100% of your home equity with a VA Cash-Out Refinance. Pay off debt, fund home improvements, or cover any expense — at competitive VA rates.',
  openGraph: {
    title: 'VA Cash-Out Refinance — Tap Your Home Equity',
    description: 'Access up to 100% of your home equity with a VA Cash-Out Refinance at competitive VA rates.',
  },
}

const faqs = [
  {
    question: 'How much cash can I get with a VA Cash-Out Refinance?',
    answer: 'Most VA-approved lenders allow veterans to borrow up to 100% of their home\'s appraised value (known as 100% LTV or loan-to-value). This is significantly more permissive than conventional cash-out refinances, which typically cap at 80% LTV. However, individual lender guidelines may be more conservative — some cap at 90% LTV — so it pays to shop around.',
  },
  {
    question: 'Do I need a current VA loan to use a VA Cash-Out Refinance?',
    answer: 'No — this is a key difference from the VA IRRRL. The VA Cash-Out Refinance is available to eligible veterans and service members regardless of what type of loan they currently have. If you have a conventional, FHA, or USDA loan and want to switch to a VA loan while taking out cash, you can do so through the Cash-Out Refinance program.',
  },
  {
    question: 'What can I use the cash for?',
    answer: 'There are no restrictions on how you use the cash proceeds. Common uses include home improvements and renovations, paying off high-interest credit card debt, student loan consolidation, emergency expenses, funding education costs, purchasing a vehicle, and building savings. Veterans often use the cash to eliminate PMI-bearing debts or consolidate multiple high-interest loans into one low-rate VA payment.',
  },
  {
    question: 'Is an appraisal required for a VA Cash-Out Refinance?',
    answer: 'Yes. Unlike the VA IRRRL, a full VA appraisal is required for all VA Cash-Out Refinances. This is because the loan amount is based on the home\'s current market value. The VA will assign a certified VA appraiser to inspect and value the property. The appraisal typically costs $500–$900 and takes 1–3 weeks.',
  },
  {
    question: 'What is the funding fee for a VA Cash-Out Refinance?',
    answer: 'The VA funding fee for a cash-out refinance is higher than the IRRRL: 2.15% for first-time use and 3.3% for subsequent use. The fee can be rolled into the loan balance. Veterans with a service-connected disability rating of 10% or higher are typically exempt from the funding fee entirely — this is a significant benefit that can save thousands of dollars.',
  },
  {
    question: 'How does a VA Cash-Out Refinance affect my credit?',
    answer: 'Like any mortgage application, a VA Cash-Out Refinance will result in a hard credit inquiry. However, if you use the cash proceeds to pay off revolving debt, your credit utilization ratio will drop, which often leads to a net improvement in your credit score after a few months. Lenders typically require a minimum credit score of 620, though some require 640 or higher.',
  },
  {
    question: 'How long does a VA Cash-Out Refinance take?',
    answer: 'The VA Cash-Out process is more involved than the IRRRL because it requires a full appraisal and income verification. Most loans close in 30–45 days from application. Having your documents ready (W-2s, pay stubs, bank statements, DD-214 if separated) can speed up the process significantly.',
  },
  {
    question: 'Can I do a VA Cash-Out Refinance if I have already used a VA loan before?',
    answer: 'Yes. VA entitlement can be restored after a VA loan is paid off or refinanced. Even if you currently have a VA loan, you can use the VA Cash-Out Refinance as long as you meet the eligibility and lender requirements. If you have used VA entitlement on a previous home that you still own, your remaining entitlement may still be sufficient, or a lender can work with you on bonus entitlement.',
  },
]

const steps = [
  { num: '01', title: 'Verify VA Eligibility', body: 'Obtain your Certificate of Eligibility (COE) from the VA, which confirms your military service qualifies you for VA loan benefits. Your lender can typically pull this for you electronically.' },
  { num: '02', title: 'Full Application & Documentation', body: 'Provide income documentation (W-2s, tax returns, pay stubs), bank statements, and employment history. Unlike the IRRRL, full underwriting is required for cash-out loans.' },
  { num: '03', title: 'VA Appraisal', body: 'A VA-certified appraiser will visit your property and determine its current market value. The maximum loan amount is based on this appraisal.' },
  { num: '04', title: 'Underwriting & Approval', body: 'The lender reviews all documentation and the appraisal. This typically takes 1–2 weeks. Be responsive to any requests for additional documents to avoid delays.' },
  { num: '05', title: 'Closing & Disbursement', body: 'At closing, you sign the final loan documents. After a 3-day right of rescission (for primary residences), the cash proceeds are deposited into your account.' },
]

export default function VACashOutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-1.5 text-gold-400 text-sm font-medium mb-6">
            VA Refinance Programs
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            VA Cash-Out Refinance<br />
            <span className="text-gold-400">Tap Into Your Home Equity</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed mb-8">
            Your home equity is one of your most valuable financial assets. A VA Cash-Out Refinance lets eligible veterans access up to 100% of their home&apos;s value — at competitive VA rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#how-it-works" className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3.5 rounded-md transition-colors text-center">
              See How It Works
            </Link>
            <Link href="/blog/va-cash-out-tap-into-equity" className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-md transition-colors text-center">
              Read Our Cash-Out Guide
            </Link>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">What Is a VA Cash-Out Refinance?</h2>
          <div className="prose max-w-none">
            <p>
              A VA Cash-Out Refinance replaces your existing mortgage — whether it&apos;s a VA loan or any other type — with a new VA-backed mortgage for a larger amount. The difference between what you owe and the new loan amount is paid to you in cash at closing.
            </p>
            <p>
              For example: if your home is worth $400,000 and you owe $250,000 on your current mortgage, you have $150,000 in equity. With a VA Cash-Out Refinance at 90% LTV, you could borrow up to $360,000 — paying off your current $250,000 balance and receiving the remaining $110,000 in cash.
            </p>
            <p>
              Unlike the VA IRRRL (which is limited to veterans who already have VA loans), the VA Cash-Out Refinance is open to any eligible veteran or service member, regardless of their current loan type. This makes it a powerful tool for veterans who purchased their homes with conventional loans and now want to convert to a VA loan while accessing their equity.
            </p>
          </div>
        </div>
      </section>

      {/* IRRRL vs Cash-Out comparison */}
      <section className="bg-navy-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">VA IRRRL vs. VA Cash-Out: Key Differences</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-navy-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Feature</th>
                  <th className="text-left px-6 py-4 font-semibold">VA IRRRL</th>
                  <th className="text-left px-6 py-4 font-semibold text-gold-400">VA Cash-Out</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Must have existing VA loan', 'Yes', 'No'],
                  ['Appraisal required', 'Usually not', 'Yes'],
                  ['Income verification', 'Usually not', 'Yes'],
                  ['Cash back at closing', 'No', 'Up to 100% LTV'],
                  ['Funding fee', '0.5%', '2.15%–3.3%'],
                  ['Can replace non-VA loan', 'No', 'Yes'],
                  ['Typical closing timeline', '14–21 days', '30–45 days'],
                ].map(([feat, irrrl, cashout]) => (
                  <tr key={feat} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{feat}</td>
                    <td className="px-6 py-4 text-gray-600">{irrrl}</td>
                    <td className="px-6 py-4 text-navy-700 font-medium">{cashout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">Benefits of the VA Cash-Out Refinance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Access Up to 100% of Your Equity', body: 'Most VA lenders allow borrowing up to the full appraised value of your home — far more than the 80% cap typical of conventional cash-out loans.' },
              { title: 'No Private Mortgage Insurance (PMI)', body: 'VA loans never require PMI, regardless of your loan-to-value ratio. On a $300,000 loan, that alone saves $150–$250 per month compared to a conventional loan with PMI.' },
              { title: 'Competitive Interest Rates', body: 'VA loans consistently rank among the lowest-rate mortgage products available, often 0.25–0.5% lower than comparable conventional rates.' },
              { title: 'Consolidate High-Interest Debt', body: 'Replace 20%+ credit card rates or 7–8% personal loan rates with a single low VA mortgage rate — potentially saving hundreds per month.' },
              { title: 'Fund Home Improvements', body: 'Invest your equity back into your home to increase its value. Renovations, additions, and upgrades all become accessible without high-rate home equity loans.' },
              { title: 'Open to Non-VA Loan Holders', body: 'Veterans with FHA, USDA, or conventional mortgages can convert to a VA loan through the Cash-Out Refinance — gaining all the advantages of VA financing.' },
            ].map(b => (
              <div key={b.title} className="flex gap-4 p-5 bg-navy-50 rounded-xl">
                <div className="w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center mt-0.5 shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-navy-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Eligibility Requirements</h2>
          <div className="space-y-4">
            {[
              { req: 'Military Service', detail: 'You must be an eligible veteran, active-duty service member, National Guard or Reserve member (with qualifying service), or surviving spouse of a veteran.' },
              { req: 'Primary Residence', detail: 'The property must be your primary residence at the time of closing, or you must certify your intent to occupy it as your primary residence.' },
              { req: 'Certificate of Eligibility (COE)', detail: 'You need a valid COE confirming your entitlement. Most lenders can obtain this electronically within minutes through the VA\'s online system.' },
              { req: 'Sufficient Home Equity', detail: 'While you can borrow up to 100% of your home\'s value, lenders require a recent VA appraisal to establish the current market value.' },
              { req: 'Credit & Income Requirements', detail: 'Unlike the IRRRL, the VA Cash-Out Refinance requires full income documentation and credit underwriting. Most lenders require a minimum 620 credit score and stable income history.' },
            ].map(e => (
              <div key={e.req} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-200">
                <div className="w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center mt-0.5 shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">{e.req}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-navy-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">How the VA Cash-Out Process Works</h2>
          <div className="space-y-6">
            {steps.map(step => (
              <div key={step.num} className="flex gap-5">
                <div className="text-gold-400 font-bold text-2xl font-mono w-10 shrink-0">{step.num}</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-center mb-8">Common questions about VA Cash-Out Refinancing</p>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Cross-link */}
      <section className="bg-navy-50 py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <div>
            <h3 className="font-bold text-navy-900 text-xl mb-1">Just want to lower your rate?</h3>
            <p className="text-gray-600 text-sm">If you already have a VA loan and just want a lower payment, the VA IRRRL is simpler and faster.</p>
          </div>
          <Link href="/va-irrrl" className="bg-navy-800 hover:bg-navy-900 text-white font-semibold px-6 py-3 rounded-md whitespace-nowrap transition-colors">
            Learn About VA IRRRL →
          </Link>
        </div>
      </section>

      {/* Educational CTA */}
      <section className="bg-navy-800 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Learn More About VA Cash-Out Refinancing</h2>
          <p className="text-white/70 mb-7">
            Our in-depth guide covers how the cash-out process works, how to calculate whether the costs make sense, and the difference between Type I and Type II transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog/va-cash-out-tap-into-equity" className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3 rounded-md transition-colors">
              Read the Full Cash-Out Guide
            </Link>
            <Link href="/blog/type-1-vs-type-2-va-cash-out-refinance" className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3 rounded-md transition-colors">
              Type I vs Type II Explained
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
