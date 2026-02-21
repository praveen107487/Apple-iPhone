import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Navbar from './components/Navbar'

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Add padding to body to account for fixed navbar
    document.body.style.paddingTop = '60px'
    
    return () => {
      document.documentElement.style.scrollBehavior = ''
      document.body.style.paddingTop = ''
    }
  }, [])

   return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
    </>
  )
}

export default App
