import React from 'react';
import Logo from '../images/logo.svg';
import {Link} from 'react-router-dom';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';
import twitter from '../images/icon-twitter.svg';
import facebook from '../images/icon-facebook.svg';

const Footer = () => {
  return (
    <footer className='font-press-start'>
        <div className="footerbox bg-DarkViolet back-desktop space-y-5 p-12 flex items-center justify-center flex-col ">
            <h5 className='text-White font-bold text-2xl'>Boost your links today</h5>
            <button className='text-White hover:opacity-60 font-bold text-[14px] p-4 outline-none  rounded-full bg-Cyan w-36' >Get Started</button>
        </div>

        <section className='grid gap-3 place-items-center text-center md:text-right md:place-items-start font-bold text-White p-12 bg-VeryDarkViolet md:grid-cols-5 grid-cols-1 '>
          <div className="logo">
            <img className='brightness-90 invert' src={Logo} alt="" />
          </div>
        <div className="features flex flex-col">
      <h4 className='text-White mb-4 font-bold'>Features</h4>
        <Link className='text-Gray hover:text-Cyan' to='/nav' >Link Shortening</Link>
        <Link className='text-Gray hover:text-Cyan' to='/nav' >Branded Links</Link>
        <Link className='text-Gray hover:text-Cyan' to='/nav' >Analytics</Link> 
        </div>


    <div className="resources flex flex-col">
      <h4 className='text-White mb-4 font-bold'>Resources</h4>
        <Link className='text-Gray hover:text-Cyan' to='/nav' >Blog</Link>
        <Link className='text-Gray hover:text-Cyan' to='/nav' >Developers</Link>
        <Link className='text-Gray hover:text-Cyan' to='/nav' >Support</Link> 
    </div>


    <div className="company flex flex-col">
      <h4 className='text-White mb-4 font-bold' >Company</h4>
        <Link className=' text-Gray hover:text-Cyan' to='/nav' >About</Link>
        <Link className='text-Gray hover:text-Cyan' to='/nav' >Our Team</Link>
        <Link className='text-Gray hover:text-Cyan' to='/nav' >Analytics</Link> 
        <Link className='text-Gray hover:text-Cyan' to='/nav' >Careers</Link>
        <Link className='text-Gray hover:text-Cyan' to='/nav' >Contact</Link>
    </div>

      <div className="icons flex h-fit">
        <Link className='hover:bg-Cyan bg-clip-border' to='/' ><img className='p-4  ' src={pinterest} alt="" /></Link>
        <img className='p-4 hover:bg-Cyan' src={instagram} alt="" />
        <img className='p-4 hover:bg-Cyan' src={twitter} alt="" />
        <img className='p-4 hover:bg-Cyan' src={facebook} alt="" />
      </div>
        </section>
      

    </footer>

  )
}

export default Footer