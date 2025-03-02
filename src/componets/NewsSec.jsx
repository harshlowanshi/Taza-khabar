import React, { useContext } from 'react'
import NewsContext from "../context/news/NewsContext"
import NewsItems from './NewsItems'
import Loader from './Loader'
import ThemeContext from '../context/theme/ThemeContext'

const NewsSec = () => {

const {theme}=useContext(ThemeContext)
const {allNews}=useContext(NewsContext)

if(!allNews||allNews.length===0){
  return(
   <Loader/>
  )
}

  return (

<div className={
  theme?"p-4 md:px-10 my-6 rounded-md w-full border border-gray-100"
  :"p-4 md:px-10 my-6 rounded-md w-full border border-gray-900"
}>


  {
 allNews.map((item, index) => (
  <NewsItems key={index} allNews={item} />
))

  }

</div>
  )
}

export default NewsSec
