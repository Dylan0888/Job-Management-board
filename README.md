# Job Management Board 
A task and workflow management web app built using React that allows a user to create and organise jobs and categorise them into multiple workflow stages. Tasks can be dynamically moved between categories, providing a simple style board for tracking progress and managing work efficiently.

## Live Preview 
[job-management-board.vercel.app](https://job-management-board.vercel.app/)


## Features 
- Create and manage job/task entries
- Organise tasks into three workflow categories
- Move tasks dynamically between categories
- Responsive UI built with reusable React components
- Lightweight client-side task tracking
- Real-time notifications from react-hot-toast notification library

## Tech Stack 
- React
- Vite
- JavaScript (ES6+)
- HTML
- Tailwind CSS

## Learning Objectives 
- Building a workflow interface using React
- managing state across components and task interactions
- Implementing dynamic UI updates for moving tasks between stages

## Project Structure 
```
Job-Management-board/
├── public/
├── src/
│      ├── assets/
│      │        ├── githubImgs/ (do not delete)
│      │        │         ├── AddTaskModal.png
│      │        │         ├── EditTaskModal.png
│      │        │         └── TaskManagerHome.png
│      │        │
│      │        └── imgs/ (category images)
│      │               ├── checked.png
│      │               ├── remove.png
│      │               └── work-in-progress.png
│      │
│      ├── components/ 
│      │         ├── AddTaskBtn.jsx
│      │         ├── Columns.jsx
│      │         ├── Header.jsx
│      │         ├── Modal.jsx
│      │         ├── ModalBtn.jsx
│      │         └── ModalInputBox.jsx
│      │
│      ├── context/ 
│      │         ├── AppProvider.jsx  
│      │         ├── modalContext.jsx
│      │         └── tasksContext.jsx
│      │
│      ├── App.jsx
│      ├── index.css
│      └── main.jsx
│      
├── .gitignore      
├── LISCENSE
├── README.md      
├── eslint.config.js      
├── index.html      
├── package-lock.json     
├── package.json      
└── vite.congif.js
```

## Liscense 

MIT License - Copyright (c) 2026 Dylan Jones

