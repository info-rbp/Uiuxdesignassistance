# Project Management SaaS - Backend

This is the backend service for the Project Management SaaS application.

## Prerequisites
- Node.js (v18 or higher)
- npm

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file (optional, defaults to port 3001):
   ```
   PORT=3001
   JWT_SECRET=your_jwt_secret
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts
- `npm run dev`: Starts the server using `tsx` for development.
- `npm run build`: Compiles TypeScript to JavaScript.
- `npm start`: Runs the compiled server from the `dist` directory.

## Database Schema
The database schema is defined in `db/schema.sql`. It includes:
- `users`: Stores user information.
- `projects`: Stores project information (linked to users).
- `project_tasks`: Stores tasks associated with projects.

## API Endpoints

### Authentication
- `POST /api/auth/register`: Register a new user. Body: `{ name, email, password }`
- `POST /api/auth/login`: Login user. Body: `{ email, password }`
- `GET /api/me`: Get current user info (Protected). Header: `Authorization: Bearer <token>`

### Projects (Protected)
- `GET /api/projects`: List all projects for the logged in user.
- `POST /api/projects`: Create a new project. Body: `{ name, description }`
- `GET /api/projects/:id`: Get project details.
- `PUT /api/projects/:id`: Update project. Body: `{ name, description }`
- `DELETE /api/projects/:id`: Delete project.

### Tasks (Protected)
- `GET /api/projects/:projectId/tasks`: List all tasks for a specific project.
- `POST /api/projects/:projectId/tasks`: Create a new task in a project. Body: `{ title, description }`
- `PUT /api/tasks/:id`: Update task details or status. Body: `{ title, description, status }` (status: `TODO`, `IN_PROGRESS`, `DONE`)
- `DELETE /api/tasks/:id`: Delete a task.

### Health
- `GET /health`: Health check endpoint.
