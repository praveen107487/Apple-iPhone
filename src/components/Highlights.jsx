import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 })
    gsap.to(".link", { opacity: 1, y: 0, duration: 0.2, stagger: 0.25,delay: 1 })
  }, [])

  return (
    <section
      id="highlights"
      className="
        relative w-screen bg-zinc overflow-hidden
        pt-12 sm:pt-20 md:pt-32 lg:pt-40 pb-8 sm:pb-16 md:pb-24 lg:pb-32
      "
    >
      <div className="screen-max-width">
        <div
          className="
            flex flex-col md:flex-row md:items-center md:justify-between
            gap-4 sm:gap-6 md:gap-8 lg:gap-16
            min-h-auto md:min-h-[180px]
            mb-8 sm:mb-12 md:mb-16
          "
        >
          {/* LEFT */}
          <h1
            id="title"
            className="section-heading flex-shrink-0"
          >
            Get the highlights.
          </h1>

          {/* RIGHT */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                      <p className="link flex items-center gap-2">
            Watch the film
            <img
              src={watchImg}
              alt="watch"
              className="w-4 h-4"
            />
          </p>

          <p className="link flex items-center gap-2">
            Watch the event
            <img
              src={rightImg}
              alt="right"
              className="w-4 h-4"
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
