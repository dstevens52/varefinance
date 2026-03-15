import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-baseline gap-0 mb-3">
              <span className="font-bold text-lg text-gold-400 tracking-tight">VA</span>
              <span className="font-semibold text-lg text-white tracking-tight">Refinance.com</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              You served your country. Now let your VA loan serve you.
            </p>
            <p className="text-white/40 text-xs mt-4 leading-relaxed">
              Varefinance.com is an independent educational resource for veterans and military families. We do not originate loans.
            </p>
          </div>

          {/* Refinance */}
          <div>
            <h3 className="font-semibold text-sm text-white/90 uppercase tracking-widest mb-4">Refinance</h3>
            <ul className="space-y-2">
              <li><Link href="/va-irrrl" className="text-white/60 hover:text-white text-sm transition-colors">VA Streamline (IRRRL)</Link></li>
              <li><Link href="/va-cash-out" className="text-white/60 hover:text-white text-sm transition-colors">VA Cash-Out Refinance</Link></li>
              <li><Link href="/va-purchase" className="text-white/60 hover:text-white text-sm transition-colors">VA Home Purchase</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold text-sm text-white/90 uppercase tracking-widest mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">All Articles</Link></li>
              <li><Link href="/blog/what-is-va-irrrl" className="text-white/60 hover:text-white text-sm transition-colors">What Is a VA IRRRL?</Link></li>
              <li><Link href="/blog/va-cash-out-tap-into-equity" className="text-white/60 hover:text-white text-sm transition-colors">VA Cash-Out Explained</Link></li>
              <li><Link href="/blog/5-things-veterans-should-know" className="text-white/60 hover:text-white text-sm transition-colors">5 Things Veterans Should Know</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* More articles */}
          <div>
            <h3 className="font-semibold text-sm text-white/90 uppercase tracking-widest mb-4">More Articles</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/va-loan-refinance-waiting-period" className="text-white/60 hover:text-white text-sm transition-colors">VA Refinance Waiting Period</Link></li>
              <li><Link href="/blog/va-irrrl-vs-conventional-refinance" className="text-white/60 hover:text-white text-sm transition-colors">IRRRL vs Conventional Refinance</Link></li>
              <li><Link href="/blog/type-1-vs-type-2-va-cash-out-refinance" className="text-white/60 hover:text-white text-sm transition-colors">Type I vs Type II Cash-Out</Link></li>
              <li><Link href="/blog/how-to-spot-predatory-va-refinance-offers" className="text-white/60 hover:text-white text-sm transition-colors">Spotting Predatory Offers</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Varefinance.com · All rights reserved · <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link> · <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Use</Link> · <Link href="/disclosure" className="hover:text-white/60 transition-colors">Disclosure</Link> · <Link href="/editorial-policy" className="hover:text-white/60 transition-colors">Editorial Policy</Link>
          </p>
          <p className="text-white/30 text-xs text-center">
            For informational purposes only. Not a lender or mortgage broker. VA loan eligibility determined by the Department of Veterans Affairs.
          </p>
        </div>
      </div>
    </footer>
  )
}
