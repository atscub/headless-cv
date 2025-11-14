import type { JobExperience } from '../types/cv'
import { Icon } from './Icon'
import { Markdown } from './Markdown'
import { SectionHeading } from './SectionHeading'

interface ExperienceSectionProps {
  jobs: JobExperience[]
}

export function ExperienceSection({ jobs }: ExperienceSectionProps) {
  return (
    <div className="mb-10">
      <SectionHeading>EMPLOYMENT HISTORY</SectionHeading>
      {jobs.map((job) => {
        const classNames = [
          'mb-[22px] break-inside-avoid',
          job.pageBreakAfter ? 'page-break-after' : '',
          job.extraSpacing ? 'print:pt-16' : '',
        ]

        return (
          <div key={job.title} className={classNames.filter(Boolean).join(' ')}>
            <div className="mb-0.5 flex items-baseline justify-between gap-4">
              <div className="flex items-center gap-2 text-[11.5px] font-bold text-text-dark">
                <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
                {job.title}
              </div>
              <div className="flex items-center gap-1 text-[9.5px] text-text-gray">
                <Icon
                  name={job.locationIcon ?? 'mapPin'}
                  className="h-[11px] w-[11px] stroke-primary"
                />
                {job.location}
              </div>
            </div>
            <div className="mb-2 flex items-center gap-1 text-[9.5px] italic text-text-gray">
              <Icon name="calendar" className="h-[11px] w-[11px] stroke-primary" />
              {job.period}
            </div>
            <div className="text-[10px] leading-[1.5] text-text-medium">
              <Markdown content={job.description} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
