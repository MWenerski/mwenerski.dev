import { Request, Response } from 'express';
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

export const getProjects = (req: Request, res: Response) => {
  res.json(readProjects());
};

export const addProject = (req: Request, res: Response) => {
  const projects = readProjects();
  const newProject: Project = {
    id: Date.now().toString(),
    ...req.body
  };
  projects.push(newProject);
  writeProjects(projects);
  res.status(201).json(newProject);
};
