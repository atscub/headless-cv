import { icons } from 'lucide-react'

interface IconProps {
  name: string
  className?: string
}

export function Icon({ name, className }: IconProps) {
  const Component = icons[name as keyof typeof icons]
  if (!Component) return null
  return <Component className={className} aria-hidden="true" />
}
