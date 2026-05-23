function CurrentWeather(props) {

    if (!props.data) return <div>Loading ...</div>

    return (
        <div>
            {props.data.name}
            {props.data.main.temp}
        </div>
    )
}

export default CurrentWeather