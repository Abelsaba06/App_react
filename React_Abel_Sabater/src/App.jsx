import './App.css'
import './index.css'
import { TwitterFollow } from './TwitterFollow'
let usuarios=[
  {
    username: "abelsaba06",
    name: "Abel Sabater Muñoz",
    isFollowing: false
  },
  {
    username: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true
  },
  {
    username: "elonmusk",
    name: "Elon Musk",
    isFollowing: false
  },
  {
    username: "TheRock",
    name: "Dwayne Johnson",
    isFollowing: false
  }
]
export function App() {
  return(
    <>
      {
        usuarios.map(user => {
          let {username,name,isFollowing}=user
          return(
            <TwitterFollow
            username={username}
            initialIsfollowing={isFollowing}
            >
              {name}
            </TwitterFollow>
          )
        })
      }
    </>
  )
}

export default App
