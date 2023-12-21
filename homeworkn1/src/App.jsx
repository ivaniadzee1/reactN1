import { useState } from 'react'
import './App.css'
import Whitebx from './comp/whitebx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Whitebx/>
    </>
  )
}

export default App
