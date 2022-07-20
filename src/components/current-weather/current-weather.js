const CurrentWeather = () => {
    return (
        <div>
            <div>
                <div>
                    <p>London</p>
                    <p>Snowy</p>
                </div>
                {/*<img alt="weather" src="" />*/}
            </div>
           <div>
               <p>18C</p>
               <div>
                   <div>
                       <span>Details</span>
                   </div>
                   <div>
                       <span>Feels like</span>
                       <span>22</span>
                   </div>
                   <div>
                       <span>Wind</span>
                       <span>2 m/s</span>
                   </div>
                   <div>
                       <span>Humidity</span>
                       <span>2%</span>
                   </div>
                   <div>
                       <span>Pressure</span>
                       <span>15 hPa</span>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default CurrentWeather