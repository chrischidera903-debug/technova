function ProductCard(props) {
  return (
    <div className="h-full">
      <div className="h-full flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div
          className={`${props.imageHeight || "h-36 sm:h-64"} w-full overflow-hidden bg-gray-100`}
        >
          <img
            src={props.product.image}
            alt={props.product.name}
            className="w-full h-full "
          />
        </div>

        <div className="flex flex-col flex-1 p-3 sm:p-5">
          <p className="font-medium text-gray-500 text-sm">
            {props.product.brand}
          </p>
          <h3 className="font-semibold mt-1 text-gray-900 text-sm sm:text-base line-clamp-2">
            {props.product.name}
          </h3>
          <p className="font-bold mt-1 text-base sm:text-lg">
            ${props.product.price}
          </p>

          <button
            onClick={() => props.addToCart(props.product)}
            className="mt-auto w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
