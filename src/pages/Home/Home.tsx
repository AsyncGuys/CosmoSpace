import React from "react";
import Navbar from "../../components/Navbar";
import About from "../../components/About/About";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full text-6xl h-screen text-white p-10 grid place-items-center gap-2">
        <p className="font-extrabold tracking-wider mb-5">
          Welcome to CosmoSpace !
          <Header />
          <button className="btn btn-blue rounded-lg text-2xl">
            <Link to="/demo">Start Demo</Link>
          </button>
        </p>
      </div>
      <About />
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
