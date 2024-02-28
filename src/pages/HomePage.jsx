// This is HomePage
import Navbar from '../components/home/Navbar'
import CircleCardsSection from '../components/home/CircleCardsSection'
import Crousal from '../components/home/Crousal'
import CheckNowSection from '../components/home/CheckNowSection'
function Home() {
    return (
      <div className="main-app tl-flex tl-flex-col tl-items-center tl-w-full tl-top-0 tl-absolute">
        <Navbar/>
        <CircleCardsSection />
        <Crousal/>
        <CheckNowSection/>
      </div>
    )
}

export default Home