import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Navbar from './components/Navbar'
import Model from './components/Model'
function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    document.body.style.paddingTop = '45px'
    return () => {
      document.documentElement.style.scrollBehavior = ''
      document.body.style.paddingTop = ''
    }
  }, [])
  return (
    <div>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </div>
  )
}

export default App
