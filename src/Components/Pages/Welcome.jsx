import Button from "../UI/Button"
import { Link } from "react-router-dom"
const Welcome = () => {
  return (
    <main className="flex flex-col items-center md:flex-row h-screen justify-center">
      <img src="./assets/welcome.png" alt="Image" className="w-1/2 hidden md:block h-screen" />
      <div className="text flex items-center flex-col w-full md:w-1/2">
        <img src="./assets/Logo.png" alt="Logo" className="w-[250px] h-[250px]" />
        <h1 className="text-5xl font-bold mt-6">مرحبا بك في <br /> <p className="pt-5">GreenWaves</p></h1>
        <div className="btns space-x-4 sm:space-x-12 mt-10">
          <Button width={"w-fit"}>
            <Link to="/login">تسجيل الدخول</Link>
          </Button>
          <Button width={"w-fit"}>
            <Link to="/register">أنشاء حساب</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Welcome