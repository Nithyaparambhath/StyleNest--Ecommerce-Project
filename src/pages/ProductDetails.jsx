import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <main>
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">

          {/* Product Image */}
          <div className="h-[500px] overflow-hidden rounded-2xl bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=80"
              alt="Classic Linen Shirt"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Men
            </p>

            <h1 className="mt-3 text-4xl font-bold">
              Classic Linen Shirt
            </h1>

            <p className="mt-4 text-2xl font-semibold">
              AED 129
            </p>

            <p className="mt-6 max-w-lg leading-7 text-gray-600">
              A lightweight linen shirt designed for effortless everyday
              style and comfort.
            </p>

            {/* Stock */}
            <p className="mt-6 font-medium text-green-600">
              In Stock
            </p>

            {/* Quantity */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-medium">
                Quantity
              </p>

              <div className="flex w-fit items-center rounded-full border border-gray-300">

                <button className="px-5 py-2 text-lg">
                  −
                </button>

                <span className="px-4">
                  1
                </span>

                <button className="px-5 py-2 text-lg">
                  +
                </button>

              </div>
            </div>

            {/* Add to Cart */}
            <button className="mt-8 w-full max-w-md rounded-full bg-black px-8 py-4 font-medium text-white transition hover:bg-gray-800">
              Add to Cart
            </button>

            {/* Back to Shop */}
            <Link
              to="/shop"
              className="mt-4  text-sm font-medium underline"
            >
              Back to Shop
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
};

export default ProductDetails;