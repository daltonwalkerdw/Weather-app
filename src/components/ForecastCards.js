import React from 'react'

const ForecastCards = ({date, time, temp}) => {
    return (
        <div>
            <h2>Date: {date} Time: {time}</h2>
            <p>Temperature: {temp}</p>
        </div>
    )
}

export default ForecastCards
