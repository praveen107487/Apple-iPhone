import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from 'gsap';

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })

    animateWithGsap('#features_title', { y: 0, opacity: 1 })

    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );

    animateWithGsap(
      '.g_text',
      { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 }
    )
  }, []);

  return (
    <section
      className="
        relative w-full bg-zinc overflow-hidden
        py-20 sm:py-24 md:py-32 lg:py-40
      "
    >
      <div className="screen-max-width px-4 sm:px-6 md:px-8 lg:px-10">

        <div
          className="
            flex flex-col lg:flex-row items-start lg:items-center justify-between
            min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]
            mb-8 sm:mb-12 md:mb-16
            gap-6 lg:gap-16
          "
        >
          <h1
            id="features_title"
            className="section-heading shrink-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Explore the full story.
          </h1>
        </div>

        {/* Decent spacing added here */}
        <div className="flex flex-col justify-center items-center overflow-hidden gap-12 sm:gap-16 md:gap-10">

          {/* Headline Section */}
          <div className="mt-16 sm:mt-20 md:mt-24 pl-12 sm:pl-16 md:pl-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
              iPhone.
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
              Forged in titanium.
            </h2>
          </div>

          {/* Video Section */}
          <div className="flex-center flex-col sm:px-10 w-full">

            <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">

              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[40vh] sm:h-[45vh] md:h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>

                <div className="overflow-hidden flex-1 h-[40vh] sm:h-[45vh] md:h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container">

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium design
                    </span>,
                    using the same alloy that spacecrafts use for missions to Mars.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of any metal,
                    making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    {" "}You'll notice the difference the moment you pick one up.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Features