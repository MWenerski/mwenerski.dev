import { RequestHandler } from 'express';
import fs from 'fs';
import path from 'path';
import { Project } from '../models/Project';

const dataPath = path.join(__dirname, '../data/projects.json');

function readProjects(): Project[] {
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
}

function writeProjects(projects: Project[]) {
  fs.writeFileSync(dataPath, JSON.stringify(projects, null, 2));
}

export const getProjects: RequestHandler = (req, res) => {
  res.json(readProjects());
};

export const addProject: RequestHandler = (req, res) => {
  const projects = readProjects();
  const newProject: Project = {
    id: Date.now().toString(),
    ...req.body
  };
  projects.push(newProject);
  writeProjects(projects);
  res.status(201).json(newProject);
};

export const updateProject: RequestHandler = (req, res, next) => {
  try {
    const projects = readProjects();
    const projectIndex = projects.findIndex(p => p.id === req.params.id);

    if (projectIndex === -1) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }

    const updatedProject: Project = {
      ...projects[projectIndex],
      ...req.body,
      id: projects[projectIndex].id // don't allow ID to be changed
    };

    projects[projectIndex] = updatedProject;
    writeProjects(projects);

    res.json(updatedProject);
  } catch (err) {
    next(err);
  }
};

export const deleteProject: RequestHandler = (req, res, next) => {
  try {
    const projects = readProjects();
    const newProjects = projects.filter(p => p.id !== req.params.id);

    if (projects.length === newProjects.length) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }

    writeProjects(newProjects);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
