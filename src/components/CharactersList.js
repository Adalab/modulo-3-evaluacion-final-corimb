import React from 'react';
import Character from './Character';

const CharactersList = (props) => {
  const characterLi = props.characters.map((character) => {
    return (
      <li className='character-item' key={character.id}>
        <Character
          image={character.image}
          name={character.name}
          species={character.species}
        />
      </li>
    );
  });

  return (
    <section>
      <ul className='character-list'>{characterLi}</ul>
    </section>
  );
};

export default CharactersList;
