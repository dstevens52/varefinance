import type { Metadata } from 'next'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'VA Loan Refinancing for Veterans & Military Families',
  description:
    'Learn how to lower your mortgage rate with a VA IRRRL or access your home equity with a VA Cash-Out refinance. Free educational guidance for veterans and military families.',
}

const loanCards = [
  {
    href: '/va-irrrl',
    badge: 'Most Popular',
    title: 'VA Streamline Refinance',
    subtitle: '(VA IRRRL)',
    description:
      'Already have a VA loan? The Interest Rate Reduction Refinance Loan lets you lower your rate with minimal paperwork, no appraisal, and no out-of-pocket costs in most cases.',
    bullets: ['No appraisal required', 'Reduced documentation', 'Lower monthly payments', 'Fast closing timeline'],
    cta: 'Learn About VA IRRRL',
    accent: true,
  },
  {
    href: '/va-cash-out',
    badge: 'Access Your Equity',
    title: 'VA Cash-Out Refinance',
    subtitle: '',
    description:
      'Tap into the equity you&apos;ve built in your home. Use the funds for home improvements, debt consolidation, education, or any other purpose — at competitive VA rates.',
    bullets: ['Borrow up to 100% of home value', 'Open to all veterans, not just VA loan holders', 'Potentially lower your rate too', 'Flexible use of funds'],
    cta: 'Learn About Cash-Out',
    accent: false,
  },
]

const trustPoints = [
  {
    icon: '🎖️',
    title: 'Built for Veterans',
    body: 'Every piece of content on this site is written specifically for veterans, active duty service members, and their families navigating VA loan options.',
  },
  {
    icon: '📖',
    title: 'Education First',
    body: 'We believe informed veterans make better decisions. Our goal is to explain your options clearly — never to pressure or confuse.',
  },
  {
    icon: '🔒',
    title: 'No Obligation',
    body: 'Reaching out is free and commits you to nothing. We connect you with VA loan specialists who understand military life.',
  },
  {
    icon: '⚡',
    title: 'Fast & Straightforward',
    body: 'VA loans are designed to move quickly. With proper guidance, many veterans close in 30 days or less.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-1.5 text-gold-400 text-sm font-medium mb-6">
            <span>🎖️</span> For Veterans, Active Duty &amp; Military Families
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            You served your country.
            <br />
            <span className="text-gold-400">Now let your VA loan serve you.</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Millions of veterans are leaving money on the table by not refinancing their VA loans. Find out how much you could save — with no pressure and no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-md transition-colors text-lg"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/va-irrrl"
              className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-md transition-colors text-lg"
            >
              Learn About VA IRRRL
            </Link>
          </div>
        </div>
      </section>

      {/* What is VA Refinancing */}
      <section className="bg-navy-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">What Is VA Loan Refinancing?</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            If you have a VA-backed home loan, you may be eligible to refinance it — potentially lowering your monthly payments, reducing your interest rate, or accessing the equity you&apos;ve built in your home.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            VA refinance programs are backed by the U.S. Department of Veterans Affairs and offer terms that are typically more favorable than conventional refinance options. There are two primary types: the <strong className="text-navy-800">VA IRRRL (Streamline Refinance)</strong> and the <strong className="text-navy-800">VA Cash-Out Refinance</strong>.
          </p>
        </div>
      </section>

      {/* Loan Type Cards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-3">Choose Your Path</h2>
          <p className="text-gray-500 text-center mb-10">Two powerful programs. Both designed for veterans like you.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanCards.map(card => (
              <div
                key={card.href}
                className={`rounded-2xl border-2 p-8 flex flex-col ${
                  card.accent
                    ? 'border-gold-500 shadow-lg shadow-gold-500/10'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${card.accent ? 'bg-gold-100 text-gold-700' : 'bg-navy-50 text-navy-700'}`}>
                      {card.badge}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mt-2">{card.title}</h3>
                {card.subtitle && <p className="text-navy-600 text-sm mb-2">{card.subtitle}</p>}
                <p className="text-gray-600 text-sm leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: card.description }} />
                <ul className="space-y-2 mb-6 flex-1">
                  {card.bullets.map(b => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-gold-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={card.href}
                  className={`block text-center font-semibold py-3 rounded-md transition-colors ${
                    card.accent
                      ? 'bg-gold-500 hover:bg-gold-600 text-white'
                      : 'bg-navy-800 hover:bg-navy-900 text-white'
                  }`}
                >
                  {card.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-navy-900 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Why Veterans Trust Varefinance.com</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map(tp => (
              <div key={tp.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="text-3xl mb-3">{tp.icon}</div>
                <h3 className="font-semibold text-white mb-2">{tp.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{tp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who qualifies */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-900 mb-3">Who Qualifies for VA Loan Refinancing?</h2>
            <p className="text-gray-600 text-lg">VA refinance benefits are earned through your military service.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { group: 'Veterans', detail: 'Any veteran who served and was discharged under conditions other than dishonorable' },
              { group: 'Active Duty', detail: 'Service members on active duty who meet minimum service requirements' },
              { group: 'Military Families', detail: 'Surviving spouses of veterans who died in service or from a service-connected disability' },
            ].map(q => (
              <div key={q.group} className="bg-navy-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 text-lg mb-2">{q.group}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form CTA */}
      <section className="bg-navy-800 py-16 px-4" id="get-started">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">See What You Could Save</h2>
            <p className="text-white/70 text-lg">
              Fill out the short form below and a VA loan specialist will reach out to discuss your options.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
