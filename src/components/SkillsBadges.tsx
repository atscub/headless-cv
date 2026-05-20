import type { Badge } from '../types/cv'
import { SectionHeading } from './SectionHeading'

interface SkillsBadgesProps {
  badges: Badge[]
}

export function SkillsBadges({ badges }: SkillsBadgesProps) {
  return (
    <div className="mb-10">
      <SectionHeading>SKILLS</SectionHeading>
      <div className="flex flex-wrap gap-1.5">
        {badges.map((badge) => (
          <span
            key={badge.label}
            className="inline-block rounded-sm border border-primary/40 bg-white px-1.5 py-0.5 text-[9.5px] font-medium text-text-dark"
          >
            {badge.label}
          </span>
        ))}
      </div>
    </div>
  )
}
