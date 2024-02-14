// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import FirstHtml from './practice/FirstHtml'

// import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="main-app tl-flex tl-justify-center tl-items-center tl-h-[100vh] tl-w-full tl-top-0 tl-absolute tl-bg-gradient-to-tr tl-from-red-500 tl-to-blue-500">
      <Register />
      {/* <Login /> */}
    </div>
    </>
  )
}

export default App