//This is CheckNowSection
import CheckNowCard from "./CheckNowCard";

function CheckNowSection() {
  let images = [
    {
      img: "chknow1.PNG",
      title: "Earings",
    },
    {
      img: "chknow2.jpg",
      title: "Dresses",
    },
    {
      img: "chknow3.jpg",
      title: "Makeup",
    },
    {
      img: "chknow5.jpg",
      title: "Shoes",
    },
  ];
  return (
    <>
      <h2 className="tl-w-full tl-font-semibold tl-text-3xl tl-mt-16 tl-ml-16">
        Check Now
      </h2>
      <div className="tl-flex tl-mt-10 tl-mb-20 tl-justify-center tl-w-full tl-gap-x-10">
        {images.map((item, index) => (
          <CheckNowCard key={index} picture={item.img} title={item.title} />
        ))}
      </div>
    </>
  );
}

export default CheckNowSection;
