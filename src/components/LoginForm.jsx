// This is loginForm
import loginImage from "../assets/images/login9.jpg"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function Login() {
  return (
    <div className="form-container tl-flex tl-h-[500px] tl-shadow-2xl tl-bg-green-500 tl-border tl-rounded-lg">
    <img src={loginImage} className="tl-w-[500px] tl-rounded-tl-lg tl-rounded-bl-lg" />
    <form className="form-content tl-bg-gray-200 tl-flex tl-justify-center tl-items-center tl-rounded-tr-lg tl-rounded-br-lg tl-flex-col tl-gap-5 tl-p-5 tl-w-[300px]">
      <h2 className="tl-text-center tl-text-3xl tl-font-semibold tl-text-purple-800">Login</h2>
      <input
        type="email" placeholder="Email" name="email"
        className="tl-bg-white tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-placeholder:text-white tl-w-full tl-text-black tl-outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="tl-bg-white tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-placeholder:text-white tl-w-full tl-text-black tl-outline-none"
      />
      <Link
        to="/"
        className="tl-bg-#580979 tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-text-white tl-w-full tl-text-white tl-bg-purple-800 tl-cursor-pointer"
      >Submit</Link>
      <Link to="/register" className="tl-mt-3">Do you want to create new account</Link>
    </form>
    </div>
  );
}

export default Login;