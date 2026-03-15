import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About VARefinance.com — Helping Veterans Navigate VA Loan Benefits',
  description:
    'VARefinance.com is an educational resource dedicated to helping veterans, active-duty service members, and military families understand and use their VA loan refinancing benefits.',
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ])} />
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-gold-400">VARefinance.com</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed">
            An independent educational resource for veterans and military families navigating VA loan refinancing options.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Mission</h2>
          <div className="prose max-w-none">
            <p>
              VARefinance.com exists because too many veterans are leaving money on the table. Millions of veterans hold VA loans with interest rates significantly above current market rates — yet the VA IRRRL and Cash-Out Refinance programs that could help them go largely unused due to a simple lack of awareness.
            </p>
            <p>
              The VA loan benefit is one of the most valuable pieces of compensation earned through military service. Our mission is straightforward: give veterans the clear, honest, jargon-free information they need to understand their refinancing options and make confident decisions.
            </p>
            <p>
              We do not originate loans. We are not a lender or broker. We are an educational platform — no sales, no pressure, just the facts you need to make confident decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Education Over Sales',
                body: 'Every article, guide, and resource on this site is written to inform — not to pressure. We believe veterans who understand their options make better decisions, and that benefits everyone.',
              },
              {
                title: 'Respect for Service',
                body: 'The men and women who serve deserve straight answers, not confusing mortgage jargon or misleading marketing. We write plainly and honestly about what VA loans can and cannot do.',
              },
              {
                title: 'Transparency',
                body: 'We are clear about what VARefinance.com is: a free educational resource for veterans. No hidden agendas, no sales pitches. Just honest information to help you make informed decisions.',
              },
            ].map(v => (
              <div key={v.title} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 text-lg mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Who We Help</h2>
          <div className="space-y-4">
            {[
              'Veterans who purchased their home with a VA loan and want to know if refinancing makes sense',
              'Veterans who purchased with conventional financing and want to switch to a VA loan to access better terms',
              'Active-duty service members approaching separation who want to understand their VA benefit options',
              'Military spouses and families trying to navigate VA loan rules and eligibility',
              'Veterans with high-interest VA loans who have never been told about the VA IRRRL',
              'Homeowners who want to access their equity through a VA Cash-Out Refinance',
            ].map(item => (
              <div key={item} className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center mt-0.5 shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-navy-50 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-navy-900 mb-3">Important Disclosures</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              VARefinance.com is an independent educational website. We are not affiliated with the U.S. Department of Veterans Affairs or any government agency. We do not make mortgage loans, take loan applications, or engage in mortgage lending or brokerage activities.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Information on this site is provided for educational purposes only and should not be construed as financial or legal advice. VA loan eligibility, rates, and terms are determined by the VA and individual lenders. Always consult with a qualified VA-approved lender and, if appropriate, a financial advisor before making refinancing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Learn More?</h2>
          <p className="text-white/70 text-lg mb-8">Explore our guides on VA refinancing programs and educational articles for veterans.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3.5 rounded-md transition-colors">
              Read Our Guides
            </Link>
            <Link href="/va-irrrl" className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-md transition-colors">
              Explore VA Loan Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
