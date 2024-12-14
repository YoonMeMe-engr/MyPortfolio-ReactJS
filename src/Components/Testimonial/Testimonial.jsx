import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Profile1 from '../../assets/img/Profile1.png'
import Profile2 from '../../assets/img/Profile2.png'
import Profile3 from '../../assets/img/Profile3.png'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css/pagination';

export default function Testimonial() {
    const sources = [
        {
            img: Profile1,
            selfReflection:
            "I'm Ms. Yoon Me Me from Nay Pyi Taw. I have been graduated with Bachelor of Engineering (Electronics & Communications) major in 2014. Programming Language is one of my interested careers. I feel happy when I was coding. Please support me with encourage to do the best."
        },
        {
            img: Profile2,
            selfReflection:
            "I'm Ms. Yoon Me Me from Nay Pyi Taw. I have been graduated with Bachelor of Engineering (Electronics & Communications) major in 2014. Programming Language is one of my interested careers. I feel happy when I was coding. Please support me with encourage to do the best."
        },
        {
            img: Profile3,
            selfReflection:
            "I'm Ms. Yoon Me Me from Nay Pyi Taw. I have been graduated with Bachelor of Engineering (Electronics & Communications) major in 2014. Programming Language is one of my interested careers. I feel happy when I was coding. Please support me with encourage to do the best."
        }
    ]
  return (
    <div className='t-wrapper px-[3rem] h-[100vh] flex flex-col justify-center items-center md:mt-[4rem] gap-[2rem] relative' id='Testimonial'>
        <div className="t-heading">
            <span className='text-5xl font-bold'>Clients always get </span>
            <span className='text-5xl font-bold text-[#fca61f]'>Exceptional Work </span>
            <span className='text-5xl font-bold'>from me...</span>
            <div className="blur t-blur1"></div>
            <div className="blur t-blur2"></div>
        </div>

        {/* Slider */}
        <Swiper 
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{delay: 3000}}
        pagination={{clickable: true,
        autoPlay: true
        }}
        >
            {sources.map((source, index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-evenly p-[2rem] w-[35rem] h-[36rem] md:h-[20rem] bg-[rgba(255, 255, 255, 0.26)] border-8 border-[#ddf8fe] rounded-[20px] gap-[1rem] testimonial">
                            <img src={source.img} alt="" className='w-[6rem] h-[6rem] rounded-full'/>
                            <span className='text-slate-500] text-[1rem]'>{source.selfReflection}</span>
                        </div>
                    </SwiperSlide>
                )
            })
            }
        </Swiper>
    </div>
  )
}
