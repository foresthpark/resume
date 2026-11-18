import { resume } from '../../resume'
import { ResumeSection } from './resume-section'

export function Experience() {
  return (
    <ResumeSection id="experience" title="Experience">
      <div className="divide-y divide-stone-200">
        {resume.experience.map(({ company, role, location, dates, highlights, stack }) => (
          <article key={company} className="py-5 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3>{company}</h3>
              <p className="text-sm font-medium text-stone-600">{dates}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-teal-800">{role} · {location}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-stone-700 marker:text-teal-700">
              {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            {stack && <p className="mt-3 text-sm leading-relaxed text-stone-600"><strong>Stack</strong> · {stack}</p>}
          </article>
        ))}
      </div>
    </ResumeSection>
  )
}
