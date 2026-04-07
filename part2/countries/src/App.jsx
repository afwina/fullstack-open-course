import Input from "./components/Input.jsx";
import {useState, useEffect} from "react";
import countriesService from "./services/countries.js"
import CountryInfo from "./components/CountryInfo.jsx";
import CountryListing from "./components/CountryListing.jsx";

const App = () => {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [filter, setFilter] = useState('')
    const [selectedCountry, setSelected] = useState(null)

    const maxCountries = 10

    useEffect(() => {
        countriesService.getAll()
            .then(data => setCountries(data))
    },[])

    function handleFilterChange(filter) {
        setFilter(filter)
        const lwFilter = filter.toLowerCase()
        const newFiltered = countries.filter(c => c.name.common.toLowerCase().includes(lwFilter)).map(c => c.name.common);
        setFilteredCountries(newFiltered)
        console.log(newFiltered)
        if (newFiltered.length === 1) {
            selectCountry(newFiltered[0])
        } else{
            setSelected(null)
        }
   }

   function selectCountry(country) {
       setSelected(countries.find(c => c.name.common === country))
   }

   if (countries.length === 0) {
       return (<></>)
   }

    return (
        <>
            <Input text={"find countries "} val={filter} onChange={handleFilterChange} />
            {filteredCountries.length > maxCountries && <p>Too many matches</p>}
            {!selectedCountry && filteredCountries.length <= maxCountries  &&
                (filteredCountries.map(c => <CountryListing key={c} country={c} onClick={() => selectCountry(c)} />)
            )}
            {selectedCountry && <CountryInfo country={selectedCountry} />}
        </>
    )
}

export default App