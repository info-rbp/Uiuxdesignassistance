import express, { Response } from 'express';
import { query } from '../db/index.js';
import { protect, AuthRequest } from '../middleware/auth.js';
import crypto from 'crypto';

const router = express.Router();

// @route   GET /api/projects
// @desc    Get all projects for the logged in user
router.get('/', protect, async (req: AuthRequest, res: Response) => {
  try {
    const projects = await query(`SELECT * FROM projects WHERE user_id = '${req.user.id}' ORDER BY created_at DESC`);
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/projects
// @desc    Create a new project
router.post('/', protect, async (req: AuthRequest, res: Response) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Please provide a project name' });
    }

    const projectId = crypto.randomUUID();
    const userId = req.user.id;

    await query(`INSERT INTO projects (id, user_id, name, description) VALUES ('${projectId}', '${userId}', '${name}', '${description || ''}')`);

    const newProject = await query(`SELECT * FROM projects WHERE id = '${projectId}'`);
    
    res.status(201).json(newProject[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/projects/:id
// @desc    Get project details
router.get('/:id', protect, async (req: AuthRequest, res: Response) => {
  try {
    const project = await query(`SELECT * FROM projects WHERE id = '${req.params.id}' AND user_id = '${req.user.id}'`);

    if (project.length === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/projects/:id
// @desc    Update a project
router.put('/:id', protect, async (req: AuthRequest, res: Response) => {
  try {
    const { name, description } = req.body;

    // Check if project exists and belongs to user
    const project = await query(`SELECT * FROM projects WHERE id = '${req.params.id}' AND user_id = '${req.user.id}'`);

    if (project.length === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const updatedName = name || project[0].name;
    const updatedDescription = description !== undefined ? description : project[0].description;

    await query(`UPDATE projects SET name = '${updatedName}', description = '${updatedDescription}', updated_at = CURRENT_TIMESTAMP WHERE id = '${req.params.id}'`);

    const updatedProject = await query(`SELECT * FROM projects WHERE id = '${req.params.id}'`);
    
    res.json(updatedProject[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/projects/:id
// @desc    Delete a project
router.delete('/:id', protect, async (req: AuthRequest, res: Response) => {
  try {
    // Check if project exists and belongs to user
    const project = await query(`SELECT * FROM projects WHERE id = '${req.params.id}' AND user_id = '${req.user.id}'`);

    if (project.length === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }

    await query(`DELETE FROM projects WHERE id = '${req.params.id}'`);

    res.json({ message: 'Project removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
