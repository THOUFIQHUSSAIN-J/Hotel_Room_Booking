
import { BrowserRouter, Route, Routes } from "react-router-dom"
import List from "./List/list";
import Login from "./Login/Login";
import Home from "./Pages/Home";
import Hotel from "./Single/Hotel";
import "./style.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
