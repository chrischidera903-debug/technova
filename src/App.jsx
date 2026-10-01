import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import Checkout from "./components/Checkout";
import Navbar from "./components/Nabvar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import seedProducts from "./utils/seedProducts";
import Admin from "./components/Admin";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";
import FeaturedProducts from "./components/FeaturedProducts";
import { Routes, Route } from "react-router-dom";
function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    seedProducts();
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  function increaseQuantity(productId) {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }
  function reduceQuantity(productId) {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    );
  }
  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }
  function deleteCart(product) {
    setCartItems([]);
  }
  function removeItem(product) {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  }
  return (
    <>
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CategorySection setSelectedCategory={setSelectedCategory} />
              <FeaturedProducts
                addToCart={addToCart}
                selectedCategory={selectedCategory}
              />
            </>
          }
        />

        <Route
          path="/products"
          element={
            <ProductGrid
              addToCart={addToCart}
              selectedCategory={selectedCategory}
            />
          }
        />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeItem={removeItem}
              increaseQuantity={increaseQuantity}
              reduceQuantity={reduceQuantity}
            />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
