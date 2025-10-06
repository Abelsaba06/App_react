import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './estil.css'
import { TwitterFollow } from './TwitterFollow'

export function App() {
  return(
    <>
      <TwitterFollow key="1" username="abelsaba06" name="Abel Sabater Muñoz" isFollowing="true"/>
      <TwitterFollow key="2" username="midudev" name="Miguel Ángel Durán" isFollowing="false"/>
      <TwitterFollow key="3" username="elonmusk" name="Elon Musk" isFollowing="true"/>
      <TwitterFollow key="4" username="TheRock" name="Dwayne Johnson" isFollowing="false"/>
    </>
  )
}

export default App