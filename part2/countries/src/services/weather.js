import axios from "axios";
const api_key = import.meta.env.VITE_OPEN_WEATHER_KEY

function getWeather(latlng){
    let request =  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${api_key}&units=metric`)
    return request.then(res => res.data);
}

function getConditionIcon(){

}

export default {getWeather};