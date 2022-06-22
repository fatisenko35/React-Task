import React from 'react';
import './App.css';
import AppRouter from './router';
import { Helmet } from 'react-helmet';
const App = () => {

  
  return (
      <>
       <Helmet>
        <title>Eatzy</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <AppRouter />
      </>
  )
}

export default App;