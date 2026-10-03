import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Products from "../data/products.json";

function FeaturedProducts(props) {
  const featuredItems = Products.filter((item) => item.featured === true);

  return (
    <section className="bg-gray-900 px-4 sm:px-6 py-8 sm:py-16">
      <div className="mb-4 sm:mb-8 flex items-end justify-between ">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-sans text-white">
            Featured Products
          </h2>
          <p className="mt-2 text-sm text-white">Explore our top picks</p>
        </div>
        <Link
          to="/products"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          View All
        </Link>
      </div>

      <div
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {featuredItems.map((product) => (
          <div key={product.id} className="snap-start shrink-0 w-52 sm:w-64 ">
            <ProductCard
              product={product}
              addToCart={props.addToCart}
              imageHeight="h-28 sm:h-48"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
