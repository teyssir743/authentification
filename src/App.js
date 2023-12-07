
import Signup from "./components/Signup";
import './style.css';
import Header from "./components/Header";
import Login from "./components/Login";
import Dashbord from "./components/Dashbord";
import Home from "./components/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div >
    
      <Routes>
         <Route path="/" element={<Home/>} /> 
         <Route path="/register" element={<Signup/>} /> 
         <Route path="/login" element={<Login/>} /> 
         <Route path="/Dashbord" element={<Dashbord/>} /> 

      </Routes>
     
      
      
    </div>
  );
}

export default App;
