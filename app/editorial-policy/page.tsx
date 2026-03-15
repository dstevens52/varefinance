import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Editorial Policy — VARefinance.com',
  description: 'How VARefinance.com researches, fact-checks, and updates content about VA loan refinancing programs.',
}

export default function EditorialPolicyPage() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-navy-900 mb-2">Editorial Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose max-w-none text-gray-700">

          <p>
            VARefinance.com covers VA loan refinancing programs for veterans, active-duty service
            members, and military families. Because the decisions veterans make based on this content
            can have real financial consequences, we hold ourselves to a high standard for accuracy
            and clarity.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Our Review Process</h2>
          <p>
            Every article published on VARefinance.com is reviewed for mortgage accuracy by a
            mortgage industry professional before publication. Content is drafted, independently
            reviewed for factual correctness, and corrected before it goes live. When errors are
            identified after publication — whether through reader feedback or our own review — they
            are corrected promptly, without altering the publication date.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Sources</h2>
          <p>
            We cite primary sources wherever possible, including VA.gov program pages, VA circulars
            and lender bulletins, federal legislation, and CFPB resources. We take care to
            distinguish between VA policy — which applies universally — and lender-specific overlays,
            which vary by institution. Where a rule is a lender requirement rather than a VA
            requirement, we say so explicitly.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Keeping Content Current</h2>
          <p>
            Mortgage rules, VA funding fee rates, and program requirements change. We review content
            periodically and update it when material changes occur. Time-sensitive content — such as
            funding fee tables and loan limit information — is refreshed at least annually. If you
            spot information that appears outdated, please contact us at{' '}
            <a href="mailto:contact@varefinance.com" className="text-navy-700 underline hover:text-gold-600">
              contact@varefinance.com
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Editorial Independence</h2>
          <p>
            VARefinance.com is an independent educational resource. We do not originate loans,
            accept advertising, or participate in affiliate or lead-generation programs. Our content
            is not influenced by any lender, servicer, or financial institution. See our{' '}
            <a href="/disclosure" className="text-navy-700 underline hover:text-gold-600">
              Advertising &amp; Affiliate Disclosure
            </a>{' '}
            for full details.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">What We Cover</h2>
          <p>
            Our content focuses on the VA IRRRL (Streamline Refinance), VA Cash-Out Refinance, VA
            home purchase loans, and closely related topics — eligibility, costs, program
            requirements, and how to evaluate refinancing decisions. We do not cover non-VA mortgage
            products except where direct comparison helps veterans understand their options.
          </p>

        </div>
      </div>
    </div>
  )
}
