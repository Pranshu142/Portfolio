const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "GraphQL", level: 80 },
        { name: "REST APIs", level: 95 },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Git", level: 95 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
      ],
    },
  ];

  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "REST API",
    "Tailwind CSS",
    "Git",
    "Docker",
    "AWS",
    "Vercel",
    "Figma",
    "Jest",
    "Cypress",
    "Webpack",
  ];
  return (
    <div className="text-white tracking-tight flex flex-col items-center gap-8 pb-5">
      <div className="flex flex-col items-center  justify-center gap-4 mt-10 text-center text-gray-400  ">
        <div className="px-4 py-1 border-1 rounded-2xl text-sm bg-gray-950 font-bold  ">
          <span className="text-gray-200">Skills and Technologies</span>
        </div>
        <h2 className="text-3xl text-gray-200">What I Work With</h2>
        <p>
          I'm proficient in a wide range of technologies and constantly learning
          new ones. Here are some of the tools and languages I use to bring
          ideas to life
        </p>
      </div>
      <div className="flex flex-col gap-8 items-start w-full">
        {skillCategories.map((val, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-4 w-full border-1 border-white/30 px-4 text-start py-3 rounded-2xl bg-gray-950"
          >
            <div className="text-gray-200 w-full font-bold">{val.title}</div>
            {val.skills.map((value, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-700 rounded-2xl transition-all ease-in-out duration-75 w-full"
              >
                <div className="flex justify-between">
                  <h3>{value.name}</h3>
                  <h3>{value.level}</h3>
                </div>
                <div className="w-full bg-gray-800 rounded-full  h-2 overflow-hidden ">
                  <div
                    className="bg-gray-200 text-xs font-medium text-blue-100 text-center h-2 p-0.5 leading-none rounded-full"
                    style={{ width: `${value.level}%` }}
                  >
                    {value.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="text-gray-200 font-bold w-full flex flex-col gap-8 justify-center  items-center">
        <h2 className="text-2xl  ">Technology I use</h2>
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="px-3 py-2  rounded-xl bg-gray-800  text-center font-medium"
            >
              <div>{tech}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
