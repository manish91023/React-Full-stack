import React, { useState } from 'react'
import banner from '../assets/Images/banner/Banner.jpg'
import { IoSearchOutline } from "react-icons/io5";


const Search = () => {

  const tags=[
    {
      id:1,
      name:'All'
    },
    {
      id:2,
      name:'React'
    },
    {
      id:3,
      name:'React Native'
    },
    {
      id:4,
      name:'Angular'
    },
    {
      id:5,
      name:'UI/UX'
    }
  ];

const [activeIndex,setActiveIndex]=useState(0)

  return (
    <div className='flex justify-center mt-8 flex-col px-[25px] md:px-[150px]'>
      <img src={banner} className='rounded-lg h-[250px] w-[100%] object-cover ' />

      <div className='bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex'>
        <IoSearchOutline className='text-[20px]'/>
        <input type="text" placeholder='Search' className=' outline-none bg-white mx-3 w-full '/>
      </div>

      <div className='flex gap-10 justify-center mt-5 md:text-[25px]  text-[10px]'>
        {tags.map((item,index)=>(
          <ul key={item.id} onClick={()=>setActiveIndex(index)} className={`${index==activeIndex?'bg-red-500 text-white':null}
          p-1 pb-2 md:rounded-full cursor-pointer md:p-3 hover:scale-105 hover:border-[1px] border-red-500 transition-all duration-100 ease-in-out`}>
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Search