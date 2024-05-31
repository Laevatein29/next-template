import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Redirects } from '@/config/auth'
import { ThemeContext } from '@/contexts/theme-context'

export default function App() {
  // const isBrowserDefaultDark = () => window.matchMedia('(prefer-color-scheme: dark)').matches
  const [theme, setTheme] = useState('light')

  console.log('theme', theme)
  const scheme: any = {
    dark: 'black',
    light: 'white',
  }

  const dynamicStyle: any = {
    '--color-pr': ['light', 'dark'].includes(theme) ? scheme[theme] : theme,
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={dynamicStyle}
      >
        <Redirects>
          <Outlet />
        </Redirects>
      </div>
    </ThemeContext.Provider>
  )
}
