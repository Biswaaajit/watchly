# Watchly

The Watchly platform is a MERN-based video streaming application that allows users to watch, upload, and interact with videos. It features user authentication, video management, comment handling, and channel operations, providing a seamless experience for content creators and viewers.

## 🚀 Features

- 🔐 **User Authentication**:
  - Secure user registration and login using JWT (JSON Web Token).
  - JWT token verification before fetching data from the backend API.
- 📺 **Video Management**:
  - Upload, update, and delete videos.
  - Retrieve all videos and video details by ID.
- 💬 **Comment Handling**:
  - Users can add, edit, and delete comments on videos.
  - Comments are stored in the database alongside videos.
- 📡 **Channel Management**:
  - Users can create a channel after signing in.
  - Channel owners can manage their videos (edit/delete).
- 🛠️ **Middleware Support**: Uses authentication and validation middleware with `express.Router()` for a secure and modular API.
- 🗄️ **MongoDB Integration**: Efficiently stores user data, video details, channel information, and comments using MongoDB.

## 🛠️ Technologies Used

- **Frontend**: React, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Middleware**: Express Router

## 🌍 Live Demo

You can check out the live version of **Watchly** here:
[Watchly Live](https://watchly-rho.vercel.app/)

## 🔑 Demo User Information

### 🎥 Demo Account 1
- **Email:** `biswajeet@gmail.com`
- **Password:** `123`
- **Channel Name:** `Biswa Blogs`

### 🎥 Demo Account 2
- **Email:** `Abhi@gmail.com`
- **Password:** `456`
- **Channel Name:** `TrailerReview`

### 🎥 Demo Account 3
- **Email:** `gourab@gmail.com`
- **Password:** `789`
- **Channel Name:** `Gaming`
## Deployment
To downlode all node packages

```bash
  npm install
```

To deploy this project run

```bash
  npm run dev
```

