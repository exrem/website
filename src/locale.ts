import { atom, type WritableAtom } from 'nanostores'
import type { Locale } from '@utils/translate'

export const locale = atom('en') as WritableAtom<Locale>