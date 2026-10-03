import { Link } from "react-router-dom";
import products from "../data/products.json";
import Cart from "./Cart";
import { useState } from "react";
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];
function Navbar(props) {
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 left-0 w-full  z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl sm:text-2xl font-bold text-blue-600  ">
            TechNova
          </h1>
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center gap-6 ">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  id={link.id}
                  className="font-medium hover:text-blue-600 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              to="/cart"
              id="cart"
              className="font-medium  hover:text-blue-600 transition"
            >
              🛒Cart
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1 cursor-pointer sm:hidden"
            >
              <span className="w-6 h-1  bg-gray-500"></span>
              <span className="w-6 h-1  bg-gray-500"></span>
              <span className="w-6 h-1  bg-gray-500"></span>
            </button>
          </div>
          {menuOpen && (
            <div className="flex flex-col gap-3 px-6 pb-3 sm:hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="font-medium hover:text-blue-600 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div
          className="categories-scroll flex  gap-6 whitespace-nowrap overflow-x-auto w-full px-4 sm:px-6 py-3 pb-3 border-b border-gray-100"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => props.setSelectedCategory(category)}
              className={`text-gray-700 text-sm  font-medium hover:text-blue-600 transition-colors whitespace-nowrap ${
                props.selectedCategory === category
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
