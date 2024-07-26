import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city,setCity]= useState("");
    let[error,setError]= useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="5fecefa52ee04d7b8b5c519332af2465";

    let getWeather = async()=>{
        try{

        
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let result={
                name: jsonResponse.name,
                temp: jsonResponse.main.temp,
                max_temp: jsonResponse.main.temp_max,
                min_temp: jsonResponse.main.temp_min,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                humidity: jsonResponse.main.humidity,
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    }

    let handleChange =(e)=>{
        setCity(e.target.value);
        setError(false);
    }
    let handleSubmit = async(e)=>{
        try{
            e.preventDefault();
            setCity("");
            console.log(city);
            let newInfo=await getWeather();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
            
        }
        
    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required
                    value={city}
                    name='city'
                    onChange={handleChange}
                /> <br /> <br />
                <Button type='submit' variant="contained">
                    Search
                </Button>
                {error && <p style={{color:"red"}}>City not found!</p> }
            </form>
            
        </div>
    )
}