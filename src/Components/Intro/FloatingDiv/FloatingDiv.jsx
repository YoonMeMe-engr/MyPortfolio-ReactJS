import React from 'react'
import './FloatingDiv.css'

export default function FloatingDiv({image, txt1, txt2}) {
  return (
    <div>
        <div className="floatingDiv flex justify-around items-center bg-white rounded-[17px] pr-[28px] pt-0 pl-0 pb-0 h-[4.5rem]">
            <img className='transform scale-[0.4]' src={image} alt="" />
            <span className='text-[16px] font-sans'>
                {txt1}
                <br/>
                {txt2}
            </span>
        </div>
    </div>
  )
}
