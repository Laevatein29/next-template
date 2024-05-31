import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Redirects } from '@/config/auth'
import { ThemeContext } from '@/contexts/theme-context'

export default function App() {
  // const isBrowserDefaultDark = () => window.matchMedia('(prefer-color-scheme: dark)').matches

  console.log('document.documentElement.style', document.documentElement.style)
  const [theme, setTheme] = useState('light')

  console.log('theme', theme)

  const dynamicStyle: any = {
    '--color-pr': ['light', 'dark'].includes(theme) ? 'black' : 'pink',
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        data-theme={theme}
        style={dynamicStyle}
      >
        <Redirects>
          <Outlet />
        </Redirects>

      </div>
    </ThemeContext.Provider>
  )
}
