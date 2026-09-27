👕 Yatra Clothing Store
React Mini E-Commerce Product Catalog & Cart
A responsive single-page clothing store built with React.js to demonstrate reusable components, props, state management, hooks, routing, controlled forms, cart functionality, and localStorage.
📖 Table of Contents
Introduction
Objectives
Features
Technologies Used
Project Structure
Application Pages
React Concepts Used
Important Code Explanation
API Documentation
Installation and Setup
Screenshots
Testing
Challenges
Limitations
Future Enhancements
GitHub Repository
References
Conclusion
License
📌 Introduction
Yatra Clothing Store is a responsive mini e-commerce web application developed using React.js. It allows users to browse clothing products, search and filter products, sort products, add products to a shopping cart, manage quantities, and complete a demo checkout process.

This project was developed as a React Course Project based on Option 5: Mini E-Commerce Product Catalog & Cart.

The project focuses on applying React concepts in a practical real-world application rather than creating only static pages.

Note: This is a frontend educational project. No real payment is processed and no real order is submitted to a server.

🎯 Objectives

Build a functional Single Page Application using React.js.

Understand and implement reusable functional components.

Use props for parent-to-child data communication.

Use useState for interactive application state.

Use useEffect for side effects and localStorage.

Implement product search, filtering, and sorting.

Develop a functional shopping cart.

Implement quantity management and item removal.

Create a controlled checkout form.

Use React Router for multiple application views.

Store cart information using browser localStorage.

Create a responsive interface for desktop, tablet, and mobile devices.

Practice Git and GitHub version control.

✨ Features

🛍️ Product Catalog

Multiple clothing products.

Product image, name, category, description, and price.

Prices displayed in Nepalese Rupees (NPR).

Add products directly to the cart.

🔎 Product Search

Users can search for products by name.

Example:

hoodie

🏷️ Category Filtering

Products can be filtered by:

All

T-Shirts

Hoodies

Jeans

Jackets

Shoes

↕️ Product Sorting

Default

Price: Low to High

Price: High to Low

Name: A-Z

Name: Z-A

🛒 Shopping Cart

Users can add products, increase/decrease quantity, remove products, and view subtotal, shipping, and total price.

💾 Persistent Cart

The cart is saved in browser localStorage using:

yatra-cart

🧾 Demo Checkout

The checkout page contains controlled fields for:

Full Name

Email

Phone

Address

After submission, a demo success message is displayed.

📱 Responsive Design

The application is designed for desktop, laptop, tablet, and mobile devices.

🛠️ Technologies Used

Technology

Purpose

React.js

User interface

JavaScript ES6+

Application logic

HTML5

Page structure

CSS3

Styling and responsive layout

React Router DOM

Client-side navigation

Vite

Development and build tool

Browser localStorage

Persistent cart data

Git

Version control

GitHub

Repository

VS Code

Development environment

📁 Project Structure

yatra-react-ecommerce/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── CartItem.jsx
│   │   └── CartSummary.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Cart.jsx
│   │   └── Checkout.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
└── README.md

Folder Responsibilities

components/ — Reusable UI components.

pages/ — Home, Cart, and Checkout views.

data/ — Local mock product data.

App.jsx — Main cart state, cart operations, localStorage, and routes.

main.jsx — React entry point and BrowserRouter.

index.css — Global and responsive styling.

🧭 Application Pages

Route

Page

Main Purpose

/

Home

Product catalog, search, filter, sort

/cart

Cart

Manage cart and view totals

/checkout

Checkout

Customer form and demo order

⚛️ React Concepts Used

Functional Components

The application uses functional components only, including Navbar, Footer, ProductCard, ProductGrid, SearchBar, CategoryFilter, CartItem, and CartSummary.

Props

Props pass data and callback functions between components:

<ProductCard
  product={product}
  addToCart={addToCart}
/>

useState

Used for search, category, sorting, cart data, checkout form data, and success messages.

const [search, setSearch] = useState("");

useEffect

Used to load and save cart information through localStorage.

List Rendering

.map() renders products and other lists:

products.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
  />
))

Conditional Rendering

Used for empty cart, no products found, checkout availability, and success messages.

Controlled Forms

Checkout input values are controlled by React state.

Event Handling

The project uses onClick, onChange, and onSubmit.

React Router

Navigation is provided between /, /cart, and /checkout.

💡 Important Code Explanation

Adding a Product to the Cart

const addToCart = (product) => {
  setCart((currentCart) => {
    const existing = currentCart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      return currentCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [
      ...currentCart,
      {
        ...product,
        quantity: 1
      }
    ];
  });
};

If the product already exists, its quantity increases. Otherwise, a new cart item is created.

Removing an Item

const removeItem = (id) => {
  setCart((currentCart) =>
    currentCart.filter((item) => item.id !== id)
  );
};

Calculating Subtotal

const subtotal = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

Saving Cart to localStorage

useEffect(() => {
  localStorage.setItem(
    "yatra-cart",
    JSON.stringify(cart)
  );
}, [cart]);

JSON.stringify() converts the cart array into a string suitable for localStorage.

🔌 API Documentation

This project currently does not use an external API.

Product information is stored locally in:

src/data/products.js

Example:

{
  id: 1,
  name: "Classic T-Shirt",
  category: "T-Shirts",
  price: 1299,
  description: "Comfortable cotton T-shirt.",
  image: "image-url"
}

Possible Future API

GET    /api/products
GET    /api/products/:id
POST   /api/orders
GET    /api/orders/:id

🚀 Installation and Setup

Prerequisites

Install:

Node.js

npm

Git

VS Code

1. Clone the Repository

git clone YOUR_GITHUB_REPOSITORY_URL
cd yatra-react-ecommerce

2. Install Dependencies

npm install

If React Router is not installed:

npm install react-router-dom

3. Start the Development Server

npm run dev

Open:

http://localhost:5173

4. Production Build

npm run build

Preview the build:

npm run preview

📸 Screenshots

Create a screenshots folder:

screenshots/
├── home.png
├── search-filter.png
├── cart.png
└── checkout.png

Then add:

🏠 Product Catalog



🔎 Search and Filter



🛒 Shopping Cart



🧾 Checkout



Add the actual screenshots before submitting the project.

🔄 Application Flow

User opens website
        ↓
Product Catalog
        ↓
Search / Filter / Sort
        ↓
Select Product
        ↓
Add to Cart
        ↓
Shopping Cart
        ↓
Change Quantity / Remove
        ↓
Checkout
        ↓
Enter Customer Information
        ↓
Place Demo Order
        ↓
Success Message

🧪 Testing

Test Case

Expected Result

Homepage loads

Products are displayed

Product search

Matching products display

Category filter

Products are filtered

Product sorting

Products reorder correctly

Add to Cart

Product appears in cart

Add same product

Quantity increases

Increase quantity

Quantity increases

Decrease quantity

Quantity decreases

Remove product

Product disappears

Cart total

Total updates correctly

Page refresh

Cart remains available

Checkout page

Form displays

Form submission

Success message appears

Empty cart

Empty-cart message appears

Router navigation

All routes work

Responsive layout

UI adapts to smaller screens

🧩 Challenges

Component Organization

The application needed to be divided into meaningful reusable components.

Solution: UI was separated into components such as ProductCard, CartItem, Navbar, and CartSummary.

Cart State Management

Managing product quantities and removal required careful state updates.

Solution: The main cart state was maintained in App.jsx, with callback functions passed through props.

LocalStorage

localStorage stores strings rather than JavaScript arrays or objects.

Solution: JSON.stringify() was used for saving and JSON.parse() for retrieving.

Search, Filter, and Sort

Multiple operations had to work together.

Solution: JavaScript array methods such as filter(), sort(), and map() were used.

Responsive Design

The interface needed to work on different screen sizes.

Solution: CSS media queries were used for responsive layouts.

⚠️ Limitations

This is a frontend-only educational project.

Current limitations:

No backend server.

No database.

Products are local mock data.

No user authentication.

No real payment gateway.

Checkout is only a demonstration.

Orders are not stored on a server.

Inventory is not managed.

No real-time stock updates.

No administrator dashboard.

🔮 Future Enhancements

Possible improvements include:

User registration and login.

Node.js/Express backend.

MongoDB or MySQL database.

Admin dashboard.

Product management.

Real product API.

Real payment integration.

eSewa or Khalti integration.

Order history.

Wishlist.

Product reviews and ratings.

User profiles.

Stock management.

Product image upload.

Email order confirmation.

Advanced filtering.

Production deployment.

🐙 GitHub Repository

Repository Name:

yatra-react-ecommerce

Repository URL:

YOUR_GITHUB_REPOSITORY_URL

Replace the placeholder with your actual public GitHub repository URL before submission.

Recommended Commit History

1. Initial React project setup
2. Create product data and folder structure
3. Build responsive navbar and footer
4. Create product card and product grid
5. Add search and category filtering
6. Add product sorting functionality
7. Implement shopping cart functionality
8. Add localStorage persistence
9. Create checkout page and controlled form
10. Improve responsive design and documentation

📚 References

React Documentation

React Router Documentation

MDN Web Docs — JavaScript

MDN Web Docs — CSS

Vite Documentation

Git Documentation

GitHub Documentation

📝 Conclusion

Yatra Clothing Store demonstrates how React.js can be used to build an interactive and responsive e-commerce application.

The project applies important React concepts including functional components, props, useState, useEffect, event handling, conditional rendering, list rendering, controlled forms, and React Router.

The shopping cart demonstrates state management between multiple components, while localStorage provides persistence across page refreshes. Search, filtering, sorting, and responsive design further improve the application's usability.

Although the current application does not include a backend, database, authentication, or real payment processing, it provides a strong foundation for developing a complete e-commerce system in the future.

👨‍💻 Project Information

Information

Details

Project

Yatra Clothing Store

Project Type

Mini E-Commerce SPA

Course

React.js Course Project

Assignment Option

Option 5 — Mini E-Commerce Product Catalog & Cart

Frontend

React.js

Build Tool

Vite

Routing

React Router DOM

Styling

CSS3

Data

Local Mock Product Data

Cart Storage

Browser localStorage

Payment

Demo Only

Backend

Not Included

Database

Not Included

📄 License

This project was created for educational purposes as part of a React.js course project.

You may modify and extend the project for learning and academic purposes.