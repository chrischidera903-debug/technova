import seedProducts from "../utils/seedProducts";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

function ProductGrid(props) {
  const selectedCategory = props.selectedCategory;
  const [localProducts, setLocalProducts] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem("products");
    const parsed = JSON.parse(stored);
    setLocalProducts(parsed);
  }, []);
  const productsToDisplay = props.products || localProducts;
  const filteredProducts = productsToDisplay.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory,
  );

  return (
    <>
      <div className="w-full  max-w-6xl mx-auto px-4 mt-6" id="products">
        <h2 className="font-bold text-2xl text-center font-sans mb-4 mt-9">
          Browse From Our List Of Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4 scrollbar-hide ">
          {filteredProducts.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              addToCart={props.addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default ProductGrid;
