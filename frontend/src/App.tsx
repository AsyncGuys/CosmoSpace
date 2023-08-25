import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Solar from "./components/Solatsystem/Solar";

function App() {
  return (
    <div className="bg-black h-screen w-full flex justify-center items-center">
      <Navbar/>
      <Solar/>
    </div>
  );
}

export default App;
