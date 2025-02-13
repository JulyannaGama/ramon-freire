import { useState } from 'react'
import './styles/reset/reset.scss'

import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
