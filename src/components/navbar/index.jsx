import "./styles.css";

import {
    NavLink
} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">
                        My Todos
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/new">
                        New Todo
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}