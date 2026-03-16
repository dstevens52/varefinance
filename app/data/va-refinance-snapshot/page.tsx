import type { Metadata } from 'next'
import Link from 'next/link'
import SnapshotShareBar from '@/components/SnapshotShareBar'
import SnapshotBarChart from '@/components/SnapshotBarChart'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'VA Refinance Market Snapshot — March 2026 | VARefinance.com',
  description:
    '5.4 million homeowners could save by refinancing. See the latest market data, what veterans are saving, and whether a VA IRRRL could lower your payment.',
  openGraph: {
    title: '5.4 Million Homeowners Could Save by Refinancing — Are You One of Them?',
    description:
      'Rates dipped below 6% for the first time in 3 years. See what veterans are saving and whether a VA IRRRL makes sense for you.',
    type: 'article',
  },
}

export default function VARefinanceSnapshotPage() {
  return (
    <div className="bg-white min-h-screen">
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Data & Tools', path: '/data' },
        { name: 'Market Snapshot', path: '/data/va-refinance-snapshot' },
      ])} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="pt-6 pb-2 text-sm text-gray-500 flex items-center gap-1.5" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-navy-700 transition-colors">Home</Link>
          <span aria-hidden="true">›</span>
          <span>Data &amp; Tools</span>
          <span aria-hidden="true">›</span>
          <span className="text-gray-800" aria-current="page">Market Snapshot</span>
        </nav>

        {/* Page header */}
        <header className="py-8">
          <p className="text-sm text-gray-400 mb-3">
            Last updated March 9, 2026 · Next update expected early April
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            VA refinance market snapshot
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            A monthly look at the refinance landscape for veterans and service members, built from
            publicly available ICE Mortgage Monitor data. We update this page each time a new report
            is released.
          </p>
        </header>

        {/* Top share bar */}
        <div className="pb-6">
          <SnapshotShareBar label="Share" />
        </div>

        {/* ── Infographic card ── */}
        <div
          id="infographic-card"
          className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6"
          style={{ border: '1px solid #e8e4dc' }}
        >
          {/* a. Card eyebrow */}
          <div className="px-6 sm:px-8 pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              March 2026 — ICE Mortgage Monitor data
            </p>
          </div>

          {/* b. Headline */}
          <div className="px-6 sm:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-[2.6rem] font-bold leading-tight mb-4">
              <span className="text-gray-900">5.4 million homeowners could save by refinancing.</span>
              <br />
              <span className="text-navy-800">Are you one of them?</span>
            </h2>
          </div>

          {/* c. Subhead */}
          <div className="px-6 sm:px-8 pb-7">
            <p className="text-gray-600 leading-relaxed text-base max-w-3xl">
              When 30-year rates dipped below 6% in late February 2026, the refinance-eligible
              population hit a 4-year high. Veterans with rates above 6.25% should evaluate whether
              a VA IRRRL could reduce their monthly payment.
            </p>
          </div>

          {/* d. Big number cards */}
          <div className="px-6 sm:px-8 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 — navy */}
              <div className="rounded-xl p-6 text-white" style={{ backgroundColor: '#1B3A5C' }}>
                <div className="text-xs font-semibold uppercase tracking-widest text-white/55 mb-3">
                  Refinance-eligible borrowers
                </div>
                <div className="text-5xl font-bold tracking-tight mb-3">5.4M</div>
                <div className="text-sm text-white/65 leading-relaxed">
                  Highest since early 2022. Borrowers who could cut their rate by 0.75% or more.
                </div>
              </div>

              {/* Card 2 — muted gold */}
              <div className="rounded-xl p-6 text-white" style={{ backgroundColor: '#85714A' }}>
                <div className="text-xs font-semibold uppercase tracking-widest text-white/55 mb-3">
                  Q4 2025 refinances closed
                </div>
                <div className="text-5xl font-bold tracking-tight mb-3">565K</div>
                <div className="text-sm text-white/65 leading-relaxed">
                  Up 50% year-over-year. Highest quarterly volume in 3.5 years.
                </div>
              </div>
            </div>
          </div>

          {/* e. Divider */}
          <div className="border-t border-gray-100 mx-6 sm:mx-8" />

          {/* f. Section label + intro */}
          <div className="px-6 sm:px-8 pt-8 pb-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              What could refinancing look like?
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Based on a $350,000 loan balance (near the national VA loan average), 30-year fixed,
              principal and interest only.
            </p>
          </div>

          {/* g. Scenario 1 */}
          <div className="px-6 sm:px-8 pb-4">
            <div className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="font-semibold text-navy-900">Bought in 2023–2024 at 6.50%</span>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: '#E1F5EE', color: '#085041' }}
                  >
                    0.75% rate drop
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <div className="flex-1 text-center sm:text-left">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Current rate</div>
                    <div className="text-3xl font-bold text-navy-900">6.50%</div>
                    <div className="text-sm text-gray-500 mt-1">P&amp;I $2,212/mo</div>
                  </div>
                  <div className="text-2xl text-gray-300 select-none flex-shrink-0">→</div>
                  <div className="flex-1 text-center sm:text-right">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">New rate</div>
                    <div className="text-3xl font-bold" style={{ color: '#0F6E56' }}>5.75%</div>
                    <div className="text-sm text-gray-500 mt-1">P&amp;I $2,043/mo</div>
                  </div>
                </div>
              </div>
              <div
                className="px-5 sm:px-6 py-3 flex flex-wrap gap-x-4 gap-y-1 items-center"
                style={{ backgroundColor: '#E1F5EE' }}
              >
                <span className="text-sm font-semibold" style={{ color: '#085041' }}>
                  $169/mo estimated monthly savings
                </span>
                <span className="text-gray-300 hidden sm:inline" aria-hidden="true">|</span>
                <span className="text-sm font-semibold" style={{ color: '#085041' }}>
                  $2,034/yr estimated annual savings
                </span>
              </div>
            </div>
          </div>

          {/* h. Scenario 2 */}
          <div className="px-6 sm:px-8 pb-8">
            <div className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="font-semibold text-navy-900">Bought at the peak at 7.00%</span>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: '#E1F5EE', color: '#085041' }}
                  >
                    1.25% rate drop
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <div className="flex-1 text-center sm:text-left">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Current rate</div>
                    <div className="text-3xl font-bold text-navy-900">7.00%</div>
                    <div className="text-sm text-gray-500 mt-1">P&amp;I $2,329/mo</div>
                  </div>
                  <div className="text-2xl text-gray-300 select-none flex-shrink-0">→</div>
                  <div className="flex-1 text-center sm:text-right">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">New rate</div>
                    <div className="text-3xl font-bold" style={{ color: '#0F6E56' }}>5.75%</div>
                    <div className="text-sm text-gray-500 mt-1">P&amp;I $2,043/mo</div>
                  </div>
                </div>
              </div>
              <div
                className="px-5 sm:px-6 py-3 flex flex-wrap gap-x-4 gap-y-1 items-center"
                style={{ backgroundColor: '#E1F5EE' }}
              >
                <span className="text-sm font-semibold" style={{ color: '#085041' }}>
                  $286/mo estimated monthly savings
                </span>
                <span className="text-gray-300 hidden sm:inline" aria-hidden="true">|</span>
                <span className="text-sm font-semibold" style={{ color: '#085041' }}>
                  $3,430/yr estimated annual savings
                </span>
              </div>
            </div>
          </div>

          {/* i. VA callout box */}
          <div className="px-6 sm:px-8 pb-8">
            <div
              className="rounded-xl p-6"
              style={{ background: 'linear-gradient(135deg, #0f2044 0%, #1b3a6b 100%)' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm"
                  style={{ backgroundColor: '#c8a032', color: '#0f2044' }}
                >
                  VA
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    VA borrowers are leading the refinance wave
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    FHA and VA loans had the strongest servicer retention of any loan type in Q4
                    2025 at 39%. An estimated 95% of recent rate-and-term refinances involved loans
                    originated in 2023–2025, with the average refinancer cutting their rate by nearly
                    a full percentage point and saving about $200/month. The VA IRRRL (streamline
                    refinance) requires a minimum 0.5% rate reduction for fixed-to-fixed refinances
                    and must pass a 36-month recoupment test.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* j. Chart section label */}
          <div className="border-t border-gray-100 mx-6 sm:mx-8" />
          <div className="px-6 sm:px-8 pt-7 pb-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Refinances as a share of total mortgage lending
            </p>
          </div>

          {/* k. Bar chart */}
          <div className="px-6 sm:px-8 pb-2">
            <SnapshotBarChart />
          </div>

          {/* Chart legend */}
          <div className="px-6 sm:px-8 pb-6 flex items-center gap-5 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: '#d3d1c7' }} />
              <span>2022–2024</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: '#1b3a6b' }} />
              <span>2025</span>
            </div>
          </div>

          {/* l. Disclaimer box */}
          <div className="mx-6 sm:mx-8 mb-8 rounded-xl bg-gray-50 border border-gray-100 p-5">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong className="font-semibold text-gray-600">Important disclaimers:</strong> The
              scenarios above are hypothetical illustrations using a $350,000 loan balance at a
              30-year fixed term, showing principal and interest only. They do not include taxes,
              insurance, HOA dues, or the VA funding fee (0.5% for IRRRLs). Actual rates, payments,
              and savings vary based on individual credit profile, lender, loan amount, property
              type, and market conditions at the time of application. Rates change daily. A VA IRRRL
              requires meeting net tangible benefit and 36-month recoupment requirements. This is
              general educational information and is not a loan offer, rate quote, or financial
              advice. Consult a licensed loan officer for guidance specific to your situation.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed mt-2">
              Chart values for quarters prior to Q4 2025 are approximated from ICE Mortgage Monitor
              narrative descriptions. The Q4 2025 figure (~39%) and the general trajectory from the
              2022 peak through the 2023 trough and 2025 recovery are accurate to the published
              reports; exact intermediate values are estimates.
            </p>
          </div>

          {/* m. Footer inside card */}
          <div className="border-t border-gray-100">
            <div className="px-6 sm:px-8 py-5 flex flex-col sm:flex-row justify-between gap-4">
              <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                Market data: ICE Mortgage Monitor (March 2026 and December 2025), ICE McDash
                loan-level data. Loan scenarios are illustrative calculations, not quotes.
              </p>
              <div className="sm:text-right flex-shrink-0">
                <div className="font-bold text-navy-900 text-sm">
                  <span className="text-gold-600">VA</span>Refinance.com
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  You served your country. Now let your VA loan serve you.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ── End infographic card ── */}

        {/* Bottom share bar */}
        <div className="pb-12">
          <SnapshotShareBar label="Know a veteran who should see this?" />
        </div>

        {/* About this data */}
        <div className="border-t border-gray-100 pt-10 pb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-5">About this data</h2>
          <div className="prose max-w-none">
            <p>
              This snapshot uses publicly available data from the{' '}
              <a
                href="https://mortgagetech.ice.com/resources/data-reports"
                target="_blank"
                rel="noopener noreferrer"
              >
                ICE Mortgage Monitor
              </a>
              , which tracks loan-level performance across the majority of the U.S. mortgage market.
              The primary sources are the March 2026 and December 2025 ICE Mortgage Monitor reports.
            </p>
            <p>
              The refinance scenarios use a $350,000 loan balance, which is near the national average
              VA loan amount of $361,000 (FY2023, U.S. Department of Veterans Affairs). The 5.75%
              target rate reflects current VA IRRRL pricing as of mid-March 2026. Rates change daily.
            </p>
            <p>
              We update this page when new ICE Mortgage Monitor reports are released, typically within
              a few days of publication. The next report is expected in early April 2026. Want to know
              if a refinance makes sense for your specific situation? Use our{' '}
              <Link href="/calculator">VA Refinance Decision Tool</Link> or explore our guide to the{' '}
              <Link href="/va-irrrl">VA IRRRL</Link>.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
