import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { CarouselDefault } from "./Carousel";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "title", desc: "desc", imageUrl: "public/assets/1.jpg" },
  { id: 2, title: "title", desc: "desc", imageUrl: "src/assets/2.png" },
];

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
      {projects.map(p => (
        <div
          key={p.id}
          className="w-full md:flex pr-10 pt-20 pl-[10%] text-gray-300">
          <div className="w-full md:w-1/2 px-1">
            <div className="relative flex h-96 pb-4">
              <CarouselDefault link={projects[0].imageUrl} />
            </div>
          </div>
          <div className="w-1/10 hidden xl:block"></div>
          <div className="w-full md:w-1/2 px-1">
            <div className="relative h-96 pb-4">
              <h1 className="text-2xl font-semibold pb-5">{p.title}</h1>
              <p>{p.desc}</p>
              <div className="flex pt-4 gap-1">
                <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                  python
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                  React Js
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
