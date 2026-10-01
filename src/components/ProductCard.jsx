function ProductCard(props) {
  return (
    <div>
      <div className="w-full max-w-sm overflow-hidden bg-blue-50 pb-4 rounded-xl shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl ">
        <div className="h-64 aspect-square overflow-x-hidden w-full bg-gray-100 ">
          <img
            src={props.product.image}
            alt={props.product.name}
            className="w-full h-full  "
          />
        </div>
        <div className="p-5">
          <p className="font-medium text-gray-500 text-sm">
            {props.product.brand}
          </p>
          <h3 className="font-semibold mt-1  text-gray-900">
            {props.product.name}
          </h3>
          <p className="font-bold mt-2  text-lg">${props.product.price}</p>

          <button
            onClick={() => props.addToCart(props.product)}
            className="bg-blue-600 py-2 w-full h-9 rounded-lg py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-95 mt-4 "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
