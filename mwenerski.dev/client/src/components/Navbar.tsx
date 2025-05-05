import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-[#222] text-white shadow-md z-50">
      <h1 className="text-xl font-bold tracking-widest">My Portfolio</h1>

      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => isActive ? "text-sky-400" : undefined}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "text-sky-400" : "hover:text-sky-400"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? "text-sky-400" : "hover:text-sky-400"}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "text-sky-400" : "hover:text-sky-400"}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
