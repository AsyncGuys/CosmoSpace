import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; 2023 CosmoSpace. All rights reserved.
        </div>
        <div className="text-sm">
          Created with <span className="text-red-500">&hearts;</span> by{" "}
          <a href="https://github.com/AsyncGuys" className="underline" target="_blank">
            Team Rocket
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
