# DSA Quest

A gamified DSA learning platform (foundation setup only — no gamification,
animations, 3D, XP system, or roadmap logic implemented yet).

## Tech Stack

**Frontend:** React (Vite), JavaScript, Tailwind CSS, React Router DOM, Axios, Context API
**Backend:** Node.js, Express.js, MongoDB Atlas, Mongoose, JWT, bcrypt, dotenv

## Project Structure

```
DSA-Quest/
├── frontend/       # React + Vite client
├── backend/        # Express + MongoDB API (MVC)
├── assets/         # Shared static assets
├── docs/           # Project documentation
```

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs at `http://localhost:5173`.

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Runs at `http://localhost:5000`. Health check: `GET /api/health`.

## Status

This is a foundation-only setup: folder structure, tooling, and config are
in place. Authentication, database models, routes, and business logic are
intentionally not implemented yet.
