# Shoe Store 🥿👟

A simple **Next.js shoe selling web app**.  
It has a modern homepage with hero section, featured products, and navigation to view, add, and manage products.  
Built with **Next.js, MongoDB, and Express API**.

---

## 🚀 Features
- Home page with navigation bar, hero, featured products, and footer
- Product listing page
- Single product details page
- Add new products page (form connected to backend)
- User authentication (Login with NextAuth planned)

---

## 🛠️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/shoe-store.git
cd shoe-store
```

### 2. Install dependencies
For frontend (Next.js):
```bash
npm install
```

For backend (Express API):
```bash
cd api
npm install
```

### 3. Environment variables  
Create a `.env.local` file inside the **frontend root**:
```env
MONGO_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

And inside the **backend folder (`api/.env`)**:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the project
Frontend (Next.js):
```bash
npm run dev
```
👉 App runs at: [http://localhost:3000](http://localhost:3000)

Backend (Express API):
```bash
node index.js
```
👉 API runs at: [http://localhost:5000](http://localhost:5000)

---

## 📍 Route Summary

### Frontend (Next.js)
- `/` → Home (Nav, Hero, Featured Products, Footer)
- `/products` → All products page
- `/products/[id]` → Single product details
- `/add-product` → Add new product form
- `/login` → Login page

### Backend (Express API)
- `GET /products` → Get all products
- `GET /products/:id` → Get single product by ID
- `POST /products` → Add a new product

---

## 🤝 Contribution
PRs are welcome! Feel free to fork and improve the project.

---

## 📜 License
MIT License © 2025
