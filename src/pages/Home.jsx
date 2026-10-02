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
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">New Collection 2026</p>
            <h1 className="max-w-xl text-5xl font-bold tracking-tight leading-tight">Discover Your
              <span className="block">Perfect Style</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Explore our latest collection of fashion essentials,
              carefully selected to make your everyday style stand out.
            </p>
            <div className="mt-8 flex flex-wrap">
              <Link className="rounded-full bg-black text-white px-5 py-4" to={'/shop'}>Shop Collection</Link>
              <Link className="rounded-full border border-black text-black px-5 py-4 ml-4 hover:bg-black hover:text-white" to={'/categories'}>Explore Categories</Link>
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
    </main>
  );
};

export default Home;
