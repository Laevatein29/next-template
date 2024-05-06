import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { BasicButton } from './components/buttons/basic-button'

function App() {
  const [count, setCount] = useState(0)

  const [name, setName] = useState('')

  const li = [
    1,
    2,
    3,
    4,
  ]

  console.log(li)

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(() => e.target.value)
  }

  useEffect(() => {
    console.log(name)
  }, [name])

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <>
      <BasicButton></BasicButton>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <input value={name} onChange={e => changeName(e)} className="customed-input" type="text" />
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is
          {' '}
          {count}
        </button>
        <p>
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
