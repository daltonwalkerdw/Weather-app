import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


const TodaysWeather = ({ weatherData, lat, lon, apiKey }) => {
    
    console.log(weatherData)
    return (
        <div>
                <h1>{weatherData.name}</h1>
                     <p>Todays High: {Math.round(weatherData.main.temp_max)}°</p>
                    <p>Todays Low: {Math.round(weatherData.main.temp_min)}°</p>
            
        </div>
    )
}

export default TodaysWeather
