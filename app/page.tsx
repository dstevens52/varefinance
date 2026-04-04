import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, BarChart3, DollarSign, CalendarCheck, ShieldCheck, BookOpen, CheckCircle, Lightbulb } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import { webSiteSchema, breadcrumbSchema } from '@/lib/schema'

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
    bullets: ['Borrow up to 90% of home value at most lenders', 'Open to all veterans, not just VA loan holders', 'Potentially lower your rate too', 'Flexible use of funds'],
    cta: 'Learn About Cash-Out',
    accent: false,
  },
]

const trustPoints = [
  {
    Icon: ShieldCheck,
    title: 'Built for Veterans',
    body: 'Every piece of content on this site is written specifically for veterans, active duty service members, and their families navigating VA loan options.',
  },
  {
    Icon: BookOpen,
    title: 'Education First',
    body: 'We believe informed veterans make better decisions. Our goal is to explain your options clearly — with no pressure and no sales tactics.',
  },
  {
    Icon: CheckCircle,
    title: 'Accurate & Up to Date',
    body: 'Our guides reflect current VA rules and program requirements so you can rely on the information when evaluating your options.',
  },
  {
    Icon: Lightbulb,
    title: 'Clear & Straightforward',
    body: 'No jargon, no fine print. We explain VA loan programs in plain language so you can understand your options without needing a mortgage degree.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={[webSiteSchema, breadcrumbSchema([{ name: 'Home', path: '/' }])]} />
      {/* Hero + Market Snapshot Callout — single shared navy background */}
      <div className="bg-navy-900">
        {/* Hero */}
        <section className="text-white pt-24 pb-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-1.5 text-gold-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 shrink-0" /> For Veterans, Active Duty &amp; Military Families
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              You served your country.
              <br />
              <span className="text-gold-400">Now let your VA loan serve you.</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Millions of veterans are leaving money on the table by not refinancing their VA loans. We break down the eligibility rules, funding fees, and net tangible benefit requirements so you can evaluate any refinance offer with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Link
                href="/va-irrrl"
                className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-md transition-colors text-lg"
              >
                Explore VA Streamline Refinance
              </Link>
              <Link
                href="/va-cash-out"
                className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-md transition-colors text-lg"
              >
                Explore VA Cash-Out Refinance
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="/calculator"
                className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-medium px-6 py-2.5 rounded-md transition-colors text-base"
              >
                Try Our VA Refinance Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Market Snapshot Callout */}
        <div className="px-4 pt-2 pb-12">
          <div
            className="max-w-[900px] mx-auto rounded-[10px] p-7 bg-white"
            style={{ border: '1px solid rgba(201, 168, 76, 0.35)' }}
          >
            <div className="flex flex-col gap-4 min-[700px]:flex-row min-[700px]:items-center min-[700px]:justify-between">
              {/* Left: eyebrow + headline + subtitle */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
                    style={{ backgroundColor: '#C9A84C' }}
                  />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#85714A' }}
                  >
                    Updated April 2026
                  </span>
                </div>
                <p
                  className="font-semibold leading-snug mb-2"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '18px', color: '#1B3A5C' }}
                >
                  Should you refinance your VA loan right now?
                </p>
                <p className="leading-relaxed" style={{ fontSize: '13px', color: '#5c5c5c' }}>
                  See the latest market data on who's refinancing, what veterans are saving, and whether the math works at today's rates.
                </p>
              </div>

              {/* Right: CTA button */}
              <div className="flex-shrink-0">
                <Link
                  href="/data/va-refinance-snapshot"
                  className="inline-block font-semibold rounded-lg transition-colors whitespace-nowrap text-sm bg-[#C9A84C] hover:bg-[#d4b35a] text-[#0F2440]"
                  style={{ padding: '10px 20px' }}
                >
                  View market snapshot →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculators */}
      <section className="bg-navy-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-3">Free VA Loan Tools</h2>
          <p className="text-gray-500 text-center mb-10">Run the numbers before you talk to a lender.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                href: '/calculator',
                Icon: BarChart3,
                title: 'VA Refinance Decision Tool',
                description: 'Should you refinance? Enter your numbers to see monthly savings, break-even timeline, and whether you meet VA requirements.',
                cta: 'Run the Calculator',
              },
              {
                href: '/calculator/funding-fee',
                Icon: DollarSign,
                title: 'VA Funding Fee Calculator',
                description: 'Calculate your exact funding fee by loan type, usage history, and down payment. See what it costs to finance it.',
                cta: 'Calculate Your Fee',
              },
              {
                href: '/calculator/irrrl-eligibility',
                Icon: CalendarCheck,
                title: 'IRRRL Eligibility Date Calculator',
                description: 'Find out exactly when you\'re eligible to refinance based on the VA\'s 210-day and 6-payment seasoning rules.',
                cta: 'Check Eligibility',
              },
            ].map(tool => (
              <div key={tool.href} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col hover:shadow-md hover:border-navy-200 transition-all">
                <div className="mb-4"><tool.Icon className="w-8 h-8 text-navy-700" /></div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">{tool.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{tool.description}</p>
                <Link
                  href={tool.href}
                  className="block text-center bg-navy-800 hover:bg-navy-900 text-white font-semibold py-2.5 rounded-md transition-colors text-sm"
                >
                  {tool.cta} →
                </Link>
              </div>
            ))}
          </div>
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
          <h2 className="text-3xl font-bold text-white text-center mb-10">Why Veterans Trust VARefinance.com</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map(tp => (
              <div key={tp.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="mb-4"><tp.Icon className="w-7 h-7 text-gold-400" /></div>
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

      {/* Popular Articles */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-1">Popular Articles</h2>
              <p className="text-gray-500">Start here to understand your options.</p>
            </div>
            <Link href="/blog" className="text-navy-700 hover:text-navy-900 font-semibold text-sm border border-navy-200 hover:border-navy-400 px-4 py-2 rounded-md transition-colors hidden sm:inline-block">
              All Articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: '/blog/when-to-refinance-va-loan',
                category: 'VA Loans',
                title: 'Is Now a Good Time to Refinance Your VA Loan?',
                description: 'The decision framework that actually matters — not rate commentary.',
              },
              {
                href: '/blog/va-funding-fee-2026',
                category: 'VA Loans',
                title: 'VA Funding Fee 2026: Complete Breakdown',
                description: 'Rates for every loan type, exemption rules, and dollar examples.',
              },
              {
                href: '/blog/how-to-spot-predatory-va-refinance-offers',
                category: 'VA Loans',
                title: 'How to Spot Predatory VA Refinance Offers',
                description: 'Red flags and tactics veterans need to recognize before they sign.',
              },
              {
                href: '/blog/va-irrrl-net-tangible-benefit',
                category: 'VA IRRRL',
                title: 'VA IRRRL Net Tangible Benefit Explained',
                description: 'What the NTB requirement means and how the 36-month rule works.',
              },
            ].map(article => (
              <Link key={article.href} href={article.href} className="group block">
                <article className="h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-navy-200 transition-all">
                  <div className="bg-navy-800 h-2" />
                  <div className="p-5 flex flex-col h-full">
                    <span className="text-xs font-semibold text-gold-600 bg-gold-100 px-2.5 py-1 rounded-full self-start mb-3">
                      {article.category}
                    </span>
                    <h3 className="font-bold text-navy-900 text-base leading-snug mb-2 group-hover:text-navy-700 transition-colors flex-1">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">{article.description}</p>
                    <span className="text-gold-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/blog" className="text-navy-700 hover:text-navy-900 font-semibold text-sm border border-navy-200 px-4 py-2 rounded-md transition-colors">
              Browse All Articles →
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
