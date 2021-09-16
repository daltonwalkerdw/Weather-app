import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


const TodaysWeather = ({ weatherData, lat, lon, apiKey }) => {
    if (lat === 0) {
        return (
            <div>
                <p>Loading info</p>
            </div>
        )
    }
    console.log(weatherData)
    return (
        <div>
                <h1>{weatherData.name}</h1>
                    <p>todays high is : {Math.round(1.5)}</p>
                     <p>Todays High: {Math.round(weatherData.main.temp_max)}°</p>
                    <p>Todays Low: {Math.round(weatherData.main.temp_min)}°</p>
                    <Link to="/fiveDayForecast">5 Day Forecast</Link>
            
        </div>
    )
}

export default TodaysWeather
