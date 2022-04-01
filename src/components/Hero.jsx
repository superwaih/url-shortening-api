import React from 'react';
import heroImg from '../images/illustration-working.svg'
const Hero = () => {
  return (
    <div className='flex font-press-start flex-col-reverse text-center md:text-left w-11/12 p-8 mb-12 mt-8 md:flex-row'>
        <div className="herotext space-y-2 ">
            <h2 className='md:text-5xl text-3xl lg:text-7xl font-bold'>More Than just shorter links</h2>
            <p className='text-xl md:text-2xl leading-8 text-Gray'>Build your brand's recongnition and get detailed insights on how your links are performing</p>
            <button className='text-White hover:opacity-40 font-bold text-[14px] p-4 outline-none  rounded-full bg-Cyan w-36' >Get Started</button>
        </div>

        <div className="heroimg">
            <img src={heroImg} alt="Hero Image" />
        </div>
    </div>
  )
}

export default Hero