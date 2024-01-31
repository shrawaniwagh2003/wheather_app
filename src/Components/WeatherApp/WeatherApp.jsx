import "./WeatherApp.css"
import search_icon from "../Assests/search.png"
import clear_icon from "../Assests/clear.png"
import cloud_icon from "../Assests/cloud.png"
import drizzle_icon from "../Assests/drizzle.png"
import rain_icon from "../Assests/rain.png"
import snow_icon from "../Assests/snow.png"
import wind_icon from "../Assests/wind.png"
import humidity_icon from "../Assests/humidity.png"
import { useState } from "react"


const WeatherApp = () =>{
let api_key = "88060ac5e7b5240cf64560a47d0ff889";
const [wicon,setwicon] = useState(cloud_icon);

const search = async () => {
const element = document.getElementsByClassName("cityInput")
if(element[0].value ==="")
{
    return 0;
}
let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

let response = await fetch(url);
let data = await response.json();
const humidity = document.getElementsByClassName("humidity-percent");
const wind = document.getElementsByClassName("wind-rate");
const temprature = document.getElementsByClassName("wheather-temp");
const location = document.getElementsByClassName("weather-location")

humidity[0].innerHTML = data.main.humidity + " % ";
wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h ";
temprature[0].innerHTML = Math.floor(data.main.temp) + " °c";
location[0].innerHTML = data.name;

if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n')
{
    setwicon(clear_icon);
}
else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n') 
{
    setwicon(cloud_icon);  
}
else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n') 
{
    setwicon(drizzle_icon);  
}
else if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n') 
{
    setwicon(drizzle_icon);  
}
else if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n') 
{
    setwicon(rain_icon);  
}
else if(data.weather[0].icon === '10d' || data.weather[0].icon === '10n') 
{
    setwicon(rain_icon);  
}
else if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n') 
{
    setwicon(snow_icon);  
}
else {
    setwicon(clear_icon)
}



}

    return(
        <div className="conatiner">
            <div className="top-bar">
                <input type="text" className="cityInput"  />
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-img">
                <img src={wicon} alt="" />
            </div>
            <div className="wheather-temp">24°c</div>
            <div className="weather-location">Londan</div>
            <div className="data-conatiner">
                <div className="element">
                    <img src={humidity_icon} alt="" />
                    <div className="data">
                        <div className="humidity-percent">
                            64%
                        </div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" />
                    <div className="data">
                        <div className="wind-rate">18 km/hrs</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp;