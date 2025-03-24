import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Box from "./components/Box";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main style={styles.container}>
        <Box title="About Me">
          <p>Hi</p>
        </Box>
        <Box title="Projects">
          <p>Check out my projects here.</p>
        </Box>
        <Box title="Contact">
          <p>Feel free to reach out!</p>
        </Box>
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px", margin: "2rem auto", padding: "1rem"
  }
};

export default App;
