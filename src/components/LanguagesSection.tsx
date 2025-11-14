import type { Language } from '../types/cv'
import { Markdown } from './Markdown'
import { SectionHeading } from './SectionHeading'

interface LanguagesSectionProps {
  languages: Language[]
}

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  return (
    <div className="mb-9">
      <SectionHeading>LANGUAGES</SectionHeading>
      {languages.map((language) => (
        <div className="mb-4" key={language.name}>
          <div className="mb-1 text-[10.5px] font-normal text-black">
            <Markdown
              content={language.name}
              components={{
                p: (props) => <span {...props} />,
              }}
            />
          </div>
          <div className="h-[5px] w-full overflow-hidden bg-[#e0e0e0]">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              style={{ width: `${language.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}
