// This is HomePage
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
function Home() {
    return (
      <>
      <nav className="main-app tl-flex tl-flex-col tl-items-center tl-w-full tl-top-0 tl-absolute tl-bg-gradient-to-tr tl-from-red-500 tl-to-blue-500">
        <h1 className="tl-text-white">Home</h1>
        <div className="tl-flex tl-flex-col tl-justify-center tl-items-center tl-h-[93.2vh] tl-gap-y-3">
            <Link to="/register" className="tl-text-2xl tl-text-white">Do you want to create new account</Link>
            <Link to="/login" className="tl-text-2xl tl-text-white">Go to Login</Link>
        </div>
      </nav>
      </>
    )
}

export default Home