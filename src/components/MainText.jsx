import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const MainText = () => {
  useEffect(() => {
    gsap.to(".creative", {
      scrollTrigger: {
        trigger: ".creative",
        start: "top 50%",
        end: "top 10%",
        scrub: true,
      },
      x: -900,
      duration: 5,
    });
    gsap.to(".icon", {
      scrollTrigger: {
        trigger: ".icon",
        start: "top 50%",
        end: "top 10%",
        scrub: true,
      },
      x: 100,
      duration: 10,
    });
    gsap.to(".developer", {
      scrollTrigger: {
        trigger: ".developer",
        start: "top 70%",
        end: "top 10%",
        scrub: true,
      },
      x: 900,
      duration: 10,
    });
    gsap.fromTo(
      ".creative",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );
    gsap.fromTo(
      ".developer",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="sm:absolute bottom-20 sm:bottom-2 w-full pr-10 pl-[10%]">
      <div className="flex justify-between w-full text-gray-400 uppercase text-5xl sm:text-8xl md:text-9xl font-bold font-sans md:tracking-widest">
        <h1 className="creative">Creative</h1>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5 md:w-8 md:h-8 text-gray-400"
            viewBox="0 0 512 512">
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z" />
          </svg>
        </div>
      </div>
      <div className="flex justify-end w-full text-gray-400 uppercase text-5xl sm:text-8xl md:text-9xl font-bold font-sans md:tracking-widest">
        <h1 className="developer">developer</h1>
      </div>
    </div>
  );
};

export default MainText;
