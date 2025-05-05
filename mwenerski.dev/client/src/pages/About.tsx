import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-br from-[#0f0f1c] to-[#1a1a2e] text-white flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main className="flex flex-col items-center flex-grow p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-400 mb-8">
          About Me
        </h1>

        {/* Info box */}
        <div className="bg-[#1f1f2e] p-6 rounded-lg shadow-lg border border-[#2c2c3e] max-w-2xl w-full mb-12">
          <p className="text-gray-300 text-lg">
            Hello, I'm Maciej. I'm an aspiring full-stack developer and
            system admin trying to kickstart my career by improving 
            skills in JavaScript, TypeScript, and DevOps workflows.
          </p>
          <p className="text-gray-400 mt-4 text-sm">
            Since graduating, I've been trying to build up a potential portfolio that showcases
            my skills in Computer Science, i have been learning more fron-end development since it was one of the few things i've never done,
            additionally i've been learning Rust and Linux Server as well as web hosting (i am hosting this website myself using linux server and apache2).
          </p>
        </div>

        {/* Blog section */}
        <div className="w-full max-w-3xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Learning Journal</h2>
          <div className="space-y-4">
            <div className="bg-[#1f1f2e] p-4 rounded border border-[#2c2c3e]">
              <h3 className="text-xl text-sky-400">Setting up express server</h3>
              <p className="text-gray-300 text-sm mt-2">
                        My web app needed a back-end and so i settled on express, after a couple hours of thinking and trying to set it up 
                    (i spent way too much time on it, fr) i managed to get it to work
              </p>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default About;
