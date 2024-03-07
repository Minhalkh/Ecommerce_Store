// This is ShopCategories
import ShopCategories from "./ShopCategories"

function ShopCategoriesSection(){
  let images = [
    {
      img: "home1.jpg",
      title: "Earings",
    },
    {
      img: "home2.jpg",
      title: "Earings 2",
    },
    {
      img: "home3.webp",
      title: "Earings 3",
    },
    {
      img: "home2.jpg",
      title: "Earings 4",
    },
  ];
    return(
          <div className="tl-flex tl-w-full tl-h-96 tl-bg-white tl-gap-5">
      <h2 className="tl-font-semibold tl-text-3xl tl-ml-12 tl-mt-10">
        Shop Category
      </h2>
      {images.map((item, index) => (
        <ShopCategories key={index} picture={item.img} title={item.title} />
      ))}
        </div>
    )
}
export default ShopCategoriesSection;