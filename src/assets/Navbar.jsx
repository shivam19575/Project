import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
        <div className="menuIcon">
            <ul className="navbar-list">
                <li>
                    <NavLink className="navlink" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/service">Services</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;