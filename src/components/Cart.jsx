import { useNavigate } from "react-router-dom";
function Cart(props) {
  const navigate = useNavigate();
  const total = props.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <div className="mt-[150px] flex flex-col lg:flex-row gap-8 items-start">
      <div className="flex-1 ">
        <h2>Cart ({props.cartItems.length} items)</h2>
        {props.cartItems.map((product) => (
          <div
            key={product.id}
            className="border py-3 mb-2 px-2 lg:w-3/5 sm:w-full"
          >
            <div className="flex flex-row gap-3 ">
              <div className="w-[190px] h-[150px]">
                <img className="w-full h-full" src={product.image} />
              </div>
              <div className="flex flex-col gap-4  ">
                <p className="font-semibold">{product.name}</p>
                <p className="w-4/5">{product.description}</p>
                <div className="flex flex-row items-center w-[100px] h-[36px] border border-gray-400 bp-3 mb-2 text-center">
                  <button
                    className="text-center w-1/3 font-bold"
                    onClick={() => props.reducQuantity(product.id)}
                  >
                    -{" "}
                  </button>
                  <p className="w-1/3 text-center">{product.quantity}</p>
                  <button
                    onClick={() => props.increaseQuantity(product.id)}
                    className="w-1/3 text-center font-bold"
                  >
                    {" "}
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-bold">${product.price}</p>
                <button
                  className="w-30.5 bg-red-500 h-9  text-white text-sm px-3 py-1 rounded mt-1 "
                  onClick={() => props.removeItem(product)}
                >
                  🗑 Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" border border-gray-200 rounded-lg p-6  lg:top-24 ">
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
        <div className="">
          <div className="flex flex-row gap-5">
            <p>SubTotal</p>
            <p> ${total}</p>
          </div>
          <div className="flex flex-row gap-5"></div>
          <p>Shipping Tax </p>
          <p>Calculated at checkout </p>
        </div>
        <h3>Total: ${total}</h3>
        <button
          className="w-37.5 bg-green-600 h-9  text-white text-lg px-3 py-1 rounded mt-1 font-bold"
          id="#/checkout"
          onClick={() => navigate("/checkout")}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}
export default Cart;
