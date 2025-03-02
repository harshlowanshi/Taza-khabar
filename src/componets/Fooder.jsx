import React, { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext'

const Fooder = () => {

   const {theme}=useContext(ThemeContext)

  return (
<div className={theme?' p-1 bg-gray-900 w-full border border-t border-gray-400  ' :
    ' p-1 bg-gray-100 w-full border border-t border-gray-900  ' 
}>
<p className={
  theme?"text-center my-2 text-2xl flex items-center justify-center gap-2 text-white font-bold"
  :"text-center my-2 text-2xl  flex items-center justify-center gap-2 text-gray-900 font-bold"
}> <p className='text-rose-600' >TAZA</p> KHABAR</p>
</div>
    
  )
}

export default Fooder
