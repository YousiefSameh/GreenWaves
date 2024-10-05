import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Pages/Welcome";
import Login from "./Components/Pages/Login";
import ForgetPassword from "./Components/Pages/ForgetPassword";
import Name from "./Components/Pages/Register/Name";
import Born from "./Components/Pages/Register/Born";
import Posts from "./Components/Pages/Posts";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register/name" element={<Name />} />
				<Route path="/register/born" element={<Born />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/forget_password" element={<ForgetPassword />} />
			</Routes>
		</Router>
	);
};

export default App;
