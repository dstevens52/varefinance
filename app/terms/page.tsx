import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use — VARefinance.com',
  description: 'Terms of use for VARefinance.com. This site provides educational content about VA loan refinancing and is not a lender, broker, or affiliated with the VA.',
}

export default function TermsPage() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-navy-900 mb-2">Terms of Use</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose max-w-none text-gray-700">

          <p>
            By using VARefinance.com, you agree to these terms. Please read them before relying on
            any content or tools on this site.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Educational Purpose Only</h2>
          <p>
            All content on VARefinance.com — including articles, guides, FAQs, and interactive
            tools — is provided for informational and educational purposes only. The site is designed
            to help veterans and military families understand how VA loan refinancing programs work,
            what the eligibility requirements are, and how to evaluate their options.
          </p>
          <p>
            Nothing on this site constitutes a loan offer, commitment to lend, or solicitation of
            any kind.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Not a Lender or Mortgage Broker</h2>
          <p>
            VARefinance.com does not originate mortgage loans, take loan applications, or engage in
            any mortgage lending or brokerage activities. We do not connect veterans with lenders,
            collect application information, or earn fees from any financing transactions. If you
            want to apply for a VA loan or refinance, you will need to work directly with a
            VA-approved lender.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Not Affiliated with the VA or Any Government Agency</h2>
          <p>
            VARefinance.com is an independent private website. It is not affiliated with, endorsed
            by, or operated by the U.S. Department of Veterans Affairs, the Department of Defense,
            or any other government agency. VA loan eligibility and program details are determined
            by the VA — not by this site.
          </p>
          <p>
            For official VA loan information, visit{' '}
            <a
              href="https://www.benefits.va.gov/homeloans/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-700 underline hover:text-gold-600"
            >
              benefits.va.gov
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Not Financial, Legal, or Tax Advice</h2>
          <p>
            The content on this site is general in nature and does not account for your individual
            financial situation, credit profile, tax circumstances, or legal needs. Nothing on
            VARefinance.com should be construed as financial advice, legal advice, tax guidance, or
            a recommendation to take any specific action.
          </p>
          <p>
            Before making any refinancing or financial decision, consult with a qualified mortgage
            professional, financial advisor, attorney, or tax advisor who can evaluate your specific
            circumstances.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Accuracy Disclaimer</h2>
          <p>
            We strive to keep all content accurate, current, and consistent with VA guidelines and
            industry practice. Every article is reviewed for factual correctness before publication.
            However, mortgage rules, VA program requirements, interest rates, lender policies, and
            regulatory requirements change frequently — sometimes without advance notice.
          </p>
          <p>
            Information on this site may not reflect the most recent changes. Always verify any
            information with your lender, the VA, or another authoritative source before acting on
            it. VARefinance.com is not responsible for decisions made based on content that has
            since become outdated.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Calculator and Tool Disclaimer</h2>
          <p>
            Interactive calculators and estimation tools on this site are provided for educational
            purposes only. Results are based on inputs you provide and general assumptions — they
            are not loan quotes, rate guarantees, or pre-approvals. Actual loan terms, interest
            rates, closing costs, and savings will vary based on your credit profile, property
            value, lender, and market conditions at the time of application.
          </p>
          <p>
            Use calculator results as a starting point for your own research, not as the basis for
            a financial commitment.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Use of This Site</h2>
          <p>
            You may use VARefinance.com for personal, non-commercial purposes. You may not
            reproduce, republish, or distribute site content for commercial purposes without written
            permission.
          </p>
          <p>
            All content on this site — including text, design, and graphics — is the intellectual
            property of VARefinance.com unless otherwise noted. Unauthorized use is prohibited.
          </p>
          <p>
            This site is provided &ldquo;as is&rdquo; without warranties of any kind. VARefinance.com
            is not liable for any damages arising from your use of the site or reliance on its
            content. You use this site at your own risk.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. The &ldquo;Last updated&rdquo; date at the
            top of this page reflects when changes were last made. Continued use of the site after
            any update constitutes acceptance of the revised terms.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Contact</h2>
          <p>
            Questions about these terms can be directed to{' '}
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
