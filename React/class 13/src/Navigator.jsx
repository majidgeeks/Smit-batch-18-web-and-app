import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";


const Navigator = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Dashboard" element={<Dashboard />} />

        </Routes>
        </BrowserRouter>
        </>
    )
};

export default Navigator;