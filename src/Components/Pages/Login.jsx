import Button from "../UI/Button"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center flex-col text-center">
      <form action="" className="flex flex-col gap-4">
        <h2 className="text-6xl text-bodyColor font-bold mb-8">تسجيل الدخول</h2>
        <input type="email" placeholder="البريد الالكتروني..." className="w-[505px] h-[65px] rounded-[10px] bg-[#f1f1f1] focus:outline-primary px-6 placeholder:text-[#aaa]"/>
        <input type="password" placeholder="كلمة المرور ..." className="w-[505px] h-[65px] rounded-[10px] bg-[#f1f1f1] focus:outline-primary px-6 placeholder:text-[#aaa]"/>
        <Button type={"submit"} width={"w-[505px]"}>
          <Link to="/posts">سجل دخولك</Link>
        </Button>
      </form>
      <div className="w-[710px] h-[2px] bg-[#aaa] my-6"/>
      <Button width={"w-[505px]"}>
        <div className="flex items-center justify-center gap-4">
          <p>تسجيل الدخول باستخدام Google</p>
          <img src="./assets/google.svg" alt="" />
        </div>
      </Button>
      <div className="others flex items-center w-[505px] my-6 justify-between">
        <Link to="/forget_password" className="text-secondary transition-all hover:text-primary font-bold">هل نسيت كلمة السر ؟</Link>
        <Link to="/register" className="text-secondary transition-all hover:text-primary font-bold">انشاء حساب جديد</Link>
      </div>
    </main>
  )
}

export default Login