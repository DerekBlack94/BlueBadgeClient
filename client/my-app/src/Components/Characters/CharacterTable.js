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

    const characterMapper = () => {
        return props.characters.map((character, index) => {
            <tr key={index}>
                <th scope='row'>{character.id}</th>
                <td>{character.project_name}</td>
                <td>{character.name}</td>
                <td>{character.age}</td>
                <td>{character.race}</td>
                <td>{character.gender}</td>
                <td>{character.character_description}</td>
                <td>{character.background}</td>
                <td>
                    <Button color='warning' onClick={() => {props.editUpdateCharacter(character); props.updateOn()}} >Edit</Button>
                    <Button color='danger' onClick={() => {deleteCharacter(character)}}>Delete</Button>
                </td> 
            </tr>
        })
    }

return(
    <div>
        <h3>Character Display</h3> 
        <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Project Name</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Race</th>
                        <th>Gender</th>
                        <th>Description</th>
                        <th>Background</th>
                    </tr>
                </thead>
                <tbody>
                    {characterMapper()}
                </tbody>
            </Table>
    </div>
    )
}

export default CharacterTable;