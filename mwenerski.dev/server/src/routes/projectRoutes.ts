import express from 'express';
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject
} from '../controllers/projectController';

const router = express.Router();
console.log('updateProject:', typeof updateProject);
console.log('deleteProject:', typeof deleteProject);


router.get('/', getProjects);
router.post('/', addProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);


export default router;
