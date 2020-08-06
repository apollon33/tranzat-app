import React from "react";

import SideNav from "./SideNav";
import NavBar from "./NavBar";
import NavLinks from "./NavLinks";
import AuthNavigation from './AuthNavigation';

import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <div className="main-nav-header">
      <div className="nav-wrapper">
        {/* <SideNav /> */}

        <NavBar>
          {/* <button>
                <i>click</i>
            </button> */}
          <h1 className="main-brand">
            Tran<span>zat</span>
          </h1>
          <div className="side-nav__wrapper">
          <SideNav />
          </div>
          
          <NavLinks />
        </NavBar>
      </div>
      <div className="auth-wrapper">
        <AuthNavigation />
      </div>
    </div>
  );
};

export default MainNavigation;
