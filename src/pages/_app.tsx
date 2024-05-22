import { Outlet } from 'react-router-dom'
import { Redirects } from '@/config/auth'

export default function App() {
  return (
    <section>
      <main>
        <Redirects>
          <Outlet />
        </Redirects>
      </main>
    </section>
  )
}
