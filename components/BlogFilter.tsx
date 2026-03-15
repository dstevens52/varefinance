'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'

const FILTERS = ['All', 'VA IRRRL', 'VA Cash-Out', 'VA Loans'] as const
type Filter = typeof FILTERS[number]

export default function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<Filter>('All')

  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active)

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map(filter => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              active === filter
                ? 'bg-navy-800 text-white'
                : 'bg-white text-navy-800 border border-navy-200 hover:border-navy-400 hover:bg-navy-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Post grid */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center py-20">No articles in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(post => (
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
    </>
  )
}
