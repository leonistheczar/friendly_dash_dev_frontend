import { NavLink } from "react-router";
import { FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const bars = useRef(null);
  const barsMenu = useRef(null);
  // Side bar on smaller screen animation and display
useEffect(() => {
  if (!barsMenu.current) return;
  if (menuOpen) {
    gsap.to(barsMenu.current, {
      x: 0,
      opacity: 1,
      duration: 0.25,
      ease: "power3.out"
    });
  } else {
    gsap.to(barsMenu.current, {
      x: "-100%",
      opacity: 0,
      duration: 0.25,
      ease: "power2.in"
    });
  }
}, [menuOpen]);

  return (
    <nav className="sticky top-0 p-2 shadow-md border-b-2 border-gray-800 bg-gray-900 z-40">
      <div className="max-w-7xl m x-auto py-4 px-6 flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-blue-300"
        >
          <FaLaptopCode className="text-blue-400" />
          The Friendly Dev
        </NavLink>
        {/* Desktop - Mobile Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-gray-300">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` hover:text-white ${isActive ? "border-b-2 border-blue-800" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                ` hover:text-white ${isActive ? "border-b-2 border-blue-800" : ""}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                ` hover:text-white ${isActive ? "border-b-2 border-blue-800" : ""}`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                ` hover:text-white ${isActive ? "border-b-2 border-blue-800" : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                ` hover:text-white ${isActive ? "border-b-2 border-blue-800" : ""}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
        {/* Mobile Button */}
        <div className="md:hidden flex">
          <button className="outline-0 transition-all hover:cursor-pointer hover:text-blue-300" onClick={() => setMenuOpen(prev => !prev)}>
            {menuOpen ? (
              <FaTimes className="scale-125" />
            ) : (
              <FaBars className="scale-125" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
          <div
            ref={barsMenu}
            id="sm-nav"
            className="
            md:hidden absolute top-0 left-0 flex flex-col w-2/3 bg-blue-400 p-4 h-screen gap-y-6 transform"
            style={{transform: "transformX(-100%)", opacity: 0}}
          >
            <NavLink className="transition-all duration-75 hover:text-slate-900" to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>

            <NavLink className="transition-all duration-75 hover:text-slate-900" to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>

            <NavLink className="transition-all duration-75 hover:text-slate-900" to="/blogs" onClick={() => setMenuOpen(false)}>
              Blog
            </NavLink>

            <NavLink className="transition-all duration-75 hover:text-slate-900" to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>

            <NavLink className="transition-all duration-75 hover:text-slate-900" to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
