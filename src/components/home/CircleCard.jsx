// This is CircleCard

function CircleCard(props){
    console.log(props)
    const { image } = props
    return(
        <div className="main tl-bg-funchisa-500 tl-h-30 tl-py-10">
            <img src={image}  className="tl-w-20 tl-h-[115px] tl-rounded-full" />
        </div>
    )
}
export default CircleCard