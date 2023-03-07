import './current-weather.css'

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

const CurrentWeather = ({data}) => {
    const today = new Date();
    let desc = data.weather[0].description;
    desc = desc.charAt(0).toUpperCase() + desc.slice(1);

    return (
        <div className="city">
            <h2 className="city__weather">{desc}</h2>
            <img 
                src={`icons/${data.weather[0].icon}.png`}
                alt="weather in city icon" 
                className="city__icon"
            />
            <div className="city__info">
                <p className="city__temp">{Math.round(data.main.temp)}°C</p>
                <div className="city__info__current">
                    <p className="city__date">{WEEK_DAYS[today.getDay()]} {today.getDate()} {MONTHS[today.getMonth()]}</p>
                    <p className="city__name">
                        <img 
                            src="icons/location-pin.png"
                            alt="location icon" 
                            className="city__icon__location"
                        />
                        {data.city}
                    </p>
                </div>
            </div>

            <div className="parameter">
                <div className="parameter__box">
                    <span className="parameter__value">{Math.round(data.main.feels_like)}°C</span>
                    <span className="parameter__label">Feels like</span>
                </div>
                <div className="parameter__box">
                    <span className="parameter__value">{data.wind.speed}m/s</span>
                    <span className="parameter__label">Wind</span>
                </div>
                <div className="parameter__box">
                    <span className="parameter__value">{data.main.humidity}%</span>
                    <span className="parameter__label">Humidity</span>
                </div>
                <div className="parameter__box">
                    <span className="parameter__value">{data.main.pressure}hPa</span>
                    <span className="parameter__label">Pressure</span>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather