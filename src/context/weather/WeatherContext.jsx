import { createContext, useReducer } from "react";
import { WeatherReducer } from "./WeatherReducer";

const WeatherContext = createContext()

export const WeatherProvider =({children})=>{

const initalState ={
    api:{
        "location": {
          "name": "--",
          "region": "Madhya Pradesh",
          "country": "--",
          "lat": 22.7167,
          "lon": 75.8333,
          "tz_id": "Asia/Kolkata",
          "localtime_epoch": 1740905683,
          "localtime": "--"
        },
        "current": {
          "last_updated_epoch": 1740905100,
          "last_updated": "2025-03-02 14:15",
          "temp_c": "0",
          "temp_f": 86,
          "is_day": 1,
          "condition": {
            "text": "Sunny",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            "code": 1000
          },
          "wind_mph": 10.5,
          "wind_kph": 16.9,
          "wind_degree": 279,
          "wind_dir": "W",
          "pressure_mb": 1014,
          "pressure_in": 29.94,
          "precip_mm": 0,
          "precip_in": 0,
          "humidity": 38,
          "cloud": 0,
          "feelslike_c": 27.8,
          "feelslike_f": 82,
          "windchill_c": 31.8,
          "windchill_f": 89.2,
          "heatindex_c": 29.6,
          "heatindex_f": 85.2,
          "dewpoint_c": 3.2,
          "dewpoint_f": 37.7,
          "vis_km": 6,
          "vis_miles": 3,
          "uv": 5.3,
          "gust_mph": 12.1,
          "gust_kph": 19.5,
          "air_quality": {
            "co": 987.9,
            "no2": 12.58,
            "o3": 81,
            "so2": 8.695,
            "pm2_5": 50.505,
            "pm10": 111.555,
            "us-epa-index": 3,
            "gb-defra-index": 6
          }
        }
      }
}


const [state , dispatch]=useReducer( WeatherReducer,initalState  )

    return(
        <WeatherContext.Provider
        value={{...state,dispatch}}>
            {children}
        </WeatherContext.Provider>
    )

}

export default WeatherContext