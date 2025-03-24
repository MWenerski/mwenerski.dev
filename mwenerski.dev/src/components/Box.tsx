import React from "react";

interface BoxProps {
  title: string;
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ title, children }) => {
  return (
    <div style={styles.box}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

const styles = {
  box: {
    border: "1px solid #ddd", padding: "1rem", margin: "1rem 0",
    borderRadius: "8px", backgroundColor: "#f9f9f9"
  }
};

export default Box;
