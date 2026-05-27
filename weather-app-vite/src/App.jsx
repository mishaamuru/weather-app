import './App.css'
import CurrentWeather from './CurrentWeather'
import HourlyForecast from './HourlyForecast'
import WeeklyForecast from './WeeklyForecast'
import React, { useState } from 'react'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)
  const [city, setCity] = useState("")

  const handleSearch = () => {
    console.log("Searching for:", city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data)
        console.log(data)
      })
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        setForecastData(data)
        console.log(data)
        console.log(forecastData?.list[0].pop)
      })
  }

  return (
    <div className="parent">
      <br />
      <input type="text" placeholder="Search City" value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <CurrentWeather data={weatherData} rain={forecastData?.list[0].pop} />
      <HourlyForecast data={forecastData} current={weatherData} timezone={weatherData?.timezone} />
      <WeeklyForecast data={forecastData} />
    </div>
  )
}

export default App