import React from 'react';
import CharacterCard from './CharacterCard';

const CharactersList = (props) => {
  let characterLi = null;
  if (props.characters.length > 0) {
    let orderedCharacters = props.characters.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    characterLi = orderedCharacters.map((character) => {
      return (
        <li className='character-item' key={character.id}>
          <CharacterCard
            id={character.id}
            image={character.image}
            name={character.name}
            origin={character.origin.name}
            species={character.species}
          />
        </li>
      );
    });
  } else {
    characterLi = <p>No character found with '{props.filter}'.</p>;
  }

  return (
    <section>
      <ul className='character-list'>{characterLi}</ul>
    </section>
  );
};

export default CharactersList;
