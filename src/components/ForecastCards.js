import React from 'react'

const ForecastCards = ({ date, time, temp, icon }) => {
    return (
        <div className="forecast">
            <div className="forecastCard">
                <div className="td">
                    <h2>Date: {date}</h2>
                    <h2>Time: {time}</h2>
                </div>
                <p>Temperature: {temp}°</p>
                <img alt="weathericon" src={`http://openweathermap.org/img/w/${icon}.png`}></img>
            </div>
        </div>
    )
}

export default ForecastCards
