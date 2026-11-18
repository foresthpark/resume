import { resume } from '../../resume'
import { ResumeSection } from './resume-section'

export function Education() {
  return (
    <ResumeSection id="education" title="Education">
      <ul role="list" className="space-y-4 text-sm leading-relaxed">
        {resume.education.map(({ degree, school, dates }) => (
          <li key={degree}>
            <p className="font-semibold">{degree}</p>
            <p className="text-stone-700">{school}</p>
            <p className="text-stone-600">{dates}</p>
          </li>
        ))}
      </ul>
    </ResumeSection>
  )
}
