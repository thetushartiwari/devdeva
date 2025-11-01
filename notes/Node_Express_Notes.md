
# ⚡ Node.js & Express.js — Complete Notes (2025 Edition)

> Goal: Build strong basics → make one project in Node.js → then move to Express.js → finally React/Next.js.

---

## 🧠 1. What & Why Node.js

### 🔹 What is Node.js?
Node.js is a **JavaScript runtime environment** built on **Chrome’s V8 engine** that lets you run JavaScript **outside the browser** — e.g., on your computer or server.

### 🔹 Why do we need it?
- JavaScript originally worked **only inside browsers**.
- The V8 engine runs JS, but Node.js extended this power to **servers and systems**.
- Node.js gives JS the ability to:
  - Create web servers
  - Handle APIs, databases, authentication, and business logic
  - Perform file system operations

### 🔹 Main Use:
- Server-side rendering
- API creation
- Database interaction

---

## ⚙️ 2. Creating a Server in Node.js

```js
const http = require("http"); // Import HTTP module

// Create server
const server = http.createServer((req, res) => {
  console.log("Hello, World!");
});

// Start listening on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
````

🧩 `http.createServer()` → Creates the server
🧩 `(req, res)` → Request and Response objects
🧩 `server.listen(3000)` → Starts the server on port 3000

---

## 🔍 3. Understanding `req` and `res` Objects

```js
const server = http.createServer((req, res) => {
  console.log("URL:", req.url);
  console.log("Method:", req.method);
  console.log("Headers:", req.headers);
});

server.listen(3000);
```

### 🧾 Explanation:

* `req.url` → URL of the request (`/`, `/about`)
* `req.method` → HTTP method (`GET`, `POST`, etc.)
* `req.headers` → Metadata about the request (browser info, content type, etc.)

---

## 🧱 4. Sending an HTML Response

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Page</title></head>");
  res.write("<body><h1>Hello from Node.js!</h1></body>");
  res.write("</html>");
  res.end(); // Must end the response
});

server.listen(3000);
```

---

## 🔄 5. Basic Routing (Different Responses for Different URLs)

```js
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Home Page</h1>");
    return res.end();
  }

  if (url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>About Us</h1>");
    return res.end();
  }

  // Default fallback
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>404 Page Not Found</h1>");
  res.end();
});

server.listen(3000);
```

---

## 📁 6. File System Module (`fs`)

### 🔹 Create or Write to a File (Synchronous)

```js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/create-file") {
    fs.writeFileSync("NewFile.txt", "Hello World!");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>File Created!</h1>");
  res.end();
});

server.listen(3000);
```

### ⚡ Asynchronous (Non-blocking Version)

```js
fs.writeFile("NewFile.txt", "Hello World!", (err) => {
  if (err) console.error(err);
  res.statusCode = 302;
  res.setHeader("Location", "/");
  res.end();
});
```

---

## 🌊 7. Streams & Buffers

### 🔹 Stream

Continuous flow of data (like water through a pipe).

### 🔹 Buffer

Temporary storage for chunks of data before processing.

✅ Helps handle **large data (videos, files, etc.)** efficiently.

💡 Analogy: Think of a water tank → pipe → tap system.

---

## 🔁 8. Event Loop

Node.js is **single-threaded** but uses **non-blocking I/O** with an **event loop**.

💡 Analogy:

> CEO (main thread) assigns tasks to employees (kernel threads).
> While employees work, the CEO keeps taking new tasks.

This allows Node.js to handle **many requests simultaneously**.

---

## 📦 9. Modules & Exports

### `handler.js`

```js
const requestHandler = (req, res) => {
  res.write("Hello from module!");
  res.end();
};

module.exports = {
  handler: requestHandler,
  info: "Reusable module",
};
```

### `app.js`

```js
const { handler, info } = require("./handler");
console.log(info);
```

---

## 🧰 10. NPM (Node Package Manager)

### Common Commands

```bash
npm init -y                    # Creates package.json
npm install nodemon --save-dev # Development dependency
npm install express --save     # Production dependency
```

### Add Script in `package.json`

```json
"scripts": {
  "start": "nodemon app.js"
}
```

💡 `package-lock.json` locks dependency versions for consistent installs.

---

## 🚀 11. Express.js — Simplified Node Framework

### 🔹 Why Express?

Manually handling routes and responses in Node.js is cumbersome.
**Express.js** makes it modular, cleaner, and faster using **middlewares**.

---

### ✅ Install & Basic Setup

```bash
npm install express
```

```js
const express = require("express");
const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log("Middleware 1");
  next(); // Pass control to the next middleware
});

// Middleware 2
app.use((req, res, next) => {
  console.log("Middleware 2");
  res.send("<h1>Hello from Express.js!</h1>");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

💡 In Express, `app.listen(3000)` replaces `http.createServer(app)`.

---

## 🧭 12. Routing in Express

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.post("/submit", (req, res) => {
  res.send("Form Submitted!");
});

app.listen(3000);
```

✅ `res.send()` automatically sets headers and ends the response.

---

## 📥 13. Parsing Form Data

### Install body-parser

```bash
npm install body-parser
```

### Use it in Express

```js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/submit", (req, res) => {
  console.log(req.body); // Access submitted form data
  res.redirect("/");
});

app.listen(3000);
```

---

## 🗂️ 14. Express Router (For Organized Routes)

### `routes/home.js`

```js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Home Page (Modular Route)</h1>");
});

module.exports = router;
```

### `app.js`

```js
const express = require("express");
const homeRoutes = require("./routes/home");

const app = express();

app.use(homeRoutes); // Use imported routes
app.listen(3000);
```

---

## 🧾 Quick Revision Table

| Concept            | Key Idea / Method           | Example            |
| ------------------ | --------------------------- | ------------------ |
| Create Server      | `http.createServer()`       | Basic Node server  |
| Send HTML          | `res.write()` + `res.end()` | Manual response    |
| Routing            | `req.url`, `if-else`        | `/`, `/about`      |
| File System        | `fs.writeFile()`            | Create / edit file |
| Non-blocking       | Async callbacks             | Non-blocking I/O   |
| Express Middleware | `app.use()`                 | Reusable functions |
| Body Parser        | `body-parser`               | `req.body` access  |
| Express Router     | `express.Router()`          | Modular routes     |

---

