import React, {useState, useEffect} from 'react';
import { Container, Row, Col} from 'reactstrap'
import CharacterCreate from './CharacterCreate';
import CharacterTable from './CharacterTable';
import CharacterEdit from './CharacterEdit';
import APIURL from '../../helpers/environment'


const CharacterIndex = (props) => {
    const [characters, setCharacters] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [characterToUpdate, setCharacterToUpdate] = useState({});

    const fetchCharacters = () => {

        fetch(`${APIURL}/character`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization' : props.token
            })
        }) 
            .then((res) => res.json())
            .then((charData) => {
                setCharacters(charData)
        })
    };

    const editUpdateCharacter = (character) => {
        setCharacterToUpdate(character);
        console.log(character);
    }


    const updateOn = () => {
        setUpdateActive(true);
    }
    
    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
            fetchCharacters();
        }, [])

return(

    <div className='indexContainer'>
        <Container>
            <Row>
                <CharacterTable characters={characters} editUpdateCharacter={editUpdateCharacter} updateOn={updateOn} fetchCharacters={fetchCharacters} token={props.token}/>
            </Row>
            <Row>
                <CharacterCreate fetchCharacters={fetchCharacters} token={props.token}/>
            </Row>
                
                {updateActive ? <CharacterEdit characterToUpdate={characterToUpdate}
                updateOff={updateOff} token={props.token} fetchCharacters={fetchCharacters}/> : <></>}
        </Container>
    </div>
    );
}
export default CharacterIndex;

