
import './Style.css'
import {Outlet,context} from 'react-router-dom'
import Header from './Components/Header'
import { useState } from 'react';
import { ThemeProvider, theme } from './contexts/theme';



const App = () => {


  return (
      <ThemeProvider>
       <Header />
      <Outlet />

      </ThemeProvider>

  );
}

export default App