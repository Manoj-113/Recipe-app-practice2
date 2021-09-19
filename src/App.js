import React,{useEffect,useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = '703c21fa';
  const APP_KEY = '806b451eaf2876794c46545f4032f444';


  useEffect(() =>{
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json();
    console.log(data);

    // fetch(tps://api.edamam.com/)
    // .then(response => {
    //   response.json
    // })

  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button  className="search-button" type="submit">SEARCH</button>
      </form>
    </div>
  );
}

export default App;
