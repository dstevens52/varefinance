'use client'

import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
  answerNode?: React.ReactNode
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
      {items.map((item, i) => (
        <div key={i} className="bg-white">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-navy-900 text-sm sm:text-base">{item.question}</span>
            <span className={`text-gold-500 text-xl font-light transition-transform shrink-0 ${open === i ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          <div
            className="border-t border-gray-100 overflow-hidden transition-all duration-200"
            style={open === i ? { maxHeight: '1000px', visibility: 'visible' } : { maxHeight: 0, visibility: 'hidden' }}
            aria-hidden={open !== i}
          >
            <div className="px-6 pb-5 pt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              {item.answerNode ?? item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
