import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      // return console.log(response.data.results)
      const result = response.data.results;
      console.log(result)
      setPeople(result)
    })

  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        {people.map(info => {
        return <CharacterCard name={info.name} height={info.height} gender={info.gender} birth_year={info.birth_year} hair_color={info.hair_color} eye_color={info.eye_color}/>
        })}
    </div>
  );
}

export default App;
