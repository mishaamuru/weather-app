import './WeeklyForecast.css'

function WeeklyForecast(props) {
    if (!props.data) return <div>Loading...</div>
    return (
        <div className="weekly-temp">
            {
                props.data.list.filter(time => time.dt_txt.includes('12:00:00')).map(
                    (item) => (
                        <div className='weekly-item' key={item.dt}>
                            <div className='weekly-left'>
                                <span className='weekly-day'>{new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}</span>
                                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon.replace('n', 'd')}@2x.png`} alt="weather icon" />
                            </div>
                            <span className='temp'>{Math.round(item.main.temp)}°</span>
                        </div>
                    ))
            }
        </div>
    )
}

export default WeeklyForecast