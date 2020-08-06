import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
    return(
        <ul className="nav-list">
            <li ><NavLink className="nav-item" to="/" exact>Personal</NavLink></li>
            <li ><NavLink className="nav-item" to="/">Business</NavLink></li>
            <li ><NavLink className="nav-item" to="/">Agents</NavLink></li>
            <li ><NavLink className="nav-item" to="/">Developers</NavLink></li>
        </ul>
        
       
    )
};

export default NavLinks;