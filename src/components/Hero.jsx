function Hero() {
  return (
    <>
      <section
        className="min-h-175 bg-cover bg-center bg-no-repeat flex items-center px-8 md:px-16 mb-0"
        style={{ backgroundImage: "url('/images/dark-hero-bg.png')" }}
      >
        <div className="w-full  text-white py-16 px-4 text-left font-bold">
          <p className="text-blue-400 text-lg font-semibold mb-3">
            Quality Electronics
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Unbeatable Prices
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-md">
            Shop the latest phones, laptops, and gadgets- all in one place.
          </p>
          <button
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700 hover:text-white transition duration-300"
            onClick={() =>
              document
                .getElementById("products")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop Now
          </button>
        </div>
      </section>
    </>
  );
}
export default Hero;
