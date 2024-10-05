import Button from "../UI/Button"
import { Link } from "react-router-dom"
const Welcome = () => {
  return (
    <main className="flex flex-col items-center md:flex-row h-screen justify-center">
      <div className="text flex items-center flex-col w-full md:w-1/2">
        <img src="./assets/Logo.png" alt="Logo" className="w-[250px] h-[250px]" />
        <h1 className="text-5xl font-bold mt-6 text-bodyColor">مرحبا بك في <br /> <p className="pt-5">GreenWaves</p></h1>
        <div className="btns mt-10 gap-12 flex items-center">
          <Button width={"w-fit"}>
            <Link to="/register/name">أنشاء حساب</Link>
          </Button>
          <Button width={"w-fit"}>
            <Link to="/login">تسجيل الدخول</Link>
          </Button>
        </div>
      </div>
      <img src="./assets/welcome.png" alt="Image" className="w-1/2 hidden md:block h-screen" />
    </main>
  )
}

export default Welcome