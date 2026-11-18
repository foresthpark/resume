import { ResumeHeader } from './components/resume/resume-header'
import { Experience } from './components/resume/experience'
import { Projects } from './components/resume/projects'
import { Talks } from './components/resume/talks'
import { PriorCareer } from './components/resume/prior-career'
import { Skills } from './components/resume/skills'
import { Education } from './components/resume/education'

export default function App() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 [overflow-wrap:anywhere] sm:px-10 sm:py-16 lg:px-14">
      <a href="#resume-content" className="sr-only focus:not-sr-only focus:mb-4 focus:inline-flex focus:min-h-6 focus:items-center">
        Skip to résumé content
      </a>
      <ResumeHeader />

      <main id="resume-content" tabIndex={-1} className="grid grid-cols-1 gap-10 pt-9 lg:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)] lg:gap-12">
        <div className="space-y-10">
          <Experience />
          <Projects />
          <Talks />
          <PriorCareer />
        </div>

        <aside aria-label="Skills and education" className="space-y-9 border-t border-stone-300 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <Skills />
          <Education />
        </aside>
      </main>
    </div>
  )
}
