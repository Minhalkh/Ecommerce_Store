//This is CheckNowSection
import CheckNowCard from "./CheckNowCard";

function CheckNowSection() {
  let images = [
    {
      img: "checknow1.jpg",
      title: "Earings",
    },
    {
      img: "chknow2.PNG",
      title: "Earings 2",
    },
    {
      img: "chknow3.jpg",
      title: "Earings 3",
    },
    {
      img: "chknow4.jpg",
      title: "Earings 4",
    },
  ];
  return (
    <div className="tl-flex tl-w-full tl-h-96 tl-bg-gray-400 tl-gap-5">
      <h2 className="tl-font-semibold tl-text-3xl tl-ml-12 tl-mt-10">
        Check Now
      </h2>
      {images.map((item, index) => (
        <CheckNowCard key={index} image={item.img} title={item.title} />
      ))}
    </div>
  );
}

export default CheckNowSection;
