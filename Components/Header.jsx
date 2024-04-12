import React, { useContext, useState } from 'react'
import { theme } from '../contexts/theme'

const Header = ({themestore}) => {

  

  const [data,setdata] =  useContext(theme)


 

//  const a =  useContext(theme)
//  console.log(a)

  // if(data){

  //   document.querySelector('body').classList.add('dark');
  // }
  // else{
  //       document.querySelector('body').classList.remove('dark');

  // }


  console.log(data)
  return (
    <>
      <header className={`header-container ${data ? "dark" :""}`}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p
            className="theme-changer"
            onClick={(e) => {
              setdata(!data);
              localStorage.setItem('theme', !data);
            }}
          >
            <i className={`fa-solid fa-${data ? 'sun' : 'moon'}`}></i>
            &nbsp;&nbsp;{data ? 'Light Mode' : 'Dark Mode'}
          </p>
        </div>
      </header>
    </>
  );
}

export default Header