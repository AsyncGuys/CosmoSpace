import { useState } from "react";
// import { useThemeContext } from "../hooks/useThemeContext";
// import Light from "./icons/Light";
// import Logo from "./icons/Logo";
import Bars from "./icons/Bars";
import Close from "./icons/Close";
import { Link } from "react-router-dom";
// import Dark from "./icons/Dark";
let Links = [
  { name: "Home", link: "/" },
  { name: "Demo", link: "/check" },
];
const Navbar = () => {
  const [open, setopen] = useState(false);
  const [theme ,changeTheme] =useState('dark');
  return (
    <section className={"w-full h-20 p-4 flex justify-between items-center md:justify-around fixed top-0 overflow-y-hidden "+`${theme==='dark' ? 'bg-black':'bg-background'}`}>
      <div className="w-20 m-3 text-white animate-bounce">
         <img src="https://img.icons8.com/?size=512&id=MP4mk-h7lyZW&format=png" alt="Logo" width="100%" height="100%"/>
          {/* logo */}
      </div> 
      <div className={"absolute w-full h-auto p-5 top-20 md:static text-center "+`${theme==='dark' ? 'bg-darkmodebackground':'bg-background'}`}>
        <ul className={"w-full flex flex-col items-center md:flex-row md:justify-center md:items-center"+`${open ? '':' hidden md:flex'}`}>
      {
        Links.map((link,index)=> (
          <li className="text-2xl font-medium m-5 text-white hover:text-secondary focus:text-secondary" key={index} onClick={()=>{setopen(!open)}}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))
      }
      <li className="text-2xl font-medium m-5 text-white hover:text-secondary focus:text-secondary" onClick={()=>{setopen(!open)}}>
        <a href="#about">About</a>
      </li>  
        </ul>
      </div>
     <div className="flex items-center mr-2">
      <div onClick={()=> setopen(!open)} className="md:hidden pl-4">
        <div>
         {open ? <Close/>: <Bars />}
        </div>
      </div>
     </div>
    </section>
  );
};
export default Navbar;