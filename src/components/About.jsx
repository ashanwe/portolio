/* eslint-disable react/no-unescaped-entities */

const skills = [
  { name: "web design" },
  { name: "web development" },
  { name: "data analytics" },
  { name: "graphic design" },
];
const About = () => {
  return (
    <div className="w-full md:flex pr-10 pt-20 pl-[10%] text-gray-300">
      <div className="w-full md:w-1/2 px-1">
        <h1 className="uppercase font-semibold text-2xl pb-10">Summary</h1>
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
        <h1 className="uppercase font-semibold text-2xl pb-10">services</h1>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item flex justify-between uppercase text-lg font-bold border-b border-gray-400 pb-2 mb-4">
            <h1>{skill.name}</h1>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 -rotate-45 text-gray-300"
                fill="currentColor"
                viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
