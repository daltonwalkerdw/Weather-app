import React from 'react'

const ForecastCards = ({date, time, temp, icon}) => {
    return (
        <div>
            <h2>Date: {date} Time: {time}</h2>
            <p>Temperature: {temp}</p>
            <img src={`http://openweathermap.org/img/w/${icon}.png`}></img>
        </div>
    )
}

export default ForecastCards
