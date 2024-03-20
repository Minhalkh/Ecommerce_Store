// this is Card.jsx

function Card(props) {
    const { product } = props;
    return (
        <div className="tl-h-72 hover:tl-shadow-md hover:tl-shadow-slate-700 tl-rounded-md tl-cursor-pointer">
            <img
                src={product.img}
                alt="earing"
                className="tl-h-44 tl-w-60 tl-object-cover tl-rounded-t-lg"
            />
            <div className="tl-flex tl-flex-col tl-bg-white tl-border tl-border-slate-300 tl-h-28 tl-p-2 tl-rounded-b-lg">
                <div className="tl-flex tl-justify-between">
                    <div className="tl-flex">
                        <p className="tl-font-semibold tl-text-2xl tl-flex tl-justify-center">
                            {product.title}
                        </p>
                    </div>
                    {/* conditional rendering */}
                    {!product.favourite && (
                        <i class="fa fa-heart-o tl-pt-2 tl-pr-1" />
                    )}
                    {product.favourite && (
                        <i class="fa fa-heart tl-pt-2 tl-pr-1" />
                    )}
                </div>
                <span className="tl-text-md">
                    Rs. {product.price}
                </span>
                <p className="tl-text-sm tl-w-52 tl-truncate">
                    {product.description}
                </p>
                <p className="tl-text-sm tl-w-52 tl-truncate">
                    {product.location}
                </p>
            </div>
        </div>
    )
}

export default Card;