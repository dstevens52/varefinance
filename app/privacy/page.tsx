import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — VARefinance.com',
  description: 'Privacy policy for VARefinance.com. Learn what data we collect, how we use it, and your rights as a visitor.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-navy-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose max-w-none text-gray-700">

          <p>
            VARefinance.com is an independent educational resource for veterans and military families.
            This page explains what data we collect when you visit the site, how we use it, and how
            we handle it. We have written this in plain language rather than legal boilerplate because
            we think you deserve to understand it.
          </p>

          <p className="text-sm text-gray-500 mt-2">
            VARefinance.com is not affiliated with the Department of Veterans Affairs, any government
            agency, or any mortgage lender.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">What Data We Collect</h2>
          <p>
            We currently collect only basic analytics data through Google Analytics (GA4). This
            includes information such as which pages were visited, how long visitors spend on the
            site, what device and browser were used, and the general geographic region of the visitor
            (country/region — not precise location).
          </p>
          <p>
            We do <strong>not</strong> collect:
          </p>
          <ul>
            <li>Names, email addresses, or any contact information</li>
            <li>Financial information of any kind</li>
            <li>Data submitted through forms (the site does not currently have active contact or lead forms)</li>
            <li>Any information that directly identifies you as an individual</li>
          </ul>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">How We Use Data</h2>
          <p>
            Analytics data is used solely to understand how visitors use the site — which articles
            are most useful, how people navigate between pages, and where we can improve content.
            We do not use this data for advertising, remarketing, or any commercial purpose beyond
            improving the site itself.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Third-Party Services</h2>
          <p>
            We use <strong>Google Analytics (GA4)</strong> to collect anonymized usage data.
            Google&apos;s data collection and privacy practices are governed by{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-700 underline hover:text-gold-600"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
          <p>
            We do not sell visitor data to any third party. We do not share data with advertisers.
            No data collected through this site is used to target you with ads on other platforms.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Cookies</h2>
          <p>
            Google Analytics places cookies in your browser to distinguish unique visitors and
            sessions. These are analytics cookies only — they are not used for advertising or
            cross-site tracking.
          </p>
          <p>
            You can opt out of Google Analytics tracking using the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-700 underline hover:text-gold-600"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            , or by adjusting your browser&apos;s cookie settings. The site functions fully without
            analytics cookies enabled.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Future Data Collection</h2>
          <p>
            This site does not currently have active email signup forms, contact forms, or lead
            generation features. If those features are added in the future, this privacy policy will
            be updated to describe what data is collected, how it is stored, and how it is used —
            before those features go live.
          </p>

          <h2 className="text-xl font-bold text-navy-900 mt-10 mb-3">Contact</h2>
          <p>
            If you have questions about this privacy policy or how data is handled on this site,
            you can reach us at{' '}
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
