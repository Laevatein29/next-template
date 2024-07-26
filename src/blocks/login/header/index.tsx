import style from './index.module.scss'
import ColorSwitcher from '@/components/switches/color-switch'

export default function Header() {
  return (
    <div
      className={style.container}
    >
      <ColorSwitcher />
      Header
    </div>
  )
}
