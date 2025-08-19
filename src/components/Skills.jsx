import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillSec01 = [
  {
    category: "_Web Development",
    skills: [
      { name: "React JS", percentage: 80 },
      { name: "Next JS", percentage: 82 },
      { name: "Node JS - MERN Stack", percentage: 80 },
      { name: "WordPress", percentage: 90 },
      { name: "Tailwind CSS", percentage: 90 },
      { name: "Bootstrap", percentage: 95 },
    ],
  },
];

const SkillSec02 = [
  {
    category: "_Database",
    skills: [
      { name: "MongoDB", percentage: 85 },
      { name: "MySQL", percentage: 75 },
    ],
  },
  {
    category: "_Graphic Design",
    skills: [
      { name: "Adobe Photoshop", percentage: 65 },
      { name: "Adobe Illustrator", percentage: 60 },
    ],
  },
];

const Services = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    skillRefs.current.forEach(el => {
      if (!el) return;

      const percentageEl = el.querySelector(".percentage");
      const borderEl = el.querySelector(".skill-border");
      const targetPercentage = el.dataset.percentage;

      if (!targetPercentage) return;

      gsap.fromTo(
        percentageEl,
        { textContent: 0 },
        {
          textContent: targetPercentage,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 98%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            percentageEl.textContent = `${Math.round(
              this.progress() * targetPercentage
            )}%`;
          },
        }
      );

      // Animate the border fill
      gsap.fromTo(
        borderEl,
        { background: `linear-gradient(to right, white 0%, white 0%)` },
        {
          background: `linear-gradient(to right, white ${targetPercentage}%, gray ${targetPercentage}%)`,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 98%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="md:flex w-full pr-10 pl-[10%] text-gray-300 pt-20">
      {/* Left Section */}
      <div className="w-full md:w-1/2 pt-10 px-1">
        {SkillSec01.map((service, index) => (
          <div key={index} className="pb-10">
            <h1 className="uppercase font-semibold text-2xl pb-5">
              {service.category}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {service.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-item pt-2 flex justify-between uppercase text-lg font-bold pb-2 mb-6 relative"
                  data-percentage={skill.percentage}
                  ref={el => skillRefs.current.push(el)}
                  style={{
                    position: "relative",
                  }}>
                  <h1>{skill.name}</h1>
                  <h1 className="percentage text-gray-300 hidden">
                    {skill.percentage}%
                  </h1>

                  {/* Bottom border as progress */}
                  <span
                    className="skill-border"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "4px",
                      width: "100%",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-1/10 hidden xl:block"></div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 pt-10 px-1">
        {SkillSec02.map((service, index) => (
          <div key={index} className="pb-10">
            <h1 className="uppercase font-semibold text-2xl pb-5">
              {service.category}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {service.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-item pt-2 flex justify-between uppercase text-lg font-bold pb-2 mb-6 relative"
                  data-percentage={skill.percentage}
                  ref={el => skillRefs.current.push(el)}>
                  <h1>{skill.name}</h1>
                  <h1 className="percentage text-gray-300 hidden">
                    {skill.percentage}%
                  </h1>

                  {/* Bottom border as progress */}
                  <span
                    className="skill-border"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "4px",
                      width: "100%",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
