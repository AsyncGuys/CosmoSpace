import React from "react";
import "./Solar.css";
const Solar: React.FC = () => {
  return (
    <div className="fixed w-screen h-auto -z-10 overflow-hidden">
      <section id="solar-system">
        <div id="sun"></div>
        <article id="mercury-trajectory">
          <div id="mercury"></div>
        </article>
        <article id="venus-trajectory">
          <div id="venus"></div>
        </article>
        <article id="earth-trajectory">
          <div id="earth"></div>
        </article>
        <article id="mars-trajectory">
          <div id="mars"></div>
        </article>

        {/* <!--
  too far for my starship 🪐🚀
         <article id="main-asteroid-belt-trajectory"></article>
         <article id="jupiter-trajectory"></article>
         <article id="saturn-trajectory"></article>
         <article id="uranus-trajectory"></article>
         <article id="neptune-trajectory"></article>
  --> */}
      </section>
    </div>
  );
};

export default Solar;
