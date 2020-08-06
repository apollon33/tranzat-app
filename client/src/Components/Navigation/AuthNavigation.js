import React from "react";
import { NavLink } from 'react-router-dom';

import "./AuthNavigation.css";

const AuthNavigation = () => {
  return (
    <ul className="auth-nav">
      <li>
       <NavLink className="auth-nav__item" to="/signup">Signup</NavLink>
      </li>
      <li>
        <NavLink className="auth-nav__item" to="/login">Login</NavLink>
      </li>
    </ul>
  );
};

export default AuthNavigation;