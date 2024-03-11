// This is ShopCategories
import ShopCategories from "./ShopCategories"

function ShopCategoriesSection(){
  let images = [
    {
      img: "home1.jpg",
      title: "Watches",
    },
    {
      img: "shop2.jpg",
      title: "Mobiles",
    },
    {
      img: "shop3.jpg",
      title: "Accessories",
    },
    {
      img: "shop4.jpg",
      title: "Decor Items",
    },
  ];
    return(
          <div className="tl-flex tl-w-full tl-h-96 tl-bg-white tl-gap-5">
      <h2 className="tl-font-semibold tl-text-3xl tl-mt-10">
        Shop Category
      </h2>
      {images.map((item, index) => (
        <ShopCategories key={index} picture={item.img} title={item.title} />
      ))}
        </div>
    )
}
export default ShopCategoriesSection;