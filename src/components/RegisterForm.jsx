// This is RegisterForm
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import welcomeImage from "../assets/images/login5.jpg"

function RegistrationForm() {
  return (
    <div className="tl-flex tl-flex-col md:tl-flex-row tl-h-auto md:tl-h-[500px] tl-shadow-2xl tl-bg-green-500 tl-border tl-rounded-lg overflow-hidden">
      <img
        src={welcomeImage}
        className="tl-w-full md:tl-w-[500px] tl-rounded-t-lg md:tl-rounded-none md:tl-rounded-tl-lg md:tl-rounded-bl-lg"
        alt="Welcome"
      />
      <form className="tl-bg-gray-200 tl-flex tl-justify-center tl-items-center tl-rounded-b-lg md:tl-rounded-none md:tl-rounded-tr-lg md:tl-rounded-br-lg tl-flex-col tl-gap-5 tl-p-5 tl-w-full md:tl-w-[300px]">
        <h2 className="tl-text-center tl-text-3xl tl-font-semibold tl-text-purple-800">Register</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="tl-bg-white tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-placeholder:text-white tl-w-full tl-text-black tl-outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="tl-bg-white tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-placeholder:text-white tl-w-full tl-text-black tl-outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="tl-bg-white tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-placeholder:text-white tl-w-full tl-text-black tl-outline-none"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          className="tl-bg-white tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-placeholder:text-white tl-w-full tl-text-black tl-outline-none"
        />
        <Link
          to="/login"
          className="tl-bg-[#580979] tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-text-white tl-w-full tl-cursor-pointer"
        >
          Submit
        </Link>
        <Link to="/login" className="tl-mt-3">Already have an account?</Link>
      </form>
    </div>
  );
}

export default RegistrationForm;