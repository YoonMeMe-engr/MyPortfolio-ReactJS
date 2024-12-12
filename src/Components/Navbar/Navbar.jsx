import { Link } from 'react-scroll'
import './Navbar.css'

export default function Navbar() {
    return (
      <div className='flex justify-between items-center' id="Navbar">
        <div className="nav-left flex-1">
            <div className="text-[#7fb8f9] navName text-[1.9rem]">Ms. Yoon Me Me</div>
        </div>
        <div className="nav-right cursor-pointer flex-1 flex items-center space-x-8">
            <ul className='flex space-x-8'>
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
            <Link to='contact' spy={true} smooth={true}>
                <button className="button w-[6.8rem] h-[4.3rem]">
                        Contact Me
                </button>
            </Link>
        </div>
      </div>
    )
}