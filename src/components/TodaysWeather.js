import React from 'react'

const TodaysWeather = ({weatherData}) => {
    return (
        <div>
            <h1>{weatherData.name}</h1>
            <p>Todays High: {Math.round(weatherData.main.temp_max)}°</p>
            <p>Todays Low: {Math.round(weatherData.main.temp_min)}°</p>
            <h2>5 Day Forecast</h2>
        </div>
    )
}

export default TodaysWeather
