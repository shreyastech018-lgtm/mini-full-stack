# Create Post & Feed

A full-stack social media-style web application where users can create posts with images and captions and view them in a dynamic feed.

The project demonstrates a complete frontend-to-backend workflow using React, Node.js, Express, MongoDB, and ImageKit.

## 🚀 Features

* Create a post with an image and caption
* Upload and store images using ImageKit
* View posts in a dynamic feed
* REST API-based frontend and backend communication
* MongoDB database for storing post data
* Responsive React frontend
* Backend structured with models, services, and database configuration
* Environment variables for secure configuration

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* ImageKit
* REST APIs

## 📁 Project Structure

```text
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── db/
│   ├── models/
│   ├── services/
│   ├── app.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🔄 How It Works

1. The user creates a post from the React frontend.
2. The frontend sends the post data and image to the Express backend.
3. The backend processes the request and uploads the image through ImageKit.
4. Post information is stored in MongoDB.
5. The feed requests the posts through a REST API.
6. The frontend displays the posts dynamically.

## 🔌 API

### Create Post

```http
POST /create-post
```

Creates a new post with an image and caption.

### Get Posts

```http
GET /posts
```

Fetches posts to display in the feed.

> API endpoints may vary depending on the current backend route configuration.

### 5. Run the backend

```bash
npm start
```

### 6. Run the frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

## 🎯 What I Learned

* Building REST APIs with Express
* Connecting a Node.js backend with MongoDB
* Working with Mongoose models
* Handling image uploads
* Connecting React with backend APIs using Axios
* Managing environment variables
* Structuring a full-stack application
* Connecting frontend, backend, database, and external services

## 👨‍💻 Project

This project was built as a hands-on full-stack development project to understand how a React frontend communicates with a Node.js/Express backend and a MongoDB database.
