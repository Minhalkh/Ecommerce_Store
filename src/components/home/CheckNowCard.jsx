// This is Card

function Card() {
  return (
      <div className="tl-mt-28 tl-h-60 hover:tl-shadow-md hover:tl-shadow-slate-700 tl-border tl-border-gray-400 tl-rounded-md">
        <img
          src="chknow1.PNG"
          alt="earing"
          className="tl-h-44 tl-w-60 tl-object-cover tl-rounded-t-lg"
        />
        <p className="tl-font-semibold tl-text-2xl tl-flex tl-justify-center tl-bg-white tl-h-16 tl-p-2 tl-rounded-b-lg">Earings</p>
        <div>
          <img src="chknow2.PNG" alt="bottle" className="tl-h-44 tl-w-60 tl-object-cover" />
        </div>
      </div>
  );
}
export default Card;
