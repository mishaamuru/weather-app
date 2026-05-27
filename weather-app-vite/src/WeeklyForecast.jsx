function WeeklyForecast(props) {
    if (!props.data) return <div>Loading...</div>
    return (
        <div className="weekly-temp">
            {
                props.data.list.filter(time => time.dt_txt.includes('12:00:00')).map(
                    (item) => (
                        <div key={item.dt}>
                            {item.dt_txt}
                            {item.main.temp}
                            {item.weather[0].description}
                        </div>
                    ))
            }
        </div>
    )
}

export default WeeklyForecast