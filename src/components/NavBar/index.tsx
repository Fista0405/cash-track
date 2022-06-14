import { NavItem } from "models/generic.model";
import { NavLink } from "react-router-dom";

import "./index.scss";

const NavBar = ({ items }: Props) => {
  const content = items.map(({ name, path }) => {
    return (
      <NavLink key={name} to={path}>
        {name}
      </NavLink>
    );
  });

  return <nav className="nav">{content}</nav>;
};

type Props = {
  items: NavItem[];
};

export default NavBar;
