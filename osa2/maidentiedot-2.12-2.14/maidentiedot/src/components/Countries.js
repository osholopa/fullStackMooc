import React from 'react'
import Country from './Country'

const Countries = (props) => {
    const { countries, search, showCountries } = props


    const countriesToShow = showCountries
       ? countries.filter(country => country.name.toUpperCase().includes(search.toUpperCase()))
       : []

    let countryContainer;


  if(countriesToShow.length > 10) {
    countryContainer = <p>Too many matches, specify another filter</p>
  } else if(countriesToShow.length > 1 && countriesToShow.length <= 10) {
    countryContainer = countriesToShow.map(country => <p key={country.name}>{country.name}</p>)
  } else if(countriesToShow.length == 1) {
    countryContainer = <Country country={countriesToShow} />
  } else {
    countryContainer = <p></p>
  }

    return (
        <div>
          {countryContainer}
        </div>
    )
}

export default Countries
