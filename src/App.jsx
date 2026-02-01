import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

const CART_KEY = "componentcorner-cart";

function App() {
  // Products array (shared across routes)
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://placehold.co/600x400?text=Wireless+Headphones",
      description: "Premium noise-cancelling headphones with 30-hour battery life",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 249.99,
      image: "https://placehold.co/600x400?text=Smart+Watch",
      description: "Fitness tracker with heart rate monitor and GPS",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://placehold.co/600x400?text=Bluetooth+Speaker",
      description: "Portable waterproof speaker with 360-degree sound",
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://placehold.co/600x400?text=Laptop+Stand",
      description: "Ergonomic aluminum stand for laptops and tablets",
    },
    {
      id: 5,
      name: "Webcam",
      price: 129.99,
      image: "https://placehold.co/600x400?text=Webcam",
      description: "4K webcam with auto-focus and noise reduction",
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://placehold.co/600x400?text=Mechanical+Keyboard",
      description: "RGB backlit keyboard with custom switches",
    },
  ];

  // Cart state (array of product objects). Persist to localStorage.
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.warn("Could not load cart from localStorage:", error);
      return [];
    }
  });

  // Save cart whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (error) {
      console.warn("Could not save cart to localStorage:", error);
    }
  }, [cart]);

  // Add to cart: push a product object (duplicates allowed)
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Remove by index so duplicates can be removed independently
  const removeFromCart = (removeIndex) => {
    setCart((prev) => prev.filter((_, index) => index !== removeIndex));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <BrowserRouter>
      <div className="app">
        <Header storeName="ComponentCorner" cartCount={cart.length} />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/products"
            element={<ProductsPage products={products} addToCart={addToCart} />}
          />

          <Route
            path="/products/:id"
            element={
              <ProductDetailsPage products={products} addToCart={addToCart} />
            }
          />

          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                cartTotal={cartTotal}
                removeFromCart={removeFromCart}
              />
            }
          />

          <Route
            path="*"
            element={
              <main className="page">
                <h2>Page Not Found</h2>
              </main>
            }
          />
        </Routes>

        <Footer
          storeName="ComponentCorner"
          email="support@componentcorner.example"
          phone="(555) 123-4567"
          address="123 React Lane, Phoenix, AZ"
          copyright={`© ${new Date().getFullYear()} ComponentCorner. All rights reserved.`}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
