import { useEffect } from "react";
import Hero from "./components/Hero";
import { UseGlobalContext } from "./context";




function Home(){

  

  // const data={
  //   name:"Friend Brook",
  //   image:"./images/c.webp",
  // };
 const {updateHomePage}= UseGlobalContext();

 useEffect (() => updateHomePage(),[]);

  return (
    <Hero />
  );
}

export default Home;