import { ArrowUpRight } from 'lucide-react'

type ExternalLinkProps = {
  href: string
  children: string
  className?: string
  iconSize?: number
}

export function ExternalLink({ href, children, className = '', iconSize = 15 }: ExternalLinkProps) {
  return (
    <a href={href} className={`inline-flex min-h-6 items-center gap-1 ${className}`.trim()}>
      {children}
      <ArrowUpRight size={iconSize} aria-hidden="true" className="shrink-0" />
    </a>
  )
}
