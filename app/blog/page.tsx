import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'VA Loan Articles & Guides — Learn About VA Refinancing',
  description:
    'Educational articles to help veterans and military families understand VA loan refinancing, eligibility, savings, and more.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
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
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center py-20">Articles coming soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-navy-200 transition-all">
                    <div className="bg-navy-800 h-2" />
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-gold-600 bg-gold-100 px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-400">{post.readTime}</span>
                      </div>
                      <h2 className="font-bold text-navy-900 text-lg leading-snug mb-3 group-hover:text-navy-700 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <span className="text-gold-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                          Read →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-50 py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-3">Ready to Take Action?</h2>
          <p className="text-gray-600 mb-6">Reading is a great start. The next step is a no-obligation conversation with a VA loan specialist.</p>
          <Link href="/contact" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3 rounded-md transition-colors">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
