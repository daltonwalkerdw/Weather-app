import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import "../App.css";

const Header = ({name}) => {
    return (
        <div>
            <h1>{name} Weather</h1>
            <div className="header">
                <Link id="link" className="myButton" to="/">Today's Weather</Link>
                <Link id="link" className="myButton" to="/fiveDayForecast">5 Day Forecast</Link>
            </div>
        </div>
    )
}

export default Header
