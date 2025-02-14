import { useState } from 'react'
import './styles/reset/reset.scss'

import Home from './pages/Home/Home'
import Benefits from './components/Benefits/Benefits'
import Evolution from './components/Evolution/Evolution'
import FAQ from './components/FAQ/FAQ'
import Plans from './components/Plans/Plans'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Benefits />
      <Evolution />
      <FAQ />
      <Plans />
      <Footer />
    </>
  )
}

export default App
