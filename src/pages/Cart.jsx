import { Link } from "react-router-dom";
import { Trash2, Minus, Plus } from "lucide-react";

const Cart = () => {
  return (
    <main className="min-h-screen bg-stone-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Your Shopping Cart
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Shopping Cart
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

          {/* Cart Items */}
          <div className="space-y-6 lg:col-span-2">

            {/* Product */}
            <div className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm sm:flex-row">

              {/* Image */}
              <div className="h-40 w-full overflow-hidden rounded-xl bg-gray-100 sm:w-32">
                <img
                  src="https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=500&q=80"
                  alt="Classic Linen Shirt"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Men
                  </p>

                  <h2 className="mt-1 text-xl font-semibold">
                    Classic Linen Shirt
                  </h2>

                  <p className="mt-2 font-medium">
                    AED 129
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between">

                  {/* Quantity */}
                  <div className="flex items-center rounded-full border border-gray-300">

                    <button className="px-4 py-2">
                      <Minus size={16} />
                    </button>

                    <span className="px-3">
                      1
                    </span>

                    <button className="px-4 py-2">
                      <Plus size={16} />
                    </button>

                  </div>

                  {/* Remove */}
                  <button className="text-gray-500 transition hover:text-red-600">
                    <Trash2 size={20} />
                  </button>

                </div>

              </div>
            </div>

            {/* Continue Shopping */}
            <Link
              to="/shop"
              className="inline-block text-sm font-medium underline"
            >
              ← Continue Shopping
            </Link>

          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-xl font-semibold">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>AED 129</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>AED 129</span>
                </div>
              </div>

            </div>

            <Link
              to="/checkout"
              className="mt-6 block w-full rounded-full bg-black px-6 py-4 text-center text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Proceed to Checkout
            </Link>

          </div>

        </div>
      </div>
    </main>
  );
};

export default Cart;