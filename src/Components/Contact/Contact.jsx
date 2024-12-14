import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_14093lw', 'template_ao9mj6q', form.current, {
        publicKey: '9bsfx238BjC8P16-t',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      )
    };
  return (
    <div className='contact-form lg:flex px-[3rem] h-[80vh] mt-[4rem] lg:space-x-60' id='contact'>
        <div className="c-left mb-10 lg:mb-0">
            <h1 className='text-5xl font-bold'>Get in touch</h1>
            <span className='text-5xl font-bold text-primary'>Contact me</span>
            <div className="blur c-blur1"></div>
        </div>
        <div className="flex justify-center relative">
            <form ref={form} onSubmit={sendEmail} action="" className='flex flex-col items-center gap-[2rem]'>
                <input type="text" name='user_name' className='user' placeholder='Your Name' required/>
                <input type="email" name='user_email' className='user' placeholder='Your Email' required/>
                {/* <input type="text" name='user_phone' className='user' placeholder='Your Phone Number' required/>
                <input type="text" name='user_subject' className='user' placeholder='Subject' required/> */}
                <textarea name="message" className='user' placeholder='Message' id="" required></textarea>
                <input type="submit" value='Send' className='button w-btn' />
                <span>{done && 'Thanks for contact in me!'}</span>
                <div className="blur c-blur2"></div>
            </form>
        </div>
    </div>
  )
}
