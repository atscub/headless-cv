import { Fragment } from 'react'
import type { DetailItem } from '../types/cv'
import { Icon } from './Icon'
import { Markdown } from './Markdown'
import { SectionHeading } from './SectionHeading'

interface DetailsSectionProps {
  details: DetailItem[]
}

export function DetailsSection({ details }: DetailsSectionProps) {
  return (
    <div className="mb-10">
      <SectionHeading>DETAILS</SectionHeading>
      {details.map((detail) => (
        <div className="border-b border-[#ddd] py-2" key={detail.label}>
          <div className="mb-1.5 flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.5px]">
            <Icon
              name={detail.icon}
              className="h-3 w-3 stroke-primary text-primary"
            />
            {detail.label}
          </div>
          <div className="text-[10.5px] leading-[1.5] text-text-medium">
            {detail.lines.map((line, index) => (
              <Fragment key={`${detail.label}-${index}`}>
                <Markdown
                  content={line}
                  components={{
                    p: (paragraphProps) => <span {...paragraphProps} />,
                  }}
                />
                {index < detail.lines.length - 1 && <br />}
              </Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
