import { Link } from 'react-scroll'
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuOpenFunction = () => {
        setMenuOpen(!menuOpen)
    }
    return (
      <div className='flex justify-between items-center' id="Navbar">
        <div className="nav-left">
            <div className="text-[#7fb8f9] navName text-[1.9rem]">Ms. Yoon Me Me</div>
        </div>
        <div className="nav-right cursor-pointer flex items-center space-x-8">
            <ul className='lg:space-x-8 hidden lg:flex'>
                <Link spy={true} to='Navbar' smooth={true} activeClass='active' className='hover:text-[#fca61f]'>
                    <li>Home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true} className='hover:text-[#fca61f]'>
                    <li>Services</li>
                </Link>
                <Link spy={true} to='Experiences' smooth={true} className='hover:text-[#fca61f]'>
                    <li>Experiences</li>
                </Link>
                <Link spy={true} to='Portfolio' smooth={true} className='hover:text-[#fca61f]'>
                    <li>Portfolio</li>
                </Link>
                <Link spy={true} to='Testimonial' smooth={true} className='hover:text-[#fca61f]'>
                    <li>Testimonials</li>
                </Link>                 
            </ul>
            <Link to='contact' spy={true} smooth={true} className='hidden md:flex'>
                <button className="button">
                        Contact Me
                </button>
            </Link>
            <div className="lg:hidden">
                <button onClick={menuOpenFunction} className='icon'>
                    <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                </button>
                {menuOpen && (
                    <ul className='flex flex-col fixed h-[15rem] w-[30rem] md:h-[30rem] md:w-[60rem] justify-center bg-slate-700 md:text-3xl text-xl space-y-5 md:space-y-10 left-52 md:left-96 md:bottom-[28rem] px-10 md:px-20'>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='active' className='hover:text-[#fca61f]'>
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} className='hover:text-[#fca61f]'>
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experiences' smooth={true} className='hover:text-[#fca61f]'>
                        <li>Experiences</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} className='hover:text-[#fca61f]'>
                        <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonial' smooth={true} className='hover:text-[#fca61f]'>
                        <li>Testimonials</li>
                    </Link>                 
                    </ul>
                )}
            </div>
        </div>
      </div>
    )
}