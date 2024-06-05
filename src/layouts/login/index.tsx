import { Outlet } from 'react-router'
import style from './index.module.scss'
import Header from '@/blocks/login/header'
import 'react-color-palette/css'

export default function LoginLayout() {
  const handleHeaderClick = () => {
    console.log('hea')
  }

  const arr = [
    1,
    2,
    3,
  ]

  return (
    <div className={`${style.container} container`}>
      <header onClick={handleHeaderClick} id="header" className={style.header}>
        <Header />
      </header>
      <main id="body" className={style.body}>
        {
          arr.map(item => (
            <div key={item} className={`${style.theme} ${item}`}>
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
