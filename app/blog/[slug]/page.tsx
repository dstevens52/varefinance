import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, getAllPosts } from '@/lib/blog'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const related = allPosts.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">← All Articles</Link>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-gold-400 bg-gold-500/20 px-2.5 py-1 rounded-full">{post.category}</span>
            <span className="text-white/50 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">{post.title}</h1>
          <p className="text-white/70 text-lg leading-relaxed">{post.description}</p>
          <p className="text-white/40 text-sm mt-4">
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.author}
          </p>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Article */}
          <article className="lg:col-span-2">
            <div className="prose max-w-none">
              <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
            </div>

            {/* Bottom educational CTA */}
            <div className="mt-12 p-6 bg-navy-50 border border-navy-100 rounded-2xl">
              <h3 className="font-bold text-navy-900 text-lg mb-2">Want to learn more about your VA loan options?</h3>
              <p className="text-gray-600 text-sm mb-4">Explore our in-depth guides on VA refinancing programs to understand your eligibility and potential savings.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/va-irrrl" className="inline-block bg-navy-800 hover:bg-navy-900 text-white font-semibold px-5 py-2 rounded-md transition-colors text-sm">
                  VA Streamline Refinance
                </Link>
                <Link href="/va-cash-out" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-5 py-2 rounded-md transition-colors text-sm">
                  VA Cash-Out Refinance
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Explore programs */}
            <div className="bg-navy-900 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-3">Explore VA Loan Programs</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/va-irrrl" className="block text-white/80 hover:text-gold-400 text-sm transition-colors">
                    → VA Streamline Refinance (IRRRL)
                  </Link>
                </li>
                <li>
                  <Link href="/va-cash-out" className="block text-white/80 hover:text-gold-400 text-sm transition-colors">
                    → VA Cash-Out Refinance
                  </Link>
                </li>
                <li>
                  <Link href="/va-purchase" className="block text-white/80 hover:text-gold-400 text-sm transition-colors">
                    → VA Home Purchase Loan
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick links */}
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-navy-900 mb-4 text-sm uppercase tracking-wider">On This Site</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-navy-700 hover:text-gold-600 text-sm transition-colors">All Articles &amp; Guides</Link></li>
                <li><Link href="/about" className="text-navy-700 hover:text-gold-600 text-sm transition-colors">About VARefinance.com</Link></li>
              </ul>
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy-900 mb-4 text-sm uppercase tracking-wider">More Articles</h3>
                <ul className="space-y-3">
                  {related.map(rp => (
                    <li key={rp.slug}>
                      <Link href={`/blog/${rp.slug}`} className="text-navy-700 hover:text-gold-600 text-sm leading-snug transition-colors block">
                        {rp.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Bottom educational CTA banner */}
      <section className="bg-navy-800 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Keep Learning About VA Loan Benefits</h2>
          <p className="text-white/70 mb-7">
            VA refinancing programs have helped millions of veterans lower their costs. Browse our full library of guides and educational articles.
          </p>
          <Link href="/blog" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3 rounded-md transition-colors">
            Browse All Articles
          </Link>
        </div>
      </section>
    </>
  )
}
