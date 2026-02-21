import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef, useState } from "react"

import { hightlightsSlides } from "../constants"
import { pauseImg, playImg, replayImg } from "../utils"

gsap.registerPlugin(ScrollTrigger)

const VideoCarousel = () => {
  const videoRef = useRef([])
  const dotWrapperRef = useRef([])
  const dotFillRef = useRef([])
  const progressTickerRef = useRef(null)

  const [video, setVideo] = useState({
    videoId: 0,
    isPlaying: true,
    isLastVideo: false,
  })

  const { videoId, isPlaying, isLastVideo } = video

  /* ---------------- SLIDER ANIMATION ---------------- */
  useGSAP(() => {
    // Moves the entire slider track
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 1.5,
      ease: "power2.inOut",
    })
  }, [videoId])

  /* ---------------- VIDEO PLAYBACK ---------------- */
  useEffect(() => {
    const el = videoRef.current[videoId]
    if (!el) return
    
    if (isPlaying) {
      el.play().catch(() => {
        // Handle potential autoplay block
      })
    } else {
      el.pause()
    }
  }, [videoId, isPlaying])

  /* ---------------- PILL & PROGRESS ANIMATION ---------------- */
  useGSAP(() => {
    const dotTrack = dotWrapperRef.current[videoId]
    const dotFill = dotFillRef.current[videoId]
    const videoEl = videoRef.current[videoId]

    const dots = dotWrapperRef.current.filter(Boolean)
    const fills = dotFillRef.current.filter(Boolean)

    if (progressTickerRef.current) {
      gsap.ticker.remove(progressTickerRef.current)
      progressTickerRef.current = null
    }

    if (dotTrack && dotFill && videoEl) {
      // 1. Reset all dots to small inactive circles first
      gsap.killTweensOf(dots)
      gsap.killTweensOf(fills)

      gsap.to(dots, {
        width: 8,
        backgroundColor: "#6e6e73",
        duration: 0.5,
      })
      gsap.to(fills, {
        width: 0,
        duration: 0.5,
      })

      // 2. Expand ACTIVE pill track
      gsap.to(dotTrack, {
        width: 44,
        backgroundColor: "#d2d2d7",
        duration: 0.5,
        ease: "power2.out",
      })

      // 3. Precise Progress Ticker
      // We use the ticker instead of a fixed duration to handle pause/resume perfectly
      const updateProgress = () => {
        if (!videoEl.duration || !Number.isFinite(videoEl.duration)) return
        const progress = (videoEl.currentTime / videoEl.duration) * 100
        gsap.set(dotFill, { width: `${progress}%` })
      }

      progressTickerRef.current = updateProgress

      if (isPlaying) {
        gsap.ticker.add(updateProgress)
      }

      updateProgress()

      return () => {
        if (progressTickerRef.current) {
          gsap.ticker.remove(progressTickerRef.current)
          progressTickerRef.current = null
        }
      }
    }

    return undefined
  }, [videoId, isPlaying])

  const togglePlay = () => {
    if (isLastVideo) {
      setVideo({ videoId: 0, isPlaying: true, isLastVideo: false })
      // Reset the first video to start
      if (videoRef.current[0]) videoRef.current[0].currentTime = 0
    } else {
      setVideo((v) => ({ ...v, isPlaying: !v.isPlaying }))
    }
  }

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8 lg:gap-10">

      {/* VIDEO CONTAINER */}
      <div className="overflow-hidden relative">
        <div id="slider" className="flex">
          {hightlightsSlides.map((slide, i) => (
            <div key={slide.id} className="w-full shrink-0 px-4 sm:px-10 lg:px-20">
              <div className="relative rounded-[28px] overflow-hidden bg-black aspect-video group">
                <video
                  id={`video-${i}`}
                  ref={(el) => (videoRef.current[i] = el)}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="auto"
                  onEnded={() =>
                    i === hightlightsSlides.length - 1
                      ? setVideo((v) => ({ ...v, isLastVideo: true, isPlaying: false }))
                      : setVideo((v) => ({ ...v, videoId: i + 1, isPlaying: true }))
                  }
                >
                  <source src={slide.video} type="video/mp4" />
                </video>

                {/* TEXT OVERLAYS - Assuming they exist in your slide data */}
                <div className="absolute top-12 left-[5%] z-10 pointer-events-none">
                   {slide.textLists?.map((text) => (
                     <p key={text} className="md:text-2xl text-xl font-medium text-white">
                        {text}
                     </p>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= APPLE STYLE TWO-ISLAND CONTROLS ================= */}
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-3 sm:gap-4 rounded-full bg-[#1d1d1f]/80 backdrop-blur-xl border border-white/10 shadow-2xl px-3 sm:px-4 min-w-[170px] sm:min-w-[210px] h-12 sm:h-14">
          {/* DOTS */}
          <div className="flex flex-nowrap items-center gap-3">
            {hightlightsSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to highlight ${i + 1}`}
                onClick={() => setVideo((v) => ({ ...v, videoId: i, isPlaying: true, isLastVideo: false }))}
                className="relative inline-flex items-center justify-center h-2 w-2 rounded-full bg-[#6e6e73] overflow-hidden focus:outline-none"
                ref={(el) => (dotWrapperRef.current[i] = el)}
              >
                <span
                  ref={(el) => (dotFillRef.current[i] = el)}
                  className="absolute left-0 top-0 h-full w-0 bg-white rounded-full"
                />
              </button>
            ))}
          </div>

          {/* PLAY / PAUSE */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isLastVideo ? "Replay" : isPlaying ? "Pause" : "Play"}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <img
              src={isLastVideo ? replayImg : isPlaying ? pauseImg : playImg}
              alt="control"
              className="w-3.5 h-3.5"
            />
          </button>
        </div>
      </div>

    </div>
  )
}

export default VideoCarousel