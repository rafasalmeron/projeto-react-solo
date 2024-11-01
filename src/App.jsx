import Login from "./pages/login/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/index.jsx";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path={"*"} element={<h1>Not Found 404</h1>} />
            </Routes>
        </BrowserRouter>
  )
}
export default App