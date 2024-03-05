// This is ShopCategories
import ShopCategories from "./ShopCategories"
function ShopCategoriesSection(){
    return(
          <div className="tl-flex tl-w-full tl-h-96 tl-bg-white">
      <h2 className="tl-font-semibold tl-text-3xl tl-ml-12 tl-mt-10">
        Shop Category
      </h2>
          <ShopCategories/>
        </div>
    )
}
export default ShopCategoriesSection;