//This is footer

import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className=" tl-h-64 tl-w-full tl-bg-blue-600">
           <div>
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
           <div className="tl-flex tl-justify-around tl-text-white">
            <div className="tl-mt-16 tl-cursor-pointer">
                <ul>
                    <Link className="tl-font-bold tl-text-xl">MilliStore</Link>
                    <Link className="tl-mt-2">Earings</Link>
                    <Link className="tl-mt-2">Dresses</Link>
                    <Link className="tl-mt-2">Makeup</Link>
                    <Link className="tl-mt-2">Mobiles</Link>
                </ul>
            </div>
            <div className="tl-mt-16 tl-cursor-pointer">
                <ul>
                    <Link className="tl-font-bold tl-text-xl">About</Link>
                    <Link className="tl-mt-2">Milli</Link>
                    <Link className="tl-mt-2">Policies</Link>
                    <Link className="tl-mt-2">Careers</Link>
                    <Link className="tl-mt-2">Press</Link>
                </ul>
            </div>
            <div className="tl-mt-16 tl-cursor-pointer">
                <ul>
                    <Link className="tl-font-bold tl-text-xl">Help</Link>
                    <Link className="tl-mt-2">Help Center</Link>
                    <Link className="tl-mt-2">Privacy Settings</Link>
                </ul>
            </div>
            </div>
        </div>
    )
}
export default Footer;