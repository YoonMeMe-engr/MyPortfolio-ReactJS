import React from 'react'
import {faSun, faMoon} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function DarkMode() {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? 
        localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;
    React.useEffect(() => {
        if(theme === 'dark') {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);
  return (
    <div className='relative'>     
        <FontAwesomeIcon onClick={() => setTheme(theme === "light" ? "dark" : "light")} icon={faSun} className={`text-[#fca61f] text-xl cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}/>
        <FontAwesomeIcon onClick={() => setTheme(theme === "light" ? "dark" : "light")} icon={faMoon} className={`text-[#fca61f] text-xl cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "light" ? "opacity-0" : "opacity-100"}`}/>
    </div>
  )
}