import { resume } from '../../resume'
import { ResumeSection } from './resume-section'

export function PriorCareer() {
  return (
    <ResumeSection id="prior-career" title="Prior Career">
      <p className="text-sm leading-relaxed text-stone-700">{resume.priorCareer}</p>
    </ResumeSection>
  )
}
