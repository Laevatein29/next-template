import { routes } from '@generouted/react-router'
import { useParams, useSearchParams } from 'react-router-dom'
// import * as TestRouters from '@/router'

export default function Id() {
  const { id } = useParams()

  console.log(routes)
  console.log(id)
  const [query] = useSearchParams()

  const name = query.get('name')

  function te() {
    if (name)
      return '1'
    else return console.log('no Name')
  }

  te()
  console.log('te', te)

  return <div>Id</div>
}
