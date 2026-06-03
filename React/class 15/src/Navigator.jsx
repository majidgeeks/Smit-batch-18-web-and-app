
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import SignUp from "./pages/SignUp";

const Navigator = () => {
    return(
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
          </Routes>
        </BrowserRouter>
        </>
    )
};

export default Navigator;