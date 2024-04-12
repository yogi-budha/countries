import React, { useContext } from 'react'
import React, { useState } from 'react';
import Search from './Search';
import Filter from './Filter';
import CountryList from './CountryList';
import { useOutletContext } from 'react-router-dom';
import { theme } from '../contexts/theme';

function Home() {
      const [query, setQuery] = useState('');
      
  // const [state, setstate] = useOutletContext();
  const[state] = useContext(theme)
  return (
    <main className={`${state ? 'dark' : ''}`}>
      <div className="search-filter-containers">
        <Search setQuery={setQuery} />
        <Filter setQuery={setQuery} />
      </div>
      <div className="countries-container">
        <CountryList query={query} />
      </div>
    </main>
  );
}

export default Home