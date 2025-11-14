import {
  Calendar,
  Code2,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Star,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

const iconMap = {
  mapPin: MapPin,
  phone: Phone,
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  calendar: Calendar,
  globe: Globe,
  star: Star,
  code2: Code2,
} satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>

export type IconName = keyof typeof iconMap

interface IconProps {
  name: IconName
  className?: string
}

export function Icon({ name, className }: IconProps) {
  const Component = iconMap[name]
  if (!Component) return null
  return <Component className={className} aria-hidden="true" />
}
