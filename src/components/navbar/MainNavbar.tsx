import React from "react";
import NavbarListItems from "./NavbarComponents/NavbarListItems";
import classes from "./MainNavbar.module.css";


const MainNavbar = () => {
  return (
    <div className={classes.nav}>
      <NavbarListItems />
    </div>
  );
};
export default MainNavbar;
