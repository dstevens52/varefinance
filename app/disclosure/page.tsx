import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advertising & Affiliate Disclosure — VARefinance.com',
  description: 'VARefinance.com does not accept advertising, sell leads, or participate in affiliate programs. All content is editorially independent.',
}

export default function DisclosurePage() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-navy-900 mb-2">Advertising &amp; Affiliate Disclosure</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose max-w-none text-gray-700">

          <h2 className="text-xl font-bold text-navy-900 mt-0 mb-3">Current Status</h2>
          <p>
            VARefinance.com does not currently accept advertising, sell leads, receive compensation
            from lenders, or participate in any affiliate programs. No content on this site is
            sponsored or influenced by any financial institution, lender, or third party. We do not
            earn money when veterans refinance their loans.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Why This Page Exists</h2>
          <p>
            We publish this disclosure proactively because transparency matters — especially on a
            site covering financial topics that affect veterans. Many VA loan websites earn
            commissions by referring veterans to lenders. We do not. If our approach to monetization
            ever changes, this page will be updated to explain exactly how the site generates
            revenue and whether any business relationships could influence our content.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Editorial Independence</h2>
          <p>
            All content is written and reviewed independently. Our explanations, comparisons, and
            guidance are based on VA guidelines, regulatory requirements, and publicly available
            information — not on any business relationship with a lender, servicer, or financial
            institution. We have no financial incentive to recommend one lender over another or to
            encourage veterans to refinance when it may not be in their interest.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Questions</h2>
          <p>
            If you have questions about how this site operates or this disclosure, contact us at{' '}
            <a href="mailto:contact@varefinance.com" className="text-navy-700 underline hover:text-gold-600">
              contact@varefinance.com
            </a>
            .
          </p>

        </div>
      </div>
    </div>
  )
}
