# Maciej's Portfolio Web App

This is a full-stack portfolio web application built using **Vite + React (TypeScript)** for the frontend and **Express.js (TypeScript)** for the backend.

> 🛠 This project is a work in progress and will be hosted at [https://mwenerski.dev](https://mwenerski.dev) once complete.

---

##  Tech Stack

### Frontend
- [Vite](https://vitejs.dev/) (React + TypeScript)
- Modular component structure
- API integration for dynamic content

### Backend
- [Express.js](https://expressjs.com/) with TypeScript
- REST API for managing project data
- JSON-based temporary data storage (can be replaced with a DB later)

---

##  Project Structure

my-portfolio/ 
├── backend/ # Express.js backend (API routes, project storage) 
  │ ├── src/ 
  │ | ├── controllers/
  │ | ├── data/
  │ | ├── models/
  │ | ├── routes/
  | │ └── index.ts
  │ ├── package.json 
  │ └── tsconfig.json 
├── frontend/ # Vite + React frontend (UI, components, API calls) 
  | ├── public/ 
  | ├── src/
  | │ ├── assets/
  | │ ├── components/
  | │ ├── App.css
  | │ ├── App.tsx
  | │ ├── index.css
  | │ └── main.tsx
  
