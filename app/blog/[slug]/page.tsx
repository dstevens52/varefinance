import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import JsonLd from '@/components/JsonLd'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import QuickAnswer from '@/components/QuickAnswer'

const mdxComponents = { QuickAnswer }

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

  // Per-post related article slugs — topically matched, not chronological
  const relatedSlugMap: Record<string, string[]> = {
    // IRRRL posts
    'what-is-va-irrrl': ['va-irrrl-closing-costs', 'va-irrrl-net-tangible-benefit', 'va-irrrl-documents-needed'],
    'va-irrrl-closing-costs': ['what-is-va-irrrl', 'va-irrrl-net-tangible-benefit', 'when-to-refinance-va-loan'],
    'va-irrrl-net-tangible-benefit': ['what-is-va-irrrl', 'va-irrrl-closing-costs', 'when-to-refinance-va-loan'],
    'va-irrrl-documents-needed': ['va-irrrl-closing-costs', 'va-refinance-document-checklist', 'va-irrrl-net-tangible-benefit'],
    'va-irrrl-vs-conventional-refinance': ['what-is-va-irrrl', 'va-irrrl-closing-costs', 'refinance-va-loan-to-conventional'],
    'va-loan-refinance-waiting-period': ['what-is-va-irrrl', 'va-irrrl-net-tangible-benefit', 'va-irrrl-closing-costs'],
    'va-irrrl-rental-property': ['what-is-va-irrrl', 'va-irrrl-closing-costs', 'va-irrrl-documents-needed'],
    'how-many-times-va-irrrl': ['va-irrrl-net-tangible-benefit', 'what-is-va-irrrl', 'when-to-refinance-va-loan'],
    'va-irrrl-arm-to-fixed-rate': ['what-is-va-irrrl', 'va-irrrl-net-tangible-benefit', 'va-irrrl-closing-costs'],
    'va-irrrl-second-mortgage-subordination': ['what-is-va-irrrl', 'va-irrrl-closing-costs', 'va-irrrl-documents-needed'],
    // Cash-out posts
    'va-cash-out-tap-into-equity': ['va-cash-out-vs-heloc', 'va-cash-out-equity-limits', 'va-cash-out-refinance-credit-score'],
    'type-1-vs-type-2-va-cash-out-refinance': ['va-cash-out-tap-into-equity', 'va-cash-out-equity-limits', 'va-cash-out-refinance-credit-score'],
    'va-cash-out-vs-heloc': ['va-cash-out-tap-into-equity', 'va-cash-out-equity-limits', 'va-cash-out-refinance-debt-consolidation'],
    'va-cash-out-refinance-credit-score': ['va-cash-out-equity-limits', 'va-cash-out-tap-into-equity', 'va-cash-out-refinance-debt-consolidation'],
    'va-cash-out-refinance-paid-off-home': ['va-cash-out-equity-limits', 'va-cash-out-tap-into-equity', 'va-cash-out-refinance-credit-score'],
    'va-cash-out-refinance-debt-consolidation': ['va-cash-out-tap-into-equity', 'va-cash-out-vs-heloc', 'va-cash-out-equity-limits'],
    'va-cash-out-equity-limits': ['va-cash-out-tap-into-equity', 'va-cash-out-refinance-credit-score', 'type-1-vs-type-2-va-cash-out-refinance'],
    'refinance-conventional-to-va-loan': ['va-cash-out-tap-into-equity', 'va-cash-out-equity-limits', 'va-cash-out-refinance-credit-score'],
    // General / costs / timing
    'va-funding-fee-2026': ['va-irrrl-closing-costs', 'va-cash-out-equity-limits', 'when-to-refinance-va-loan'],
    'when-to-refinance-va-loan': ['va-irrrl-net-tangible-benefit', 'va-mortgage-rates-explained', 'va-irrrl-closing-costs'],
    'va-mortgage-rates-explained': ['when-to-refinance-va-loan', 'va-irrrl-net-tangible-benefit', 'va-irrrl-closing-costs'],
    'va-refinance-escrow-refund': ['va-irrrl-closing-costs', 'va-refinance-document-checklist', 'va-funding-fee-2026'],
    'va-refinance-document-checklist': ['va-irrrl-documents-needed', 'va-refinance-escrow-refund', 'va-funding-fee-2026'],
    'refinance-va-loan-to-conventional': ['va-irrrl-vs-conventional-refinance', 'va-cash-out-tap-into-equity', 'va-funding-fee-2026'],
    // Eligibility / benefits
    'va-certificate-of-eligibility-how-to-get': ['va-loan-entitlement-restoration', 'va-loan-benefits-after-separation', '5-things-veterans-should-know'],
    'va-loan-entitlement-restoration': ['va-certificate-of-eligibility-how-to-get', 'va-loan-benefits-after-separation', 'va-funding-fee-2026'],
    'va-loan-benefits-after-separation': ['va-certificate-of-eligibility-how-to-get', 'va-loan-entitlement-restoration', '5-things-veterans-should-know'],
    '5-things-veterans-should-know': ['va-funding-fee-2026', 'va-irrrl-net-tangible-benefit', 'va-certificate-of-eligibility-how-to-get'],
    'how-to-spot-predatory-va-refinance-offers': ['5-things-veterans-should-know', 'va-irrrl-net-tangible-benefit', 'how-many-times-va-irrrl'],
  }

  const relatedSlugs = relatedSlugMap[slug] ?? []
  const related = relatedSlugs.length > 0
    ? relatedSlugs.map(s => allPosts.find(p => p.slug === s)).filter(Boolean) as typeof allPosts
    : allPosts.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <>
      <JsonLd data={[
        articleSchema({ title: post.title, description: post.description, date: post.date, slug }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Articles', path: '/blog' },
          { name: post.title, path: `/blog/${slug}` },
        ]),
      ]} />
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
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · VARefinance Editorial
          </p>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Article */}
          <article className="lg:col-span-2">
            <div className="prose max-w-none">
              <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
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

    </>
  )
}
