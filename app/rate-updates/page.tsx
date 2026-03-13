import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VA Rate Updates — Weekly VA Mortgage Rate Watch',
  description:
    'Subscribe to VA Rate Watch for weekly VA mortgage rate updates and plain-English market analysis delivered every Monday.',
}

export default function RateUpdatesPage() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-navy-900 mb-3">VA Rate Updates</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Stay on top of VA mortgage rates without the noise. Every Monday we send a short,
          plain-English breakdown of where rates are headed and what it means for veterans
          looking to refinance.
        </p>
      </div>
    </section>
  )
}
