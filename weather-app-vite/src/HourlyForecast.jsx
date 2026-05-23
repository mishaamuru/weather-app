function HourlyForecast(props) {
    if (!props.data) return <div>Loading ...</div>
    return (
        <div>
        {
            props.data.list.slice(0, 5).map((item) => (
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

export default HourlyForecast