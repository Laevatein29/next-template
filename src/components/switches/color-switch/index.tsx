import { useContext, useState } from 'react'
import 'react-color-palette/css'
import type { IColor } from 'react-color-palette'
import { ColorPicker, useColor } from 'react-color-palette'
import style from './index.module.scss'
import { ThemeContext } from '@/contexts/theme-context'

export default function ColorSwitcher() {
  const [visible, setVisible] = useState(false)

  const { theme, setTheme } = useContext(ThemeContext)

  console.log('theme', theme)

  const handleClick = () => {
    setVisible(visible => !visible)
  }

  const [color, setColor] = useColor('rbg(86 30 202)')

  const handleChange = (e: IColor) => {
    console.log('e', e)
    setTheme(e.hex)
    setColor(e)
  }

  console.log('visible', visible)

  return (
    <div className={style.container}>
      <button
        type="button"
        onClick={handleClick}
      >
        switcher

      </button>
      {
        visible
          ? (<ColorPicker hideInput={['rgb', 'hsv']} color={color} onChange={handleChange} />)
          : (<div>123</div>)
      }
    </div>
  )
}
