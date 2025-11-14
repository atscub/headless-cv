import type { Skill } from '../types/cv'
import { Markdown } from './Markdown'
import { SectionHeading } from './SectionHeading'

interface SkillsSectionProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="mb-10">
      <SectionHeading>SKILLS</SectionHeading>
      {skills.map((skill) => (
        <div className="mb-4" key={skill.name}>
          <div className="mb-1 text-[10.5px] font-normal text-black">
            <Markdown
              content={skill.name}
              components={{
                p: (props) => <span {...props} />,
              }}
            />
          </div>
          <div className="h-[5px] w-full overflow-hidden bg-[#e0e0e0]">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}
