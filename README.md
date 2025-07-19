# 📝 Blog Website

Welcome to the Blog Website! This project is a fully-featured blogging platform where users can register, post blogs, comment, and manage wishlists. Built with React and Firebase for the front end and Node.js, Express, and MongoDB for the back end, it offers a dynamic and responsive user experience.

## 🌐 Live Site

[👉 Visit the Live Site](https://blog-site-c0adb.web.app/)  
[🌍 Server on Vercel](https://blog-server-khaki-eta.vercel.app/)

---

## 🎯 Project Purpose

The goal of this project is to create a modern blog platform with secure authentication, a clean UI, and dynamic features like filtering, commenting, wishlisting, and data handling with MongoDB. It demonstrates full-stack development skills and secure deployment practices.

---

## ⚙️ Tech Stack

### Frontend
- React
- Firebase Authentication
- Axios
- React Router DOM
- Framer Motion
- Tailwind CSS / Component Library (Chakra UI, Material UI, etc.)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- Cookie-parser
- CORS

---

## ✨ Key Features

### 🔐 Authentication
- Email/password registration & login
- Google authentication
- Secure route protection with JWT
- Error handling on registration/login
- Firebase environment keys hidden

### 🖥️ Pages & Layout
- Home page with:
  - Hero/Banner
  - Recent Blogs
  - Newsletter Subscription (toast only)
  - Tips section (unique feature)
  - Additional sections

- Navbar:
  - Home
  - All Blogs
  - Featured Blogs
  - Add Blog (private)
  - Wishlist (private)
  - Auth-aware buttons (Login/Register vs. Profile/Logout)

### 📚 Blog Features
- Add blog with:
  - Title, image, category, short & long descriptions
- Update blog (private route)
- View all blogs with:
  - Filtering by category
  - Search by blog title (MongoDB text search)
- Wishlist:
  - Add/remove blog to user's wishlist
  - Server-side filter per user
- Featured blogs:
  - Top 10 blogs based on word count (long description)
  - Sortable table using TanStack Table or similar

### 💬 Blog Details & Comments
- Full blog content view
- Comments section:
  - Only non-owners can comment
  - View all comments with name & profile
  - Comment stored in DB by blog ID
- Conditional textarea and update button

---

## 🔧 Functionality Highlights

- JWT used for protected routes (server and client)
- Cookie-based token stored securely
- 404 Not Found page
- Responsive across all devices
- Reload-safe private routes
- Smooth animations using Framer Motion
- Optional:
  - Loading Skeleton (`react-loading-skeleton`)
  - Photo Viewer (`react-photo-view`)
  - Scroll-based animation with `react-intersection-observer`

---

## 📦 NPM Packages Used

### Client
- `firebase`
- `axios`
- `react-router-dom`
- `framer-motion`
- `react-toastify`
- `react-loading-skeleton`
- `react-photo-view`
- `@tanstack/react-table`
- `react-intersection-observer`
- `dotenv` (for environment)

### Server
- `express`
- `cors`
- `dotenv`
- `mongodb`
- `jsonwebtoken`
- `cookie-parser`

---

## 🧾 Commits

✅ **Client:** 15+ meaningful commits  
✅ **Server:** 8+ meaningful commits

All commits include clear, descriptive messages related to feature additions, fixes, or improvements.

---

## 🛡️ Security

- Firebase keys and MongoDB credentials are stored in `.env` and never pushed to GitHub.
- JWT used to secure private routes with HTTP-only cookies.

---

## ✅ Deployment Checklist

- [x] MongoDB Connected
- [x] Server deployed on Vercel
- [x] CORS configured correctly
- [x] All routes functional in production
- [x] Firebase Auth Domains configured
- [x] Reload-safe on private routes
- [x] No console errors on reload

---

<!-- ## 📁 Repositories

- **Client GitHub:** [Your Client Repo](https://github.com/your-username/client-repo)
- **Server GitHub:** [Your Server Repo](https://github.com/your-username/server-repo) -->

---

## 💡 Tips Section (Home Page Highlight)

We’ve included a unique **Tips** section on the home page featuring blogging and writing inspiration, productivity strategies, and ways to engage audiences – a unique touch to stand out to users and recruiters alike.

---

## 🧑‍💻 Author

Developed with ❤️ by [Al Shahariar Arafat Shawon]  
📧 Email: shahariarshawon.dev@gmail.com
