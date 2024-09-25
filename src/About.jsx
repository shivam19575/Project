import Hero from "./components/Hero";
import { UseGlobalContext } from "./context";
import { useEffect } from "react";

function About(){
  
  const {updateAboutPage}= UseGlobalContext();

  useEffect (() => updateAboutPage(),[]);
  
  return (
    <Hero />
  );
  }
  
  

export default About;