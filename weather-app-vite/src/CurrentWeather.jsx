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
            <p className="temperature">{props.data.main.temp}</p>
            <p className="descriptions">{props.data.weather[0].main}</p>
            <p className="high-temperature">{props.data.main.temp_max}</p>
            <p className="low-temperature">{props.data.main.temp_min}</p>
            <p className="wind-speed">{props.data.wind.speed}</p>
            <p className="humidity">{props.data.main.humidity}</p>
        </div>
    )
}

export default CurrentWeather