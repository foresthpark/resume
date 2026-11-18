import type { ReactNode } from 'react'

type ResumeSectionProps = {
  id: string
  title: string
  children: ReactNode
}

export function ResumeSection({ id, title, children }: ResumeSectionProps) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      {children}
    </section>
  )
}
