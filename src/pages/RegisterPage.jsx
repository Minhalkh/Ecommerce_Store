// This is RegisterPage
import RegisterForm from '../components/RegisterForm'

function Register() {
    return (
      <nav className="main-app tl-flex tl-flex-col tl-gap-y-3 tl-justify-center tl-items-center tl-h-[100vh] tl-w-full tl-top-0 tl-absolute tl-bg-gradient-to-tr tl-from-red-500 tl-to-blue-500">
        <RegisterForm />
      </nav>
    )
}

export default Register