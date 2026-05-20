import type { Language } from '../types/cv'
import { SectionHeading } from './SectionHeading'

interface LanguagesBadgesProps {
  languages: Language[]
}

function defaultNote(level: number): string | undefined {
  if (level >= 100) return 'Native'
  if (level >= 90) return 'Professional'
  if (level >= 75) return 'Conversational'
  return undefined
}

export function LanguagesBadges({ languages }: LanguagesBadgesProps) {
  return (
    <div className="mb-9">
      <SectionHeading>LANGUAGES</SectionHeading>
      <div className="flex flex-wrap gap-1.5">
        {languages.map((language) => {
          const note = language.note ?? defaultNote(language.level)
          return (
            <span
              key={language.name}
              className="inline-block rounded-sm border border-primary/40 bg-white px-1.5 py-0.5 text-[9.5px] font-medium text-text-dark"
            >
              {language.name}
              {note && <span className="text-text-gray"> · {note}</span>}
            </span>
          )
        })}
      </div>
    </div>
  )
}
