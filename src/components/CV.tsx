import type { CVData } from '../types/cv'
import { DetailsSection } from './DetailsSection'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperienceSection'
import { Header } from './Header'
import { LanguagesSection } from './LanguagesSection'
import { OpenSourceSection } from './OpenSourceSection'
import { ProfileSection } from './ProfileSection'
import { SectionDivider } from './SectionDivider'
import { SkillsSection } from './SkillsSection'

interface CVProps {
  data: CVData
}

export function CV({ data }: CVProps) {
  return (
    <div className="mx-auto min-h-[1100px] max-w-[850px] bg-white shadow-cv print:max-w-full print:shadow-none">
      <Header data={data.header} />
      <div className="flex">
        <div className="min-h-[calc(2*297mm-140px)] w-[260px] shrink-0 bg-background px-[35px] pb-10 pl-[50px] pt-10">
          <DetailsSection details={data.contact.details} />
          <SkillsSection skills={data.skills} />
          <LanguagesSection languages={data.languages} />
        </div>
        <div className="flex-1 bg-white px-[50px] py-10">
          <ProfileSection content={data.profile} />
          <SectionDivider />
          <ExperienceSection jobs={data.experience} />
          <SectionDivider />
          <OpenSourceSection items={data.openSource} />
          <SectionDivider />
          <EducationSection items={data.education} />
        </div>
      </div>
    </div>
  )
}
