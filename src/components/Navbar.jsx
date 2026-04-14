import { NavLink,Link } from "react-router-dom";
import Logo from "./../assets/logo.png";
import { ChartLine, Clock, House } from "lucide-react";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-20">
      <div className="flex-1">
        <Link to="/">
          <img src={Logo} alt="Keen Keeper Logo" className="w-32" />
        </Link>
      </div>
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          <li>
            <NavLink
              to="/"
              className={({isActive})=>`flex flex-row items-center gap-2 ${isActive ? 'bg-green text-white' : ''}` }
            >
              <House className="w-4" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className={({isActive})=>`flex flex-row items-center gap-2 ${isActive ? 'bg-green text-white' : ''}` }>
              <Clock className="w-4" />
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className={({isActive})=>`flex flex-row items-center gap-2 ${isActive ? 'bg-green text-white' : ''}` }>
              <ChartLine className="w-4" />
              Stats
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end md:hidden">
        {/* Add dropdown-end here */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 rotate-180"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({isActive})=>`flex flex-row items-center gap-2 ${isActive ? 'bg-green text-white' : ''}` }
              >
                <House className="w-4" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/timeline" className={({isActive})=>`flex flex-row items-center gap-2 ${isActive ? 'bg-green text-white' : ''}` }>
                <Clock className="w-4" />
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink to="/stats" className={({isActive})=>`flex flex-row items-center gap-2 ${isActive ? 'bg-green text-white' : ''}` }>
                <ChartLine className="w-4" />
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
