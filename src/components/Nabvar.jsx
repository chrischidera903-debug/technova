import { Link } from "react-router-dom";
import products from "../data/products.json";
import Cart from "./Cart";
function Navbar(props) {
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full  z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="flex items-center justify-between px-8 py-4">
          <h1 className="text-3xl font-bold text-blue-600  mt-7">TechNova</h1>
          <div className="flex items-center gap-6">
            <Link to="/" className="font-medium hover:text-blue-600 transition">
              Home
            </Link>
            <Link
              to="/products"
              className="font-medium hover:text-blue-600 transition"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="font-medium hover:text-blue-600 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-medium hover:text-blue-600 transition"
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="font-medium hover:text-blue-600 transition"
              id="cart"
            >
              🛒 Cart
            </Link>
          </div>
        </div>
        <div
          className="categories-scroll flex  gap-6 whitespace-nowrap overflow-x-auto w-full mx-7"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => props.setSelectedCategory(category)}
              className="text-gray-700 hover:text-blue-600 transition "
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
