import React from 'react'
import logo from '../assets/Images/web-development.png'
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const Navigation=useNavigate()
  return (
    <div className=' flex justify-between p-4'>
      <img src={logo} className=' w-[30px] cursor-pointer' />
      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer' onClick={()=>Navigation('/')}>Home</li>
        <li  className='hover:font-bold cursor-pointer'>About Us</li>
        <li  className='hover:font-bold cursor-pointer'>Contacts</li>
      </ul> 
      <button className='flex items-center  rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105'>
        Subscribe<FaYoutube className='ml-3 text-red-500'/>
      </button>
    </div>
  )
}

export default Header