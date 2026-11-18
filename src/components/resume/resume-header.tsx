import { resume } from '../../resume'
import { ExternalLink } from './external-link'

export function ResumeHeader() {
  return (
    <header className="border-t-2 border-stone-900 pt-6 sm:pt-8">
      <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-stone-600 uppercase">{resume.location}</p>
      <h1 className="text-[clamp(3rem,8vw,6.5rem)] leading-[1.02] font-normal tracking-[-0.065em]">{resume.name}</h1>
      <p className="mt-3 text-xl font-semibold text-teal-800">{resume.title}</p>
      <p className="mt-5 max-w-2xl leading-relaxed text-stone-700">{resume.summary}</p>
      <nav aria-label="Contact and profiles" className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-y border-stone-300 py-3 sm:mt-8">
        {resume.links.map(({ label, url }) => (
          <ExternalLink key={label} href={url} className="text-sm font-semibold" iconSize={14}>
            {label}
          </ExternalLink>
        ))}
      </nav>
    </header>
  )
}
