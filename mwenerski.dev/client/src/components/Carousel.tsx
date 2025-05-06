import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  liveUrl: string;
};

const RandomProjectCarousel: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  const getRandomProject = (excludeId?: string): Project | null => {
    const filtered = excludeId
      ? projects.filter((p) => p.id !== excludeId)
      : projects;
    if (filtered.length === 0) return null;
    return filtered[Math.floor(Math.random() * filtered.length)];
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data: Project[]) => {
        setProjects(data);
        if (data.length > 0) {
          const initial = data[Math.floor(Math.random() * data.length)];
          setCurrentProject(initial);
        }
      })
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  useEffect(() => {
    if (projects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentProject((prev) => getRandomProject(prev?.id));
    }, 5000);

    return () => clearInterval(interval);
  }, [projects]);

  const checkLiveUrl = async (url: string) => {
    try {
      const res = await fetch(url, { method: "HEAD", mode: "cors" });
      return res.ok;
    } catch {
      return false;
    }
  };

  const handleLiveClick = async () => {
    if (!currentProject) return;
    const ok = await checkLiveUrl(currentProject.liveUrl);
    if (!ok) {
      navigate("/projects");
    } else {
      window.open(currentProject.liveUrl, "_blank", "noopener noreferrer");
    }
  };

  if (!currentProject) return <div>Loading projects...</div>;

  return (
    <div className="rounded-xl shadow-md p-6 bg-white dark:bg-gray-900 transition-all duration-500 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {currentProject.title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {currentProject.description}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        <strong>Tech Stack:</strong> {currentProject.techStack.join(", ")}
      </p>
      <div className="flex gap-4">
        <button
          onClick={handleLiveClick}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Project
        </button>
        <a
          href={currentProject.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
        >
          View Repo
        </a>
      </div>
    </div>
  );
};

export default RandomProjectCarousel;
