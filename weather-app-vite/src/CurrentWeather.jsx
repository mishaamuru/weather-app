import './CurrentWeather.css'

function CurrentWeather(props) {

    if (!props.data) return <div>Loading ...</div>

    return (
        <div className="current-weather">
            <div className='name-and-date'>
                <p className="city-name">{props.data.name}, {props.data.sys.country}</p>
                <p className="date">{new Date().toLocaleDateString('en-US',
                    {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric'
                    })
                }</p>
            </div>
            <div className='weather-now'>
                <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="weather icon" />
                <div className='temp-now'>
                    <span className="temperature">{Math.round(props.data.main.temp)}°</span>
                    <span className="descriptions">{props.data.weather[0].description}</span>
                </div>
            </div>

            <div className='high-low-row'>
                <p className="high-temperature">High: {Math.round(props.data.main.temp_max)}°C
                    <span style={{ color: 'green' }}> ↗</span></p>
                <p className="low-temperature">Low: {Math.round(props.data.main.temp_min)}°C
                    <span style={{ color: 'red' }}> ↘</span></p>
            </div>

            <div className='stats-row'>
                <div className="wind-speed">
                    <span className="stat-label">Wind</span>
                    <span className="stat-value">{Math.round(props.data.wind.speed)} km/h</span>
                </div>

                <div className="humidity">
                    <span className="stat-label">Humidity</span>
                    <span className="stat-value">{props.data.main.humidity}%</span>
                </div>

                <div className="rain">
                    <span className="stat-label">Rain</span>
                    <span className="stat-value">{Math.round(props.rain * 100)}%</span>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather