import React, { useEffect, useState } from 'react';
import '../App.css';
import CharactersList from './CharactersList';
import getDataFromApi from '../services/api';

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  console.log(characters);

  return (
    <div className='App'>
      <CharactersList characters={characters} />
      Hola
    </div>
  );
};

export default App;
