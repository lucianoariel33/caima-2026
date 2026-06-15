import { NavLink, useLocation } from "react-router-dom";
import SubMenu from "./SubMenu";
interface SubmenuItem {
  name: string;
  to: string;
}

interface MenuItem {
  name: string;
  to?: string;
  submenu?: SubmenuItem[];
}

interface NavMenuProps {
  menu: MenuItem[];
}

export default function NavMenu({ menu }: NavMenuProps) {
  const location = useLocation();

  const isMenuActive = (item: MenuItem) => {
    if (item.to && location.pathname === item.to) return true;
    if (item.submenu) {
      return item.submenu.some((sub) => location.pathname === sub.to);
    }
    return false;
  };

  return (
    <ul>
      {menu.map((item, index) => {
        const activeClass = isMenuActive(item) ? "active" : "";
        return (
          <li key={index} className={`${item.submenu ? "has-sub" : ""} ${activeClass}`}>
            {item.to ? (
              <NavLink className="navlink" to={item.to}>
                {item.name}
              </NavLink>
            ) : (
              <NavLink className="navlink" to="#">
                {item.name}
              </NavLink>
            )}

            {item.submenu && <SubMenu submenu={item.submenu} />}
          </li>
        );
      })}
    </ul>
  );
}
