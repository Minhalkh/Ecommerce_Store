//This is about page
import Navbar from "../components/Navbar";
import Crousal from "../components/home/Crousal"
function AboutPage() {
  return (
    <div className="main-app tl-flex tl-flex-col tl-items-center tl-w-full tl-top-0 tl-absolute tl-bg-white">
    <Navbar/>
      <Crousal/>
    </div>
  );
}
export default AboutPage;
