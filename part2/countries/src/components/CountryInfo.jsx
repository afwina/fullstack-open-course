import weatherService from "./../services/weather.js"
import {useEffect, useState} from "react";
const CountryInfo = ({country}) =>{
    const [weather, setWeather] = useState("")
    useEffect(() => {
            console.log(country)
            weatherService.getWeather(country.capitalInfo.latlng)
                .then(data =>{
                    let weath = {temp: data.main.temp, wind: data.wind.speed, icon: data.weather[0].icon}
                    setWeather(weath)
                    console.log(data)
                })
        }
    , [country])

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>Capital {country.capital[0]}</div>
            <div>Area {country.area}</div>
            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            <h2>Weather in {country.capital[0]}</h2>
            <div>Temperature {weather.temp} Celsius</div>
            <img src={`https://openweathermap.org/payload/api/media/file/${weather.icon}.png`}/>
            <div>Wind {weather.wind} m/s</div>
        </div>
    )
}

export default CountryInfo