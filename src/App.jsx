import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Welcome from "./Components/Pages/Welcome"
import Login from "./Components/Pages/Login"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App