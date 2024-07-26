import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import {useState} from "react"

export default function WeatherApp(){
    let[weatherInfo,setWeatherInfo]= useState({
        name: "Punjab",
        temp: 30,
        max_temp: 32,
        min_temp: 28,
        feels_like: 32,
        weather: "Cloudy",
        humidity:27,
    })

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App by Kundan</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}