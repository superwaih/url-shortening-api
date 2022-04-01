import React from 'react'
import { Link } from 'react-router-dom'

const NavMobile = ({click, handleClick}) => {
  return (
    <div className={click ? ' text-center font-press-start absolute w-[88%] top-16 p-16 flex flex-col bg-DarkViolet text-White rounded' : 'hidden'}>
        <Link to='/' className='p-2 hover:text-Cyan  font-bold' >Features</Link>
        <Link to='/' className='p-2 hover:text-Cyan font-bold' >Pricing</Link>
        <Link to='/' className='p-2 hover:text-Cyan  font-bold' >Resources</Link >     
        <div className=' flex flex-col items-center '>
        <button className='text-Gray hover:w-24 hover:bg-Cyan hover:text-White  rounded-full w-16 h-8'>Login</button>
            <button className='text-White hover:opacity-40 font-bold text-[13px] outline-none rounded-full bg-Cyan w-full h-8'>Sign Up</button>
        </div>
    </div>
  )
}

export default NavMobile