import { useState, useEffect } from 'react'
import axios from 'axios'
import TodaysWeather from './components/TodaysWeather'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import FiveDayForecast from './components/FiveDayForecast'
import Header from './components/Header'



function App() {
  const [lat, setLat] = useState(null)
  const [lon, setLong] = useState(null)
  const [data, setData] = useState("")
  const apiKey = '47b7cf20f1c288e543207418319d1fb7'

  const savePosition = (position) => {
    setLat(position.coords.latitude)
    setLong(position.coords.longitude)
  }

  const fetchWeather = async () => {

    try {
      await window.navigator.geolocation.getCurrentPosition(savePosition)
      if (lat && lon) {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
        );
        setData(res.data)
      }

    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    fetchWeather();
  }, [lat, lon])

  return (
    <Router>
      <div className="App">
        <Header name={data.name} />
        <Switch>
          <Route path="/fiveDayForecast">
            <FiveDayForecast
              lat={lat} lon={lon} apiKey={apiKey}
            />
          </Route>
          <Route path="/">
            {data && <TodaysWeather icon={data.weather[0].icon} lat={lat} lon={lon} apiKey={apiKey} weatherData={data} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
