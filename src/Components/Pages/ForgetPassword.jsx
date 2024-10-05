import Button from "../UI/Button";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center flex-col text-center">
      <form action="" className="flex flex-col gap-4">
        <h2 className="text-6xl text-bodyColor font-bold mb-8">نسيان كلمة المرور</h2>
        <input type="password" placeholder="كلمة المرور ..." className="w-[505px] h-[65px] rounded-[10px] bg-[#f1f1f1] focus:outline-primary px-6 placeholder:text-[#aaa]"/>
        <input type="password" placeholder="تأكيد كلمة المرور ..." className="w-[505px] h-[65px] rounded-[10px] bg-[#f1f1f1] focus:outline-primary px-6 placeholder:text-[#aaa]"/>
        <Button width={"w-[505px]"}>
          <Link to="/login">سجل دخولك</Link>
        </Button>
      </form>
    </main>
  )
}

export default ForgetPassword