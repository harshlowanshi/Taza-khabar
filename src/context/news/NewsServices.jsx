export const fatchNews=async(topic)=>{
   const response = await fetch(`https://gnews.io/api/v4/search?q=${topic}&apikey=8febc25e6cea679d3e7598fe8401a04c`)
   const data = await response.json()
return data.articles
}   