import React, { useEffect, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'

function Hero() {
  const getVideoSrc = () =>
    window.innerWidth < 760 ? smallHeroVideo : heroVideo

  const [videoSrc, setVideoSrc] = useState(getVideoSrc)

  const handleVideoSrc = useCallback(() => {
    setVideoSrc(getVideoSrc())
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrc)
    return () => {
      window.removeEventListener('resize', handleVideoSrc)
    }
  }, [handleVideoSrc])

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
      <div className="h-5/6 w-full flex-center flex-col px-4 sm:px-6 md:px-8">
        <p id="hero" className="hero-title opacity-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          iPhone 15 Pro
        </p>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mt-8 sm:mt-10 md:mt-12">
          <video
            className="pointer-events-none w-full h-auto"
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
        className="flex flex-col items-center opacity-0 translate-y-20 px-4 sm:px-6 md:px-8"
      >
        <a href="#highlights" className="btn ease-in-out text-sm sm:text-base">
          Buy
        </a>
        <p className="font-normal text-base sm:text-lg md:text-xl mt-3 sm:mt-4 text-center">
          From $199/month or $999
        </p>
      </div>
    </section>
  )
}

export default Hero
