import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.id}`}>
      <article className='character-box'>
        <img src={props.image} className='card__img' alt={props.name} />
        <h3 className='card__title'>{props.name}</h3>
        <p className='card__description'>{props.species}</p>
      </article>
    </Link>
  );
};
export default CharacterCard;
