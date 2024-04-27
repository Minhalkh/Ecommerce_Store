//This is about page
import Navbar from "../components/Navbar";
import Crousal from "../components/home/Crousal";
import Paragraph from "../components/about/AboutParagraph";
import CheckNowSection from "../components/home/CheckNowSection";
import Icons from "../components/about/Icons";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div className="main-app tl-flex tl-flex-col tl-items-center tl-w-full tl-top-0 tl-absolute tl-bg-white">
      <Navbar />
      <Crousal storeName="Milli E-Commerce" />
      <CheckNowSection />
      <Paragraph />
      <Icons />
      <Footer />
    </div>
  );
}

export default AboutPage;

