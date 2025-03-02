import React, { useContext } from 'react'
import NewsContext from '../context/news/NewsContext'
import { fatchNews } from '../context/news/NewsServices'

const Topics = () => {

  const { dispatch}=useContext(NewsContext)

const getNews= async(topic)=>{
  const data = await fatchNews(topic)

  dispatch({
    type:"GET_NEWS",
    payload:data,
  })
}


  return (
   
<div className=' w-full mt-6 flex items-center justify-center  flex-wrap text-center '>
<div onClick={()=>getNews("indore")} className=" m-2  px-3 bg-gray-400 p-1 rounded-md text-center  text-sm font-bold hover:bg-green-300 duration-200 hover:cursor-pointer ">
    Indore
  </div>
  <div onClick={()=>getNews("sports")} className=" m-2  px-3 bg-gray-400 p-1 rounded-md text-center  text-sm font-bold hover:bg-green-300 duration-200 hover:cursor-pointer ">
  Sports
  </div>
  <div onClick={()=>getNews("Entertainment")} className=" m-2 px-3  bg-gray-400 p-1 rounded-md text-center  text-sm font-bold  hover:bg-green-300 duration-200 hover:cursor-pointer  ">
    Entertainment  
  </div>
  <div onClick={()=>getNews("Bussiness")} className=" m-2 px-3  bg-gray-400 p-1 rounded-md text-center  text-sm font-bold  hover:bg-green-300 duration-200 hover:cursor-pointer  ">
    Business
  </div>
  <div onClick={()=>getNews("Politics")} className=" m-2 px-3  bg-gray-400 p-1 rounded-md text-center  text-sm font-bold  hover:bg-green-300 duration-200 hover:cursor-pointer  ">
    Politics
  </div>
  <div onClick={()=>getNews("Hollwood")} className=" m-2 px-3  bg-gray-400 p-1 rounded-md text-center  text-sm font-bold  hover:bg-green-300 duration-200  hover:cursor-pointer ">
    Hollwood
  </div>
  <div onClick={()=>getNews("Bollywood")} className=" m-2  px-3 bg-gray-400 p-1 rounded-md text-center  text-sm font-bold  hover:bg-green-300 duration-200  hover:cursor-pointer ">
    Bollywood
  </div>
  <div onClick={()=>getNews("international")} className=" m-2  px-3 bg-gray-400 p-1 rounded-md text-center  text-sm font-bold  hover:bg-green-300 duration-200  hover:cursor-pointer ">
    International
  </div>
  <div onClick={()=>getNews("crypto")} className=" m-2  px-3 bg-gray-400 p-1 rounded-md text-center  text-sm font-bold  hover:bg-green-300 duration-200  hover:cursor-pointer ">
Crypto
  </div>
  <div onClick={()=>getNews("Trending")} className=" m-2  px-3 bg-gray-400 p-1 rounded-md text-center  text-sm font-bold  hover:bg-green-300 duration-200  hover:cursor-pointer ">
Trending
  </div>
</div>

  )
}

export default Topics
