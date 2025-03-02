import React, { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext'

const Navbar = () => {

const {theme,dispatch }=useContext(ThemeContext)

const ChangeTheme =( )=>{
localStorage.setItem("theme",JSON.stringify(!theme))
  dispatch({
    type:"CHANGE_THEME"
  })
}

  return (
    <nav className={
      theme?'p-4  flex items-center justify-between   md:px-16  w-full bg-gray-900  border-b border-white '
      :'p-4  flex items-center justify-between   md:px-16  w-full bg-gray-100  border-b border-black '
    } >
    <h1 className={
      theme?'  text-white font-bold flex items-center justify-start gap-2  text-[1.4rem]':
      '  text-gray-700 font-bold flex items-center justify-start gap-2   text-[1.4rem]'
    } ><p className='text-rose-600' >TAZA</p>KHABAR</h1>

    <button 
    onClick={ChangeTheme}
    className={
      theme?'py-1 px-4 bg-gray-500 text-md font-bold text-white  rounded-md hover: cursor-pointer hover:bg-gray-700 duration-200 '
      :'py-1 px-4 bg-gray-900 text-md font-bold text-white  rounded-md hover: cursor-pointer hover:bg-gray-700 duration-200 '
    } >
   {
    theme?"   Light mode":
    "Dark mode"
   }
      </button>

  </nav>
  )
}

export default Navbar
