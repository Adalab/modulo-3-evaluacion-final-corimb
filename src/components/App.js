import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import CharactersList from './CharactersList';
import Filter from './Filter';
import getDataFromApi from '../services/api';
import logo from '../images/rick-and-morty-logo.png';
import { Link } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  useEffect(() => {
    getDataFromApi(filterName).then((data) => {
      setCharacters(data);
    });
  }, [filterName]);

  const renderFilteredCharacters = () => {
    let results = characters.filter((character) => {
      return character.name.toUpperCase().includes(filterName.toUpperCase());
    });
    return results;
  };

  const handleFilterName = (data) => {
    setFilterName(data.value);
  };

  const renderCharacterDetail = (props) => {
    const RouteId = props.match.params.id;
    const character = characters.find(
      (character) => character.id === parseInt(RouteId)
    );
    return (
      <>
        <Link to='/'>
          <div className='back-box'>
            <p>
              <b>Back</b>
            </p>
          </div>
        </Link>
        {character ? (
          <CharacterDetail
            id={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            episode={character.episode}
          />
        ) : (
          <p>The character you're looking for doesn't exist</p>
        )}
      </>
    );
  };

  return (
    <div className='App'>
      <img src={logo} alt='Rick and Morty logo' />
      <Switch>
        <Route exact path='/'>
          <Filter filterName={filterName} handleFilter={handleFilterName} />
          <CharactersList
            characters={renderFilteredCharacters()}
            filter={filterName}
          />
        </Route>
        <Route path='/character/:id' render={renderCharacterDetail}></Route>
      </Switch>
    </div>
  );
};

export default App;
