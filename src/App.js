import { useState, useEffect } from 'react'
import axios from 'axios'
import TodaysWeather from './components/TodaysWeather'

function App() {
  const [lat, setLat] = useState("")
  const [lon, setLong] = useState("")
  const [data, setData] = useState("")

  useEffect(() => {
    
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      })



       axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=47b7cf20f1c288e543207418319d1fb7`)
        .then((res) => {
          setData(res.data)
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    
    
  }, [lat, lon])

  return (
    <div className="App">
      {lat === '' ? "error checking for latitude" : <TodaysWeather weatherData={data} />} 
    </div>
  );
}

export default App;
