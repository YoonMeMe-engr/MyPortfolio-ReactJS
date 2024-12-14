import React from 'react'
import './Card.css'

export default function Card({emoji, heading, detail}) {
  return (
    <div className='card w-[16rem] md:h-[18rem] md:absolute flex flex-col gap-[1rem] items-center text-center bg-[rgba(255, 255, 255, 0.26)]'>
      <img className='transform scale-[0.6] -mb-[2rem] -mt-[1rem]' src={emoji} alt="" />
      <span>{heading}</span>
      <span className='text-[#788097] text-[16px]'>{detail}</span>
      <button className='bg-white shadow shadow-[rgba(0,0,0,0.08)] rounded-[7px] p-[10px] text-[16px] text-[#5290fd]'>LEARN MORE</button>
    </div>
  )
}
