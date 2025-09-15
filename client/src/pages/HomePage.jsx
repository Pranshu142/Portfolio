import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/FeaturedProjects";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

const HomePage = () => {
  const badges = ["Full Stack Developer", "Devops", "ML Enginner"];
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <section
          id="home"
          className="relative min-h-screen flex  items-center justify-center  overflow-hidden"
        >
          <Hero badges={badges} />
        </section>
        <section
          id="about"
          className="bg-gray-900 w-full  px-4 section-2 py-20"
        >
          <AboutMe />
        </section>
        <section
          id="skills"
          className="bg-gray-950 w-full px-4 section-3 py-20"
        >
          <Skills />
        </section>
        <section
          id="projects"
          className=" py-20 bg-gray-900 w-full px-4 section-4"
        >
          <FeaturedProjects />
        </section>
        <section
          id="contacts"
          className=" py-20 bg-gray-950 w-full px-4  section-5 "
        >
          <Contacts />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
