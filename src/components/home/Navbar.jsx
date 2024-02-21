// This is Navbar
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
function Navbar(){
    return (
        <nav className="tl-flex tl-justify-between tl-items-center tl-px-20 tl-py-5 tl-bg-gray-200 tl-w-full">
        <a href="#" className="tl-text-4xl tl-font-semibold">Logo.</a>
        <ul className="tl-flex tl-gap-4 tl-items-center">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>

          <button className="tl-bg-indigo-500 tl-text-white tl-p-3 tl-rounded-md">LOGIN</button>
        </ul>
      </nav>
    )
}

export default Navbar;