# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# SHA MODESTY — Modesty, beautifully yours.

SHA MODESTY is a modern and elegant modest fashion e-commerce website built with React.js.

The website is designed with a premium, minimal and feminine aesthetic for showcasing and selling modest fashion pieces such as abayas, dresses, hijabs and kaftans.

---

## ✨ Features

- Elegant and responsive fashion website
- Modern SHA MODESTY brand design
- Hero section
- Collection categories
- New Arrivals section
- Product listing
- Product details
- Category filtering
- Shopping cart
- Wishlist
- Quantity management
- Checkout page
- WhatsApp order message
- Responsive navigation
- Mobile-friendly design
- Smooth animations
- JSON Server for product, cart and wishlist data

---

## 🛍️ Categories

The website currently contains four main product categories:

- Abayas
- Dresses
- Hijabs
- Kaftans

Each category contains multiple products.

---

## 🛒 Shopping Features

### Product

Users can:

- View products
- View product details
- View product images
- View product prices
- Filter products by category

### Wishlist

Users can:

- Add products to wishlist
- Remove products from wishlist
- Move wishlist products to cart

### Shopping Cart

Users can:

- Add products to cart
- Increase quantity
- Decrease quantity
- Remove products
- View subtotal
- View total price

### Checkout

Users can enter:

- Full name
- Email
- Phone number
- Address
- City
- State
- PIN code

Payment options:

- Cash on Delivery
- Online Payment

---

## 📱 WhatsApp Order

After completing the checkout form, the website generates an order message containing:

- Customer details
- Shipping address
- Ordered products
- Product quantities
- Total amount
- Payment method

The generated message opens in WhatsApp so the customer can send the order directly.

---

## 💻 Technologies Used

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Framer Motion
- React Icons
- Axios

### Backend / Data

- JSON Server

### Development Tools

- Vite
- JavaScript
- HTML
- CSS
- Git
- GitHub

---

## 📂 Project Structure

```text
OLIVEA/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Collection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Newsletter.jsx
│   │   ├── ProductCard.jsx
│   │   └── Products.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Home.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Shop.jsx
│   │   └── Wishlist.jsx
│   │
│   ├── services/
│   │   ├── apiServices.js
│   │   └── productApi.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── db.json
├── index.html
├── package.json
├── vite.config.js
└── README.md