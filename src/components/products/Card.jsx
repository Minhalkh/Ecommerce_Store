// this is card

function Card(props) {
    const {img , title} = props;
    return (
        <div>
            <div>
                <img src={img} alt="watches" className="" />
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Card;