import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <div className="forecast">
             {data.list.splice(0, 6).map((item, idx) => (
                <div className="forecast__box" key={idx}>
                    <img 
                        src={`icons/${item.weather[0].icon}.png`}
                        alt="weather icon" 
                        className="forecast__icon"
                    />
                    <div className="forecast__info">
                        <h3 className="forecast__day">{forecastDays[idx]}</h3>
                        <div className="parameter">
                            <div className="parameter__box">
                                <span className="parameter__value">
                                    {Math.round(item.main.temp_max)}°C / {Math.round(item.main.temp_min)}°C
                                </span>
                                <span className="parameter__label">Temperature</span>
                            </div>
                            <div className="parameter__box">
                                <span className="parameter__value">{item.main.humidity}%</span>
                                <span className="parameter__label">Humidity</span>
                            </div>
                        </div>
                    </div>
                </div>
             ))}
        </div>
    );
}

export default Forecast;