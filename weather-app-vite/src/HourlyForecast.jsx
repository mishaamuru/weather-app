import './HourlyForecast.css'

function HourlyForecast(props) {
    if (!props.data) return <div>Loading ...</div>
    return (
        <div className="hourly-temp">
            <div className='hourly-item-now'>
                Now
                {<img src={`https://openweathermap.org/img/wn/${props.current.weather[0].icon}@2x.png`} alt="weather icon" />}
                {Math.round(props.current.main.temp)}°
            </div>
            {

                props.data.list.slice(0, 5).map((item) => {
                    const localTime = new Date((item.dt + props.timezone) * 1000)
                        .toISOString()
                        .slice(11, 16)
                    return (
                        <div className="hourly-item" key={item.dt}>
                            {localTime}
                            {<img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather icon" />}
                            {Math.round(item.main.temp)}°
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HourlyForecast