// This is Crousal

function Crousal(props) {
  const { storeName= "Welcome To Our Store" } = props;
  return (
    <div className="tl-flex tl-justify-center tl-w-full">
      <div className="crousal-width tl-bg-blue-200 tl-py-8 tl-flex tl-justify-between tl-rounded-md tl-h-80 tl-w-[1000px] tl-mt-24">
        <div className="tl-w-1/2 tl-flex tl-justify-end">
          <div className="tl-w-96">
            <div className="tl-text-black tl-font-bold tl-flex tl-m-2">
              {storeName}
            </div>
            <p className="tl-m-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              ratione neque dicta. Aperiam quaerat ut iste quae asperiores
              blanditiis neque velit harum mollitia repellat.
            </p>
            <button className="button-content tl-flex tl-items-center tl-mt-8 tl-h-8 tl-w-30 tl-text-white tl-bg-blue-500 hover:tl-bg-blue-200 hover:tl-text-black">
              shop now
            </button>
          </div>
        </div>
        <div className="img-content tl-w-1/2 tl-flex tl-justify-center tl-mr-10">
          <img
            src="shop1.jpg"
            alt="jewellery"
            className=" tl-h-46 tl-rounded-md tl-object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Crousal;
