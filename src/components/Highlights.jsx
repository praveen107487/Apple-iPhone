import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 })
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  }, [])

  return (
    <section
      id="highlights"
      className="
        relative w-screen bg-zinc overflow-hidden
        pt-20 sm:pt-32 md:pt-40 lg:pt-48 
        pb-12 sm:pb-16 md:pb-24 lg:pb-32
      "
    >
      <div className="screen-max-width px-3 sm:px-4 md:px-6 lg:px-8">
        <div
          className="
            flex items-center justify-between
            min-h-[120px] sm:min-h-[150px] md:min-h-[180px]
            mb-6 sm:mb-8 md:mb-12 lg:mb-16
            gap-4 sm:gap-6 md:gap-8 w-full
          "
        >
          {/* TITLE */}
          <h1
            id="title"
            className="section-heading text-left shrink-0"
          >
            Get the highlights.
          </h1>

          {/* LINKS */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 lg:gap-10">
            <p className="link flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
              <span>Watch film</span>
              <img
                src={watchImg}
                alt="watch"
                className="ml-1 sm:ml-2.5 w-3 h-3 sm:w-4 sm:h-4"
              />
            </p>

            <p className="link flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
              <span>Watch event</span>
              <img
                src={rightImg}
                alt="right"
                className="ml-1 sm:ml-3 w-3 h-3 sm:w-4 sm:h-4"
              />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights