# mern-project

# DEPLOYMENT:

**BACKEND: AWS**
https://aws.amazon.com

**FRONTEND: NETLIFY**
https://www.netlify.com

# MERN Stack Overview

## 🚀 What is MERN?

**MERN** is a full-stack JavaScript technology stack that enables end-to-end development using a single programming language — JavaScript — across both client and server sides.

**MERN** is an acronym for:

- **M**ongoDB (NoSQL database)
- **E**xpress.js (Backend framework)
- **R**eact.js (Frontend library)
- **N**ode.js (JavaScript runtime environment)

---

## 🔧 Key Components

### 🖥️ Frontend: React.js

React is a powerful JavaScript library used for building user interfaces, primarily single-page applications.

#### Features:

- Component-based architecture
- Virtual DOM for fast rendering
- State management (via hooks, Context API, or Redux)
- Integration with APIs via Axios or Fetch

#### Common Tools Used:

- React Router
- Axios or Fetch API
- Redux or Context API
- Tailwind CSS, Bootstrap, or Material-UI (optional for styling)

---

### ⚙️ Backend: Node.js + Express.js

Node.js is a JavaScript runtime that allows you to run JS on the server, and Express.js is a lightweight web application framework built on top of Node.

#### Features:

- RESTful API development
- Middleware for request/response handling
- Route handling and HTTP methods support
- Integration with databases like MongoDB
- Authentication (JWT, OAuth)

#### Common Tools Used:

- Express Router
- Body-parser, CORS, Morgan
- JWT for authentication
- Bcrypt for password hashing

---

### 🗄️ Database: MongoDB

MongoDB is a NoSQL, document-oriented database that stores data in JSON-like format.

#### Features:

- Schema-less (flexible data model)
- Works well with JavaScript through Mongoose
- Scalable and fast
- Integrated with cloud via MongoDB Atlas

#### Tools:

- Mongoose ODM (Object Data Modeling)
- MongoDB Compass (GUI tool for database)

---

## 🧩 How Components Interact

1. **React.js (Frontend)** sends HTTP requests to the backend API using Axios or Fetch.
2. **Express.js + Node.js (Backend)** receives requests, handles logic, accesses the MongoDB database, and sends responses.
3. **MongoDB** stores/retrieves data, and returns it to the backend.
4. Backend sends processed data back to the frontend, which updates the UI accordingly.

---

## Project Structure)

/client → React frontend

/server → Node/Express backend

/models → Mongoose schemas

/routes → API route definitions

/controllers → Workout logic

/config → DB connection & env setup
