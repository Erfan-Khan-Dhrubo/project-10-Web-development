# 🌿 GrowTogether – Gardening Community & Resource Hub  

**GrowTogether** is a full-stack MERN platform built for gardening enthusiasts to connect, share tips, and grow together.  
Users can explore public tips, post their own gardening advice, discover active gardeners, and interact through likes, filters, and themes — all within a clean and responsive interface.  

---

## 🔗 Live Site  
👉 [GrowTogether](https://project-10-web-development.web.app)  

---

## 🧰 Tech Stack  

| Category | Technology |
|-----------|-------------|
| **Frontend** | React.js, Tailwind CSS, Axios, React Router |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Auth** | Firebase (Email/Google) |
| **UI Tools** | Lottie React, Simple Typewriter, SweetAlert2, Toastify |

---

## ✨ Core Features  

### 🔐 Authentication  
- Email/Password login and registration with **Firebase**  
- **Google Sign-In** support  
- Password validation (8+ chars, 1 uppercase, 1 lowercase, 1 special char)  
- Dynamic navbar: user photo, hover name, logout button  
- Success/error alerts using **Toastify** or **SweetAlert2**  

---

### 🌱 Gardening Tips (CRUD)  
- **Add Tip (Private Route):** Title, Type, Difficulty, Category, Description, Image, Availability  
- **Browse Tips:** Displays all *public* tips with filter by difficulty  
- **Tip Details:** Full info with a **Like button** that updates count in MongoDB  
- **My Tips:** Users can view, update, and delete their own tips (public/hidden)  
- **Update Tip:** Pre-filled form with instant success feedback  

---

### 🧑‍🌾 Explore Gardeners  
- Displays all gardener profiles (from DB or JSON)  
- Includes name, experience, status, image, total shared tips  
- Active gardeners (6) dynamically shown on Home page  

---

### 🏡 Home Page  
- **Slider/Banner:** Dynamic slides with event info  
- **Featured Gardeners:** Shows active profiles  
- **Trending Tips:** Top 6 most liked tips  
- Extra static/dynamic sections (e.g., plant care, composting tips)  

---

### 🌟 Extra Functionalities  
- 🌗 **Dark/Light Theme Toggle**  
- 🔍 **Filtering System** by difficulty  
- ❤️ **Like System** – real-time updates in DB  
- ✨ **Animations** with Lottie React & Simple Typewriter  
- 📱 **Fully Responsive** on all devices  

---



## 💻 Setup & Instructions  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Erfan-Khan-Dhrubo/project-10-Web-development.git
   cd project-10-Web-development
   ```

2. **Backend setup**  
   Open a terminal and run:  
   ```bash
   # 1️⃣ Navigate to the project directory
   cd forntend
   
   # 2️⃣ Install dependencies
   npm install

    # 3️⃣ Create a .env file and add Firebase credentials
   MONGO_URL

   # 4️⃣ Start the development server
   npm run dev 
   ```

3. **Frontend setup**  
   Open another terminal and run:  
   ```bash

   # 1️⃣ Navigate to the project directory
   cd forntend

   # 2️⃣ Install dependencies
   npm install

   # 3️⃣ Create a .env file and add Firebase credentials
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_sender_id
   VITE_appId=your_app_id

   # 4️⃣ Start the development server
   npm run dev 
   ```

## A visual representation of my page.

<img src="/Web pic/pic 1.png">
