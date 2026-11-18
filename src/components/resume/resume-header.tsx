import { resume } from '../../resume'
import { ExternalLink } from './external-link'

export function ResumeHeader() {
  return (
    <header className="border-b border-stone-300 pb-8 sm:pb-10">
      <p className="mb-3 text-sm font-medium text-stone-600">{resume.location}</p>
      <h1 className="text-5xl font-semibold tracking-[-0.065em] sm:text-7xl">{resume.name}</h1>
      <p className="mt-3 text-xl font-semibold text-teal-800">{resume.title}</p>
      <p className="mt-5 max-w-2xl leading-relaxed text-stone-700">{resume.summary}</p>
      <nav aria-label="Contact and profiles" className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        {resume.links.map(({ label, url }) => (
          <ExternalLink key={label} href={url} className="text-sm font-semibold" iconSize={14}>
            {label}
          </ExternalLink>
        ))}
      </nav>
    </header>
  )
}
