import React from 'react'
import Wave from '../../assets/img/wave.png'
import YouTube from '../../assets/img/YouTubeF.png'
import Facebook from '../../assets/img/FacebookF.png'
import LinkedIn from '../../assets/img/LinkedInF.png'
import GitHub from '../../assets/img/GitHubF.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    const top = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
      return (
        <div className="flex items-center relative -my-[5rem] -mx-[3.5rem]">
            <img src={Wave} alt="" className='w-screen h-[20rem]'/>
            <div className="absolute flex flex-col items-center justify-center w-[100%] mt-[8rem] gap-[2rem]">
                <span className='text-[1.5rem]'>yoonmeme.engr@gmail.com</span>
                <div className="flex">
                    <a href="https://www.youtube.com/@Engr.YoonMeMe" target='_blank'>
                        <img src={YouTube} alt="" className='transform scale-[.57]'/>
                    </a>
                    <a href="https://www.facebook.com/YoonMeMe.Engr" target='_blank'>
                        <img src={Facebook} alt="" className='transform scale-[.5]'/>
                    </a>
                    <a href="https://www.linkedin.com/in/yoon-me-me-b6b58824a/" target='_blank'>
                        <img src={LinkedIn} alt="" className='transform scale-[.63]'/>
                    </a>
                    <a href="https://github.com/YoonMeMe-engr" target='_blank'>
                        <img src={GitHub} alt="" className='transform scale-[.5]'/>
                    </a>
                </div>
            </div>
            <button onClick={top} className='absolute w-[50px] h-[50px] bg-[#7fb8f9] flex justify-center items-center text-white rounded-[10px] text-[30px] cursor-pointer right-[50px] bottom-[100px] border-none'>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    )
}
