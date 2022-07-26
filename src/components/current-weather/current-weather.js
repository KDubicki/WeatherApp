const CurrentWeather = ({data}) => {
    return (
        <div>
            <div>
                <div>
                    <p>{data.city}</p>
                    <p>{data.weather[0].description}</p>
                </div>
                {/*<img alt="weather" src="" />*/}
            </div>
           <div>
               <p>{Math.round(data.main.temp)}°C</p>
               <div>
                   <div>
                       <span>Details</span>
                   </div>
                   <div>
                       <span>Feels like </span>
                       <span>{Math.round(data.main.feels_like)}°C</span>
                   </div>
                   <div>
                       <span>Wind </span>
                       <span>{data.wind.speed} m/s</span>
                   </div>
                   <div>
                       <span>Humidity </span>
                       <span>{data.main.humidity}%</span>
                   </div>
                   <div>
                       <span>Pressure </span>
                       <span>{data.main.pressure} hPa</span>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default CurrentWeather