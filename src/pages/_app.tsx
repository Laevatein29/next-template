import { Outlet } from 'react-router-dom'
import { Redirects } from '@/config/auth'
import type { ThemeColors } from '@/contexts/theme-context'
import { ThemeContext } from '@/contexts/theme-context'

export default function App() {
  const isBrowserDefaultDark = () => window.matchMedia('(prefer-color-scheme: dark)').matches

  const [theme, setTheme] = useState<ThemeColors>('white')

  useEffect(() => {
    setTheme(isBrowserDefaultDark() ? 'black' : 'white')
  }, [])

  const scheme: Record<string, string> = {
    dark: 'black',
    light: 'white',
  }

  const dynamicStyle: any = {
    '--color-pr': scheme[theme] || theme,
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
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
