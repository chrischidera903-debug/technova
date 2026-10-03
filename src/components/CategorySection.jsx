import { useState, useEffect } from "react";

function CategorySection(setSelectedCategory) {
  return (
    <>
      <section className="px-4 sm:px-6 py-12 bg-gray-50">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-900">
            Explore by Category
          </h2>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:grid-cols-3 md:grid-rows-2 ">
          <button
            onClick={() => setSelectedCategory("Gaming")}
            className="relative col-span-1 sm:col-span-2 lg:col-span-1 lg:row-span-2 h-64 sm:h-72 lg:h-full min-h-[320px] overflow-hidden rounded-2xl text-left md:row-span-2 group"
          >
            <img
              src="/images/ps5slim.jpg"
              alt="Gaming"
              className="absolute inset-0 h-full w-full object-fit transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 text-white">
              <h3 className="text-xl text-white mb-1 font-bold">
                High-Performance Gaming
              </h3>
              <p className="text-gray-200 mt-2 text-sm">
                Equipment built for serious gaming.
              </p>
            </div>
          </button>

          <button
            onClick={() => setSelectedCategory("Smartphones")}
            className="relative h-52 sm:h-56 overflow-hidden rounded-2xl text-left group"
          >
            <img
              src="/images/iphone-16pro.jpg"
              alt="Smartphones"
              className="absolute inset-0 h-full w-full object-fit object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Smartphones</h3>
            </div>
          </button>
          <button
            onClick={() => setSelectedCategory("Laptops")}
            className="relative h-52 sm:h-56  overflow-hidden rounded-2xl text-left group"
          >
            <img
              src="/images/macbookpro14.jpg"
              alt="Laptops"
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Laptops & Workstations</h3>
            </div>
          </button>

          <button
            onClick={() => setSelectedCategory("Wearables")}
            className="relative  h-52 sm:h-56 overflow-hidden rounded-2xl text-left group"
          >
            <img
              src="/images/applewatchultra2.jpg"
              alt="Wearables"
              className="absolute inset-0 h-full w-full duration-500 group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-xl font-bold">Wearables</h3>
            </div>
          </button>
          <button
            onClick={() => setSelectedCategory("Tablets")}
            className="relative h-52 sm:h-56 overflow-hidden rounded-2xl text-left group"
          >
            <img
              src="/images/ipadpro13.png"
              alt="Tablets"
              className="absolute inset-0 h-full w-full object-fit transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-xl font-bold">Tablets</h3>
            </div>
          </button>
        </div>
      </section>
    </>
  );
}
export default CategorySection;
