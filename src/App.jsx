import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Pages/Welcome";
import Login from "./Components/Pages/Login";
import ForgetPassword from "./Components/Pages/ForgetPassword";
import Name from "./Components/Pages/Register/Name";
import Born from "./Components/Pages/Register/Born";
import Email from "./Components/Pages/Register/Email";
import Password from "./Components/Pages/Register/Password";
import Posts from "./Components/Pages/Posts";
import Profile from "./Components/Pages/Profile";
import Activties from "./Components/Pages/Activties";
import Settings from "./Components/Pages/Settings";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/login" element={<Login />} />
				<Route path="/forget_password" element={<ForgetPassword />} />
				<Route path="/register/name" element={<Name />} />
				<Route path="/register/born" element={<Born />} />
				<Route path="/register/email" element={<Email />} />
				<Route path="/register/password" element={<Password />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/Profile" element={<Profile />} />
				<Route path="/Activties" element={<Activties />} />
				<Route path="/Settings" element={<Settings />} />
			</Routes>
		</Router>
	);
};

export default App;
