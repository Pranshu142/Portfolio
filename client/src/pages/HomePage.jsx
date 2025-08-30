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
        <section className=" min-h-screen px-3 py-5 w-full relative section-1">
          <Hero badges={badges} />
        </section>
        <section className="bg-gray-900 w-full min-h-screen px-4 section-2">
          <AboutMe />
        </section>
        <section className="bg-gray-950 w-full min-h-screen px-4 section-3">
          <Skills />
        </section>
        <section className="bg-gray-900 w-full min-h-screen px-4 section-4">
          <FeaturedProjects />
        </section>
        <section className="bg-gray-950 w-full min-h-screen px-4 section-5">
          <Contacts />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
