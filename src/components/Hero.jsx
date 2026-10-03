function Hero() {
  return (
    <>
      <section
        className="relative w-full min-h-[28rem] sm:min-h-[36rem] md:min-h-[42rem] lg:min-h-[48rem] bg-cover bg-[55%_center] sm:bg-center md:bg-center bg-no-repeat flex items-center px-5 sm:px-8 md:px-16"
        style={{ backgroundImage: "url('/images/dark-hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 w-full max-w-md text-white sm:max-w-lg text-left font-bold ">
          <p className="text-blue-400 text-base sm:text-lg font-semibold mb-2 sm:mb-3">
            Quality Electronics
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-5">
            Unbeatable Prices
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg w-full mb-6 sm:mb-8 max-w-md">
            Shop the latest phones, laptops, and gadgets- all in one place.
          </p>
          <button
            className="bg-white text-blue-600 font-bold px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-700 hover:text-white transition duration-300"
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
