import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>My Portfolio - MWenerski.dev</h1>
      <ul style={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "1rem 2rem", backgroundColor: "#222", color: "white"
  },
  logo: { margin: 0 },
  navLinks: { display: "flex", listStyle: "none", gap: "1rem" },
};

export default Navbar;
