
import React from 'react';
import {Table, Button} from 'reactstrap';
import APIURL from '../../helpers/environment'

const CharacterTable = (props) => {

    const deleteCharacter = ( character ) => {
        fetch(`http://localhost:3000/character${character.id}`, {


            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'appliction/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchCharacters())
    }


    const characterMapper = () => {

      

        return props.characters.map((character, index) => {

            // const imageViewer = () => {
            //     character.image != null ? <a href={character.image} target='blank'>Click to View</a> : <div></div>
            // }

            return(
            <tr key={index}>
                <th scope='row'>{character.id}</th>
                <td>{character.project_name}</td>
                <td>{character.name}</td>
                <td>{character.age}</td>
                <td>{character.race}</td>
                <td>{character.gender}</td>
                <td>{character.character_description}</td>
                <td>{character.background}</td>
                {/* <td>{imageViewer()}</td> */}

                <td>
                    <Button className='editBtn' onClick={() => {props.editUpdateCharacter(character); props.updateOn()}} >Edit</Button>
                    <Button className='deleteBtn' onClick={() => {deleteCharacter(character)}}>Delete</Button>
                </td> 
            </tr>
            )
        })

    }





return(

    <div className='tableContainer'>
        <h3>Characters</h3> 
        <hr />
            <div className='characters'>
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
                        {/* <th>Image</th> */}

                    </tr>
                </thead>
                <tbody>
                    {characterMapper()}
                </tbody>
            </Table>
            </div>

    </div>
    );
}


export default CharacterTable;
