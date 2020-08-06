import React from 'react';

import './NavBar.css';

const NavBar = props =>{
return<header className="nav-bar">
    <div className="container">
    {props.children}
    </div>
    </header>
};

export default NavBar;