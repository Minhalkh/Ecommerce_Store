// This is CircleCradSection
import CircleCard from "./CircleCard";

function CircleCardsSection() {
  let images = [
    {
      img: "card1.jpg",
    },
    {
      img: "card2.webp",
    },
    {
      img: "card3.jpg",
    },
    {
      img: "card4.webp",
    },
    {
      img: "card5.jpg",
    },
    {
      img: "card6.jpg",
    },
    {
      img: "card7.jpg",
    },
  ];

  return (
    <div className="tl-flex tl-justify-center tl-gap-x-9 tl-bg-gradient-to-tr tl-from-red-500 tl-to-blue-500 tl-w-full">
      {images.map((item, index) => (
        <CircleCard key={index} image={item.img} />
      ))}
    </div>
  );
}

export default CircleCardsSection;
