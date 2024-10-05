import Button from "../../UI/Button"
import { Link } from "react-router-dom"

const Email = () => {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
			<div className="flex items-center">
        <span className="circle"></span>
        <span className="line"></span>
        <span className="circle"></span>
        <span className="line"></span>
        <span className="circle bg-primary"></span>
        <span className="line"></span>
        <span className="circle"></span>
      </div>
			<div className="contain w-[90%] md:w-fit text-center">
				<form action="" className="flex flex-col gap-4 items-center mt-6">
					<h2 className="text-6xl text-bodyColor font-bold mb-8">
						البريد الالكتروني
					</h2>
					<input
						type="text"
						placeholder="البريد الالكتروني ..."
						className="w-[100%] md:w-[505px] h-[65px] rounded-[10px] bg-[#f1f1f1] focus:outline-primary px-6 placeholder:text-[#aaa]"
					/>
					<Button type={"submit"} width={"w-[100%] md:w-[505px]"}>
						<Link to="/register/password">التالي</Link>
					</Button>
				</form>
			</div>
		</main>
  )
}

export default Email