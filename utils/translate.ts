import age from './age'
import { locale } from 'src/locale'

function getDataFromDotNotation(object: any, query: string): any {
  const keys = query.split('.')
  let result = object
  
  for (const key of keys) {
    result = result[key]
  }
  
  return result
}

export const Dictionary = {
  'en': {
    'home': {
      'im': `I\'m a ${age} years old student from Baku, 🇦🇿 Azerbaijan.`
    },
    'title': {
      'about': 'About me',
      'blog': 'Blog',
      'contact': 'Contact me',
      'home': 'Home',
      'name': 'Akram Jafar',
      'projects': 'Projects',
      '404': 'Page not found',
    },
    '404': {
      'home': 'Let\'s take you back home.',
      'lost': 'It looks like you are lost.'
    }
  }
} as const
export type Locale = keyof typeof Dictionary
export type Dictionary = typeof Dictionary[Locale]
export default (query: string): Dictionary => getDataFromDotNotation(Dictionary[locale.value ?? 'en'], query)