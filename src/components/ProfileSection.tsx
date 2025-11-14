import { Markdown } from './Markdown'
import { SectionHeading } from './SectionHeading'

interface ProfileSectionProps {
  content: string
}

export function ProfileSection({ content }: ProfileSectionProps) {
  return (
    <div className="mb-4">
      <SectionHeading>PROFILE</SectionHeading>
      <Markdown content={content} />
    </div>
  )
}
