import React from 'react'
import { useNavigate } from 'react-router-dom';

const Blogs = ({posts}) => {

  const base="http://localhost:1337"; /* thsi is base url of image source  */
  const Navigation=useNavigate()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32 '>
      {posts.map((item)=>(
        <div key={item.id} className='m-4 cursor-pointer' onClick={()=>Navigation('blog-detail/'+item.id)}>
         
          <img src={base+item.image}
           className='w-full h-[200px] rounded-2xl object-cover'/>

          <h3 className=' text-red-500 mt-3'>{item.title}</h3>
          <h3 className='font-bold mt-3'>{item.tag}</h3>
          <h3 className=' line-clamp-3 text-gray-400 mt-3'>{item.desc}</h3>

        <div className='flex items-center mt-5'>
        <img src={base+"/uploads/react_122730ab92.png"} 
        className='w-[50px] h-[50px] rounded-full'/>

        <div className='ml-2'>
          <h3 className='font-bold'>Manish</h3>
          <h3>24 Sept 2024</h3>
        </div>
      </div>
        </div>
      ))}
    </div>
  )
}

export default Blogs