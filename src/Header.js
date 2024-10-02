import Selector from "./Selector";
import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <nav className="navbar">
            <ul>
                <li className="nav-item">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <Selector />
                </li>
                <li className="nav-item">
                    <NavLink to="/all" className={({ isActive }) => isActive ? "active" : ""}>All</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/favourites" className={({ isActive }) => isActive ? "active" : ""}>Favourites</NavLink>
                </li>
            </ul>
        </nav>
    )
}

