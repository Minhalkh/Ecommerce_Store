// This is CircleCradSection
import CircleCard from './CircleCard'

function CircleCardsSection() {
    let images = [
        {
            img: "card1.jpg"
        },
        {
            img: "card2.jpeg"
        },
        {
            img: "card4.jpeg"
        },
        {
            img: "card5.jpg"
        },
        {
            img: "card2.jpeg"
        },
        {
            img: "card4.jpeg"
        },
        {
            img: "card1.jpg"
        },
    ]

    return (
        <div className='tl-flex tl-justify-center tl-gap-x-20 tl-bg-gradient-to-tr tl-from-red-500 tl-to-blue-500 tl-w-full'>
        {images.map((item, index) => (
            <CircleCard
                key={index} 
                image={item.img}
            />
        ))}
      </div>
    )
}

export default CircleCardsSection