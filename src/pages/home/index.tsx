import * as config from '../../routers/index'

function Home() {
  console.log(config.default())
  // const newTe = (test.length / 2).toString(16).PadLeft(0, '123')
  return (
    <div>Home</div>
  )
}

export default Home
