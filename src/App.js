import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [weather, setWeather] = useState(null)
  const [input, setInput] = useState('Myanmar')
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=Myanmar&aqi=no`
      )
      .then((data) => {
        setWeather(data.data)
      }).catch(error => console.log(error))
  }, [])
  const searchWeather = () => {
    console.log(input);

    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}&aqi=no`
      )
      .then((data) => setWeather(data.data))
  }
  const weatherInput = (e) => {
    console.log(input);
    setInput(e.target.value)
  }
  return (
    <div className="App">
      {weather && (
        <div>
          <div className="search">
            <input type="text" onChange={weatherInput} />
            <button onClick={searchWeather}>Search</button>
          </div>
          <div className="weather-info">
            <h1>{weather.location.name}</h1>
            <h2>{weather.location.region}</h2>
            <div className="condition">
              <h3>{weather.current.condition.text}</h3>
              <img src={weather.current.condition.icon} alt="" />
              <h3>{weather.current.temp_c}Celsius</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
