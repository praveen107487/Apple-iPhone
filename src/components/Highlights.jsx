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
          {/* LEFT */}
          <h1
            id="title"
            className="section-heading shrink-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Get the highlights.
          </h1>

          {/* RIGHT */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="link flex items-center gap-2 text-sm sm:text-base">
              <span>Watch the film</span>
              <img
                src={watchImg}
                alt="watch"
                className="ml-2 w-3 h-3 sm:w-4 sm:h-4"
              />
            </p>

            <p className="link flex items-center gap-2 text-sm sm:text-base">
              <span>Watch the event</span>
              <img
                src={rightImg}
                alt="right"
                className="ml-2 w-3 h-3 sm:w-4 sm:h-4"
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
