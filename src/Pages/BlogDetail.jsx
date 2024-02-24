import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../Services/GlobalApi';
import Markdown from 'react-markdown'


const BlogDetail = () => {
  const {id}=useParams();
  const [post,setPost]=useState([])
  const base="http://localhost:1337"; /* thsi is base url of image source  */


  useEffect(()=>{
    console.log("id",id)
    getBlogById()
  },[])


  const getBlogById=()=>{
    GlobalApi.getPostById(id).then(res=>{
      const items=res.data.data;
      const result={
        id:items.id,
        title:items.attributes.title,
        desc:items.attributes.description,
        tag:items.attributes.tag,
        image:items.attributes.image.data.attributes.url,
       
      };
      //console.log("results",result)
      setPost(result)
    })
  }
  return (
    <div className=' px-6 md:px-20 mt-10 lg:px-56'>
      <h3 className='text-red-500 text-[16px]'>{post.title}</h3>
      <h3 className='text-[30px] font-bold '>{post.tag}</h3>

      <div className='flex items-center mt-5'>
        <img src={base+"/uploads/react_122730ab92.png"} 
        className='w-[50px] h-[50px] rounded-full'/>

        <div className='ml-2'>
          <h3 className='font-bold'>Manish</h3>
          <h3>24 Sept 2024</h3>
        </div>
      </div>
      <img src={base+post.image} className='w-[200px]  rounded-2xl mt-5 mb-5 md:w-full md:h-[400px] object-cover' />
      
      createRoot(document.body).render(<Markdown>{post.desc}</Markdown>)
    </div>
  )
}

export default BlogDetail