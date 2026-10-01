import { useState, useEffect } from "react";

function CategorySection(setSelectedCategory) {
  return (
    <>
      <section className="px-6 py-16 bg-black/10">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold font-serif">Explore by Category</h2>
          <button className="text-sm font-medium text-blue-500">
            View All Category
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 ">
          <button
            onClick={() => setSelectedCategory("Gaming")}
            className="relative  min-h-125 overflow-hidden rounded-2xl text-left md:row-span-2"
          >
            <img
              src="/images/ps5slim.jpg"
              alt="Gaming"
              className="absolute inset-0 h-full w-full object-fit"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">High-Performance Gaming</h3>
              <p className="mt-2 text-sm">
                Equipment built for serious gaming.
              </p>
            </div>
          </button>

          <button
            onClick={() => setSelectedCategory("Smartphones")}
            className="relative min-h-[240px] overflow-hidden rounded-2xl text-left"
          >
            <img
              src="/images/iphone-16pro.jpg"
              alt="Smartphones"
              className="absolute inset-0 h-full w-full object-fit"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-xl font-bold">Smartphones</h3>
            </div>
          </button>
          <button
            onClick={() => setSelectedCategory("Laptops")}
            className="relative min-h-[240px] overflow-hidden rounded-2xl text-left"
          >
            <img
              src="/images/macbookpro14.jpg"
              alt="Laptops"
              className="absolute inset-0 h-full w-full object-fit"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-xl font-bold">Laptops & Workstations</h3>
            </div>
          </button>

          <button
            onClick={() => setSelectedCategory("Wearables")}
            className="relative min-h-[240px] overflow-hidden rounded-2xl text-left"
          >
            <img
              src="/images/applewatchultra2.jpg"
              alt="Wearables"
              className="absolute inset-0 h-full w-full object-fit"
            />
            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-xl font-bold">Wearables</h3>
            </div>
          </button>
          <button
            onClick={() => setSelectedCategory("Tablets")}
            className="relative min-h-[220px] overflow-hidden rounded-2xl text-left"
          >
            <img
              src="/images/ipadpro13.png"
              alt="Tablets"
              className="absolute inset-0 h-full w-full object-fit"
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
