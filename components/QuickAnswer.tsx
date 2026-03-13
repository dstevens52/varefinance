import type { ReactNode } from 'react'

export default function QuickAnswer({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        borderLeft: '4px solid #c8a032',
        backgroundColor: '#fdf8ee',
        padding: '16px 20px',
        marginBottom: '28px',
        borderRadius: '0 6px 6px 0',
        fontSize: '1.05rem',
        lineHeight: '1.65',
        color: '#1a2540',
      }}
    >
      {children}
    </div>
  )
}
