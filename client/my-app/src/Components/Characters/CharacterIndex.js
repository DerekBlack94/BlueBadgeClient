import React, {useState, useEffect} from 'react';
import { Container, Row, Col} from 'reactstrap'
import CharacterCreate from './CharacterCreate';
import CharacterTable from './CharacterTable';
import CharacterEdit from './CharacterEdit';

const WorkoutIndex = (props) => {
    const [characters, setCharacters] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [characterToUpdate, setCharacterToUpdate] = useState({});

    const fetchCharacters = () => {
        fetch('http://localhost:3000/character', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization' : props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            setCharacters(logData)
        })
    }






}

