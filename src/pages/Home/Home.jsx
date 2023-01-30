import React from "react";
import Feature from "../../components/Feature/Feature";
import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import Steps from "../../components/Steps/Steps";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import './Home.css';

const Home = () => {
  return (
    <div  className="back1 h-screen scrollbar hover:scrollbar-thumb-neutral-200 scrollbar-thumb-rounded-xl scrollbar-thumb-primary ">
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
