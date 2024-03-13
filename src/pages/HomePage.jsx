// This is HomePage
import Navbar from "../components/home/Navbar";
import CircleCardsSection from "../components/home/CircleCardsSection";
import Crousal from "../components/home/Crousal";
import ShopCategoriesSection from "../components/home/ShopCategoriesSection";
import CheckNowSection from "../components/home/CheckNowSection";
import Footer from "../components/home/Footer";
function Home() {
  return (
    <div className="main-app tl-flex tl-flex-col tl-items-center tl-w-full tl-top-0 tl-absolute tl-bg-white">
      <Navbar />
      <CircleCardsSection />
      <Crousal />
      <ShopCategoriesSection />
      <CheckNowSection />
      <Footer />
    </div>
  );
}

export default Home;
