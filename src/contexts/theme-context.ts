import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

export const themeColors = {
  dark: 'black',
  light: 'white',
} as const

export type GenerateEnumType<T> = T[keyof T]

export type ThemeColors = GenerateEnumType<typeof themeColors >

export interface ThemeContextType {
  theme: ThemeColors
  setTheme: Dispatch<SetStateAction<ThemeColors>>
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'white',
  setTheme: () => { },
})
