import { resume } from '../../resume'
import { ResumeSection } from './resume-section'

export function Talks() {
  return (
    <ResumeSection id="talks" title="Talks">
      <h3>{resume.talk.title}</h3>
      <p className="mt-1 text-sm font-medium text-teal-800">{resume.talk.organizer}</p>
      <p className="mt-1 text-sm leading-relaxed text-stone-700">{resume.talk.description}</p>
    </ResumeSection>
  )
}
