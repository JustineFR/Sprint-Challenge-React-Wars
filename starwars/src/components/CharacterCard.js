import React from 'react';
import styled from 'styled-components'; 
import "./StarWars.css";

const Container  = styled.div `
    background-color: #73977A;
    width: 300px;
    border: 1px solid black;
    margin: 10px;
    border-radius: 10px;
  `

const NameStyle = styled.h2 `
    color: #383F3A;
    font-family: 'Lexend Tera', sans-serif;
`

const ParaStyle = styled.p `
    font-family: 'Inconsolata', monospace;
`


function CharacterCard(props) {
    return (
        <div>
            <Container>
                <NameStyle>{props.name}</NameStyle>
                {/* <img src={props.homeworld} alt="Homeworld"></img> */}
                <ParaStyle><strong>Height: </strong> {props.height}</ParaStyle>
                <ParaStyle><strong>Birth year: </strong>{props.birth_year}</ParaStyle>
                <ParaStyle><strong>Gender: </strong>{props.gender}</ParaStyle>
                <ParaStyle><strong>Eye Color: </strong>{props.eye_color}</ParaStyle>
                <ParaStyle><strong>Hair Color: </strong>{props.hair_color}</ParaStyle>
            </Container>
        </div>
    )
}

export default CharacterCard;