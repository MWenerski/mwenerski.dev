import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 p-4 bg-[#222] text-white text-center text-sm">
      <p>© {new Date().getFullYear()}</p>
      <div className="mt-2 space-x-2">
        <a href="https://github.com/MWenerski" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">GitHub</a> | 
        <a href="https://www.linkedin.com/in/maciej-wenerski-5b8014223/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"> LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
