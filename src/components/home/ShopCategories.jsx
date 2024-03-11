// This is ShopCategories

function ShopCategories(props){
  const {picture,title} =props
    return(
            <div className="tl-mt-28 tl-h-90 hover:tl-shadow-xl hover:tl-shadow-zinc-700 tl-rounded-md">
        <img
          src={picture}
          alt="Home"
          className="tl-h-80 tl-w-64 tl-object-cover tl-rounded-t-lg"
        />
        <p className="tl-bg-white tl-h-16 tl-text-2xl tl-font-semibold tl-p-4 tl-flex tl-justify-center tl-rounded-b-lg tl-border tl-border-gray-200">{title}</p>
      </div>
    )
}
export default ShopCategories;