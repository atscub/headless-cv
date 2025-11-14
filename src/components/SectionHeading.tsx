import type { PropsWithChildren } from 'react'

const baseClass =
  'relative mb-[15px] pb-[6px] text-[12px] font-bold uppercase tracking-[0.5px] after:absolute after:left-0 after:bottom-0 after:h-[2.5px] after:w-[50px] after:bg-gradient-to-r after:from-primary after:to-secondary after:content-[""]'

interface SectionHeadingProps extends PropsWithChildren {
  className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  const classes = [baseClass, className].filter(Boolean).join(' ')
  return <div className={classes}>{children}</div>
}
