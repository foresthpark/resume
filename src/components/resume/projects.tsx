import { resume } from '../../resume'
import { ResumeSection } from './resume-section'
import { ExternalLink } from './external-link'

export function Projects() {
  return (
    <ResumeSection id="projects" title="Selected Projects">
      <div className="space-y-4">
        {resume.projects.map(({ name, description, url }) => (
          <article key={name}>
            <h3>
              {url ? (
                <ExternalLink href={url}>{name}</ExternalLink>
              ) : name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-stone-700">{description}</p>
          </article>
        ))}
      </div>
    </ResumeSection>
  )
}
