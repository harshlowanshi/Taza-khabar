import React, { useContext, useEffect, useState } from 'react'
import WeatherContext from '../context/weather/WeatherContext'
import { WeatherServices } from '../context/weather/WeatherServices'
import ThemeContext from '../context/theme/ThemeContext'


const Weather = () => {
  
const {theme }=useContext(ThemeContext)


const {api}=useContext(WeatherContext)
const {dispatch}=useContext(WeatherContext)

const [find ,setfind]=useState()

const getweather=async(city)=>{
const data = await WeatherServices(city)
dispatch({
  type:"GET_WEATHER",
  payload:data
})

}

const handleSearch =(city)=>{
  getweather(city)
  setfind("")
}



    
  return (
<div className="p-4 px-2 my-6 rounded-md flex items-center justify-center w-full">

<div className={
  theme?"p-4  md:w-[60%] bg-blue-400 rounded-md  text-white flex gap-2 items-center justify-center  flex-col"
  :"p-4  md:w-[60%] bg-gray-900  rounded-md  flex gap-2 items-center justify-center  flex-col"
}>
    <h1 className='text-2xl font-bold  ' >Weather</h1>
  <span 
  className='w-full flex items-center justify-center text-center'
  > 
  
   <input type="text" onKeyDown={e=>{
    if(e.key==="Enter"){
      handleSearch(find)
    }
   }}
   onChange={(e)=>setfind(e.target.value)}
   value={find}
    className='py-2 px-2 rounded-md w-[70%] focus:outline-none'
    placeholder='search'/>

    <button onClick={()=>handleSearch(find)}
    className='py-2 px-6 bg-green-500 ml-3 rounded-md font-bold text-white text-md hover:bg-green-600 ' >
        search
    </button>
    </span>

<span className='w-[90%] p-1  flex flex-col gap-2 '>
<p className=' font-bold text-lg flex items-end '>Locution : {api.location.name} <p className='font-bold text-sm ml-2'>({api.location.country})</p> </p> 
    <p className=' font-bold  text-lg' >Temp : {api.current.temp_c}.C</p>
    <p className=' font-bold  text-lg' >Time : {api.location.localtime}</p>
</span>
</div>

</div>
  )
}

export default Weather
