//This is footer
import CopyRight from "./home/CopyRight";

function Footer() {
  return (
    <div className=" tl-h-80 tl-w-full tl-bg-gradient-to-tr tl-from-gray-100 tl-to-gray-800">
      <div className="tl-flex tl-justify-between tl-w-full">
        <div className="tl-mt-20 tl-w-1/2 tl-flex tl-items-center tl-ml-28">
          <div
            href="#"
            className="tl-flex tl-text-3xl tl-font-bold"
          >
            <img
              src="logo1.jpg "
              alt="Logo"
              className="tl-w-8 tl-h-9 tl-mr-2 tl-rounded-full"
            />
            MilliStore
          </div>
        </div>
        <div className="tl-flex tl-text-black tl-gap-28 tl-mr-16">
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
            <div className="tl-flex tl-gap-4 tl-mt-4">
            <i className="fa fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
              <i className="fa fa-snapchat-ghost" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
}
export default Footer;
