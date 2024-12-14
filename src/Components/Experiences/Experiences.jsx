import React from 'react'
import './Experiences.css'

export default function Experiences() {
  return (
    <div className='experience flex justify-center items-center gap-8 md:gap-[8rem] h-[30vh] mb-[3rem]' id='Experiences'>
        <div className="achievement flex flex-col items-center">
            <div className="circle dark:bg-gradient-to-b from-[#7fb899] to-[#ffc448]">9 +</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className="achievement flex flex-col items-center">
            <div className="circle dark:bg-gradient-to-b from-[#7fb899] to-[#ffc448]">Daily</div>
            <span>Target</span>
            <span>Completed</span>
        </div>
        <div className="achievement flex flex-col items-center">
            <div className="circle dark:bg-gradient-to-b from-[#7fb899] to-[#ffc448]">11 +</div>
            <span>Government &</span>
            <span>Companies</span>
        </div>
    </div>
  )
}
