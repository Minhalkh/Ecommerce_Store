// This is Card

function Card(props) {
  const { picture, title } = props;
  return (
    <div className="tl-h-60 hover:tl-shadow-md hover:tl-shadow-slate-700 tl-rounded-md tl-cursor-pointer">
      <img
        src={picture}
        alt="earing"
        className="tl-h-44 tl-w-60 tl-object-cover tl-rounded-t-lg"
      />
      <p className="tl-font-semibold tl-text-2xl tl-flex tl-justify-center tl-bg-white tl-border tl-border-slate-300 tl-h-16 tl-p-2 tl-rounded-b-lg">
        {title}
      </p>
    </div>
  );
}
export default Card;
