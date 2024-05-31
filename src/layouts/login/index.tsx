import { Outlet } from 'react-router'
import { useContext } from 'react'
import style from './index.module.scss'
import Header from '@/blocks/login/header'
import { ThemeContext } from '@/contexts/theme-context'

export default function LoginLayout() {
  const handleHeaderClick = () => {
    console.log('hea')
  }

  const { theme, setTheme } = useContext(ThemeContext)

  console.log('theme', theme)

  const handleCus = () => {
    setTheme('cus')
    console.log('theme', theme)
  }

  const handleTheme = () => {
    const isCurrentDark = theme === 'dark'

    setTheme(isCurrentDark ? 'light' : 'dark')
    console.log('theme', theme)
  }

  return (
    <div className={`${style.container} container`}>
      {theme}
      <header onClick={handleHeaderClick} id="header" className={style.header}>
        <Header />
      </header>
      <button onClick={handleTheme}>theme</button>
      <button onClick={handleCus}>theme</button>
      <main id="body" className={style.body}>
        <div className={style.theme}>
          <div className={`name-${theme}`}>123</div>
          <div className={`test-${theme}`}>456</div>
        </div>
        <Outlet />
      </main>
    </div>
  )
}
