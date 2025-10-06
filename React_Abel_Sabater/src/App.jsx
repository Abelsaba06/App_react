import './App.css'
import './index.css'
import { TwitterFollow } from './TwitterFollow'
export function App() {
  return(
    <>
      <TwitterFollow username="abelsaba06"isFollowing="true">
        Abel Sabater Muñoz
        </TwitterFollow>
        <TwitterFollow username="midudev"isFollowing="true">
        Miguel Ángel Durán
        </TwitterFollow>
        <TwitterFollow username="elonmusk"isFollowing="true">
        Elon Musk
        </TwitterFollow>
        <TwitterFollow username="TheRock"isFollowing="true">
        Dwayne Johnson
        </TwitterFollow>
    </>
  )
}

export default App
