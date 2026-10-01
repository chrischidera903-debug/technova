import ProductGrid from "./ProductGrid";
import Products from "../data/products.json";
function FeaturedProducts(props) {
  function addFeaturedItems() {
    return Products.filter((item) => item.featured === true);
  }
  return (
    <section className="px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold font-sans">Featured Products</h2>
          <p className="mt-2 text-sm text-gray-500">Explore our top picks</p>
        </div>
        <button className="text-sm font-medium">View All</button>
      </div>
      <ProductGrid
        addToCart={props.addToCart}
        products={addFeaturedItems()}
        selectedCategory={props.selectedCategory}
      />
    </section>
  );
}
export default FeaturedProducts;
