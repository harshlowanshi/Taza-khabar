import React, { useContext } from 'react'
import Navbar from './componets/Navbar'
import Form from './componets/Form'
import Fooder from './componets/Fooder'
import Topics from './componets/Topics'
import Heading from './componets/Heading'
import ThemeContext from './context/theme/ThemeContext'
import { NewsProvider } from './context/news/NewsContext'
import NewsSec from './componets/NewsSec'
import Weather from './componets/Weather'
import { WeatherProvider } from './context/weather/WeatherContext'



const Home = () => {

const {theme}=useContext(ThemeContext)

  return (
<NewsProvider>
<>
<Navbar/>

<div className={
  theme ? "min-h-screen bg-gray-900 py-10 px-8 md:px-16  "
  :"min-h-screen bg-white py-10 px-8 text-white md:px-16 "
}>
 
 <Heading/>

<Form/>
<Topics/>

<WeatherProvider>
<Weather/>
</WeatherProvider>

<NewsSec/>


</div>

<Fooder/>
</>
</NewsProvider>
  ) 
}

export default Home
