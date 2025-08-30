import { Code, Lightbulb, Users, Zap } from "lucide-react";

const AboutMe = () => {
  const cardObj = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent communication and collaboration skills",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks",
    },
  ];
  return (
    <div className="text-white tracking-tight flex flex-col items-center gap-8 pb-5">
      <div className="flex flex-col items-center  justify-center gap-4 mt-10 text-center text-gray-400  ">
        <div className="px-4 py-1 border-1 rounded-2xl text-sm bg-gray-950 font-bold  ">
          <span className="text-gray-200">About me</span>
        </div>
        <h2 className="text-3xl text-gray-200  ">
          Passionate About Building Great Software
        </h2>
        <p>
          I&apos;m a software developer with a passion for creating beautiful,
          functional, and user-friendly applications. With over 5 years of
          experience in the industry, I&apos;ve worked on everything from small
          startups to large enterprise applications.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-14 text-sm text-gray-400">
        <h2 className="font-bold text-2xl text-gray-200">My Journey</h2>
        <p>
          I started my journey in software development during college, where I
          discovered my love for problem-solving and creating digital solutions.
          Since then, I've been continuously learning and growing in this
          ever-evolving field.
        </p>
        <p>
          I specialize in full-stack development with a strong focus on modern
          JavaScript frameworks, particularly React and Node.js. I'm always
          excited to take on new challenges and learn emerging technologies.
        </p>
        <p>
          I specialize in full-stack development with a strong focus on modern
          JavaScript frameworks, particularly React and Node.js. I'm always
          excited to take on new challenges and learn emerging technologies.
        </p>
      </div>
      <div className="flex flex-col gap-6 items-start w-full">
        {cardObj.map((val, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2 w-full border-1 border-white/30 px-3 text-center py-2 rounded-2xl bg-gray-950"
          >
            <div className="p-2 hover:bg-gray-700 rounded-2xl transition-all ease-in-out duration-75">
              <val.icon size={32} className="stroke-3" />
            </div>
            <div className = "text-gray-200">{val.title}</div>
            <div className = "text-gray-400 text-sm">{val.description}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-8 text-center w-full pb-4">
        <div>
          <div className="text-3xl mb-2">50+</div>
          <p className="text-muted-foreground">Projects Completed</p>
        </div>
        <div>
          <div className="text-3xl mb-2">5+</div>
          <p className="text-muted-foreground">Years Experience</p>
        </div>
        <div>
          <div className="text-3xl mb-2">100%</div>
          <p className="text-muted-foreground">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
