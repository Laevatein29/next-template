import { Outlet } from 'react-router'
import style from './index.module.scss'
import Header from '@/blocks/login/header'
import 'react-color-palette/css'

export default function LoginLayout() {
  const arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ]

  return (
    <div
      className={style.container}
    >

      <Header />

      <main
        id="body"
        className={style.body}
      >
        {
          arr.map(item => (
            <div
              key={item}
              className={`${style[`theme--${item}`]}`}
            >
              color
              {item}
            </div>
          ))
        }

        <Outlet />
      </main>
    </div>
  )
}
