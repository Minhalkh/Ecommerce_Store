// this is ProductsCardsSection

import Card from "./Card";

function ProductsCardsSection() {
    let products =[
        {
            img : "Product1.jpg",
            title : "title 1",
            price: 100,
            description: "this is description of product 1",
            location: "wah cantt",
            favourite: false
        },
        {
            img : "Product2.jpg",
            title : "title 2",
            price: 200,
            description: "this is description of the product 2",
            location: "wah cantt",
            favourite: false
        },
        {
            img : "Product3.jpg",
            title : "title 3",
            price: 300,
            description: "this is description of product 3",
            location: "wah cantt",
            favourite: true
        },
        {
            img : "Product4.jpg",
            title : "title 4",
            price: 250,
            description: "this is description of the product 4",
            location: "wah cantt",
            favourite: false
        },
        {
            img : "Product5.jpg",
            title : "title 5",
            price: 300,
            description: "this is description of product 5",
            location: "wah cantt",
            favourite: false
        },
        {
            img : "Product6.jpg",
            title : "title 6",
            price: 150,
            description: "this is description of the product 6",
            location: "lahore",
            favourite: false
        },
        {
            img : "Product7.jpg",
            title : "title 7",
            price: 300,
            description: "this is description of the product 7",
            location: "lahore",
            favourite: false
        },
        {
            img : "Product8.jpg",
            title : "title 8",
            price: 300,
            description: "this is description of product 8",
            location: "lahore",
            favourite: false
        },
        {
            img : "Product9.jpg",
            title : "title 9",
            price: 130,
            description: "this is description of the product 9",
            location: "lahore",
            favourite: false
        },
        {
            img : "Product10.jpg",
            title : "title 10",
            price: 300,
            description: "this is description of product 10",
            location: "lahore",
            favourite: false
        },
        {
            img : "Product12.jpg",
            title : "title 11",
            price: 180,
            description: "this is description of the product 11",
            location: "rawalpindi",
            favourite: false
        },
        {
            img : "Product13.jpg",
            title : "title 12",
            price: 170,
            description: "this is description of the product 12",
            location: "rawalpindi",
            favourite: false
        },
        {
            img : "Product2.jpg",
            title : "title 13",
            price: 300,
            description: "this is description of product 13",
            location: "rawalpindi",
            favourite: false
        },
        {
            img : "Product11.jpg",
            title : "title 14",
            price: 300,
            description: "this is description of the product 14",
            location: "islamabad",
            favourite: false
        },
        {
            img : "Product6.jpg",
            title : "title 15",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        }
    ]
    return (
        <div>
            <h2 className="tl-flex tl-justify-start tl-p-4 tl-mt-1 tl-pl-12 tl-font-bold tl-text-3xl">Products</h2>
            <div className="tl-flex tl-justify-center tl-flex-wrap tl-gap-8 tl-mt-3 tl-mb-10">
                {products.map((element,index)=>(
                <Card
                    key={index}
                    product={element} />
                ))}
            </div>
        </div>
    )
}

export default ProductsCardsSection;