import React, { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { useNavigate } from 'react-router-dom';

const Intro = ({post}) => {
const Navigation=useNavigate();
const base="http://localhost:1337"; /* thsi is base url of image source  */

  return (
    <div onClick={()=>Navigation('/blog-detail/'+post.id)} className=' cursor-pointer grid grid-cols-1 mt-10 px-10 md:px-15 lg:px-32 md:grid-cols-2 gap-8'>
     <img src={base+"/uploads/react_122730ab92.png"} className='rounded-2xl object-cover w-full h-full' />
     <div>
      <h4 className=' text-red-500'>{post.tag}</h4>
      <h4 className='text-[23px] font-bold'>{post.title}</h4>
      <h4 className=' line-clamp-6 text-gray-600'>{post.desc}</h4>
      
      <div className='flex items-center mt-5'>
        <img src={base+"/uploads/react_122730ab92.png"} 
        className='w-[50px] h-[50px] rounded-full'/>

        <div className='ml-2'>
          <h3 className='font-bold'>Manish</h3>
          <h3>24 Sept 2024</h3>
        </div>
      </div>
     </div>


    </div>
  )
}

export default Intro