// This is RegisterForm
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import welcomeImage from "../assets/images/login5.jpg"

function RegistrationForm() {
  return (
    <div className="tl-flex tl-h-[500px] tl-shadow-2xl tl-bg-green-500 tl-border tl-rounded-lg">
    <img src={welcomeImage} className="tl-w-[500px] tl-rounded-tl-lg tl-rounded-bl-lg" />
    <form className="tl-bg-gray-200 tl-flex tl-justify-center tl-items-center tl-rounded-tr-lg tl-rounded-br-lg tl-flex-col tl-gap-5 tl-p-5 tl-w-[300px]">
      <h2 className="tl-text-center tl-text-3xl tl-font-semibold tl-text-purple-800">Register</h2>
      <input
        type="text" placeholder="Name" name="Name"
        className="tl-bg-blue tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-placeholder:text-white tl-w-full tl-text-white tl-outline-none"
      />
      <input
        type="text"
        placeholder="Email"
        name="Last Name"
        className=" tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-placeholder:text-white tl-w-full tl-text-white tl-outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className=" tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-placeholder:text-white tl-w-full tl-text-white tl-outline-none"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        name="password"
        className=" tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-placeholder:text-white tl-w-full tl-text-white tl-outline-none"
      />
      <button
        type="submit"
        className="tl-bg-[#580979] tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-text-white tl-w-full tl-text-white tl-bg-purple-800 tl-cursor-pointer"
      >Submit</button>
      <Link to="/login" className="tl-mt-3">Already have an account</Link>
    </form>
    </div>
  );
}

export default RegistrationForm;