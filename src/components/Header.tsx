import type { HeaderData } from '../types/cv'

interface HeaderProps {
  data: HeaderData
}

export function Header({ data }: HeaderProps) {
  return (
    <div className="border-b border-border-light bg-white px-[50px] pb-[30px] pt-[40px]">
      <div>
        <div className="mb-3 text-[38px] font-bold uppercase leading-[1.1] text-primary">
          {data.firstName} {data.lastName}
        </div>
        <div className="text-[12px] font-normal text-text-gray">{data.title}</div>
      </div>
    </div>
  )
}
