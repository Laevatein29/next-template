import { Outlet } from 'react-router'
import { useContext } from 'react'
import { ColorPicker, useColor } from 'react-color-palette'
import style from './index.module.scss'
import Header from '@/blocks/login/header'
import 'react-color-palette/css'
import { ThemeContext } from '@/contexts/theme-context'

export default function LoginLayout() {
  const handleHeaderClick = () => {
    console.log('hea')
  }

  const { theme, setTheme } = useContext(ThemeContext)

  const [color, setColor] = useColor('rbg(86 30 202)')

  const handleTheme = () => {
    const isCurrentDark = theme === 'dark'

    setTheme(isCurrentDark ? 'light' : 'dark')
    console.log('theme', theme)
  }

  const handleCus = (e: any) => {
    console.log('color', color)
    setColor(e)
    setTheme(e.hex)
  }

  return (
    <div className={`${style.container} container`}>
      <header onClick={handleHeaderClick} id="header" className={style.header}>
        <Header />
      </header>
      <button onClick={handleTheme}>theme</button>
      <ColorPicker hideInput={['rgb', 'hsv']} color={color} onChange={handleCus} />
      <main id="body" className={style.body}>
        {
          [
            1,
            2,
            3,
          ].map((item, _index) => (
            <div className={`${style.theme} ${item}`}>
              item
              {item}
            </div>
          ))
        }
        <Outlet />
      </main>
    </div>
  )
}
