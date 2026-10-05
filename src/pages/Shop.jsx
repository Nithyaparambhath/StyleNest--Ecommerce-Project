import React from "react";

const Shop = () => {
  return (
    <main>
      <section className="bg-stone-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading section */}
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-5xl mt-3">Shop Our Collection</h2>
            <p className="mt-3 text-gray-600 text-lg">
              Discover our latest fashion collection, featuring stylish
              essentials for every occasion.
            </p>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Product 1 */}
              <div className="group">
                <div className="h-80 overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=600&q=80"
                    alt="Classic Linen Shirt"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500">Men</p>
                  <h3 className="mt-1 text-lg font-semibold">
                    Classic Linen Shirt
                  </h3>
                  <p className="mt-2 font-semibold">AED 129</p>

                  <button className="mt-4 w-full rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group">
                <div className="h-80 overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
                    alt="Elegant Summer Dress"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500">Women</p>
                  <h3 className="mt-1 text-lg font-semibold">
                    Elegant Summer Dress
                  </h3>
                  <p className="mt-2 font-semibold">AED 179</p>

                  <button className="mt-4 w-full rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product 3 */}
              <div className="group">
                <div className="h-80 overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
                    alt="Urban Classic Sneakers"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500">Shoes</p>
                  <h3 className="mt-1 text-lg font-semibold">
                    Urban Classic Sneakers
                  </h3>
                  <p className="mt-2 font-semibold">AED 199</p>

                  <button className="mt-4 w-full rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product 4 */}
              <div className="group">
                <div className="h-80 overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80"
                    alt="Minimal Leather Watch"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500">Accessories</p>
                  <h3 className="mt-1 text-lg font-semibold">
                    Minimal Leather Watch
                  </h3>
                  <p className="mt-2 font-semibold">AED 249</p>

                  <button className="mt-4 w-full rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Shop;
