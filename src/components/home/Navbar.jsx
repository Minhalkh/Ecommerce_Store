// This is Navbar
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="tl-flex tl-justify-between tl-items-center tl-py-5 tl-px-20 tl-w-full">
      <div
        href="#"
        className="tl-flex tl-items-center tl-text-3xl tl-font-bold"
      >
        <img
          src="logo1.jpg "
          alt="Logo"
          className="tl-w-8 tl-h-9 tl-mr-2 tl-rounded-full"
        />
        MilliStore
      </div>
      <div className="tl-flex tl-gap-4 tl-mt-[8px]">
        <ul className="tl-flex tl-gap-4">
          <Link
            to="/"
            className="tl-cursor-pointer tl-px-2 tl-h-8 hover:tl-text-rose-500 tl-items-center tl-text-lg tl-font-bold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="tl-cursor-pointer tl-px-2 tl-h-8 hover:tl-text-rose-500 tl-items-center tl-text-lg tl-font-bold"
          >
            About
          </Link>
          <Link
            to="/products"
            className="tl-cursor-pointer tl-px-2 tl-h-8 hover:tl-text-rose-500 tl-items-center tl-text-lg tl-font-bold"
          >
            Products
          </Link>
        </ul>
        <Link
          to="/login"
          className="tl-bg-indigo-500 tl-px-3 tl-h-7 tl-text-lg tl-font-bold tl-text-white hover:tl-text-white tl-flex tl-items-center tl-rounded-md hover:tl-bg-rose-500"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
