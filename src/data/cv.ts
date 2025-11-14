import yaml from 'js-yaml'
import type { CVData } from '../types/cv'
import raw from '../../content/cv.yaml?raw'

export const cvData = yaml.load(raw) as CVData
