import { useRef, useState } from 'react'
import style from './index.module.scss'

interface BasicButtonProps {
  onClick?: () => void
  label: string
  visible?: boolean
}

export default function BasicButton(props: BasicButtonProps) {
  const [state, setState] = useState(0)

  const testRef = useRef(1)

  const handleClick = () => {
    props.onClick?.()
    setState(state => state + 1)
    testRef.current = state
  }

  return (
    <div className={style.container}>
      {state}

      <button type="button" onClick={handleClick}>test</button>
      {testRef.current}
      <div>{props.label}</div>
    </div>
  )
}
