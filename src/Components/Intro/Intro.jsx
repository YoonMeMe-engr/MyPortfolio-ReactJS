import React from 'react'
import './Intro.css'

export default function Intro() {
  return (
    <div className='intro h-[77vh] mt-[6rem] mb-[10rem]'>
        <div className="intro-left space-y-5">
            <h1 className='text-5xl font-bold'>I am</h1>
            <div className="text-5xl font-bold text-[#fca61f]">Ms. Yoon Me Me</div>
            <div className="text-slate-500">Engineer with high level of experiences in IT, Telecom and Web Development, producting the Quality work</div>
            <button className='button intro-btn'>Hire Me</button>
            {/* <div className="">
                
            </div> */}
        </div>
        <div className="intro-right"></div>
    </div>
  )
}