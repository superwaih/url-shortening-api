import React from 'react'
import Customizable from '../images/icon-fully-customizable.svg';
import Detailed from '../images/icon-detailed-records.svg';
import Brand from '../images/icon-brand-recognition.svg';

const Cards = () => {
    const cardData = [{
        id: 1,
        statsName: 'Brand Recongnition',
        info: ' Boost your brand recognition with each click. Generic links don’t  mean a thing. Branded links help instil confidence in your content.',
        img: Brand
    },   
    {
        id:2,
        statsName: 'Detailed Records',
    info: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    img: Detailed
        }, 
    {   
        id:3,
        statsName: 'Fully Customizable',
    info: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    img: Customizable}]
  return (
         <div className="cardsbox gap-8 relative flex mb-[80px] flex-col lg:flex-row md:w-[60%] lg:w-[90%]">
           <div className="cards one rounded relative bg-White text-DarkViolet p-12">
           <img className='absolute -top-6 left-[5rem] md:left-[11rem] lg:left-7 bg-DarkViolet rounded-full p-2' src={cardData[0].img} alt="" />
           <h4 className='text-DarkViolet mb-2 font-bold' >{cardData[0].statsName}</h4>
           <p className='text-Gray text-[13px]' >{cardData[0].info}</p>
             </div>

             <div className="cards two space-y-2 translate-y-16 rounded relative bg-White text-DarkViolet p-12">
           <img className='absolute -top-6 left-[5rem] md:left-[11girem] lg:left-7 bg-DarkViolet rounded-full p-2' src={cardData[1].img} alt="" />
           <h4 className='text-DarkViolet mb-2 font-semibold' >{cardData[1].statsName}</h4>
           <p className='text-Gray text-[13px]' >{cardData[1].info}</p>
             </div>

             <div className="cards three rounded translate-y-28 relative bg-White text-DarkViolet p-12">
           <img className='absolute -top-6 left-[5rem] md:left-[11rem] lg:left-7 bg-DarkViolet rounded-full p-2' src={cardData[2].img} alt="" />
           <h4 className='text-DarkViolet mb-2 font-bold' >{cardData[2].statsName}</h4>
           <p className='text-Gray text-[13px]' >{cardData[2].info}</p>
             </div>
      
      </div>
  )
}

export default Cards