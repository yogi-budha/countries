import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({flag,name,population,region,capital} ) => {
  return (
   <Link to={`/${name}`} key={name} className='country-card'>
    <img src={flag} alt="" />
    <div className='card-text'>
        <h3 className='card-title'>{name}</h3>
        <p><b>Population:</b>{population}</p>
        <p><b>Region:</b>{region}</p>
        <p><b>Capital</b>{capital}</p>
    </div>
   </Link>
  )
}

export default CountryCard