import { useState } from "react";
import Header from "../UI/Header";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Posts = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div
				className={`${
					open ? "left-0" : "-left-[110%]"
				} transition-all fixed top-0 before:absolute before:top-0 before:left-0 before:w-screen before:h-screen before:bg-[#00000083] z-40 w-screen h-screen flex items-center justify-center`}
			>
				<div className="model py-8 px-12 bg-white w-1/2 rounded-2xl relative z-50">
					<div className="flex items-center justify-between">
						<div></div>
						<h1 className="text-4xl font-bold">أنشأ منشور</h1>
						<button className="text-primary" onClick={() => setOpen(false)}>
							<i className="fa-solid fa-xmark fa-2x"></i>
						</button>
					</div>
					<div className="w-full h-[2px] bg-[#f1f1f1] my-6" />
					<div className="content bg-[#bbb] rounded-md p-5">
						<div className="profile flex items-center gap-4">
							<div className="border border-[#aaa] w-[48px] h-[48px] rounded-full flex items-center justify-center">
								<i className="fa-solid fa-user-tie fa-xl"></i>
							</div>
							<p className="font-bold text-lg">محمد رمضان</p>
						</div>
						<div className="inputs flex flex-col gap-4 mt-3">
							<input
								type="text"
								placeholder="أكتب المشكلة ..."
								className="px-6 py-3 rounded-xl outline-primary"
								name="Problem"
							/>
							<textarea
								type="text"
								className="w-full px-6 py-3 rounded-xl outline-primary"
								placeholder="أكتب اقتراحك للحلها ..."
								rows={5}
							/>
						</div>
					</div>
					<nav className="flex items-center my-6 justify-evenly w-full">
						<button className="flex items-center gap-4 transition-all hover:text-secondary">
							<span className="text-lg font-bold">صورة</span>
							<i className="fa-regular fa-images fa-2xl text-secondary"></i>
						</button>
						<button className="flex items-center gap-4 transition-all hover:text-secondary">
							<span className="text-lg font-bold">مقاطع فيديو</span>
							<i className="fa-solid fa-video fa-2xl text-secondary"></i>
						</button>
					</nav>
					<Button width={"w-full"}>
						<Link to="/posts">نشر</Link>
					</Button>
				</div>
			</div>
			<Header />
			<main className="container mx-auto flex flex-col gap-12 items-center mt-[100px]">
				<div className="make-post w-[90%] md:w-[935px] shadow-lg rounded-2xl p-2 py-4 md:p-12 flex flex-col items-center justify-center">
					<div className="flex items-center gap-4 md:gap-12 w-full">
						<div className="border border-[#aaa] !w-[72px] !h-[72px] rounded-full flex items-center justify-center">
							<i className="fa-solid fa-user-tie text-2xl"></i>
						</div>
						<button
							onClick={() => setOpen(true)}
							className="w-full md:w-[560px] h-[70px] rounded-[15px] text-right px-6 shadow-md bg-[#f1f1f1] text-[#aaa]"
						>
							أكتب شيئأً ...
						</button>
					</div>
					<div className="w-[90%] md:w-[710px] h-[2px] bg-[#aaa] my-6" />
					<nav className="flex items-center justify-evenly w-full">
						<button
							className="flex items-center gap-4 transition-all hover:text-secondary"
							onClick={() => setOpen(true)}
						>
							<span className="text-lg font-bold">صورة</span>
							<i className="fa-regular fa-images fa-2xl text-secondary"></i>
						</button>
						<button
							className="flex items-center gap-4 transition-all hover:text-secondary"
							onClick={() => setOpen(true)}
						>
							<span className="text-lg font-bold">مقاطع فيديو</span>
							<i className="fa-solid fa-video fa-2xl text-secondary"></i>
						</button>
					</nav>
				</div>
				<div className="posts w-full flex flex-col gap-12">
					<div className="post bg-white shadow-xl rounded-xl p-4 md:p-12 w-[90%] md:w-[1050px] mx-auto">
						<div className="top-side flex items-center justify-between">
							<div className="profile flex items-center gap-4">
								<div className="border border-[#aaa] w-[72px] h-[72px] rounded-full flex items-center justify-center">
									<i className="fa-solid fa-user-tie fa-2x"></i>
								</div>
								<span className="text-lg font-bold">محمد رمضان</span>
							</div>
							<button className="text-primary">
								<i className="fa-solid fa-xmark fa-2x"></i>
							</button>
						</div>
						<div className="content mt-4">
							<h2 className="text-3xl font-bold my-2">
								خدمة البرتقال لأشهر ( 10– 11– 12)
							</h2>
							<p className="text-lg leading-loose">
								<strong>مزارع الري بالغمر</strong>
								<br />
								برنامج إرشادي لمزارع البرتقال المروية بالغمر
								<br />
								1- الري :- يحتاج فدان البرتقال خلال هذه الفترة إلى رية كل 25 إلى
								35 يوم حسب عمر الأشجار والتربة والظروف الجوية
								<br /> 2- التسميد:- شهر اكتوبر // 100 كجم نترات الكالسيوم /
								للفدان التسميد الورقي الرشة الأولي خلال شهر أكتوبر:-1 لتر
								كالسيوم مخلبي /600 لتر
								<br />
								<strong>مزارع الري بالتنقيط</strong>
								<br />
								برنامج إرشادى لتسميد ورى مزارع البرتقال المروية بالتنقيط
							</p>
							<img
								src="./assets/Post.png"
								className="w-[60%] mx-auto mt-3"
								alt=""
							/>
						</div>
						<div className="w-[90%] mx-auto h-[2px] bg-[#aaa] my-6" />
						<nav className="actions flex items-center justify-evenly">
							<button className="flex items-center gap-2 transition-all hover:text-primary">
								<i className="fa-solid fa-thumbs-up text-xl"></i>
								<p className="text-xl font-bold">أعجبني</p>
							</button>
							<button className="flex items-center gap-2">
								<i className="fa-regular fa-comment text-xl"></i>
								<p className="text-xl font-bold">تعليق</p>
							</button>
							<button className="flex items-center gap-2">
								<i className="fa-solid fa-share text-xl"></i>
								<p className="text-xl font-bold">نشر</p>
							</button>
						</nav>
					</div>
					<div className="post bg-white shadow-xl rounded-xl p-4 md:p-12 w-[90%] md:w-[1050px] mx-auto">
						<div className="top-side flex items-center justify-between">
							<div className="profile flex items-center gap-4">
								<div className="border border-[#aaa] w-[72px] h-[72px] rounded-full flex items-center justify-center">
									<i className="fa-solid fa-user-tie fa-2x"></i>
								</div>
								<span className="text-lg font-bold">محمد رمضان</span>
							</div>
							<button className="text-primary">
								<i className="fa-solid fa-xmark fa-2x"></i>
							</button>
						</div>
						<div className="content mt-4">
							<h2 className="text-3xl font-bold my-2">
								تحليل اقتصادى للصادرات المصرية من الفراولة الطازجة فى أهم
								أسواقها العالمية
							</h2>
							<p className="text-lg leading-loose">
								استهدف هذا البحث إجراء تحليل اقتصادى للصادرات المصرية من محصول
								الفراولة الطازجة فى أهم أسواقه العالمية ودراسة التوزيع الجغرافى
								وتقدير مؤشرات القدرة التنافسية، بالإضافة إلى تقدير نموذج الطلب
								شبه الأمثل للتعرف على مدى استجابة الطلب للتغيرات في الأسعار
								والإنفاق، وتحليل العلاقة التنافسية بين مصادر الاستيراد المختلفة
								للتعرف على الفرص التصديرية الواعدة والفعلية وغير المحققة
								للفراولة المصرية فى أهم أسواقها العالمية. وأظهرت النتائج أن
								المملكة المتحدة جاءت فى المرتبة الأولى من حيث أهم الدول
								المستوردة للفراولة المصرية بمتوسط كمية بلغ حوالى 4407 ألف طن،
								وبأهمية نسبية بلغت نحو 18.79%، فى حين جاءت بلجيكا فى المرتبة
								الثانية بمتوسط كمية بلغ حوالى 3937.8 ألف طن وبأهمية نسبية بلغت
								نحو 16.79%، بينما جاءت ألمانيا فى المرتبة الثالثة بمتوسط كمية
								بلغ حوالى 2644.2 ألف طن وبأهمية نسبية بلغت نحو 11.28%. كما أوضحت
								النتائج أن الفرص الواعدة لمصر داخل سوق روسيا الإتحادية بلغت
								حوالى 14 مليون دولار، بينما المحقق من تصدير تلك الكميات بلغ
								حوالى 8.7 مليون دولار وبالتالى هناك فرص غير محققة (مهدرة) داخل
								هذا السوق وصلت إلى حوالى 5 مليون دولار، وحققت مصر فى سوق كندا
								حوالى 4.5 ألف دولار بنسبة 0.05% من هذا السوق وفقدت نحو 9 مليون
								دولار بنسبة 100% من الفرص الواعدة لها داخل هذا السوق
							</p>
						</div>
						<div className="w-[90%] mx-auto h-[2px] bg-[#aaa] my-6" />
						<nav className="actions flex items-center justify-evenly">
							<button className="flex items-center gap-2 transition-all hover:text-primary">
								<i className="fa-solid fa-thumbs-up text-xl"></i>
								<p className="text-xl font-bold">أعجبني</p>
							</button>
							<button className="flex items-center gap-2">
								<i className="fa-regular fa-comment text-xl"></i>
								<p className="text-xl font-bold">تعليق</p>
							</button>
							<button className="flex items-center gap-2">
								<i className="fa-solid fa-share text-xl"></i>
								<p className="text-xl font-bold">نشر</p>
							</button>
						</nav>
					</div>
					<div className="post bg-white shadow-xl rounded-xl p-4 md:p-12 w-[90%] md:w-[1050px] mx-auto">
						<div className="top-side flex items-center justify-between">
							<div className="profile flex items-center gap-4">
								<div className="border border-[#aaa] w-[72px] h-[72px] rounded-full flex items-center justify-center">
									<i className="fa-solid fa-user-tie fa-2x"></i>
								</div>
								<span className="text-lg font-bold">محمد رمضان</span>
							</div>
							<button className="text-primary">
								<i className="fa-solid fa-xmark fa-2x"></i>
							</button>
						</div>
						<div className="content mt-4">
							<h2 className="text-3xl font-bold my-2">
								خدمة الفراولة لأشهر ( 10– 11– 12)
							</h2>
							<p className="text-lg leading-loose">
								<strong>مزارع الري بالغمر</strong>
								<br />
								برنامج إرشادي لمزارع الفراولة المروية بالغمر
								<br />
								1- الري :- <br /> يحتاج فدان الفراولة خلال هذه الفترة إلى رية كل
								25 إلى 35 يوم حسب عمر الأشجار والتربة والظروف الجوية
								<br />
								2- التسميد:- <br /> شهر اكتوبر // 100 كجم نترات الكالسيوم /
								للفدان
								<br />
								التسميد الورقي <br /> الرشة الأولي خلال شهر أكتوبر:- <br /> 1
								لتر كالسيوم مخلبي /600 لتر
							</p>
						</div>
						<div className="w-[90%] mx-auto h-[2px] bg-[#aaa] my-6" />
						<nav className="actions flex items-center justify-evenly">
							<button className="flex items-center gap-2 transition-all hover:text-primary">
								<i className="fa-solid fa-thumbs-up text-xl"></i>
								<p className="text-xl font-bold">أعجبني</p>
							</button>
							<button className="flex items-center gap-2">
								<i className="fa-regular fa-comment text-xl"></i>
								<p className="text-xl font-bold">تعليق</p>
							</button>
							<button className="flex items-center gap-2">
								<i className="fa-solid fa-share text-xl"></i>
								<p className="text-xl font-bold">نشر</p>
							</button>
						</nav>
					</div>
				</div>
			</main>
		</>
	);
};

export default Posts;
