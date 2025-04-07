import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-[#222] text-white shadow-md z-50">
      <h1 className="text-xl font-bold tracking-widest"></h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="#about" className="hover:text-sky-400">About</a></li>
        <li><a href="#projects" className="hover:text-sky-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-sky-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
