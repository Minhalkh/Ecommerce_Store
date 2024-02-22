// This is HomePage
import Navbar from '../components/home/Navbar'
import CircleCard from '../components/home/CircleCard'
function Home() {
    return (
      <>
      <nav className="main-app tl-flex tl-flex-col tl-items-center tl-w-full tl-top-0 tl-absolute tl-bg-gradient-to-tr tl-from-red-500 tl-to-blue-500">
        <Navbar/>
        <CircleCard/>
      </nav>
      </>
    )
}

export default Home