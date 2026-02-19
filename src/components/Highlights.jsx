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
        pt-40 pb-32
      "
    >
      <div className="screen-max-width">
        <div
          className="
            flex items-center justify-between
            min-h-[180px]
            mb-16
            gap-x-16
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
          <div className="flex items-center gap-10">
            <p className="link flex items-center gap-2">
              Watch the film
              <img
                src={watchImg}
                alt="watch"
                className="ml-2.5 w-4 h-4"
              />
            </p>

            <p className="link flex items-center gap-2">
              Watch the event
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
