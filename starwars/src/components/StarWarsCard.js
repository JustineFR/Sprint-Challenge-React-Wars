import React from 'react';

function StarWarsCard(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.homeworld:} alt="Homeworld"></img>
            <h3>Birth year: {props.birth_year}</h3>
            <h3>gender: {props.gender}</h3>
        </div>
    )
}

export default StarWarsCard;