import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      {/* Hero section */}
      <section className="bg-stone-100">
        <div className="min-h-150 items-center px-6 py-16 grid md:grid-cols-2">
          {/* Hero Content */}
          <div className="mb-5">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
              New Collection 2026
            </p>
            <h1 className="max-w-xl text-5xl font-bold tracking-tight leading-tight">
              Discover Your
              <span className="block">Perfect Style</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Explore our latest collection of fashion essentials, carefully
              selected to make your everyday style stand out.
            </p>
            <div className="mt-8 flex flex-wrap">
              <Link
                className="rounded-full bg-black text-white px-5 py-4"
                to={"/shop"}
              >
                Shop Collection
              </Link>
              <Link
                className="rounded-full border border-black text-black px-5 py-4 ml-4 hover:bg-black hover:text-white"
                to={"/categories"}
              >
                Explore Categories
              </Link>
            </div>
          </div>
          {/* Image section */}
          <div className="flex justify-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80"
                alt="StyleNest fashion collection"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading section */}
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm uppercase font-medium tracking-[0.3em] text-gray-500">
              Shop By Category
            </p>
            <h2 className="font-bold text-5xl mt-3">Find Your Style</h2>
            <p className="mt-3 text-gray-600 text-lg">
              Explore our collection and discover fashion made for every
              occasion.
            </p>
          </div>

          {/* Cards sections */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-5">
            {/* Women */}
            <Link
              to="/categories/women"
              className="group relative h-80 overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80"
                alt="Women's Fashion"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-end bg-black/30 p-6">
                <h3 className="text-2xl font-semibold text-white">Women</h3>
              </div>
            </Link>

            {/* Men */}
            <Link
              to="/categories/men"
              className="group relative h-80 overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80"
                alt="Men's Fashion"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-end bg-black/30 p-6">
                <h3 className="text-2xl font-semibold text-white">Men</h3>
              </div>
            </Link>

            {/* Shoes */}
            <Link
              to="/categories/shoes"
              className="group relative h-80 overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
                alt="Shoes"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-end bg-black/30 p-6">
                <h3 className="text-2xl font-semibold text-white">Shoes</h3>
              </div>
            </Link>

            {/* Accessories */}
            <Link
              to="/categories/accessories"
              className="group relative h-80 overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80"
                alt="Accessories"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-end bg-black/30 p-6">
                <h3 className="text-2xl font-semibold text-white">
                  Accessories
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* Featured Section */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading section */}
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm uppercase font-medium tracking-[0.3em] text-gray-500">
              Featured Collection
            </p>
            <h2 className="font-bold text-5xl mt-3">Our Best Sellers</h2>
            <p className="mt-3 text-gray-600 text-lg">
              Explore our collection and discover fashion made for every
              occasion.
            </p>
          </div>

          {/* Cards sections */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-5">
            {/* Product 1 */}
            <div className="group">
              <div className="h-80 overflow-hidden rounded-2xl">
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
                <p className="mt-2 font-semibold text-red-700">$129</p>
                <button className="mt-4 w-full rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Product 2 */}
            <div className="group">
              <div className="h-80 overflow-hidden rounded-2xl">
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
              <div className="h-80 overflow-hidden rounded-2xl">
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
              <div className="h-80 overflow-hidden rounded-2xl">
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

      {/* Promo Banner */}
<section className="py-16">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid overflow-hidden rounded-2xl bg-stone-100 md:grid-cols-2">

      {/* Promo Content */}
      <div className="flex flex-col justify-center p-8 md:p-12">

        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
          Limited Time Offer
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
          Upgrade Your Everyday Style
        </h2>

        <p className="mt-5 max-w-lg leading-7 text-gray-600">
          Get up to 30% off selected styles. Discover your new favorites
          today.
        </p>

        <div className="mt-7">
          <Link
            to="/shop"
            className="inline-block rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>

      </div>

      {/* Promo Image */}
      <div className="h-[350px] md:h-[450px]">
        <img
          src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=80"
          alt="StyleNest fashion collection"
          className="h-full w-full object-cover"
        />
      </div>

    </div>

  </div>
</section>

    </main>
  );
};

export default Home;
