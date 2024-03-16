// This is ShopCategoriesSection
import ShopCategories from "./ShopCategories";

function ShopCategoriesSection() {
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
  return (
    <>
      <h2 className="tl-w-full tl-font-semibold tl-text-3xl tl-mt-16 tl-pl-16">
        Shop Category
      </h2>
      <div className="tl-mt-10 tl-flex tl-justify-center tl-w-full tl-gap-5 tl-mb-5">
        {images.map((item, index) => (
          <ShopCategories key={index} picture={item.img} title={item.title} />
        ))}
      </div>
    </>
  );
}
export default ShopCategoriesSection;
