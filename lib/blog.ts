import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  readTime: string
}

export interface BlogPostWithContent extends BlogPost {
  content: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return []
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'))
  const posts = files.map(file => {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf8')
    const { data } = matter(raw)
    return {
      slug: file.replace('.mdx', ''),
      title: data.title ?? '',
      description: data.description ?? '',
      date: data.date ?? '',
      author: data.author ?? 'Varefinance Team',
      category: data.category ?? 'VA Loans',
      readTime: data.readTime ?? '5 min read',
    } as BlogPost
  })
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPostWithContent | null {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? '',
    author: data.author ?? 'Varefinance Team',
    category: data.category ?? 'VA Loans',
    readTime: data.readTime ?? '5 min read',
    content,
  }
}
