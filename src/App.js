
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./components/Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import DashBoard from "./components/DashBoard";
import Polling from "./components/Polling";

import Results from "./components/Results";



function App() {





  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/polling" element={<Polling />} />
        <Route path="/result" element={<Results />} />
      </Routes>






    </BrowserRouter>
  )

}



export default App
