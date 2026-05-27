import './CurrentWeather.css'

function CurrentWeather(props) {

    if (!props.data) return <div>Loading ...</div>

    return (
        <div className="current-weather">
            <h1 className="city-name">{props.data.name}</h1>
            <p className="date">{new Date().toLocaleDateString('en-US',
                {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric'
                })
            }</p>
            <p className="temperature">{Math.round(props.data.main.temp)}°</p>
            <p className="descriptions">{props.data.weather[0].main}</p>

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