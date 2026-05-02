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
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev`: Starts the server using `ts-node-dev` for development.
- `npm run build`: Compiles TypeScript to JavaScript.
- `npm start`: Runs the compiled server from the `dist` directory.

## Database Schema

The database schema is defined in `db/schema.sql`. It includes:
- `projects`: Stores project information.
- `tasks`: Stores tasks associated with projects.

## API Endpoints

- `GET /health`: Health check endpoint.
- `GET /ping`: Basic ping-pong endpoint.
