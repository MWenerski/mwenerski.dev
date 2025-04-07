import express from 'express';
import { getProjects, addProject } from '../controllers/projectController';

const router = express.Router();

router.get('/', getProjects);
router.post('/', addProject);

export default router;
