 export  const  WeatherServices=async(city)=>{
const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=45875eebacb24dd5a6d170113251001&q=${city}&aqi=yes`)
const data = await response.json()
return data
}