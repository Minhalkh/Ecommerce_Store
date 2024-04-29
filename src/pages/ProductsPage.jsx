// This is products page
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filteration from "../components/products/Filteration";
import ProductsCardsSection from "../components/products/ProductsCardsSection";

function ProductsPage(){
    return(
        <div className="main-app tl-flex tl-flex-col tl-items-center tl-w-full tl-top-0 tl-absolute tl-bg-white">
            <Navbar />
            <div className="tl-flex tl-w-full">
            <div className="tl-w-1/5 tl-bg-red-400">
                <Filteration />
            </div>
            <div className="tl-w-4/5">
                <ProductsCardsSection />
            </div>
            </div>
            <Footer />
        </div>
    )
}
export default ProductsPage