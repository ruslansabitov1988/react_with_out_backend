import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./pages/About"
import MarsCamera from "./pages/MarsCamera"
import Artist from "./pages/Artist"
import Home from "./pages/Home"
import Check from "./pages/Check"
import BootstrapNavbar from "./components/BootstrapNavbar"

import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <BrowserRouter>
      <BootstrapNavbar/>

      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/marscamera" element={<MarsCamera/>} />
          <Route path="/artist" element={<Artist/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/check" element={<Check/>} />
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
