/* eslint-disable react/no-unescaped-entities */

const skills = [
  {
    name: "web design",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" className="text-white" fill="currentColor" viewBox="0 0 640 640"><path d="M128 96C92.7 96 64 124.7 64 160L64 416C64 451.3 92.7 480 128 480L272 480L256 528L184 528C170.7 528 160 538.7 160 552C160 565.3 170.7 576 184 576L456 576C469.3 576 480 565.3 480 552C480 538.7 469.3 528 456 528L384 528L368 480L512 480C547.3 480 576 451.3 576 416L576 160C576 124.7 547.3 96 512 96L128 96zM160 160L480 160C497.7 160 512 174.3 512 192L512 352C512 369.7 497.7 384 480 384L160 384C142.3 384 128 369.7 128 352L128 192C128 174.3 142.3 160 160 160z"/></svg>',
  },
  {
    name: "web development",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" className="text-white" fill="currentColor" viewBox="0 0 640 640"><path d="M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z"/></svg>',
  },
  // { name: "data analytics" },
  {
    name: "graphic design",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" className="text-white" fill="currentColor" viewBox="0 0 640 640"><path d="M432.5 82.3L382.4 132.4L507.7 257.7L557.8 207.6C579.7 185.7 579.7 150.3 557.8 128.4L511.7 82.3C489.8 60.4 454.4 60.4 432.5 82.3zM343.3 161.2L342.8 161.3L198.7 204.5C178.8 210.5 163 225.7 156.4 245.5L67.8 509.8C64.9 518.5 65.9 528 70.3 535.8L225.7 380.4C224.6 376.4 224.1 372.3 224.1 368C224.1 341.5 245.6 320 272.1 320C298.6 320 320.1 341.5 320.1 368C320.1 394.5 298.6 416 272.1 416C267.8 416 263.6 415.4 259.7 414.4L104.3 569.7C112.1 574.1 121.5 575.1 130.3 572.2L394.6 483.6C414.3 477 429.6 461.2 435.6 441.3L478.8 297.2L478.9 296.7L343.4 161.2z"/></svg>',
  },
];
const About = () => {
  return (
    <div className="w-full md:flex pr-10 pt-20 pl-[10%] text-gray-300">
      <div className="w-full md:w-1/2 px-1">
        <h1 className="uppercase font-semibold text-2xl pb-10">_Summary</h1>
        <p className="text-xl font-semibold flex">
          Your dedicated full-time web development professional, equipped with
          extensive experience in both web design and development. With a touch
          of creativity as a skilled graphic designer, I strive for nothing less
          than 100% client satisfaction. I'm eagerly looking forward to the
          opportunity of collaborating with you. Let's embark on this journey
          together, turning your vision into a digital masterpiece!
        </p>
      </div>
      <div className="w-1/10 hidden xl:block"></div>
      <div className="w-full md:w-1/2 px-1">
        <h1 className="uppercase font-semibold text-2xl pb-10">_services</h1>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item flex justify-between uppercase text-lg font-bold border-b border-gray-400 pb-2 mb-4">
            <h1>{skill.name}</h1>
            <span
              className="w-6 h-6"
              dangerouslySetInnerHTML={{ __html: skill.svg }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
