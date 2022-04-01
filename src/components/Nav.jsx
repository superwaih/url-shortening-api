import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Logo from '../images/logo.svg';
import NavMobile from './NavMobile';

function Nav() {
  const[click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  } 

  return (
    <header className='flex font-press-start relative p-8 justify-between  items-center h-8 w-11/12'>
        <div className='logo flex'>
           <img src={Logo} alt="" />

            <nav className='hidden lg:block'>
            <ul className="flex text-Gray justify-between items-center navlinks">
                <li to='/' className='p-2 hover:text-DarkViolet font-bold' >Features</li>
                <li to='/' className='p-2 hover:text-DarkViolet font-bold' >Pricing</li>
                <li to='/' className='p-2 hover:text-DarkViolet font-bold' >Resources</li>
            </ul>
        </nav>
        </div>
       
        <div className="flex auth hidden lg:block">
            <button className='text-Gray hover:w-24 hover:bg-Cyan hover:text-White  rounded-full w-16 h-8'>Login</button>
            <button className='text-White hover:opacity-40 font-bold text-[13px] outline-none rounded-full bg-Cyan w-24 h-8'>Sign Up</button>
        </div>

        <div onClick={handleClick} className="menu-btn block cursor:pointer lg:hidden">
        <i className={click == false ? "fas fa-bars" : "fas fa-close"}></i>
         </div>

         <NavMobile handleClick={handleClick} click ={click} />
    </header>
  );
}
;
export default Nav;