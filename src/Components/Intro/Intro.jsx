import React from 'react'
import './Intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareGithub, faSquareFacebook, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons'
import Vector1 from '../../assets/img/Vector1.png'
import Vector2 from '../../assets/img/Vector3.png'
import YMMPhoto from '../../assets/img/YMMPhoto.png'
import ThumbUp from '../../assets/img/thumbUp.png'
import Crown from '../../assets/img/crown.png'
import Happy from '../../assets/img/Happy.png'
import GlassesEMOJI from '../../assets/img/glassesEMOJI.png'
import { motion } from "framer-motion"
import FloatingDiv from './FloatingDiv/FloatingDiv'

export default function Intro() {
    const transition = {duration : 2, type: 'spring'}
  return (
    <div className='intro h-[77vh] mt-[3rem] lg:mt-[6rem] mb-[10rem] lg:flex'>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="intro-left space-y-5">
                <h1 className='text-5xl font-bold'>I am</h1>
                <div className="text-5xl font-bold text-primary">Ms. Yoon Me Me</div>
                <div className="text-slate-500">Engineer with high level of experiences in IT, Telecom and Web Development, producting the Quality work</div>
                <button className='button intro-btn'>Hire Me</button>
                <div className="intro-icon text-[2rem] text-primary space-x-4">
                    <a href="https://github.com/YoonMeMe-engr" target='_blank'>
                        <FontAwesomeIcon icon={faSquareGithub} />
                    </a>
                    <a href="https://www.facebook.com/YoonMeMe.Engr" target='_blank'>
                        <FontAwesomeIcon icon={faSquareFacebook} />
                    </a>
                    <a href="https://www.linkedin.com/in/yoon-me-me-b6b58824a/" target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.youtube.com/@Engr.YoonMeMe" target='_blank'>
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </div>
            <div className="intro-right relative mt-40 lg:mt-0">
                <img className='dark:z-50 absolute transform scale-[1.6] md:scale-[.85] lg:scale-[0.77] -left-[2%] md:-left-[3%] lg:-left-[8%] -top-[5%] md:-top-[3%] lg:-top-[5%]' src={Vector1} alt="" />
                <img className='dark:z-50 absolute transform scale-[1.5] md:scale-[0.8] left-[1rem] -top-[2rem]' src={Vector2} alt="" />
                <img className='dark:z-50 absolute transform scale-[1.4] md:scale-[1.3] md:left-[21%] -top-[10rem] md:-top-[3%]' src={YMMPhoto} alt="" />
                <motion.img
                initial={{left: '-36%'}}
                whileInView={{left: '-24%'}}
                transition={transition}
                src={GlassesEMOJI} alt=""
                className='dark:z-50 transform scale-[0.6] absolute -top-[3.5rem] hidden md:flex' />
                <motion.div
                initial={{left: '70%', top: '-10%'}}
                whileInView={{left: '65%'}}
                transition={transition}
                className='floating-div absolute top-[6%] left-[68%] dark:z-50'
                >
                <FloatingDiv image={Crown} txt1={'IT'} txt2={'Engineer'}></FloatingDiv>
                </motion.div>
                <motion.div
                initial={{left: '9rem', top: '18rem'}}
                whileInView={{left: '-8rem'}}
                transition={transition}
                className='floating-div absolute top-[18rem] -left-[6rem] dark:z-50'
                >
                <FloatingDiv image={ThumbUp} txt1={'Telecom'} txt2={'Engineer'}></FloatingDiv>
                </motion.div>
                <motion.div
                initial={{right: '-15rem', top: '22rem'}}
                whileInView={{right: '-1rem'}}
                transition={transition}
                className='floating-div absolute top-[23rem] -right-[1rem] dark:z-50'
                >
                <FloatingDiv image={Happy} txt1={'Web'} txt2={'Development'}></FloatingDiv>
                </motion.div>
                <div className="blur introBlur1 dark:z-10"></div>
                <div className="blur introBlur2 dark:z-10"></div>
                <div className="blur introBlur3 dark:z-10"></div>
                <div className="blur introBlur4 dark:z-10"></div>
                <div className="blur introBlur5 dark:z-10"></div>
            </div>
        </div>
    </div>
  )
}