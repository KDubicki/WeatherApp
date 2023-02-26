import './current-weather.css'

const CurrentWeather = ({data}) => {
    return (
        <div className="current-weather">
            <h3>{data.weather[0].description}</h3>
        </div>
    )
}

export default CurrentWeather