import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const CountryList = ({query}) => {
  const [countryData, setCountryData] = useState([]);


  

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);



  

  const data = countryData
    .filter((data) => {
      return data.name.common.toLowerCase().includes(query) || data.region.toLowerCase().includes(query)
    })
    .map((value) => {
      return (
        <CountryCard
          key={value.name.common}
          flag={value.flags.svg}
          name={value.name.common}
          population={value.population.toLocaleString('en-In')}
          region={value.region}
          capital={value.capital}
        />
      );
    });
  return (
    <>
      <div className="countries-container">{data}</div>
    </>
  );
};

export default CountryList;
