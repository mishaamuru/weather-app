import './HourlyForecast.css'

function HourlyForecast(props) {
    if (!props.data) return <div>Loading ...</div>
    return (
        <div className="hourly-temp">
            {
                props.data.list.slice(0, 5).map((item) => (
                    <div className="hourly-item" key={item.dt}>
                        {item.dt_txt.slice(11, 16)}
                        {<img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather icon" />}
                        {Math.round(item.main.temp)}°
                    </div>
                ))
            }
        </div>
    )
}

export default HourlyForecast