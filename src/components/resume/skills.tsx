import { resume } from '../../resume'
import { ResumeSection } from './resume-section'

export function Skills() {
  return (
    <ResumeSection id="skills" title="Skills">
      <dl className="space-y-3 text-sm leading-relaxed">
        {resume.skills.map(({ label, items }) => (
          <div key={label}>
            <dt className="font-semibold">{label}</dt>
            <dd className="text-stone-700">{items}</dd>
          </div>
        ))}
      </dl>
    </ResumeSection>
  )
}
