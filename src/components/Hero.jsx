import { Link, NavLink } from "react-router-dom";
import React  from "react";
import { UseGlobalContext} from "../context";
import { Flip, Slide, Zoom } from "react-awesome-reveal";

const Hero = () => {
    
    const {name,image}=UseGlobalContext();

  return (
    <>
    <div className="frontPage">
      <label className="firstName ">shivam pandey</label> <br/>
      <div className="lastInfo">front-end developer & back-end developer</div>
    </div>

    <div className="moreInfo">
      <Slide><div className="tag">about me:</div></Slide>
      <div className="more"><Zoom><p className="Info">Front-End Developer who deeply care about User Experinece .</p></Zoom>
      <Zoom><p className="Info">Serious Passsion for UI Design and new Technologies</p></Zoom>
      </div>
    </div>
   
    <div className="partOne">
     <div className="left">
       <div className="partA">1.</div>
       <div className="partB"> portfolio</div>
       <div className="partC">this project is made by using html , react js , javascript , css ,tailwind css  </div>
       <div className="partD">website : www.https//google.com</div>
      </div>
      <div className="right">
        <div className="image1">first image</div>
        <div className="second">second image</div>
        <div className="third">third image</div>
      </div>
    </div>
    
    
    
    
    
    
    
    
    <div className="containerGrid">
      <Slide>
        <div className="sectionHeroData">
          <p className="heroTopData">THIS IS ME </p>
          <h1 className="heroHeading">{name}</h1> 
          <p className="heroParaData">
            This is  {name}. A Full Stack Developer , Software Developer , and a Freelancer ! 
          </p>
          <button className="btn-hire-me">
            <NavLink to="/contact">hire me</NavLink>
          </button>
          </div>
          </Slide>
     {/* this area is for hero images and it will be automatically aligned to the left side   */}

        <div className="sectionHeroImage">
            <picture>
                <img src={image}alt="heroSectionImage" className="heroImage"/>
            </picture>
        </div>
    </div>
    </>
  );
}

export default Hero;