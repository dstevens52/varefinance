import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Get a Free VA Loan Consultation — Contact Varefinance.com',
  description:
    'Speak with a VA loan specialist about your refinancing options. No obligation, no pressure. Fill out the short form and we will reach out within one business day.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Let&apos;s Talk About Your <span className="text-gold-400">VA Loan Options</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Fill out the form below and a VA loan specialist will reach out within one business day. There&apos;s no obligation and no pressure — just a straightforward conversation about what refinancing could do for you.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-navy-50 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-navy-900 mb-2">Request a Free Consultation</h2>
              <p className="text-gray-500 text-sm mb-6">Typically responded to within one business day.</p>
              <LeadForm />
            </div>
          </div>

          {/* Sidebar info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-navy-900 mb-3">What Happens Next?</h3>
              <ol className="space-y-3">
                {[
                  'A VA loan specialist receives your request',
                  'They review your loan details and current rate environment',
                  'They reach out within 1 business day to discuss your options',
                  'You decide if you want to proceed — zero pressure',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-navy-800 text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-navy-900 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-3">Not Sure Which Loan Is Right?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Select &ldquo;Not Sure — Help Me Decide&rdquo; in the form. A specialist will walk you through both the VA IRRRL and VA Cash-Out options based on your specific situation.
              </p>
            </div>

            <div className="bg-gold-50 border border-gold-100 rounded-xl p-6">
              <h3 className="font-bold text-navy-900 mb-3">Your Privacy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your information is used only to connect you with a VA loan specialist. We do not sell your data to third parties or spam you with unsolicited marketing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
