# 📝 Blog Management System

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

A robust and simple **Blog Management System** built with **Node.js**, **Express**, and **EJS**. This application allows users to sign up, sign in, and manage their blog posts with full CRUD (Create, Read, Update, Delete) functionality. Authentication is handled securely using sessions and bcrypt.

---

## ✨ Features

*   **🔒 User Authentication**: Secure Signup and Signin functionality using `bcryptjs` for password hashing.
*   **🔑 Session Management**: User sessions are managed with `express-session` to keep users logged in.
*   **📝 Create Posts**: Authenticated users can create new blog posts with a title and content.
*   **👀 View Posts**: View a list of all blog posts and read individual post details.
*   **✏️ Edit Posts**: Users can edit their existing posts.
*   **❌ Delete Posts**: Users can remove posts they no longer want.
*   **🛡️ Protected Routes**: Middleware ensures that only authenticated users can access specific routes (like creating or editing posts).
*   **🎨 Responsive Design**: Clean and responsive UI using EJS templates and basic CSS/Bootstrap.

---

## 🛠️ Tech Stack

*   **Backend**: Node.js, Express.js
*   **Templating Engine**: EJS (Embedded JavaScript templating)
*   **Database**: JSON files (file-system based storage for simplicity) located in `data/`
*   **Authentication**: `bcryptjs`, `express-session`
*   **Utilities**: `body-parser`, `method-override`, `uuid`

---

## 🚀 Prerequisites

Before running this project, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (v14 or higher recommended)
*   [npm](https://www.npmjs.com/) (Node Package Manager)

---

## 📦 Installation

1.  **Clone the repository** (if applicable) or download the source code:
    ```bash
    git clone <https://github.com/divyasolanki07/Blog-Management-System.git>
    cd NodeNest
    ```

2.  **Install Dependencies**:
    Navigate to the project directory and run:
    ```bash
    npm install
    ```

---

## 🏃‍♂️ Usage

1.  **Start the Server**:
    Run the application using Node.js:
    ```bash
    node app.js
    ```
    *Or if you have `nodemon` installed for development:*
    ```bash
    nodemon app.js
    ```

2.  **Access the Application**:
    Open your web browser and go to:
    ```
    http://localhost:5000
    ```

3.  **Navigate**:
    *   You will be redirected to the **Signin** page.
    *   **Sign up** for a new account if you don't have one.
    *   Once logged in, you can view, create, edit, and delete posts.

---

## 📂 Project Structure

```text
BlogPr/
├── data/               # JSON files for data storage
│   ├── posts.json      # Stores blog posts
│   └── users.json      # Stores user credentials
├── middleware/         # Custom middleware
│   └── authMiddleware.js # Authentication checks
├── models/             # Data models
│   ├── postModel.js    # Post data logic
│   └── userModel.js    # User data logic
├── node_modules/       # Installed dependencies
├── public/             # Static files (CSS, JS, Images)
├── routes/             # Express routes
│   ├── auth.js         # Authentication routes
│   └── posts.js        # Blog post routes
├── views/              # EJS Templates
│   ├── auth/           # Login/Signup views
│   ├── partials/       # Reusable headers/footers
│   └── posts/          # Post-related views
├── app.js              # Main application entry point
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

---

## 📦 Dependencies

| Package | Description |
| :--- | :--- |
| `express` | Fast, unopinionated, minimalist web framework for Node.js. |
| `ejs` | Embedded JavaScript templates. |
| `bcryptjs` | Library to help you hash passwords. |
| `body-parser` | Node.js body parsing middleware. |
| `express-session`| Simple session middleware for Express. |
| `method-override`| Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it. |
| `uuid` | For the creation of RFC4122 UUIDs. |

---

## 📄 License

This project is licensed under the **ISC License**.

---
