import React from 'react';

function CharacterCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.homeworld} alt="Homeworld"></img>
            <p>Height: {props.height}</p>
            <p>Birth year: {props.birth_year}</p>
            <p>gender: {props.gender}</p>
        </div>
    )
}

export default CharacterCard;