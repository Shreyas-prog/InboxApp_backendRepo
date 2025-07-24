# 🧠 Inbox App – Backend API

This is the backend service for the **Inbox Task Management App**, built with **Node.js**, **Express**, and **MongoDB**. It powers CRUD operations for task items used by the frontend.

---

## 📌 Live API Base URL

**🔗 https://inboxapp-backend.onrender.com/api**

---

## 📦 Features

- ✅ Create a new task
- 📝 Update existing tasks
- ❌ Delete tasks by ID
- 📄 Fetch all tasks

---

## 🛠️ Tech Stack

- Node.js + Express
- MongoDB with Mongoose ODM
- Hosted on: [Render](https://render.com)
- `.env` managed securely for MongoDB credentials

---

## 🚀 API Endpoints

> All endpoints are prefixed with `/api/tasks`

| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| GET    | `/get`         | Fetch all tasks     |
| POST   | `/create`      | Create a new task   |
| POST   | `/update`      | Update an existing task (by ID) |
| POST   | `/delete`      | Delete a task (by ID) |

---

## 🔐 MongoDB Schema

```js
{
  id: String,
  name: String,
  description: String,
  completionTime: String,
  displayEditOptions: Boolean,
  priorityType: String,
  isCompleted: Boolean,
  selectedDate: String,
  extraFields: Mixed,
  createdAt: Date,
  updatedAt: Date
}
