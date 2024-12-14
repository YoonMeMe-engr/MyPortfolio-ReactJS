import React from 'react'
import YouTube from '../../assets/img/YouTube.png'
import Facebook from '../../assets/img/Facebook.png'
import GitHub from '../../assets/img/GitHub.png'
import LinkedIn from '../../assets/img/LinkedIn.png'
import Amazon from '../../assets/img/amazon.png'
import { motion } from "framer-motion"
import { Link } from 'react-scroll'
import './Works.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons'

export default function Works() {
  return (
    <div className='works px-[3rem] lg:flex items-center h-[90vh] mt-[4rem]'>
        <div className="w-left lg:flex lg:flex-col lg:w-[50%]">
            <h1 className='text-5xl font-bold'>Works for All these</h1>
            <div className='text-5xl font-bold text-[#fca61f]'>Brands & Clients</div>
            <div className='mt-[2rem] lg:mt-[1rem] space-y-2'>
                <div className="flex">
                    <span className='mt-1'>
                        <FontAwesomeIcon icon={faCircleCheck} className='mr-[1rem] text-[#fca61f] mb-[1rem]' />
                    </span>
                    <p className=''>Provided detail information in Daily Traffic Analysis & Network Performance</p>
                </div>
                <div className="flex">
                    <span className='mt-1'>
                        <FontAwesomeIcon icon={faCircleCheck} className='mr-[1rem] text-[#fca61f] mb-[1rem]' />
                    </span>
                    <p className=''>Analyzed, troubleshot and enhanced network performance to drive efficiency</p>
                </div>
                <div className="flex">
                    <span className='mt-1'>
                        <FontAwesomeIcon icon={faCircleCheck} className='mr-[1rem] text-[#fca61f] mb-[1rem]' />
                    </span>
                    <p className=''>support the decision makers for issuing radio frequency authorization</p>
                </div>
                <div className="flex">
                    <span className='mt-1'>
                        <FontAwesomeIcon icon={faCircleCheck} className='mr-[1rem] text-[#fca61f] mb-[1rem]' />
                    </span>
                    <p className=''>band planning in-line with the Radio Regulation (RR), International Telecommunications Union (ITU)</p>
                </div>
                <div className="flex">
                    <span className='mt-1'>
                        <FontAwesomeIcon icon={faCircleCheck} className='mr-[1rem] text-[#fca61f] mb-[1rem]' />
                    </span>
                    <p className=''> creating the design and layout of a website or web pages</p>
                </div>
                <div className="flex">
                    <span className='mt-1'>
                        <FontAwesomeIcon icon={faCircleCheck} className='mr-[1rem] text-[#fca61f] mb-[1rem]' />
                    </span>
                    <p className=''>keeping up to date with design trends and technological, software and accessibility developments</p>
                </div>
                <div className="flex">
                    <span className='mt-1'>
                        <FontAwesomeIcon icon={faCircleCheck} className='mr-[1rem] text-[#fca61f] mb-[1rem]' />
                    </span>
                    <p className=''>Develop UI mockups and prototypes that showcase site functionality and appearance</p>
                </div>
                <div className="flex">
                    <span className='mt-1'>
                        <FontAwesomeIcon icon={faCircleCheck} className='mr-[1rem] text-[#fca61f] mb-[1rem]' />
                    </span>
                    <p className=''>Optimize applications for maximum speed and scalability</p>
                </div>
            </div>
            <Link to='contact' smooth={true} spy={true}>
              <button className='button w-button'>Hire Me</button>
            </Link>
            <div className="blur w-blur"></div>
        </div>
        <div className="w-right lg:w-[50%] relative mt-10 lg:mt-0">
          <div className="absolute w-[13rem] h-[13rem] rounded-full -z-10 bg-[#7fb8f9] left-[18rem] top-[1rem]"></div>
          <div className="absolute w-[13rem] h-[13rem] rounded-full -z-10 bg-[#F5C32C] left-[18rem] top-[11rem]"></div>
          <motion.div
          initial={{rotate: 45}}
          whileInView={{rotate: 0}}
          viewport={{margin: '-40px'}}
          transition={{duration: 3.5, type: 'spring'}}
          className="relative w-[18rem] h-[18rem] bg-white rounded-full top-[4rem] left-[9rem] w-mainCircle">
            <div className="absolute -top-[3rem] left-[6rem] w-[6rem] h-[6rem] rounded-full border-2 border-[#ebebeb] flex justify-center items-center bg-none bg-white shadow shadow-[rgba(0,0,0,0.08)]">
              <img src={YouTube} alt="" className='transform scale-[0.6]'/>
            </div>
            <div className="absolute top-[5rem] -left-[3rem] w-[6rem] h-[6rem] rounded-full border-2 border-[#ebebeb] flex justify-center items-center bg-none bg-white shadow shadow-[rgba(0,0,0,0.08)]">
              <img src={Facebook} alt="" className='transform scale-[0.6]'/>
            </div>
            <div className="absolute top-[5rem] left-[6rem] w-[6rem] h-[6rem] rounded-full border-2 border-[#ebebeb] flex justify-center items-center bg-none bg-white shadow shadow-[rgba(0,0,0,0.08)]">
              <img src={Amazon} alt="" className='transform scale-[0.6]'/>
            </div>
            <div className="absolute top-[5rem] left-[15rem] w-[6rem] h-[6rem] rounded-full border-2 border-[#ebebeb] flex justify-center items-center bg-none bg-white shadow shadow-[rgba(0,0,0,0.08)]">
              <img src={GitHub} alt="" className='transform scale-[0.6]'/>
            </div>
            <div className="absolute top-[13rem] left-[6rem] w-[6rem] h-[6rem] rounded-full border-2 border-[#ebebeb] flex justify-center items-center bg-none bg-white shadow shadow-[rgba(0,0,0,0.08)]">
              <img src={LinkedIn} alt="" className='transform scale-[0.6]'/>
            </div>
          </motion.div>
        </div>
    </div>
  )
}
