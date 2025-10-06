import './App.css'
import './index.css'
import { TwitterFollow } from './TwitterFollow'
export function App() {
  return(
    <>
      <TwitterFollow username="abelsaba06" name="Abel Sabater Muñoz" isFollowing="true"/>
      <TwitterFollow username="midudev" name="Miguel Ángel Durán" isFollowing="false"/>
      <TwitterFollow username="elonmusk" name="Elon Musk" isFollowing="true"/>
      <TwitterFollow username="TheRock" name="Dwayne Johnson" isFollowing="false"/>
    </>
  )
}

export default App
