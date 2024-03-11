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
    <div className="tl-flex tl-w-full tl-h-96 tl-bg-gray-400 tl-gap-5 tl-mt-32">
      <h2 className="tl-font-semibold tl-text-3xl tl-mt-10">
        Check Now
      </h2>
      {images.map((item, index) => (
        <CheckNowCard key={index} picture={item.img} title={item.title} />
      ))}
    </div>
  );
}

export default CheckNowSection;
