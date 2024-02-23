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
      <div className='tl-flex tl-gap-x-20'>
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