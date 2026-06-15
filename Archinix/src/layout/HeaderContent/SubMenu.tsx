import { NavLink } from "react-router-dom";

interface SubmenuItem {
  name: string;
  to: string;
}

interface SubMenuProps {
  submenu: SubmenuItem[];
}

export default function SubMenu({ submenu }: SubMenuProps) {
  return (
    <ul className="sub-menu">
      {submenu.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.to}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
