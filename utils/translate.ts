const Dictionary = {
  'en': {
    'title': {
      'Home': 'Home',
      'name': 'Akram Jafar'
    }
  }
}

type Dictionary = typeof Dictionary[Locale]

function getDataFromDotNotation(obj: any, query: string): any {
  const keys = query.split('.')
  let result = obj
  
  for (const key of keys) {
    result = result[key]
  }
  
  return result
}

export default (locale: Locale, query: string): Dictionary => getDataFromDotNotation(Dictionary[locale], query)
export type Locale = keyof typeof Dictionary