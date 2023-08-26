import React from "react";
import "./App.css";
import Solar from "./components/Solatsystem/Solar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import TestPage from "./pages/Testthign/TestPage";
function App() {
  return (
    <div className="">
      <Solar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/check" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;
