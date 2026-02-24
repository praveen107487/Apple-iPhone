import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    }

    if (size === "small") {
      animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
  }, [size, smallRotation, largeRotation, tl]);

  useGSAP(() => {
    gsap.to("#heading", { y: 20, opacity: 1 });
  }, []);

  return (
    <section className="common-padding pb-16 md:pb-24">
      <div className="screen-max-width">
        
        {/* HEADING */}
        <h1
          id="heading"
          className="section-heading mt-24 md:mt-32 lg:mt-36 pt-4"
        >
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center">
          
          {/* MODEL VIEWER CONTAINER */}
          <div className="w-full h-[68vh] sm:h-[78vh] md:h-[88vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                inset: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>

          {/* CONTROLS AREA */}
          <div className="mx-auto w-full pt-6">
            
            <p className="text-sm font-light text-center mb-6 transition-all duration-300">
              {model.title}
            </p>

            <div className="flex-center mb-10">
              <div className="flex items-center justify-between gap-8 px-6 py-4 rounded-full bg-gray-300/10 backdrop-blur-lg border border-white/10 shadow-xl">
                
                {/* COLOR PICKER */}
                <ul className="flex items-center gap-3 px-2">
                  {models.map((item, i) => (
                    <li
                      key={i}
                      className="w-6 h-6 rounded-full cursor-pointer transition-transform hover:scale-110 border-2"
                      style={{
                        backgroundColor: item.color[0],
                        borderColor:
                          model.title === item.title
                            ? "white"
                            : "transparent",
                      }}
                      onClick={() => setModel(item)}
                    />
                  ))}
                </ul>

                {/* DIVIDER */}
                <div className="w-[1px] h-6 bg-white/20" />

                {/* SIZE PICKER */}
                <div className="flex items-center gap-1 p-3 bg-black/20 rounded-full">
                  {sizes.map(({ label, value }) => (
                    <span
                      key={label}
                      style={{
                        backgroundColor:
                          size === value ? "white" : "transparent",
                        color: size === value ? "black" : "white",
                        padding: "10px 20px",
                        borderRadius: "9999px",
                        cursor: "pointer",
                        fontSize: "0.875rem",
                        transition: "all 0.3s ease",
                      }}
                      onClick={() => setSize(value)}
                    >
                      {label}
                    </span>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;