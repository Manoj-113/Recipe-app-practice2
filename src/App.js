import React from 'react';
import './App.css';

const App = () => {

  const APP_ID = '703c21fa';
  const APP_KEY = '806b451eaf2876794c46545f4032f444';


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">SEARCH</button>
      </form>
    </div>
  );
}

export default App;
