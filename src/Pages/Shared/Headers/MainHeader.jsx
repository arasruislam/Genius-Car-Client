import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { HiOutlineShoppingBag, HiMagnifyingGlass } from "react-icons/hi2";

const MainHeader = () => {
  /* Navbar Items */
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active_Items" : "default_Items"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active_Items" : "default_Items"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "active_Items" : "default_Items"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blg"
          className={({ isActive }) =>
            isActive ? "active_Items" : "default_Items"
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active_Items" : "default_Items"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="absolute left-0 right-0 top-0 shadow-md">
      <div className="custom_container navbar bg-base-100">
        {/* Mobile Navbar */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
              <div className="navbar-end ps-4">
                <div className="flex items-center gap-4">
                  <HiOutlineShoppingBag className="h-6 w-6" />
                  <HiMagnifyingGlass className="h-6 w-6" />
                </div>
              </div>
            </ul>
          </div>
          {/* Logo */}
          <Link to="/">
            <img src={logo} className="w-2/3 sm:w-full" alt="Website Logo" />
          </Link>
        </div>
        {/* Nav Items */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        {/* NavBar Buttons */}
        <div className="navbar-end space-x-4">
          <div className="hidden sm:flex items-center gap-4 ">
            <HiOutlineShoppingBag className="h-6 w-6" />
            <HiMagnifyingGlass className="h-6 w-6" />
          </div>
          <div>
            <button className="btn btn-outline btn-error">Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
