// This is RegisterForm

function RegistrationForm() {
  return (
    <form className="tl-bg-gray-200 tl-flex tl-justify-center tl-items-center tl-flex-col tl-gap-5 tl-p-5 tl-w-[300px] tl-h-[400px] tl-bg-gradient-to-tr tl-from-red-500 tl-to-blue-500 tl-rounded-3xl">
      <h2 className="tl-text-center tl-text-3xl tl-font-semibold tl-text-white">Login</h2>
      <input
        type="email" placeholder="Your Email Id" name="email"
        className="tl-bg-transparent tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-placeholder:text-white tl-w-full tl-text-white tl-outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="tl-bg-transparent tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-placeholder:text-white tl-w-full tl-text-white tl-outline-none"
      />
      <input
        type="submit"
        className="tl-bg-transparent tl-border-white tl-border-2 tl-rounded-full tl-p-3 tl-text-center tl-text-white tl-w-full tl-text-white hover:tl-text-black hover:tl-bg-white tl-cursor-pointer"
      />
    </form>
  );
}

export default RegistrationForm;
