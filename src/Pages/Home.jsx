import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';

import Header from '../Components/Header';
import Search from '../Components/Search';
import Intro from '../Components/Intro';
import Footer from '../Components/Footer';
import Blogs from '../Components/Blogs';



const Home = () => {
  
  const [post,setPost]=useState([])
  useEffect(()=>{
    getPost()
    
  })
  const getPost=()=>{
    GlobalApi.getPost.then(res=>{
     
      const result=res.data.data.map(items=>({
        id:items.id,
        title:items.attributes.title,
        desc:items.attributes.description,
        tag:items.attributes.tag,
        image:items.attributes.image.data.attributes.url,
       
      }));
      setPost(result)
    })
  }
 
  return (
    <div>
   
    {/* {search} */}
    <Search />
    {/* {intropost} */}
    {post.length>0?<Intro post={post[0]}/>:null}
    {/* {blogs} */}
    {
      post.length>0?<Blogs posts={post}/>:null
    }
   
  </div>
  )
}

export default Home