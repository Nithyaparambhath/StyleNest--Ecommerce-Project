import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Link to="/" className="text-3xl font-bold">
            StyleNest
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
            Discover modern fashion essentials designed to make your everyday
            style stand out.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">
            Quick Links
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>

            <Link to="/shop" className="transition hover:text-white">
              Shop
            </Link>

            <Link to="/categories" className="transition hover:text-white">
              Categories
            </Link>

            <Link to="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold">
            Customer Service
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
            <p>Shipping & Delivery</p>
            <p>Returns & Exchanges</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold">
            Follow Us
          </h3>

          <div className="mt-5 flex gap-4">
            <FaInstagram size={18} />
<FaFacebookF size={18} />
<FaTwitter size={18} />
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-gray-500">
          © 2026 StyleNest. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;