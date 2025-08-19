import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { CarouselDefault } from "./Carousel";
import link1 from "../assets/1.jpg";
import link2 from "../assets/2.jpg";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  useEffect(() => {
    gsap.to(".cad", {
      scrollTrigger: {
        trigger: ".cad",
        start: "bottom bottom",
        end: "top 10%",
        scrub: true,
      },
      scale: 0.9,
      duration: 10,
      ease: "power1.out",
    });
  }, []);

  return (
    <>
      <div className="w-full md:flex pr-10 pt-20 pl-[10%] text-gray-300">
        <div className="w-full md:w-1/2 px-1">
          <div className="relative flex h-96 pb-4">
            <CarouselDefault link1={link1} link2={link2} />
          </div>
        </div>
        <div className="w-1/10 hidden xl:block"></div>
        <div className="w-full md:w-1/2 px-1">
          <div className="relative h-96 pb-4">
            <h1 className="text-2xl font-semibold pb-5">
              Front-end design - Music Track Popularity Prediction
            </h1>
            <p>
              Developed the frontend for a machine learning project that
              predicts music track popularity, featuring a clean UI for data
              input and results visualization.
            </p>
            <div className="flex pt-4 gap-1">
              <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                python
              </span>
              <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                Streamlit
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
