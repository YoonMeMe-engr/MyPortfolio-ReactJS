import React from 'react'
import Glasses from '../../assets/img/glasses.png'
import HeartEMOJI from '../../assets/img/heartemoji.png'
import Humble from '../../assets/img/humble.png'
import Resume from '../../assets/Yoon Me Me Resume.pdf'
import { motion } from "framer-motion"
import Card from './Card/Card'
import './Services.css'

export default function Services() {
    const transition = {duration : 2, type: 'spring'}
  return (
    <div className='services px-[3rem] h-[90vh] flex mb-[23rem] md:mb-[13rem]' id='Services'>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="s-left">
            <h1 className='text-4xl md:text-[2.5rem] font-bold'>My Awesome</h1>
            <div className='text-5xl font-bold text-[#fca61f]'>Services</div>
            <p className='text-slate-500 mt-[1rem]'>I share a lot of knowledge related with IT fields, Telecom fields, Web Development
                fields and other related fields on my own YouTube Channel and I search my career with engineer position in trending industries.
            </p>
            <a href={Resume} target='_blank' className=''>
              <button className='button s-btn'>Download CV</button>
            </a>
            <div className="blur s-blur1"></div>
        </div>
        <div className="cards mt-0 relative">
          <motion.div
          initial={{left: '10rem', top: '0rem'}}
          whileInView={{left: '20rem'}}
          transition={transition}
          className="left-[20rem] absolute">
            <Card 
            emoji={HeartEMOJI}
            heading={'IT Engineer'}
            detail={'ISP, IXP, Data Center'}
            ></Card>
          </motion.div>

          <motion.div
          initial={{left: '10rem', top: '10rem'}}
          whileInView={{left: '-1rem'}}
          transition={transition}
          className="-left-[1rem] top-[12rem] absolute">
            <Card 
            emoji={Glasses}
            heading={'Telecom Engineer'}
            detail={'Spectrum Management, Band Planning, Spectrum Authorization'}
            ></Card>
          </motion.div>

          <motion.div
          initial={{left: '15rem', top: '20rem'}}
          whileInView={{left: '18rem'}}
          transition={transition}
          className="left-[18rem] top-[22rem] absolute">
            <Card 
            emoji={Humble}
            heading={'Web Development'}
            detail={'HTML, CSS, JavaScript, React'}
            ></Card>
          </motion.div>

          <div className="blur s-blur2"></div>
        </div>
      </div>
    </div>
  )
}
