import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  embedUrl?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then(setProjects)
      .catch((err) => console.error("Failed to fetch projects:", err));
  }, []);

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
          Projects
        </h1>

        {projects.length === 0 ? (
          <p className="text-gray-400 text-lg">No projects yet. Stay tuned 👀</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1f1f2e] rounded-lg shadow-lg p-4 border border-[#2c2c3e]"
              >
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-sky-800 text-sm px-2 py-1 rounded text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="text-sky-400 hover:underline"
                    >
                      Live
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      className="text-sky-400 hover:underline"
                    >
                      Repo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </motion.div>
  );
};

export default Projects;
