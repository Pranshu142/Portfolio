import { Code, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className=" p-5 text-gray-200 bg-zinc-600">
      <div className="flex flex-col justify-center items-center gap-5 ">
        <div className="w-full space-y-5 border-b-3 border-gray-500">
          <div className="text-lg font-bold text-center">
            <h2>Pranshu Pandey</h2>
            <h2 className="text-sm text-gray-400">Full Stack Developer</h2>
          </div>
          <div className="flex gap-5 items-center justify-center w-full">
            <div className="p-3 hover:bg-gray-900/30 rounded-lg cursor-pointer transition-all ease-in-out">
              <Linkedin strokeWidth={2.25} size={24} />
            </div>
            <div className="p-3 hover:bg-gray-900/30 rounded-lg cursor-pointer transition-all ease-in-out">
              <Github strokeWidth={2.25} size={24} />
            </div>
            <div className="p-3 hover:bg-gray-900/30 rounded-lg cursor-pointer transition-all ease-in-out">
              <Mail strokeWidth={2.25} size={24} />
            </div>
          </div>
        </div>
        <div className ="text-center">
          <h3>© 2025 Pranshu Pandey. All rights reserved.</h3>
          <h3>Made with ❤️ and lots of coffee</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
