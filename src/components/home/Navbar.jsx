// This is Navbar
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="tl-flex tl-justify-between tl-items-center tl-py-5 tl-px-20 tl-bg-gray-200 tl-w-full">
      <a href="#" className="tl-flex tl-items-center tl-text-3xl tl-font-semibold">
        <img src="logo.jpg " alt="Logo" className="tl-w-9 tl-h-9 tl-mr-3 tl-rounded-full"/>MilliShan</a>
      <div className="tl-flex tl-gap-4">
        <ul className="tl-flex tl-gap-4">
          <Link to="/" className="tl-cursor-pointer tl-px-2 tl-h-8 hover:tl-text-rose-500 tl-items-center">Home</Link>
          <Link to="/about" className="tl-cursor-pointer tl-px-2 tl-h-8 hover:tl-text-rose-500 tl-items-center">About</Link>
          <Link to="/products" className="tl-cursor-pointer tl-px-2 tl-h-8 hover:tl-text-rose-500 tl-items-center">Products</Link>
        </ul>
        <Link to="/login" className="tl-bg-indigo-500 tl-px-2 tl-text-white hover:tl-text-white tl-h-8 tl-flex tl-items-center tl-rounded-md hover:tl-bg-rose-500 hover:tl-border hover:tl-border-rose-500">Login</Link>
        <div className='tl-relative'>
        <input type="text" placeholder="Search" className='tl-border tl-border-slate-700 tl-rounded-md tl-px-2 tl-py-1 tl-mr-2 focus:tl-outline-none tl-bg-white'/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
