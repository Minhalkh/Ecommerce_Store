// This is Crousal

function Crousal() {
  return (
    <div className="tl-flex tl-justify-center tl-w-full">
      <div className="tl-bg-blue-200 tl-py-8 tl-flex tl-justify-between tl-rounded-md tl-h-80 tl-w-[1000px] tl-mt-24">
      <div className="tl-w-1/2 tl-flex tl-justify-end">
        <div className="tl-w-96">
          <div className="tl-text-black tl-font-bold tl-flex tl-m-2">
            Welcome To Our Store:
          </div>
          <p className="tl-m-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            ratione neque dicta. Aperiam quaerat ut iste quae asperiores
            blanditiis neque velit harum mollitia repellat.
          </p>
          <button className="tl-flex tl-items-center tl-h-8 tl-w-30 tl-text-white tl-bg-blue-500 hover:tl-bg-blue-200 hover:tl-text-black">
            shop now
          </button>
        </div>
      </div>
      <div className="tl-w-1/2 tl-flex tl-justify-center tl-mr-10">
        <img
          src="shop1.jpg"
          alt="jewellery"
          className="tl-w-46 tl-h-46 tl-rounded-md tl-object-cover"
        />
      </div>
    </div>
    </div>
  );
}
export default Crousal;
