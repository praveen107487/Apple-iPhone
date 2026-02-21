import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'

function Hero() {
  const getVideoSrc = () =>
    window.innerWidth < 760 ? smallHeroVideo : heroVideo

  const [videoSrc, setVideoSrc] = useState(getVideoSrc)

  const handleVideoSrc = () => {
    setVideoSrc(getVideoSrc())
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrc)
    return () => {
      window.removeEventListener('resize', handleVideoSrc)
    }
  }, [])

  const handleSmoothScroll = (e) => {
    e.preventDefault()
    const element = document.querySelector('#highlights')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1 })
    gsap.to('#cta', { opacity: 1, y: 0, delay: 1 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      {/* MAIN CONTENT */}
      <div className="h-full w-full flex-center flex-col px-2 sm:px-4">
        <p id="hero" className="hero-title opacity-0">
          iPhone 15 Pro
        </p>

        <div className="w-[90%] sm:w-9/12 md:w-10/12 lg:w-8/12">
          <video
            className="pointer-events-none w-full"
            autoPlay
            loop
            muted
            playsInline
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* CTA */}
      <div
        id="cta"
        className="
          absolute left-1/2 -translate-x-1/2
          bottom-24
          flex flex-col items-center
          opacity-0 translate-y-6
        "
      >
        <a href="#highlights" className="btn ease-in-out" onClick={handleSmoothScroll}>
          Buy
        </a >
        <p className="font-normal text-xs sm:text-sm md:text-base lg:text-xl px-2 text-center">
          From $199/month or $999
        </p>
      </div>
    </section>
  )
}

export default Hero
