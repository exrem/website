const Dictionary = {
  'az': {
    'name': 'Əkrəm Cəfər',
    'title': {
      'home': 'Ana səhifə'
    }
  }
}

type Locale = keyof typeof Dictionary
type Dictionary = typeof Dictionary[Locale]

function getDataFromDotNotation(obj: any, query: string): any {
  const keys = query.split('.')
  let result = obj

  for (const key of keys) {
    result = result[key]
  }

  return result
}

export default function Translate(locale: Locale, query: string): Dictionary {
  return getDataFromDotNotation(Dictionary[locale], query)
}