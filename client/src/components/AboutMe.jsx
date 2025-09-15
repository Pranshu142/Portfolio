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
    <div className="flex flex-col items-center w-full px-4 text-white gap-10 ">
      <div className="flex flex-col items-center justify-center gap-4 py-8 text-center text-gray-400 md:mt-[5%]">
        <div className="px-4 py-1 text-sm font-bold bg-gray-950 border border-white/30 rounded-full">
          <span className="text-gray-200">About me</span>
        </div>
        <h2 className="text-3xl text-gray-200">
          Passionate About Building Great Software
        </h2>
        <p className="max-w-prose">
          I&apos;m a software developer with a passion for creating beautiful,
          functional, and user-friendly applications. With over 5 years of
          experience in the industry, I&apos;ve worked on everything from small
          startups to large enterprise applications.
        </p>
      </div>
      <div className="flex flex-col items-center w-full gap-8 md:flex-row md:items-start md:gap-12">
        <div className="flex flex-col gap-4 text-sm text-gray-400 md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-200">My Journey</h2>
          <p>
            I started my journey in software development during college, where I
            discovered my love for problem-solving and creating digital
            solutions. Since then, I've been continuously learning and growing
            in this ever-evolving field.
          </p>
          <p>
            I specialize in full-stack development with a strong focus on modern
            JavaScript frameworks, particularly React and Node.js. I'm always
            excited to take on new challenges and learn emerging technologies.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open-source
            projects, writing technical blog posts, or exploring the latest
            trends in web development.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:w-1/2">
          {cardObj.map((val, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 p-4 text-center bg-gray-950 border border-white/30 rounded-2xl transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <div className="p-2 transition-all duration-75 ease-in-out rounded-2xl hover:bg-gray-700">
                <val.icon size={32} className="stroke-3" />
              </div>
              <div className="text-gray-200">{val.title}</div>
              <div className="text-sm text-gray-400">{val.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-8 py-8 text-center sm:flex-row sm:gap-16">
        <div className="flex-1">
          <div className="text-3xl font-bold mb-2">50+</div>
          <p className="text-muted-foreground text-gray-400">
            Projects Completed
          </p>
        </div>
        <div className="flex-1">
          <div className="text-3xl font-bold mb-2">5+</div>
          <p className="text-muted-foreground text-gray-400">
            Years Experience
          </p>
        </div>
        <div className="flex-1">
          <div className="text-3xl font-bold mb-2">100%</div>
          <p className="text-muted-foreground text-gray-400">
            Client Satisfaction
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
