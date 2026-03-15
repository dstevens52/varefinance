import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import BlogFilter from '@/components/BlogFilter'

export const metadata: Metadata = {
  title: 'VA Loan Articles & Guides — Learn About VA Refinancing',
  description:
    'Educational articles to help veterans and military families understand VA loan refinancing, eligibility, savings, and more.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Articles', path: '/blog' },
      ])} />
      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">VA Loan <span className="text-gold-400">Learning Center</span></h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Clear, educational articles written for veterans and military families — covering VA IRRRL, Cash-Out Refinance, VA purchase loans, and more.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <BlogFilter posts={posts} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-50 py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-3">Ready to Take Action?</h2>
          <p className="text-gray-600 mb-6">Ready to put your knowledge into action? Explore the VA loan programs that may apply to your situation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/va-irrrl" className="inline-block bg-navy-800 hover:bg-navy-900 text-white font-semibold px-6 py-3 rounded-md transition-colors">
              VA Streamline Refinance
            </Link>
            <Link href="/va-cash-out" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-md transition-colors">
              VA Cash-Out Refinance
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
