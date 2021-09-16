import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Weather</h1>
            <Link to="/">Today's Weather</Link>
            <Link to="/fiveDayForecast">5 Day Forecast</Link>
        </div>
    )
}

export default Header
