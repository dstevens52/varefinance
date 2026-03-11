const BASE_URL = 'https://varefinance.com'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VARefinance.com',
  url: BASE_URL,
  description: 'VA loan refinancing education for veterans and military families',
  sameAs: [] as string[],
}

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VARefinance.com',
  url: BASE_URL,
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.path}`,
    })),
  }
}

export function articleSchema({
  title,
  description,
  date,
  slug,
}: {
  title: string
  description: string
  date: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    url: `${BASE_URL}/blog/${slug}`,
    author: {
      '@type': 'Organization',
      name: 'VARefinance.com',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'VARefinance.com',
      url: BASE_URL,
    },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
