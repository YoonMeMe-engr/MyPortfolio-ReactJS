import { Link } from 'react-scroll'
import './Navbar.css'

export default function Navbar() {
    return (
      <div className='flex justify-between items-center' id="Navbar">
        <div className="nav-left">
            <div className="text-[#7fb8f9] navName text-[1.9rem]">Ms. Yoon Me Me</div>
        </div>
        <div className="nav-right flex">
            <ul className='flex'>
                <Link spy={true} to='Navbar' smooth={true} activeClass='active'>
                    <li>Home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true}>
                    <li>Services</li>
                </Link>
                <Link spy={true} to='Experiences' smooth={true}>
                    <li>Experiences</li>
                </Link>
                <Link spy={true} to='Portfolio' smooth={true}>
                    <li>Portfolio</li>
                </Link>
                <Link spy={true} to='Testimonial' smooth={true}>
                    <li>Testimonials</li>
                </Link>                 
            </ul>
            <Link to='contact' spy={true} smooth={true}>
                <button className="button nav-button">
                        Contact Me
                </button>
            </Link>
        </div>
      </div>
    )
}