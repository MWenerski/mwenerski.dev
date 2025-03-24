import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={styles as React.CSSProperties}>
      <p>© {new Date().getFullYear()} My Portfolio</p>
      <div>
        <a href="https://github.com/MWenerski" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://www.linkedin.com/in/maciej-wenerski-5b8014223/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
      </div>
    </footer>
  );
};

const styles: React.CSSProperties = {
  marginTop: "2rem",
  padding: "1rem",
  backgroundColor: "#222",
  color: "white",
  textAlign: "center",
};

export default Footer;
