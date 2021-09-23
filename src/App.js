import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from '../Recipe';

const App = () => {

  const APP_ID = '703c21fa';
  const APP_KEY = '806b451eaf2876794c46545f4032f444';

  const [recipes, setRecipes] = userState([]);

  useEffect(() =>{
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button  className="search-button" type="submit">SEARCH</button>
      </form>
      {recipes.map(recipe => (
        <Recipe/>
      ))};
    </div>
  );
}

export default App;
