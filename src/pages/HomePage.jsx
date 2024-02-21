// This is HomePage
import Navbar from '../components/home/Navbar'
function Home() {
    return (
      <>
      <nav className="main-app tl-flex tl-flex-col tl-items-center tl-w-full tl-top-0 tl-absolute tl-bg-gradient-to-tr tl-from-red-500 tl-to-blue-500">
        <Navbar/>
      </nav>
      </>
    )
}

export default Home