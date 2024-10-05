import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Welcome from "./Components/Pages/Welcome"
import Login from "./Components/Pages/Login"
import Posts from "./Components/Pages/Posts"
import ForgetPassword from "./Components/Pages/ForgetPassword"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/forget_password" element={<ForgetPassword />}/>
      </Routes>
    </Router>
  )
}

export default App