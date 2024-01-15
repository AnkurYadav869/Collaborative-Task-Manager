# Collaborative Task Manager

A web-based collaborative task manager that allows teams to efficiently organize and manage tasks together. This project is built with Node.js for the backend and React for the frontend.

## Features

-   Create, edit, and delete tasks.
-   Assign tasks to team members.
-   Track task status and due dates.
-   Collaborate with team members in real-time.

## How to Configure in your local env

To start backend in your local env, add a new file "config.js".
add the following snippet in "config.js"

```javascript
const MONGO_URL = "add_your mongo_url";
const JWT_TOKEN = "add_your_token";
module.exports = { MONGO_URL, JWT_TOKEN };
```
