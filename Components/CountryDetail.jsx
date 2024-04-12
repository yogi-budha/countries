import React, { useContext, useEffect, useState } from 'react'
import "./countryDetail.css"
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { theme } from '../contexts/theme';

function CountryDetail() {
    // const countryName = new URLSearchParams(location.search).get('name');
      
  // const [state, setstate] = useOutletContext();

  const [state,setstate ]= useContext(theme)
    const searchValue = useParams()
    // console.log(searchValue);
    const countryName = searchValue.country
    const [countryData,setCountryData] = useState(null)
    const [notFound,setNotFound] = useState(false)

    
   useEffect(()=>{
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then(
  (res) => res.json()
).then(([data])=>{
  // console.log(data)
    setCountryData({
      flag :data.flags.svg,
      name:data.name.common,
      nativeName:Object.values(data.name)[0],
      population:data.population.toLocaleString("en-in"),
      region:data.region,
      subRegion:data.subregion,
      capital:data.capital[0],
      tld:data.tld[0],
      currencies:Object.values(data.currencies)[0].name,
      language:Object.values(data.languages).join(" ,"),
      borders:[]
    })
    if(!data.borders){
      data.borders = []
    }
    data.borders.map((border) =>
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([data]) =>
          setCountryData((prevData) => ({
            ...prevData,
            borders: [...prevData.borders, data.name.common],
          }))
          // data.name.common
        )
    );


}).catch((error)=>
setNotFound(true)

)},[countryName])

   if(notFound){
    return <>
    <h1>Country not found</h1>
    </>
   }

  


  return countryData === null ? (
    'Loading...'
  ) : (
    <>
      <main className={`${state ? 'dark' : ''}`}>
        <div className="country-details-container">
          <span
            className="back-button"
            onClick={() => {
              history.back();
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>
          <div className="country-details">
            <img src={countryData.flag} alt="" />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: </b>
                  <span className="native-name">{countryData.nativeName}</span>
                </p>
                <p>
                  <b>Population: </b>
                  <span className="population">{countryData.population}</span>
                </p>
                <p>
                  <b>Region: </b>
                  <span className="region">{countryData.region}</span>
                </p>
                <p>
                  <b>Sub Region: </b>
                  <span className="sub-region">{countryData.subRegion}</span>
                </p>
                <p>
                  <b>Capital: </b>
                  <span className="capital">{countryData.capital}</span>
                </p>
                <p>
                  <b>Top Level Domain: </b>
                  <span className="top-level-domain">{countryData.tld}</span>
                </p>
                <p>
                  <b>Currencies: </b>
                  <span className="currencies">{countryData.currencies}</span>
                </p>
                <p>
                  <b>Languages: </b>
                  <span className="languages">{countryData.language}</span>
                </p>
              </div>
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link to={`/${border}`}>{border}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CountryDetail