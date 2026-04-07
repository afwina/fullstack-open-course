const CountryListing = ({country, onClick}) => {
    return (
        <div key={country}>
            {country}
            <button onClick={onClick}>Show</button>
        </div>
    )
}

export default CountryListing