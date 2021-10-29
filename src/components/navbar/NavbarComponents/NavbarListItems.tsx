import {
  BsArchive,
  BsGear,
  BsTruck,
  BsHddStack,
  BsFileEarmarkText,
  BsBoxArrowUpRight,
  BsBoxSeam,
} from "react-icons/bs";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";
import MainHeader from "./MainHeader";
import classes from "./NavbarListItems.module.css";
const NavbarListItems = () => {
  return (
    <div>
      <Nav navbar vertical>
        <NavItem>
          <MainHeader />
        </NavItem>
        <NavItem>
          <NavLink className={classes.navlist}>
            <BsArchive className={classes.icon} />
            Kanban Board
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={classes.navlist}>
            <BsGear className={classes.icon} />
            Project Setting
          </NavLink>
        </NavItem>
        <hr />

        <NavItem>
          <NavLink className={classes.navlist}>
            <BsTruck className={classes.icon} />
            Releases
          </NavLink>
        </NavItem>
        <NavLink className={classes.navlist}>
          <BsHddStack className={classes.icon} />
          Issue and filter
        </NavLink>
        <NavItem>
          <NavLink className={classes.navlist}>
            <BsFileEarmarkText className={classes.icon} />
            Pages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={classes.navlist}>
            <BsBoxArrowUpRight className={classes.icon} />
            Report
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={classes.navlist}>
            <BsBoxSeam className={classes.icon} />
            Components
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavbarListItems;
