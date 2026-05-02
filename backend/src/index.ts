import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import projectRoutes from './routes/projects.js';
import { protect, AuthRequest } from './middleware/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Backend service is running' });
});

// Protected route example
app.get('/api/me', protect, (req: AuthRequest, res: Response) => {
  res.json(req.user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
