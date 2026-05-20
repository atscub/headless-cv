import type { EducationItem } from '../types/cv'
import { Icon } from './Icon'
import { Markdown } from './Markdown'
import { SectionHeading } from './SectionHeading'

interface EducationSectionProps {
  items: EducationItem[]
}

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <div className="mb-4">
      <SectionHeading>EDUCATION</SectionHeading>
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
      {items.map((item) => (
        <div
          className="break-inside-avoid"
          key={`${item.degree}-${item.institution}`}
        >
          <div className="mb-0.5 text-[11.5px] font-bold text-black">
            <Markdown
              content={item.degree}
              components={{
                p: (props) => <span {...props} />,
              }}
            />
          </div>
          <div className="mb-0.5 flex items-center gap-1 text-[9.5px] text-text-gray">
            <Icon name="MapPin" className="h-[10px] w-[10px] stroke-primary" />
            <Markdown
              content={item.location}
              components={{
                p: (props) => <span {...props} />,
              }}
            />
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
    </div>
  )
}
