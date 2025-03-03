import React, { useContext, useEffect, useState } from 'react'
import { fatchNews } from '../context/news/NewsServices'
import NewsContext from "../context/news/NewsContext"


const Form = () => {
const {dispatch} =useContext(NewsContext)

const [search,setsearch]=useState()

const getNews= async(topic)=>{
  const data = await fatchNews(topic)

  dispatch({
    type:"GET_NEWS",
    payload:data,
  })
}


const handleSubmit= e=>{
  e.preventDefault()
  getNews(search)
  setsearch("")

}


useEffect(()=>{
getNews("international")
},[])

  return (


<form className='w-full text-center'onSubmit={handleSubmit} >

<input type="text"
value={search}
onChange={(e)=>setsearch(e.target.value)}
 placeholder='search any news'
  className='p-3 bg-whit text-black  border border-gray-500 rounded-md w-full md:w-[70%] mr-2 focus:outline-none  ' />

<button className=' my-2 font-bold text-white bg-green-500 rounded-md w-full md:w-1/4 py-3 hover:bg-green-600 '>submit</button>
</form>

  )
}

export default Form
