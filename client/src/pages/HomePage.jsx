import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomePage = () => {
  const badges = ["Full Stack Developer", "Devops", "ML Enginner"];
  return (
    <div className=" w-screen bg-black home-page p-3 ">
      <section className=" min-h-screen w-full relative  section-1">
        <Header />
        <Hero badges={badges} />
      </section>
    </div>
  );
};

export default HomePage;
