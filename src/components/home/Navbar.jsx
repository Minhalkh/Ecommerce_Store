// This is Navbar
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
function Navbar(){
    return (
        <nav className='tl-flex tl-justify-between tl-items-center tl-px-20 tl-py-5 tl-bg-gray-200 tl-w-full'>
          <a href="#" className='tl-text-4xl tl-font-semibold'>Logo</a>
          <ul className='tl-flex tl-gap-4 tl-items-center'>
            <li className='tl-cursor-pointer'>Home</li>
            <li className='tl-cursor-pointer'>About</li>
            <li className='tl-cursor-pointer'>Products</li>
          </ul>
          <Link to="/login" className='tl-bg-indigo-500 tl-text-white tl-h-8 tl-flex tl-items-center tl-rounded-md hover:tl-bg-rose-500 hover:tl-border hover:tl-border-rose-500'>Login</Link>
        </nav>
    )
}

export default Navbar;