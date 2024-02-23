// This is HomePage
import Navbar from '../components/home/Navbar'
import CircleCardsSection from '../components/home/CircleCardsSection'
function Home() {
    return (
      <>
      <nav className="main-app tl-flex tl-flex-col tl-items-center tl-w-full tl-top-0 tl-absolute tl-bg-gradient-to-tr tl-from-red-500 tl-to-blue-500">
        <Navbar/>
        <CircleCardsSection />
      </nav>
      </>
    )
}

export default Home