//This is footer

function Footer(){
    return(
        <div className=" tl-h-80 tl-w-full tl-bg-gray-400">
           <div className="tl-flex tl-justify-around">
           <div className="tl-mt-20 tl-w-1/2 tl-flex tl-justify-center tl-items-center">
           <div
        href="#"
        className="tl-flex tl-justify-start tl-text-3xl tl-font-bold"
      >
        <img
          src="logo1.jpg "
          alt="Logo"
          className="tl-w-8 tl-h-9 tl-mr-2 tl-rounded-full"
        />
        MilliStore
      </div>
           </div>
           <div className="tl-flex tl-justify-around tl-text-black tl-gap-28">
            <div className="tl-mt-16 tl-cursor-pointer">
                <ul>
                    <li className="tl-font-bold tl-text-xl">MilliStore</li>
                    <li className="tl-mt-2">Earings</li>
                    <li className="tl-mt-2">Dresses</li>
                    <li className="tl-mt-2">Makeup</li>
                    <li className="tl-mt-2">Mobiles</li>
                </ul>
            </div>
            <div className="tl-mt-16 tl-cursor-pointer">
                <ul>
                    <li className="tl-font-bold tl-text-xl">About</li>
                    <li className="tl-mt-2">Milli</li>
                    <li className="tl-mt-2">Policies</li>
                    <li className="tl-mt-2">Careers</li>
                    <li className="tl-mt-2">Press</li>
                </ul>
            </div>
            <div className="tl-mt-16 tl-cursor-pointer">
                <ul>
                    <li className="tl-font-bold tl-text-xl">Help</li>
                    <li className="tl-mt-2">Help Center</li>
                    <li className="tl-mt-2">Privacy Settings</li>
                </ul>
            </div>
            </div>
           </div>
        </div>
    )
}
export default Footer;