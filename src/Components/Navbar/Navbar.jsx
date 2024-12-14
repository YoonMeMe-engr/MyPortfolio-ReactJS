import { Link } from 'react-scroll'
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import DarkMode from './DarkMode'
import ResponsiveMenu from './ResponsiveMenu'

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
      <div className='flex justify-between items-center h-[10vh]' id="Navbar">
        <div className="nav-left flex items-center space-x-5">
            <div className="text-[#7fb8f9] navName text-[1.9rem]">Ms. Yoon Me Me</div>
            <div className="">
                <DarkMode></DarkMode>
            </div>
        </div>
        <div className="nav-right cursor-pointer flex items-center space-x-8 dark:z-50">
            <ul className='lg:space-x-8 hidden lg:flex'>
                <Link spy={true} to='Navbar' smooth={true} activeClass='active' className='hover:text-primary'>
                    <li>Home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true} className='hover:text-primary'>
                    <li>Services</li>
                </Link>
                <Link spy={true} to='Experiences' smooth={true} className='hover:text-primary'>
                    <li>Experiences</li>
                </Link>
                <Link spy={true} to='Portfolio' smooth={true} className='hover:text-primary'>
                    <li>Portfolio</li>
                </Link>
                <Link spy={true} to='Testimonial' smooth={true} className='hover:text-primary'>
                    <li>Testimonials</li>
                </Link>                 
            </ul>
            <Link to='contact' spy={true} smooth={true} className='hidden md:flex'>
                <button className="button">
                        Contact Me
                </button>
            </Link>
            <button className='mobile-menu lg:hidden' onClick={() => setOpen(!open)}>
                <FontAwesomeIcon icon={faBars} className='text-4xl'/>
            </button>
        </div>
        <ResponsiveMenu open={open}></ResponsiveMenu>
      </div>
    )
}