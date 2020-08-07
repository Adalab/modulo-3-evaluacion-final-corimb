import React, { useEffect, useState } from 'react';
import '../App.css';
import CharactersList from './CharactersList';
import Filter from './Filter';
import getDataFromApi from '../services/api';
import logo from '../images/rick-and-morty-logo.png';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const renderFilteredCharacters = () => {
    return characters.filter((character) => {
      return character.name.toUpperCase().includes(filterName.toUpperCase());
    });
  };

  const handleFilterName = (data) => {
    setFilterName(data.value);
  };

  return (
    <div className='App'>
      <img src={logo} alt='Rick and Morty logo' />
      <Filter filterName={filterName} handleFilter={handleFilterName} />
      <CharactersList characters={renderFilteredCharacters()} />
    </div>
  );
};

export default App;
