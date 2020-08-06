import React from 'react';
import Character from './Character';

const CharactersList = (props) => {
  console.log(props);
  const characterLi = props.characters.map((character) => {
    return (
      <Character
        key={character.id}
        image={character.image}
        name={character.name}
        species={character.species}
      />
    );
  });
  return (
    <section>
      <ul>{characterLi}</ul>
    </section>
  );
};

export default CharactersList;
