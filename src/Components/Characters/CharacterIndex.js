import React, {useState, useEffect} from 'react';
import { Container, Row, Col} from 'reactstrap'
import CharacterCreate from './CharacterCreate';
import CharacterTable from './CharacterTable';
import CharacterEdit from './CharacterEdit';
import APIURL from '../../helpers/environment'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';


const CharacterIndex = (props) => {
    const [characters, setCharacters] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [characterToUpdate, setCharacterToUpdate] = useState({});
    const [q, setQ] = useState('');

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

        function search(characters) {
            return characters.filter(
                (character) => 
                character.project_name.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
                character.name.toLowerCase().indexOf(q.toLowerCase()) > -1 
                )
        }

return(

    <div className='indexContainer'>
        <Container>
            <Row>
                <div>
                    <input type="text" className="mr-sm-2" placeholder="Character Filter" value={q} onChange={(e) => setQ(e.target.value)} />
                </div>
                <CharacterTable characters={search(characters)} editUpdateCharacter={editUpdateCharacter} updateOn={updateOn} fetchCharacters={fetchCharacters}  token={props.token}/>
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

