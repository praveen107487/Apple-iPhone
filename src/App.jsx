import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Navbar from './components/Navbar'
import Model from './components/Model'
import Features from './components/Features'
import HowitWorks from './components/HowitWorks'
import Footer from './components/Footer'

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
      <Features />
      <div className="h-20"></div>
      <HowitWorks />
      <div className="h-20"></div>
      <Footer />
    </div>
  )
}

export default App
