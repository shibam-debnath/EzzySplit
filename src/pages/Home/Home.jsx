import React from "react";
import Feature from "../../components/Feature/Feature";
import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import Steps from "../../components/Steps/Steps";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Steps />
      <Feature />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
