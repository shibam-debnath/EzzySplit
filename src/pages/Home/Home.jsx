import React from "react";
import Feature from "../../components/Feature/Feature";
import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import Steps from "../../components/Steps/Steps";

const Home = () => {
  return (
    <div>
      <Hero />
      <Steps/>
      <Feature />
      <Contact />
    </div>
  );
};

export default Home;
