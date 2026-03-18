import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'
import JsonLd from '@/components/JsonLd'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'VA Streamline Refinance (VA IRRRL) — Lower Your Rate Fast',
  description:
    'The VA IRRRL lets eligible veterans refinance their existing VA loan with minimal paperwork, no appraisal, and no out-of-pocket costs. Learn how it works and if you qualify.',
  openGraph: {
    title: 'VA Streamline Refinance (VA IRRRL)',
    description: 'Lower your VA loan rate with minimal paperwork and no appraisal required. Learn about the VA Interest Rate Reduction Refinance Loan.',
  },
}

const steps = [
  {
    num: '01',
    title: 'Confirm Eligibility',
    body: 'You must currently have a VA-backed mortgage on the same property you want to refinance. The new loan must also offer a tangible benefit — typically a lower interest rate or monthly payment.',
  },
  {
    num: '02',
    title: 'Shop Lenders',
    body: 'You are not required to use your current lender. In fact, comparing at least 3 lenders is recommended, as rates and fees vary. VA-approved lenders process IRRRL applications.',
  },
  {
    num: '03',
    title: 'Submit Minimal Paperwork',
    body: 'Unlike most refinances, the VA IRRRL requires very little documentation. No full appraisal, and in many cases no income verification or credit underwriting is required.',
  },
  {
    num: '04',
    title: 'Close the Loan',
    body: 'Closing costs can typically be rolled into the new loan balance, so many veterans pay nothing out of pocket at closing. The standard VA IRRRL funding fee is 0.5% of the loan amount.',
  },
  {
    num: '05',
    title: 'Start Saving',
    body: 'Your new lower rate and payment take effect immediately after the loan closes. Many veterans save $100–$500 per month depending on the rate difference and loan balance.',
  },
]

const faqs = [
  {
    question: 'What does IRRRL stand for?',
    answer: 'IRRRL stands for Interest Rate Reduction Refinance Loan. It is the official VA name for what is commonly called the VA Streamline Refinance. The "streamline" nickname comes from the simplified, minimal-documentation process compared to a traditional refinance.',
  },
  {
    question: 'Do I need an appraisal for a VA IRRRL?',
    answer: 'In most cases, no. One of the biggest advantages of the VA IRRRL is that a full home appraisal is not required. This saves time, money, and eliminates the risk of your home appraising below the loan amount. Your lender may still order an automated valuation, but a physical appraisal is generally not needed. See our full documentation guide for details on what paperwork is required.',
    answerNode: (<>In most cases, no. One of the biggest advantages of the VA IRRRL is that a full home appraisal is not required. This saves time, money, and eliminates the risk of your home appraising below the loan amount. Your lender may still order an automated valuation, but a physical appraisal is generally not needed. See our <a href="/blog/va-irrrl-documents-needed" className="text-navy-700 underline hover:text-gold-600">full documentation guide</a> for details on what paperwork is required.</>),
  },
  {
    question: 'Can I roll my closing costs into the loan?',
    answer: 'Yes. Many veterans choose to roll closing costs — including the 0.5% VA funding fee — into the new loan balance. This means zero out-of-pocket expense at closing. Keep in mind, rolling costs into the loan increases your balance and the total interest paid over the life of the loan.',
  },
  {
    question: 'How much of an interest rate reduction do I need?',
    answer: 'The VA requires that the new loan provide a "net tangible benefit." For a fixed-rate to fixed-rate IRRRL, this typically means at least a 0.5% reduction in your interest rate. For an ARM to fixed-rate IRRRL, the rule is more flexible. Your lender must document this benefit at closing. Read our guide on the net tangible benefit test for a full breakdown.',
    answerNode: (<>The VA requires that the new loan provide a &ldquo;net tangible benefit.&rdquo; For a fixed-rate to fixed-rate IRRRL, this typically means at least a 0.5% reduction in your interest rate. For an ARM to fixed-rate IRRRL, the rule is more flexible. Your lender must document this benefit at closing. Read our guide on the <a href="/blog/va-irrrl-net-tangible-benefit" className="text-navy-700 underline hover:text-gold-600">net tangible benefit test</a> for a full breakdown.</>),
  },
  {
    question: 'Can I use a VA IRRRL on a rental property or investment property?',
    answer: 'The VA IRRRL can be used on a property that was previously your primary residence, even if you no longer live there. You must certify that you previously occupied the home as your primary residence. This is a significant advantage for veterans who have moved to a new duty station but still own their previous home. Read our full guide on using the VA IRRRL on a rental property.',
    answerNode: (<>The VA IRRRL can be used on a property that was previously your primary residence, even if you no longer live there. You must certify that you previously occupied the home as your primary residence. This is a significant advantage for veterans who have moved to a new duty station but still own their previous home. Read our full guide on <a href="/blog/va-irrrl-rental-property" className="text-navy-700 underline hover:text-gold-600">using the VA IRRRL on a rental property</a>.</>),
  },
  {
    question: 'How soon after my original VA loan can I do a VA IRRRL?',
    answer: 'You must have made at least 6 consecutive monthly payments on your current VA loan, and the first payment must have been made at least 210 days ago. You must also be current on your mortgage with no 30-day late payments in the past 12 months. Read our full guide on VA loan refinance waiting periods.',
    answerNode: (<>You must have made at least 6 consecutive monthly payments on your current VA loan, and the first payment must have been made at least 210 days ago. You must also be current on your mortgage with no 30-day late payments in the past 12 months. Read our full guide on <a href="/blog/va-loan-refinance-waiting-period" className="text-navy-700 underline hover:text-gold-600">VA loan refinance waiting periods</a>.</>),
  },
  {
    question: 'What is the VA funding fee for an IRRRL?',
    answer: 'The VA funding fee for an IRRRL is 0.5% of the loan amount. This is significantly lower than the funding fee for a VA purchase loan (which ranges from 1.25% to 3.3%). Certain veterans with service-connected disabilities may be exempt from the funding fee entirely.',
    answerNode: (<>The VA funding fee for an IRRRL is 0.5% of the loan amount. This is significantly lower than the funding fee for a VA purchase loan (which ranges from 1.25% to 3.3%). Certain veterans with service-connected disabilities may be exempt from the funding fee entirely. Use our <a href="/calculator/funding-fee" className="text-navy-700 underline hover:text-gold-600">VA Funding Fee Calculator</a> to see your exact fee and the monthly cost of financing it.</>),
  },
  {
    question: 'Can I get cash back at closing on a VA IRRRL?',
    answer: 'No. A VA IRRRL is designed only to lower your rate or shorten your loan term — not to provide cash back. If you want to access your equity, a VA Cash-Out Refinance is the appropriate loan product.',
  },
  {
    question: 'What documents do I need for a VA IRRRL?',
    answer: 'The IRRRL requires less documentation than almost any other refinance. In most cases you will not need income verification, an appraisal, or a new Certificate of Eligibility. Your lender may add their own requirements. Read our full documentation guide.',
    answerNode: (<>The IRRRL requires less documentation than almost any other refinance. In most cases you will not need income verification, an appraisal, or a new Certificate of Eligibility. Your lender may add their own requirements. <a href="/blog/va-irrrl-documents-needed" className="text-navy-700 underline hover:text-gold-600">Read our full documentation guide</a>.</>),
  },
  {
    question: 'How many times can I use the VA IRRRL?',
    answer: 'There is no limit. You can use the IRRRL as many times as you want, as long as you meet the 210-day seasoning requirement and the net tangible benefit test each time.',
  },
]

export default function VAIRRRLPage() {
  return (
    <>
      <JsonLd data={[
        faqSchema(faqs),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'VA Streamline Refinance (IRRRL)', path: '/va-irrrl' },
        ]),
      ]} />
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-1.5 text-gold-400 text-sm font-medium mb-6">
            VA Refinance Programs
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            VA Streamline Refinance<br />
            <span className="text-gold-400">(VA IRRRL)</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed mb-8">
            The fastest, simplest way for veterans with existing VA loans to lower their interest rate — often with no appraisal, no income verification, and no out-of-pocket costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#how-it-works" className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3.5 rounded-md transition-colors text-center">
              See How It Works
            </Link>
            <Link href="/blog/what-is-va-irrrl" className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-md transition-colors text-center">
              Read Our IRRRL Guide
            </Link>
          </div>
        </div>
      </section>

      {/* What is IRRRL */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">What Is the VA IRRRL?</h2>
          <div className="prose max-w-none">
            <p>
              The VA Interest Rate Reduction Refinance Loan — commonly called the VA IRRRL or VA Streamline Refinance — is a mortgage refinance program exclusively for veterans and service members who already have a VA-backed home loan. It was designed to make refinancing fast, simple, and cost-effective.
            </p>
            <p>
              Unlike conventional refinances that require full income documentation, credit checks, and home appraisals, the VA IRRRL strips away most of that complexity. The VA has already guaranteed your current loan and has a record of your service — the IRRRL simply updates the terms of that existing guarantee to give you a lower rate.
            </p>
            <p>
              The program is offered through private VA-approved lenders, with the VA backing up to 25% of the loan. Because of this government backing, lenders can offer lower rates with reduced risk, which is why VA rates are consistently among the lowest available to homeowners. See our <a href="/data/va-refinance-snapshot">VA refinance market snapshot</a> for current data on how many veterans are eligible and what they&apos;re saving.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-navy-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">Benefits of the VA IRRRL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'No Appraisal Required', body: 'Skip the home appraisal process entirely in most cases. This saves you $400–$700 and removes the risk of your home appraising below the loan amount.' },
              { title: 'Minimal Documentation', body: 'No income verification, pay stubs, or tax returns required in most cases. If you are current on your mortgage, you likely qualify with very little paperwork.' },
              { title: 'No Out-of-Pocket Costs', body: 'Closing costs and the 0.5% VA funding fee can typically be rolled into the new loan, meaning you pay nothing at closing.' },
              { title: 'Lower Monthly Payments', body: 'Even a 0.5% rate reduction on a $300,000 loan saves roughly $90–$100 per month — more than $1,000 per year.' },
              { title: 'Convert ARM to Fixed Rate', body: 'If you have an adjustable-rate VA loan, you can use the IRRRL to convert to a stable fixed rate, providing long-term payment certainty.' },
              { title: 'Can Be Used on Former Primary Residences', body: 'Even if you have moved out and are renting the property, you may still be eligible as long as you previously lived there as your primary residence.' },
            ].map(b => (
              <div key={b.title} className="bg-white border border-gray-200 rounded-xl p-6">
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

      {/* Eligibility */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Eligibility Requirements</h2>
          <p className="text-gray-600 mb-8 text-lg">
            The VA IRRRL has fewer requirements than almost any other refinance product. Here is what you need:
          </p>
          <div className="space-y-4">
            {[
              { req: 'Existing VA Loan', detail: 'You must currently have a VA-backed mortgage on the property you want to refinance. You cannot use the IRRRL to refinance a conventional, FHA, or USDA loan.' },
              { req: 'Same Property', detail: 'The refinance must be for the same property that was purchased with the original VA loan. You cannot use IRRRL proceeds on a different home.' },
              { req: 'Net Tangible Benefit', detail: 'The new loan must provide a clear financial benefit — typically at least a 0.5% reduction in interest rate, or moving from an adjustable to a fixed rate.' },
              { req: 'Payment History', detail: 'You must be current on your mortgage. Most lenders require no 30-day late payments in the past 12 months and at least 6 payments made on your current VA loan.' },
              { req: '210-Day Seasoning', detail: 'At least 210 days must have passed since the first monthly payment was made on your existing VA loan.' },
            ].map(e => (
              <div key={e.req} className="flex gap-4 p-5 bg-navy-50 rounded-xl">
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
          <h2 className="text-3xl font-bold text-white text-center mb-10">How the VA IRRRL Process Works</h2>
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
          <p className="text-gray-500 text-center mb-8">Everything veterans ask about the VA IRRRL</p>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Also compare */}
      <section className="bg-navy-50 py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <div>
            <h3 className="font-bold text-navy-900 text-xl mb-1">Want cash back instead?</h3>
            <p className="text-gray-600 text-sm">The VA Cash-Out Refinance lets you tap your equity while potentially lowering your rate.</p>
          </div>
          <Link href="/va-cash-out" className="bg-navy-800 hover:bg-navy-900 text-white font-semibold px-6 py-3 rounded-md whitespace-nowrap transition-colors">
            Learn About Cash-Out →
          </Link>
        </div>
      </section>

      {/* Educational CTA */}
      <section className="bg-navy-800 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Want to Go Deeper?</h2>
          <p className="text-white/70 mb-7">
            Read our full guide on the VA IRRRL — including real savings examples, a break-even calculator walkthrough, and common mistakes to avoid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog/what-is-va-irrrl" className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3 rounded-md transition-colors">
              Read the Full IRRRL Guide
            </Link>
            <Link href="/blog" className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3 rounded-md transition-colors">
              Browse All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
