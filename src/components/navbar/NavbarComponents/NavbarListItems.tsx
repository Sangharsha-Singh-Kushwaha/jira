import {
  BsArchive,
  BsGear,
  BsTruck,
  BsHddStack,
  BsFileEarmarkText,
  BsBoxArrowUpRight,
  BsBoxSeam
} from "react-icons/bs";
import { Nav, NavItem, NavLink } from "reactstrap";
import MainHeader from "./MainHeader";

const NavbarListItems = () => {
  return (
    <div>
      <Nav className="mr-auto" navbar vertical>
        <NavItem>
          <MainHeader />
        </NavItem>
        <NavItem>
          <NavLink>
            <BsArchive />
            Kanban board
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <BsGear />
            Project Setting
          </NavLink>
        </NavItem>
        <hr />

        <NavItem>
          <NavLink>
            <BsTruck />
            Releases
          </NavLink>
        </NavItem>
        <NavLink>
          <BsHddStack />
          Issue and filter
        </NavLink>
        <NavItem>
          <NavLink>
            <BsFileEarmarkText />
            Pages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <BsBoxArrowUpRight />
            Report
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <BsBoxSeam/>
            Components
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavbarListItems;
