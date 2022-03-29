import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <NavLink to="/">
          <a className="btn btn-ghost normal-case text-xl   ">
            Poetry Cafe
            <FontAwesomeIcon
              icon={faMugHot}
              className="py-0.5 pl-2"
              viewBox="0 0 500 500 "
            />
          </a>
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <div>
              <input
                type="checkbox"
                className="checkbox bg-base-100"
                id="checkbox"
                data-toggle-theme="LightTheme, DarkTheme"
                data-act-class="ACTIVECLASS"
              />
              <label for="checkbox" class="label bg-base-200">
                <FontAwesomeIcon icon={faMugHot} className="chocolate" />
                <FontAwesomeIcon icon={faMugHot} className="coffee" />

                <div className="ball"></div>
              </label>
            </div>
          </li>
          <li>
            <NavLink to="/search">
              <a>Search</a>
            </NavLink>
          </li>
          <li tabIndex="0">
            <NavLink to="/random">
              <a>Random</a>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
