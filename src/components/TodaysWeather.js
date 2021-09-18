
const TodaysWeather = ({ weatherData, lat, lon, apiKey, icon }) => {

    console.log(weatherData)
    return (
        <div className="today">
            <p>Todays High: {Math.round(weatherData.main.temp_max)}°</p>
            <p>Todays Low: {Math.round(weatherData.main.temp_min)}°</p>
            <img alt="weathericon" src={`http://openweathermap.org/img/w/${icon}.png`}></img>
        </div>
    )
}

export default TodaysWeather
