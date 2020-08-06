import React from "react";
import { NavLink } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/core";
import { useDisclosure } from "@chakra-ui/core";

import "./SideNav.css";

const SideNav = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <React.Fragment>
      <Button className="side-nav__btn" ref={btnRef} onClick={onOpen}>
      <i class="fas fa-bars"></i>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="side-nav__drawer">
          <DrawerBody  >
            <ul className="side-nav__list">
            <li ><NavLink className="side-nav__item" to="/" exact>Personal</NavLink></li>
            <li ><NavLink className="side-nav__item" to="/">Business</NavLink></li>
            <li ><NavLink className="side-nav__item" to="/">Agents</NavLink></li>
            <li ><NavLink className="side-nav__item" to="/">Developers</NavLink></li>
            </ul>
            <div className="side-nav__auth">
                <Button className="side-nav__auth__btn">Signup</Button>
                <Button className="side-nav__auth__btn">Login</Button>
            </div>
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};

export default SideNav;
