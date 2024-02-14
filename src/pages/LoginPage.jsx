// This is loginPage
import LoginForm from '../components/LoginForm'
function Login() {
    return (
      <nav className="main-app tl-flex tl-flex-col tl-gap-y-3 tl-justify-center tl-items-center tl-h-[100vh] tl-w-full tl-top-0 tl-absolute tl-bg-gradient-to-tr tl-from-red-500 tl-to-blue-500">
        <LoginForm />
      </nav>
    )
}

export default Login