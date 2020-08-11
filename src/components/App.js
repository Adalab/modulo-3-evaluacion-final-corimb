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
  const [filterSpecies, setFilterSpecies] = useState('all');
  useEffect(() => {
    // guardar en el estado los datos de la api
    getDataFromApi(filterName).then((data) => {
      setCharacters(data);
    });
  }, [filterName]);

  //filtrar los personajes que van a pintarse
  const renderFilteredCharacters = () => {
    let results = characters.filter((character) => {
      return character.name.toUpperCase().includes(filterName.toUpperCase());
    });
    return results.filter((character) => {
      if (filterSpecies === 'all') {
        return true;
      } else {
        return character.species === filterSpecies;
      }
    });
  };
  //función para guardar en el estado los valores del form
  const handleFilters = (data) => {
    if (data.key === 'filterName') {
      setFilterName(data.value);
    } else if (data.key === 'filterSpecies') {
      setFilterSpecies(data.value);
    }
  };
  //función para guardar en el estado los datos del filtro
  // const handleFilterName = (data) => {
  //   console.log(
  //     'handlefiltername de app que guarda los datos en el estado de filtername'
  //   );
  //   setFilterName(data.value);
  // };

  //función para hacer el match entre el id de la api y el id de la url
  //ternario para pintar la segunda página según la url
  //pasar las props a CharacterDetail
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
          <Filter
            filterName={filterName}
            filterSpecies={filterSpecies}
            handleFilter={handleFilters}
          />
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
