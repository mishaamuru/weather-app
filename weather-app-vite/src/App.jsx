import './App.css'
import CurrentWeather from './CurrentWeather'
import HourlyForecast from './HourlyForecast'
import WeeklyForecast from './WeeklyForecast'

function App() {

  return (
    <div>
      Weather App
      <CurrentWeather />
      <HourlyForecast />
      <WeeklyForecast />
    </div>
  )
}

export default App