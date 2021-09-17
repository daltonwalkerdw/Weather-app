import { useState, useEffect } from 'react'
import axios from 'axios'
import ForecastCards from './ForecastCards'

const FiveDayForecast = ({ apiKey, lat, lon }) => {
    const [forecast, setForecast] = useState({})

    const fetchWeather = async () => {
        try {
            console.log(lat, lon)
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
            );
            setForecast(res.data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchWeather()
        console.log("foreacst", forecast)
        
    }, [lat, lon])
    return (
        <div>
            {forecast.list?.map((data, id) => {
                console.log(data.weather[0].icon)
                return <ForecastCards
                    key={id} date={data.dt_txt.split(" ")[0]} time={data.dt_txt.split(" ")[1]} temp={data.main.temp} icon={data.weather[0].icon}
                />
            })}
        </div>
    )
}

export default FiveDayForecast
