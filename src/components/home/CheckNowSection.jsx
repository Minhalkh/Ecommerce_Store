//This is CheckNowSection
import CheckNowCard from "./CheckNowCard";

function CheckNowSection() {
  let images = [
    {
      img: "chknow1.PNG",
      title: "Earings",
    },
    {
      img: "chknow2.PNG",
      title: "Hearts",
    },
    {
      img: "chknow3.jpg",
      title: "Wedding",
    },
    {
      img: "chknow4.jpg",
      title: "Chains",
    },
  ];
  return (
    <div className="tl-flex tl-w-full tl-h-96 tl-bg-gray-400 tl-gap-5">
      <h2 className="tl-font-semibold tl-text-3xl tl-ml-12 tl-mt-10">
        Check Now
      </h2>
      {images.map((item, index) => (
        <CheckNowCard key={index} picture={item.img} title={item.title} />
      ))}
    </div>
  );
}

export default CheckNowSection;
