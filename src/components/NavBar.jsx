import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [navVisible, setNavVisible] = useState(false);

  function toggleNavMenu() {
    setNavVisible(!navVisible);
  }

  return (
    <header className="w-[100%] bg-[#ffffff] px-[12px] py-[8px] h-[80px] flex items-center border-b border-[#e5e7eb] fixed top-0 left-0 z-50 shadow-sm">
      <div className="w-[100%] max-w-[1400px] mx-auto flex items-center gap-[12px] justify-between">
        <Link to="/">
          <img src="/assets/logo.png" alt="Keen Keeper" className="w-[200px]" />
        </Link>

        <button
          className="cursor-pointer inline-block md:hidden"
          onClick={toggleNavMenu}
        >
          {navVisible ? (
            <span className="text-[30px]">✕</span>
          ) : (
            <span className="text-[30px]">☰</span>
          )}
        </button>

        <nav
          className={`absolute top-[88px] left-[8px] z-50 bg-[#ffffff] p-[12px] rounded-md shadow-lg min-w-[calc(100%-16px)] border border-[#e5e7eb] 
          transition-all duration-300 
          ${navVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-5 pointer-events-none"} 
          md:relative md:p-0 md:rounded-none md:shadow-none md:min-w-fit md:border-none md:top-0 md:opacity-100 md:translate-x-0 md:pointer-events-auto`}
        >
          <ul className="w-[100%] flex flex-col md:flex-row items-center gap-[4px]">
            <li className="block w-[100%]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `w-[100%] flex items-center gap-[6px] btn ${isActive ? "btn-primary" : "btn-ghost"}`
                }
              >
                <span>🏠</span> Home
              </NavLink>
            </li>
            <li className="block w-[100%]">
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  `w-[100%] flex items-center gap-[6px] btn ${isActive ? "btn-primary" : "btn-ghost"}`
                }
              >
                <span>⏱️</span> Timeline
              </NavLink>
            </li>
            <li className="block w-[100%]">
              <NavLink
                to="/stats"
                className={({ isActive }) =>
                  `w-[100%] flex items-center gap-[6px] btn ${isActive ? "btn-primary" : "btn-ghost"}`
                }
              >
                <span>📊</span> Stats
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;