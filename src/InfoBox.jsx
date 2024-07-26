import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
    const img_url="https://media.istockphoto.com/id/1342412685/photo/dust-storm-in-the-desert.jpg?s=1024x1024&w=is&k=20&c=ow7wBB1RNjytOPP78DB3eyYKBYBZcQA6Q7NLfs7u2ss="
    let cold_url="https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
    let hot_url="https://thumbs.dreamstime.com/b/hot-weather-25574291.jpg";
    let rain_url="https://static.vecteezy.com/system/resources/thumbnails/033/645/252/small_2x/drizzle-rainy-day-in-autumn-background-and-wallpaper-generative-ai-photo.jpg";
    // let info={
    //     name: "Kolkata",
    //     temp: 30,
    //     max_temp: 32,
    //     min_temp: 28,
    //     feels_like: 32,
    //     weather: "Cloudy",
    // }
    return(
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 340 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity>80?rain_url:(info.temp>17)?hot_url:cold_url
                        }
                    />
                    <CardContent style={{width: 240}}>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.name}{
                            info.humidity>80?<ThunderstormIcon/>:(info.temp>17)?<WbSunnyIcon/>:<AcUnitIcon/> 
                        }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <p>Temperature: {info.temp}°C</p>
                            <p>Max_Temperature: {info.max_temp}°C</p>
                            <p>Min_Temperature: {info.min_temp}°C</p>
                            <p>Weather: {info.weather}</p>
                            <p>Humidity:{info.humidity}</p>
                            <p>The weather feels like {info.feels_like}°C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}