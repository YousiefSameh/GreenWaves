import Header from "../UI/Header";
import { Link } from "react-router-dom"
import Button from "../UI/Button"

const Settings = () => {
  return (
    <>
    <Header />
    <main className="mt-32 w-[90%] mx-auto md:w-full">
      <section className="container mx-auto">
        <h1 className="mb-6 font-bold text-5xl">الأعدادات</h1>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 w-full">
          <div className="shadow-lg w-full h-96 rounded-lg p-4">
            <h3 className="my-6 text-3xl font-extrabold">تغيير الاسم</h3>
            <input type="text" placeholder="الاسم الأول...." className="block bg-[#f1f1f1] placeholder:text-[#aaaaaa] w-full h-[64px] my-4 px-6 outline-none rounded-xl" />
            <input type="text" placeholder="الاسم الثاني...." className="block bg-[#f1f1f1] placeholder:text-[#aaaaaa] w-full h-[64px] px-6 outline-none rounded-xl" />
            <Button width={"w-[180px] my-8 block mx-auto"}>
              <p className="text-3xl font-bold text-white">حفظ</p>
            </Button>
          </div>
          <div className="shadow-lg w-full h-96 rounded-lg p-4">
            <h3 className="my-6 text-3xl font-extrabold">تغير المسمى الوظيفي</h3>
            <input type="text" placeholder="تغير المسمى الوظيفي ..." className="block bg-[#f1f1f1] placeholder:text-[#aaaaaa] w-full h-[64px] my-4 px-6 outline-none rounded-xl" />
            <Button width={"w-[180px] my-8 block mx-auto"}>
              <p className="text-3xl font-bold text-white">حفظ</p>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 w-full">
          <div className="shadow-lg w-full h-96 rounded-lg p-4">
            <h3 className="my-6 text-3xl font-extrabold">تغير الصورة</h3>
            <div className="content flex justify-center items-center gap-6">
              <a href="" className="text-primary underline text-xl font-bold">رفع الصورة</a>
              <div className="border border-[#aaa] w-[108px] h-[108px] rounded-full flex items-center justify-center"><i className="fa-solid fa-user-tie text-5xl"></i></div>
            </div>
            <Button width={"w-[180px] my-8 block mx-auto"}>
              <p className="text-3xl font-bold text-white">حفظ</p>
            </Button>
          </div>
          <div className="shadow-lg w-full h-96 rounded-lg p-4">
            <h3 className="my-6 text-3xl font-extrabold">تغير النمط</h3>
            <div className="my-2 flex items-center gap-3">
              <input type="radio" name="theme" value={"Dark"} id="dark" className="border-primary mr-6 w-[28px] h-[28px]" />
              <label htmlFor="dark" className="font-bold text-lg">داكن</label>
            </div>
            <div className="my-2 flex items-center gap-3">
              <input type="radio" name="theme" value={"Light"} className="border-primary mr-6 w-[28px] h-[28px]" id="light" />
              <label htmlFor="light" className="font-bold text-lg">فاتح</label>
            </div>
            <Button width={"w-[180px] my-8 block mx-auto"}>
              <p className="text-3xl font-bold text-white">حفظ</p>
            </Button>
          </div>
        </div>
        <Button width={"w-full my-12"} >
          <Link to="/Login" className="text-white font-bold rounded-md text-2xl">تسجيل الخروج</Link>
        </Button>
      </section>
    </main>
    </>
  )
}

export default Settings