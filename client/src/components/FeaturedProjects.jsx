import { Github, ExternalLink } from "lucide-react";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1676731820390-a119efe23333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTYxODQ3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU2MTg1MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: [
        "Next.js",
        "TypeScript",
        "Socket.io",
        "MongoDB",
        "React DnD",
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current conditions, forecasts, and weather maps using multiple weather APIs.",
      image:
        "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2MTE1ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: [
        "Vue.js",
        "Chart.js",
        "OpenWeather API",
        "CSS Grid",
        "Vuex",
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center  justify-center gap-4 mt-10 text-center text-gray-400 md:justify-start  ">
        <div className="px-4 py-1 border-1 rounded-2xl text-sm bg-gray-950 font-bold  ">
          <span className="text-gray-200">Featured Projects</span>
        </div>
        <h2 className="text-3xl text-gray-200">Things I've Built</h2>
        <p>
          Here are some of my favorite projects that showcase my skills and
          experience. Each project represents a unique challenge and learning
          opportunity.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((val, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-4 overflow-hidden text-start text-gray-300  bg-gray-950 border border-white/30 rounded-2xl"
          >
            <div className="w-full h-48 overflow-hidden relative group">
              <img
                src={val.image}
                className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                alt={val.title}
              />
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out bg-black/60 bg-opacity-50 opacity-0 group-hover:opacity-100">
                <div className="flex gap-4">
                  <a
                    href={val.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1 text-white transition-colors duration-200 ease-in-out bg-gray-950 rounded-xl border border-white/20 hover:bg-gray-800"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={val.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1 text-black transition-colors duration-200 ease-in-out bg-white rounded-xl hover:bg-gray-200"
                  >
                    <ExternalLink size={20} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-4 py-2">
              <h3 className="text-xl font-bold text-gray-200">{val.title}</h3>
              <p className="text-sm">{val.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 px-4 py-2 mb-4">
              {val.technologies.map((value, index) => (
                <div
                  key={index}
                  className="px-3 py-1 text-xs font-bold bg-gray-800 rounded-full"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-white font-bold flex gap-2 items-center bg-gray-800 rounded-lg px-3 py-2 mb-5 w-full justify-center">
        <div>
          <Github />
        </div>
        <a href="https://github.com/Pranshu142">
          View all my projects on github
        </a>
      </div>
    </div>
  );
};

export default FeaturedProjects;
