import React,{useEffect,useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = '703c21fa';
  const APP_KEY = '806b451eaf2876794c46545f4032f444';

  const [counter,setCounter] = useState(0);


  useEffect(() =>{
    console.log('Effect has been run');

  });

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button  className="search-button" type="submit">SEARCH</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
