import Header from "../UI/Header";
import { Link } from "react-router-dom"

const Sittings = () => {
  return (
    <>
    <Header />
    <main>
      <section>
        <h1 className="my-32 font-bold text-3xl	mr-20">الأعدادات</h1>
        <div className="flex sm:flex-wrap">
          <div className="shadow-lg w-96 h-96 mr-20 rounded-lg">
            <h3 className="my-6 mr-6 font-bold">تغيير الاسم</h3>
            <input type="text" placeholder="الاسم الأول...." className="block bg-slate-200 w-64 h-12 my-4 mr-6 outline-none rounded-md" />
            <input type="text" placeholder="الاسم الثاني...." className="block bg-slate-200 w-64 h-12 my-4 mr-6 outline-none rounded-md" />
            <button className="bg-primary pl-20 pr-20 py-5 rounded-2xl mr-10 hover:bg-secondary transition-all text-white">حفظ</button>
          </div>

          <div className="shadow-lg w-96 h-96 mr-52 rounded-lg sm:mr-20">
            <h3 className="my-6 mr-6 font-bold">تغير المسمى الوظيفي</h3>
            <input type="text" placeholder="تغير المسمى الوظيفي" className="block bg-slate-200 w-64 h-12 my-4 mr-10 outline-none rounded-md" />
            <button className="bg-primary pl-20 pr-20 py-5 rounded-2xl mr-20 hover:bg-secondary transition-all text-white">حفظ</button>
          </div>
        </div>
        <div className="flex sm:flex-wrap">
          <div className="shadow-lg w-96 h-96 mr-20 rounded-lg">
          <h3 className="my-6 mr-6 font-bold">تغير الصورة</h3>
          <i className="fa-solid fa-user-tie fa-xl mr-20 "></i>
          <a href="" className="text-primary underline mr-2">رفع الصورة</a>
            <button className="bg-primary pl-20 pr-20 py-5 rounded-2xl mr-20 hover:bg-secondary transition-all block my-10 text-white">حفظ</button>
          </div>
          <div className="shadow-lg w-96 h-96 mr-52 rounded-lg sm:mr-20">
          <h3 className="my-6 mr-6 font-bold">تغير النمط</h3>
            <input type="radio" name="Dark" id="" className="border-primary mr-6" />
          <label htmlFor="" className="font-bold mr-1">داكن</label><br />
            <input type="radio" name="White" className="border-primary mr-6" id="" />
            <label htmlFor="" className="font-bold mr-1">فاتح</label><br />
            <button className="bg-primary pl-20 pr-20 py-5 rounded-2xl mr-10 my-4 hover:bg-secondary transition-all text-white">حفظ</button>
          </div>
        </div>
       <Link to="/Login" className="bg-primary text-white font-bold block w-2/3 mr-36 pr-96  py-4 rounded-md my-36">تسجيل الخروج</Link>
      </section>
    </main>
    </>
  )
}

export default Sittings