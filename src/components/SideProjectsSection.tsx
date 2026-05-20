import type { SideProject } from '../types/cv'
import { Icon } from './Icon'
import { Markdown } from './Markdown'
import { SectionHeading } from './SectionHeading'

interface SideProjectsSectionProps {
  items: SideProject[]
}

export function SideProjectsSection({ items }: SideProjectsSectionProps) {
  return (
    <div className="mb-10">
      <SectionHeading>SIDE PROJECTS</SectionHeading>
      {items.map((item) => (
        <div className="mb-[18px] break-inside-avoid" key={item.name}>
          <div className="mb-1 flex items-baseline gap-2">
            <Icon name="FlaskConical" className="h-[11px] w-[11px] stroke-primary" />
            <div className="text-[11.5px] font-bold text-primary">{item.name}</div>
          </div>
          {item.meta && (
            <div className="mb-2 flex items-center gap-1 text-[9.5px] text-text-gray">
              <Icon name="Github" className="h-[11px] w-[11px] stroke-primary" />
              <Markdown
                content={item.meta}
                components={{
                  p: (props) => <span {...props} />,
                }}
              />
            </div>
          )}
          <div className="text-[10px] leading-[1.5] text-text-medium">
            <Markdown content={item.description} />
          </div>
        </div>
      ))}
    </div>
  )
}
