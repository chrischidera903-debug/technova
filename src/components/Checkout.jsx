import { useState } from "react";
function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="w-full max-w-md mx-auto mt-45 p-6 bg-white rounded-xl shadow-md">
      {isSubmitted ? (
        <p className="text-green-600 font-bold text-lg">
          Thanks, order placed!
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsSubmitted(true);
          }}
          className="flex flex-col gap-4"
        >
          <label htmlFor="name">
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border rounded p-2 mt-1"
            />
          </label>
          <label htmlFor="email">
            {" "}
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border rounded p-2 mt-1"
            />
          </label>
          <label htmlFor="address">
            {" "}
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full border rounded p-2 mt-1"
            />
          </label>
          <button className="bg-blue-600 text-white rounded p-2 mt-2">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
export default Checkout;
