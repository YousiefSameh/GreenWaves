import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="shadow-lg flex items-center fixed top-0 left-0 bg-white z-30 w-full">
      <div className="container px-4 md:px-0 mx-auto flex items-center justify-between my-4">
        <div className="right-side flex items-center gap-12">
          <img src="./assets/Logo.png" className="w-[50px] h-[50px] mr-20" alt="" />
          <nav className="flex items-center gap-12">
            <Link to="/posts" className="text-lg font-bold transition-all hover:text-primary">الرئيسية</Link>
            <Link to="/activties" className="text-lg font-bold transition-all hover:text-primary">الفعاليات</Link>
          </nav>
        </div>
        <Link to="/Profile" className="border border-[#aaa] w-[48px] h-[48px] rounded-full flex items-center justify-center ml-20"><i className="fa-solid fa-user-tie fa-xl"></i></Link>
      </div>
    </header>
  )
}

export default Header