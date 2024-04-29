// this is ProductsCardsSection

import Card from "./Card";

function ProductsCardsSection() {
    let products =[
        {
            id : 1,
            img : "Product1.jpg",
            title : "Watches",
            price: 100,
            description: "this is description of product 1",
            location: "wah cantt",
            favourite: false
        },
        {
            id : 2,
            img : "Product2.jpg",
            title : "Decor",
            price: 200,
            description: "this is description of the product 2",
            location: "wah cantt",
            favourite: false
        },
        {
            id : 3,
            img : "Product3.jpg",
            title : "Wall Clocks",
            price: 300,
            description: "this is description of product 3",
            location: "wah cantt",
            favourite: true
        },
        {
            id : 4,
            img : "Product4.jpg",
            title : "Art Gallery",
            price: 250,
            description: "this is description of the product 4",
            location: "wah cantt",
            favourite: false
        },
        {
            id : 5,
            img : "Product5.jpg",
            title : "Sneakers",
            price: 300,
            description: "this is description of product 5",
            location: "wah cantt",
            favourite: false
        },
        {
            id : 6,
            img : "Product6.jpg",
            title : "Dresses",
            price: 150,
            description: "this is description of the product 6",
            location: "lahore",
            favourite: false
        },
        {
            id : 7,
            img : "Product7.jpg",
            title : "Earings",
            price: 300,
            description: "this is description of the product 7",
            location: "lahore",
            favourite: false
        },
        {
            id : 8,
            img : "Product8.jpg",
            title : "Makeup",
            price: 300,
            description: "this is description of product 8",
            location: "lahore",
            favourite: false
        },
        {
            id : 9,
            img : "Product9.jpg",
            title : "Mobiles",
            price: 130,
            description: "this is description of the product 9",
            location: "lahore",
            favourite: false
        },
        {
            id : 10,
            img : "Product10.jpg",
            title : "Rings",
            price: 300,
            description: "this is description of product 10",
            location: "lahore",
            favourite: false
        },
        {
            id : 11,
            img : "Product12.jpg",
            title : "Shoes",
            price: 180,
            description: "this is description of the product 11",
            location: "rawalpindi",
            favourite: false
        },
        {
            id : 12,
            img : "Product13.jpg",
            title : "Cosmetics",
            price: 170,
            description: "this is description of the product 12",
            location: "rawalpindi",
            favourite: false
        },
        {
            id : 13,
            img : "Product15.jpg",
            title : "Decor",
            price: 300,
            description: "this is description of product 13",
            location: "rawalpindi",
            favourite: false
        },
        {
            id : 14,
            img : "Product11.jpg",
            title : "Jewellery",
            price: 300,
            description: "this is description of the product 14",
            location: "islamabad",
            favourite: false
        },
        {
            id : 15,
            img : "Product14.jpg",
            title : "Kids Dresses",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 16,
            img : "Product16.jpg",
            title : "Kids Dresses",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 17,
            img : "Product18.jpg",
            title : " Girls Shirts",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 18,
            img : "Product17.jpg",
            title : " Gents Kurta",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 19,
            img : "Product19.jpg",
            title : " Boys Pent Shirt",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 20,
            img : "Product20.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 21,
            img : "Product21.jpg",
            title : " Girls Shoes",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 22,
            img : "Product22.jpg",
            title : " Kids Shoes",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 23,
            img : "Product23.jpg",
            title : " Eastern Dress",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 24,
            img : "Product24.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 25,
            img : "Product25.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 26,
            img : "Product26.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 27,
            img : "Product27.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 28,
            img : "Product28.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 29,
            img : "Product29.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 30,
            img : "Product30.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 31,
            img : "Product31.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 32,
            img : "Product20.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 33,
            img : "Product19.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 34,
            img : "Product10.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 35,
            img : "Product2.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 36,
            img : "Product5.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 37,
            img : "Product18.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 38,
            img : "Product9.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 39,
            img : "Product15.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
        {
            id : 40,
            img : "Product22.jpg",
            title : " Matching Outfit",
            price: 450,
            description: "this is description of the product 15",
            location: "islamabad",
            favourite: false
        },
    ]
    const functionA = () => {
        console.log("running-->" , products)
        } 
    return (
        <div>
            <h2 className="tl-flex tl-justify-start tl-p-4 tl-mt-1 tl-pl-12 tl-font-bold tl-text-3xl">Products</h2>
            <div className="tl-flex tl-justify-center tl-flex-wrap tl-gap-8 tl-mt-3 tl-mb-10">
                {products.map((element,index)=>(
                <Card
                    key={index}
                    product={element}
                    functionProp={functionA} />
                ))}
            </div>
        </div>
    )
}

export default ProductsCardsSection;