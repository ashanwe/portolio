import { useEffect } from "react";
import { gsap } from "gsap";
import MainText from "./MainText";

const navLinks = [
  {
    url: "/",
    title: "Linkedin",
  },
  {
    url: "/",
    title: "read.cv",
  },
  {
    url: "/",
    title: "email",
  },
  {
    url: "/",
    title: "github",
  },
];

const Home = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".link");

    gsap.fromTo(
      ".txt",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );

    // Load Animation
    gsap.fromTo(
      links,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );

    // Hover Animation
    links.forEach(el => {
      el.addEventListener("mouseenter", () => {
        gsap.to(el, { x: 5, opacity: 0.8, duration: 0.3 });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(el, { x: 0, opacity: 1, duration: 0.3 });
      });
    });

    return () => {
      links.forEach(el => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <>
      <div className="relative sm:flex justify-center sm:items-center pt-20 sm:pt-0 h-screen">
        <div className="w-full pt-14 sm:sticky top-0 z-50">
          <div className="w-full md:flex sm:pr-10 pl-[10%]">
            <div className="w-1/2 sm:flex text-gray-300 px-1 gap-4 md:gap-10 font-semibold text-lg uppercase pb-10 md:pb-0">
              {navLinks.map((link, index) => (
                <p
                  key={index}
                  className="link flex gap-1 pb-4 sm:pb-0 cursor-pointer">
                  {link.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 -rotate-45 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </p>
              ))}
            </div>
            <div className="w-1/10 hidden xl:block"></div>
            <div className="w-full md:w-1/2 sm:flex justify-between pb-12 sm:pb-0 px-1">
              <div className="text-gray-300 pb-5 font-bold text-lg uppercase tracking-widest">
                <p className="txt">Ashan weerakkodi</p>
                <p className="txt">Full-stack developer</p>
                <p className="txt">based in sri lanka</p>
              </div>
              <button className="txt bg-gray-300 px-10 h-10 uppercase text-lg font-semibold rounded-full cursor-pointer">
                For Hire
              </button>
            </div>
          </div>
        </div>
        <MainText className="sm:hidden" />
      </div>
      <div className="hidden sm:block">
        <MainText />
      </div>
    </>
  );
};

export default Home;
