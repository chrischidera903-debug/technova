function PromoBanner() {
  return (
    <section className="px-4 sm:px-6 py-6">
      <div className="bg-gray-600 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
        <div>
          <h3 className="text-xl md:text-2xl font-bold">
            Free Shipping on Orders Over $100
          </h3>
          <p className="text-blue-100 mt-1 text-sm md:text-base">
            Limited time offer. Shop now and save on delivery.
          </p>
        </div>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition whitespace-nowrap">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default PromoBanner;
