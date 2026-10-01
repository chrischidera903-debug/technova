import productsData from "../data/products.json";
export default function seedProducts() {
  const existing = localStorage.getItem("products");
  if (existing === null) {
    localStorage.setItem("products", JSON.stringify(productsData));
  }
}
