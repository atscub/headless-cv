import type { EducationItem } from '../types/cv'
import { Markdown } from './Markdown'
import { SectionHeading } from './SectionHeading'

interface EducationSectionProps {
  items: EducationItem[]
}

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <div className="mb-4">
      <SectionHeading>EDUCATION</SectionHeading>
      {items.map((item) => (
        <div
          className="mb-[18px] break-inside-avoid"
          key={`${item.degree}-${item.institution}`}
        >
          <div className="mb-1 flex items-baseline justify-between gap-4">
            <div className="text-[11.5px] font-bold text-black">
              <Markdown
                content={item.degree}
                components={{
                  p: (props) => <span {...props} />,
                }}
              />
            </div>
            <div className="text-[9.5px] text-text-gray">
              <Markdown
                content={item.location}
                components={{
                  p: (props) => <span {...props} />,
                }}
              />
            </div>
          </div>
          <div className="mb-0.5 text-[10.5px] text-text-medium">
            <Markdown
              content={item.institution}
              components={{
                p: (props) => <span {...props} />,
              }}
            />
          </div>
          <div className="text-[9.5px] italic text-text-gray">
            <Markdown
              content={item.period}
              components={{
                p: (props) => <span {...props} />,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
