//import React from 'react';
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0f1c] to-[#1a1a2e] text-white flex flex-col justify-between">

      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center text-sky-400 drop-shadow-[0_0_10px_#00f0ff]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Maciej
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-300 text-center max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Aspiring Developer & System Admin | Still learning
        </motion.p>
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {/* You can put buttons or icons here later */}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
