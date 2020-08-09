import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.id}`}>
      <article className='character-box'>
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.species}</p>
      </article>
    </Link>
  );
};
export default CharacterCard;
