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
    <div className='intro h-[77vh] mt-[6rem] mb-[10rem] flex'>
        <div className="intro-left space-y-5 w-[50%]">
            <h1 className='text-5xl font-bold'>I am</h1>
            <div className="text-5xl font-bold text-[#fca61f]">Ms. Yoon Me Me</div>
            <div className="text-slate-500">Engineer with high level of experiences in IT, Telecom and Web Development, producting the Quality work</div>
            <button className='button intro-btn'>Hire Me</button>
            <div className="intro-icon text-[2rem] text-[#fca61f] space-x-4">
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
        <div className="intro-right relative w-[50%]">
            <img className='absolute transform scale-[0.77] -left-[8%] -top-[5%]' src={Vector1} alt="" />
            <img className='absolute transform scale-[0.8] left-[1rem] -top-[2rem]' src={Vector2} alt="" />
            <img className='absolute transform scale-[1.3] left-[21%] -top-[3%]' src={YMMPhoto} alt="" />
            <motion.img
            initial={{left: '-36%'}}
            whileInView={{left: '-24%'}}
            transition={transition}
            src={GlassesEMOJI} alt=""
            className='transform scale-[0.6] absolute -top-[3.5rem]' />
            <motion.div
            initial={{left: '70%', top: '-10%'}}
            whileInView={{left: '65%'}}
            transition={transition}
            className='floating-div absolute top-[6%] left-[68%]'
            >
            <FloatingDiv image={Crown} txt1={'IT'} txt2={'Engineer'}></FloatingDiv>
            </motion.div>
            <motion.div
            initial={{left: '9rem', top: '18rem'}}
            whileInView={{left: '-8rem'}}
            transition={transition}
            className='floating-div absolute top-[18rem] -left-[6rem]'
            >
            <FloatingDiv image={ThumbUp} txt1={'Telecom'} txt2={'Engineer'}></FloatingDiv>
            </motion.div>
            <motion.div
            initial={{right: '-15rem', top: '22rem'}}
            whileInView={{right: '-1rem'}}
            transition={transition}
            className='floating-div absolute top-[23rem] -right-[1rem]'
            >
            <FloatingDiv image={Happy} txt1={'Web'} txt2={'Development'}></FloatingDiv>
            </motion.div>
            <div className="blur introBlur1"></div>
            <div className="blur introBlur2"></div>
            <div className="blur introBlur3"></div>
            <div className="blur introBlur4"></div>
            <div className="blur introBlur5"></div>
        </div>
    </div>
  )
}