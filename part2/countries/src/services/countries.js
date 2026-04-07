import axios from 'axios'
const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api'

function search(name){
    let request =  axios.get(`${baseURL}/name/${name}`)
    return request.then(response => response.data)
}


function getAll(){
    let request =  axios.get(`${baseURL}/all`)
    return request.then(response => response.data)
}

export default {search, getAll}