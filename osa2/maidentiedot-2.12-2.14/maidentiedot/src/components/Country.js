import React from 'react'

const Country = (props) => {

  const {name, capital, population, languages, flag} = props.country[0]

  const flagStyle = {
    width: '30%',
    height: 'auto'
  }

console.log(languages);
    return (
        <>
          <h1>{name}</h1>
          <p>Capital {capital}</p>
          <p>Population {population}</p>
          <h2>Languages</h2>
          <ul>
            {languages.map(language => <li key={language.name}>{language.name}</li>)}
          </ul>
          <img src={flag} style={flagStyle}/>
        </>
    )
}

export default Country
