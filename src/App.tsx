import React from "react";
import "./App.css";
import Solar from "./components/Solatsystem/Solar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Check from "./pages/DemoPage/Check";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="">
      <Navbar/>
      <Solar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check" element={<Check />} />
      </Routes>
    </div>
  );
}

export default App;
