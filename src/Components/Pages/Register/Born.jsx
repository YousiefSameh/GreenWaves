import Button from "../../UI/Button";
import { Link } from "react-router-dom";

const Born = () => {
	return (
		<main className="h-screen w-screen flex flex-col justify-center items-center">
			<div className="flex items-center">
				<span className="circle"></span>
				<span className="line"></span>
				<span className="circle bg-primary"></span>
				<span className="line"></span>
				<span className="circle"></span>
				<span className="line"></span>
				<span className="circle"></span>
			</div>
			<div className="contain w-[90%] md:w-fit">
				<form action="" className="flex flex-col gap-4 items-center mt-6">
					<h2 className="text-6xl text-bodyColor font-bold mb-8">
						تاريخ الميلاد
					</h2>
					<input
						type="date"
						placeholder="تاريخ الميلاد ..."
						className="w-[90%] md:w-[505px] h-[65px] rounded-[10px] bg-[#f1f1f1] focus:outline-primary px-6 placeholder:text-[#aaa]"
					/>
					<div className="w-[90%] md:w-[710px] h-[2px] bg-[#aaa] my-6" />
					<h2 className="text-6xl text-bodyColor font-bold mb-8">الجنس</h2>
					<div className="flex items-center justify-evenly w-full">
						<div className="flex items-center">
							<input
								type="radio"
								name="type"
								id="man"
								className="form-radio h-4 w-4 text-green-600"
							/>
							<label htmlFor="man" className="mr-3 text-lg font-bold">
								ذكر
							</label>
						</div>
						<div className="flex items-center">
							<input
								type="radio"
								name="type"
								id="girl"
								className="form-radio h-4 w-4 text-green-600"
							/>
							<label htmlFor="girl" className="mr-3 text-lg font-bold">
								أنثى
							</label>
						</div>
					</div>
					<Button type={"submit"} width={"w-[90%] md:w-[505px]"}>
						<Link to="/register/born">التالي</Link>
					</Button>
				</form>
			</div>
		</main>
	);
};

export default Born;
