import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { Link } from 'react-scroll'

export default function ResponsiveMenu({open}) {
  return (
    <AnimatePresence mode='wait'>
        {
            open && (
                <motion.div 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, y: -100 }}
                className='absolute top-20 left-0 w-full h-screen z-20'
                >
                    <div className="text-xl uppercase bg-[lightblue] text-white py-10 m-6 rounded-3xl flex justify-center">
                        <ul className='flex flex-col justify-center gap-10 cursor-pointer'>
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
                    </div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}