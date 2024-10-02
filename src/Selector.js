import DropdownButton from "react-bootstrap/DropdownButton";
import { NavLink } from "react-router-dom";




export default function Selector() {

    return (
        <nav>
            <DropdownButton className="dropdown" title="Choose Album">
                <ul>
                    <li className="nav-item">
                        <NavLink to="/album1" className={({ isActive }) => isActive ? "active" : ""}>Album 1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/album2" className={({ isActive }) => isActive ? "active" : ""}>Album 2</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/album3" className={({ isActive }) => isActive ? "active" : ""}>Album 3</NavLink>
                    </li>
                </ul>
            </DropdownButton>
        </nav>
    )
}