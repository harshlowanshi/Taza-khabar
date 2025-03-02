import React, { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext'


const NewsItems = ({allNews}) => {
const {theme}=useContext(ThemeContext)

    return (
    <div  className={
      theme?'w-full  p-10  md:px-57 border border-gray-100 text-white rounded-md mt-4 flex flex-col gap-4'
      :'w-full  p-10  md:px-57 border border-gray-900 text-black rounded-md mt-4 flex flex-col gap-4'
    } >
   
   <img src={allNews.image} 
   className='md:h-[22rem] rounded-md'
   alt="" />

   <h2 className={
    theme?'font-bold text-white text-lg'
    :'font-bold text-black text-lg'
   } >{allNews.title}</h2> 

   <p className={
    theme?'text-gray-200 text-sm'
    :'text-gray-800 text-sm'
   }>{allNews.description}</p>

<span className="w-full flex items-center justify-between">
<p className={
  theme?'text-gray-100 text-md '
  :'text-gray-900 text-md '
}> Date :  {new Date(allNews.publishedAt).toLocaleDateString("en-in") }</p>
<button className='py-1 px-3 bg-blue-600 text-white rounded-md hover:curser-pointer hover:bg-blue-700' ><a target='black' href={allNews.url}>Read more..</a></button>
</span>
    </div>
  )
}

export default NewsItems
