'use client'

import { useState } from 'react'

const SHARE_TEXT =
  '5.4 million homeowners could save by refinancing right now. Veterans with rates above 6.25% should take a look.'
const PAGE_URL = 'https://varefinance.com/data/va-refinance-snapshot'

const socialButtons = [
  {
    label: 'X (Twitter)',
    href: `https://x.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(PAGE_URL)}`,
  },
  {
    label: 'Facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`,
  },
  {
    label: 'LinkedIn',
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}`,
  },
  {
    label: 'Reddit',
    href: `https://www.reddit.com/submit?url=${encodeURIComponent(PAGE_URL)}&title=${encodeURIComponent(SHARE_TEXT)}`,
  },
]

export default function SnapshotShareBar({ label }: { label: string }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(PAGE_URL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function handleDownload() {
    alert('Coming soon — static image download')
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-gray-500 mr-1">{label}</span>
      {socialButtons.map(btn => (
        <a
          key={btn.label}
          href={btn.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-md text-gray-700 hover:border-navy-700 hover:text-navy-700 transition-colors whitespace-nowrap"
        >
          {btn.label}
        </a>
      ))}
      <button
        onClick={handleCopy}
        className="inline-flex items-center px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-md text-gray-700 hover:border-navy-700 hover:text-navy-700 transition-colors whitespace-nowrap"
      >
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
      <button
        onClick={handleDownload}
        className="inline-flex items-center px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-md text-gray-700 hover:border-navy-700 hover:text-navy-700 transition-colors whitespace-nowrap"
      >
        Download Image
      </button>
    </div>
  )
}
