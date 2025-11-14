import type { OpenSourceItem } from '../types/cv'
import { Icon } from './Icon'
import { Markdown } from './Markdown'
import { SectionHeading } from './SectionHeading'

interface OpenSourceSectionProps {
  items: OpenSourceItem[]
}

export function OpenSourceSection({ items }: OpenSourceSectionProps) {
  return (
    <div className="mb-10">
      <SectionHeading>OPEN SOURCE</SectionHeading>
      {items.map((item) => (
        <div className="mb-[18px] break-inside-avoid" key={item.name}>
          <div className="mb-1 flex items-baseline justify-between gap-3">
            <div className="flex items-center gap-1 text-[11.5px] font-bold text-primary">
              <Icon name="code2" className="h-[11px] w-[11px] stroke-primary" />
              <Markdown
                content={item.name}
                components={{
                  p: (props) => <span {...props} />,
                }}
              />
            </div>
            <div className="flex items-center gap-1 text-[9.5px] text-text-gray">
              <Icon name="star" className="h-[11px] w-[11px] stroke-primary" />
              <Markdown
                content={item.stars}
                components={{
                  p: (props) => <span {...props} />,
                }}
              />
            </div>
          </div>
          <div className="mb-2 flex items-center gap-1 text-[9.5px] text-text-gray">
            <Icon name="github" className="h-[11px] w-[11px] stroke-primary" />
            <Markdown
              content={item.meta}
              components={{
                p: (props) => <span {...props} />,
              }}
            />
          </div>
          <div className="text-[10px] leading-[1.5] text-text-medium">
            <Markdown content={item.description} />
          </div>
        </div>
      ))}
    </div>
  )
}
