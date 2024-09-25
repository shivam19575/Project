import { NavLink } from "react-router-dom";
import Navbar from "../assets/Navbar";
import "../index.css";


const Header = () => {
  return (
    <header className="sm ">
        <NavLink to="/">
            <img src="./images/images.jpg"alt="logo" className="logo_image"/>
        </NavLink>
        <Navbar />
    </header>
  )
}

export default Header;