// this is ProductsCardsSection

import Card from "../home/CheckNowCard";

function ProductsCardsSection() {
    let images =[
        {
           img : "shop1.jpg",
           title : "watches",
        },
        {
            img : "shop1.jpg",
           title : "watches",
        },
        {
            img : "shop1.jpg",
            title : "watches",
         },
    ]
    return (
        <div>
            <h2 className="tl-flex tl-justify-center tl-p-4 tl-font-bold tl-text-lg">Products</h2>
            <div className="tl-flex tl-justify-center tl-items-center tl-gap-8 tl-mt-8">
                {images.map((item,index)=>(
                <Card key={index} img={item.img} title={item.title}/>
                ))}
            </div>
        </div>
    )
}

export default ProductsCardsSection;