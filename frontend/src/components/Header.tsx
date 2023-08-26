import React from "react";
import { useState, useEffect } from "react";
// convert  into arrow function component

const Header :React.FC = () => {
  const [text, setT] = useState<string>("");
  const f = () => console.log("");
  const t = "Discovering Asteroid Dimensions: Unveiling the Universe's Spheres";
  function type(s = 100, i = 0, d = 0) {
    setInterval(
      () => (
        d == 0 ? i++ : i--,
        i >= t.length && d == 0 ? (d = 1) : i == 0 ? (d = 0) : 0,
        setT(t.slice(0, i))
      ),
      s
    );
  }
  useEffect(() => {
    type();
    console.log("hiop")
  }, []);

  return (
    <h1 id="hip" onClick={f} className="text-yellow-500 h-20 w-full text-4xl mt-5">
      {text}
    </h1>
  );
};


export default Header;
