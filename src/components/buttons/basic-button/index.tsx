import { useState } from 'react'
import style from './index.module.scss'

export function BasicButton() {
  const [state, setState] = useState(0)

  return (
    <div className={style.container}>
      {state}
      <button type="button" onClick={() => setState(state => state + 1)}>test</button>
    </div>
  )
}
