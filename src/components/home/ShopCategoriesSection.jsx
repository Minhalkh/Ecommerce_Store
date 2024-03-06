// This is ShopCategories
import ShopCategories from "./ShopCategories"

function ShopCategoriesSection(){
  let images = [
    {
      img: "checknow1.jpg",
      title: "Earings",
    },
    {
      img: "card2.webp",
      title: "Earings 2",
    },
    {
      img: "card3.jpg",
      title: "Earings 3",
    },
    {
      img: "card4.webp",
      title: "Earings 4",
    },
  ];
    return(
          <div className="tl-flex tl-w-full tl-h-96 tl-bg-white tl-gap-5">
      <h2 className="tl-font-semibold tl-text-3xl tl-ml-12 tl-mt-10">
        Shop Category
      </h2>
      {images.map((item, index) => (
        <ShopCategories key={index} image={item.img} title={item.title} />
      ))}
        </div>
    )
}
export default ShopCategoriesSection;