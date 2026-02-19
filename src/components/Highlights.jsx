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
        pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 md:pb-32
      "
    >
      <div className="screen-max-width px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex flex-col sm:flex-row items-start sm:items-center justify-between
            min-h-[180px]
            mb-8 sm:mb-12 lg:mb-16
            gap-6 sm:gap-8 lg:gap-12 w-full
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-10">
            <p className="link flex items-center gap-2">
              Watch film
              <img
                src={watchImg}
                alt="watch"
                className="ml-2.5 w-4 h-4"
              />
            </p>

            <p className="link flex items-center gap-2">
              Watch event
              <img
                src={rightImg}
                alt="right"
                className="ml-3 w-4 h-4"
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