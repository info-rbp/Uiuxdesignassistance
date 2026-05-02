import express, { Response } from 'express';
import { query } from '../db/index.js';
import { protect, AuthRequest } from '../middleware/auth.js';
import crypto from 'crypto';

const router = express.Router({ mergeParams: true });

// @route   GET /api/projects/:projectId/tasks
// @desc    Get all tasks for a project
router.get('/', protect, async (req: AuthRequest, res: Response) => {
  try {
    const { projectId } = req.params;
    if (!projectId) {
      return res.status(400).json({ message: 'Project ID is required' });
    }

    // Check if project exists and belongs to user
    const project = await query(`SELECT * FROM projects WHERE id = '${projectId}' AND user_id = '${req.user.id}'`);
    if (project.length === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const tasks = await query(`SELECT * FROM project_tasks WHERE project_id = '${projectId}' ORDER BY created_at ASC`);
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/projects/:projectId/tasks
// @desc    Create a new task
router.post('/', protect, async (req: AuthRequest, res: Response) => {
  try {
    const { projectId } = req.params;
    if (!projectId) {
      return res.status(400).json({ message: 'Project ID is required' });
    }

    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({ message: 'Please provide a task title' });
    }

    // Check if project exists and belongs to user
    const project = await query(`SELECT * FROM projects WHERE id = '${projectId}' AND user_id = '${req.user.id}'`);
    if (project.length === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const taskId = crypto.randomUUID();
    await query(`INSERT INTO project_tasks (id, project_id, title, description, status) VALUES ('${taskId}', '${projectId}', '${title}', '${description || ''}', 'TODO')`);

    const newTask = await query(`SELECT * FROM project_tasks WHERE id = '${taskId}'`);
    res.status(201).json(newTask[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/tasks/:id
// @desc    Update a task
router.put('/:id', protect, async (req: AuthRequest, res: Response) => {
  try {
    const { title, description, status } = req.body;
    const taskId = req.params.id;

    // Check if task exists and belongs to a project owned by the user
    const task = await query(`
      SELECT pt.* FROM project_tasks pt
      JOIN projects p ON pt.project_id = p.id
      WHERE pt.id = '${taskId}' AND p.user_id = '${req.user.id}'
    `);

    if (task.length === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    const currentTask = task[0];
    const updatedTitle = title || currentTask.title;
    const updatedDescription = description !== undefined ? description : currentTask.description;
    const updatedStatus = status || currentTask.status;

    // Validate status if provided
    if (status && !['TODO', 'IN_PROGRESS', 'DONE'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status. Use TODO, IN_PROGRESS, or DONE.' });
    }

    await query(`UPDATE project_tasks SET title = '${updatedTitle}', description = '${updatedDescription}', status = '${updatedStatus}', updated_at = CURRENT_TIMESTAMP WHERE id = '${taskId}'`);

    const updatedTask = await query(`SELECT * FROM project_tasks WHERE id = '${taskId}'`);
    res.json(updatedTask[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/tasks/:id
// @desc    Delete a task
router.delete('/:id', protect, async (req: AuthRequest, res: Response) => {
  try {
    const taskId = req.params.id;

    // Check if task exists and belongs to a project owned by the user
    const task = await query(`
      SELECT pt.* FROM project_tasks pt
      JOIN projects p ON pt.project_id = p.id
      WHERE pt.id = '${taskId}' AND p.user_id = '${req.user.id}'
    `);

    if (task.length === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await query(`DELETE FROM project_tasks WHERE id = '${taskId}'`);
    res.json({ message: 'Task removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
