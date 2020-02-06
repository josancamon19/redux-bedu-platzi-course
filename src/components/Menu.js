import React from "react";
import {Link} from "react-router-dom";

const Menu = () => (
    <nav className="navbar navbar-expand bg-primary">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Users</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">Pricing</Link>
            </li>
        </ul>
    </nav>
);

export default Menu;
