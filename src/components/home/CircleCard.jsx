// This is CircleCard

function CircleCard(props) {
  console.log(props);
  const { image } = props;
  return (
    <div className="main tl-bg-funchisa-500 tl-h-32 tl-py-10">
      <img
        src={image}
        className="tl-w-32 tl-h-32 tl-rounded-full tl-border tl-border-slate-400 tl-object-cover"
      />
    </div>
  );
}
export default CircleCard;
