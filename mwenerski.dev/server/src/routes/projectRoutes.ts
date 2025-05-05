import express, { Router } from 'express';
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject
} from '../controllers/projectController';

const router: Router = express.Router();

router.get('/', getProjects);
router.post('/', addProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

// DEBUG: log registered routes
setTimeout(() => {
  (router.stack || []).forEach((layer: any) => {
    if (layer.route?.path) {
      console.log('ROUTE:', layer.route.path);
    }
  });
}, 0);

export default router;
