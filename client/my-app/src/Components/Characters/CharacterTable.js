import React from 'react';
import {Table, Button} from 'reactstrap';

const CharacterTable = (props) => {
    const deleteCharacter = ( character ) => {
        fetch(`http://localhost:3000/character/${character.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'appliction/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchCharacter())
    }

return(
    <div>
        <h3>Character Display</h3> 
    </div>
    )
}

export default CharacterTable;