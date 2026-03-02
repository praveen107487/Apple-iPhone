import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HowItWorks = () => {
  const videoRef = useRef()

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 1.5,
      ease: 'power2.out'
    })

    gsap.fromTo(
      '.g_fadeIn',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.hiw-text-container',
          start: 'top 85%'
        }
      }
    )
  }, [])

  return (
    <section className="common-padding pt-40 md:pt-56 pb-40 md:pb-52 mb-32">
      <div className="screen-max-width px-6">

        {/* Main container */}
        <div className="flex flex-col gap-24 md:gap-32">

          {/* CHIP */}
          <div id="chip" className="flex-center w-full mt-20">
            <img src={chipImg} alt="chip" width={180} height={180} />
          </div>

          {/* TITLE */}
          <div className="flex flex-col items-center text-center space-y-8">
            <h2 className="hiw-title">
              A17 Pro chip.
              <br /> A monster win for gaming.
            </h2>
            <p className="hiw-subtitle text-gray-400 max-w-2xl">
              It's here. The biggest redesign in the history of Apple GPUs.
            </p>
          </div>

          {/* VIDEO SECTION */}
          <div>
            <div className="relative flex-center">
              <div className="overflow-hidden">
                <img 
                  src={frameImg}
                  alt="frame"
                  className="bg-transparent relative z-10"
                />
              </div>
              <div className="hiw-video absolute">
                <video
                  className="pointer-events-none"
                  playsInline
                  preload="metadata"
                  muted
                  autoPlay
                  ref={videoRef}
                >
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
            </div>
            <p className="text-gray-400 font-semibold text-center mt-8">
              Honkai: Star Rail
            </p>
          </div>

          {/* TEXT SECTION */}
          <div className="hiw-text-container flex flex-col md:flex-row gap-20">
            <div className="flex flex-1 justify-center flex-col space-y-8">
              <p className="hiw-text g_fadeIn text-gray-300 leading-relaxed">
                A17 Pro is an entirely new class of iPhone chip that delivers our
                <span className="text-white font-semibold">
                  {' '}best graphic performance by far
                </span>.
              </p>
              <p className="hiw-text g_fadeIn text-gray-300 leading-relaxed">
                Mobile
                <span className="text-white font-semibold">
                  {' '}games will look and feel so immersive
                </span>,
                with incredibly detailed environments and characters.
              </p>
            </div>
            <div className="flex-1 flex justify-center flex-col g_fadeIn space-y-4">
              <p className="hiw-text text-gray-400">New</p>
              <p className="hiw-bigtext text-white">Pro-class GPU</p>
              <p className="hiw-text text-gray-400">with 6 cores</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default HowItWorks