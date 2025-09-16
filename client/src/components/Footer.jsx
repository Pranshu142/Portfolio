import { Code, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className=" p-5 text-gray-200 bg-zinc-800 sm:px-10">
      <div className="flex flex-col justify-center items-center gap-5  ">
        <div className="w-full space-y-5 border-b-3 border-gray-500 flex flex-col items-center justify-center md:flex-row md:justify-between">
          <div className="text-lg font-bold md:text-start md:w-1/2">
            <h2>Pranshu Pandey</h2>
            <h2 className="text-sm text-gray-400">Full Stack Developer</h2>
          </div>
          <div className="flex gap-5 items-center justify-center md:justify-end w-full">
            <div className="p-3 hover:bg-gray-900/30 rounded-lg cursor-pointer transition-all ease-in-out">
              <a href="https://linkedin.com/in/pranshu142002">
                <Linkedin strokeWidth={2.25} size={24} />
              </a>
            </div>
            <div className="p-3 hover:bg-gray-900/30 rounded-lg cursor-pointer transition-all ease-in-out">
              <a href="https://github.com/Pranshu142">
                <Github strokeWidth={2.25} size={24} />
              </a>
            </div>
            <div className="p-3 hover:bg-gray-900/30 rounded-lg cursor-pointer transition-all ease-in-out">
              <a href="mailto:pranshu142002@gmail.com">
                <Mail strokeWidth={2.25} size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between w-full">
          <h3>© 2025 Pranshu Pandey. All rights reserved.</h3>
          <h3>Made with ❤️ and lots of coffee</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
