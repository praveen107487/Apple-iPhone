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

  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 1,
    })
    gsap.to('#cta', {
      opacity: 1,
      translateY: 0,
      delay: 1,
    })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title opacity-0">
          iPhone 15 Pro
        </p>

        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
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

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn ease-in-out" >
        Buy
        </a>
        <p className="font-normal text-xl">
          From $199/month or $999
        </p>
      </div>
    </section>
  )
}

export default Hero