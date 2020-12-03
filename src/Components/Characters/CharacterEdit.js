import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../../helpers/environment'


const CharacterEdit = (props) => {
    const [editPN, setEditPN] = useState(props.characterToUpdate.project_name);
    const [editName, setEditName] = useState(props.characterToUpdate.name);
    const [editAge, setEditAge] = useState(props.characterToUpdate.age);
    const [editRace, setEditRace] = useState(props.characterToUpdate.race);
    const [editGender, setEditGender] = useState(props.characterToUpdate.gender);
    const [editCD, setEditCD] = useState(props.characterToUpdate.character_description);
    const [editBG, setEditBG] = useState(props.characterToUpdate.background);

    const characterUpdate = (event, character) => {
        event.preventDefault();

        fetch(`${APIURL}/character/${props.characterToUpdate.id}`, {

            method: 'PUT',
            body: JSON.stringify({character: {
                project_name: editPN, name: editName, age: editAge, race: editRace, gender: editGender, character_description: editCD, background: editBG
            }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.fetchCharacters();
            props.updateOff();
        })
    }

    return (
        <div>
            <Modal isOpen={true}>
                <ModalHeader>Edit Your Character</ModalHeader>
                <ModalBody>
                    <Form onSubmit={characterUpdate}>
                        <FormGroup>
                            <Label htmlFor='project_name'>Edit Project Name</Label>
                            <Input name='project_name' value={editPN} onChange={(e) => setEditPN(e.target.value)} />
                        </FormGroup>

                        <br />

                        <FormGroup>
                            <Label htmlFor='name'>Edit Name:</Label>
                            <Input type='text' name='name' value={editName} onChange={(e) => setEditName(e.target.value)} />
                        </FormGroup>

                        <br />

                        <FormGroup>
                            <Label htmlFor='age'>Edit Age:</Label>
                            <Input type='text' name='age' value={editAge} onChange={(e) => setEditAge(e.target.value)} />
                        </FormGroup>

                        <br />

                        <FormGroup>
                            <Label htmlFor='race'>Edit Race:</Label>
                            <Input type='select' name='race' value={editRace} onChange={(e) => setEditRace(e.target.value)}>
                                <option value="Human">Human</option>
                                <option value="HighElf">High Elf</option>
                                <option value="DarkElf">Dark Elf</option>
                                <option value="WoodElf">Wood Elf</option>
                                <option value="Dwarf">Dwarf</option>
                                <option value="Tiefling">Tiefling</option>
                                <option value="HalfOrc">Half Orc</option>
                                <option value="Hobbit">Hobbit</option>
                            </Input>
                        </FormGroup>

                        <br />

                        <FormGroup>
                            <Label htmlFor='gender'>Edit Gender:</Label>
                            <Input type='select' name='gender' value={editGender} onChange={(e) => setEditGender(e.target.value)}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Nonbinary">Nonbinary</option>
                                <option value="Other">Other</option>
                            </Input>
                        </FormGroup>

                        <br />

                        <FormGroup>
                            <Label htmlFor='character_description'>Edit Character Description:</Label>
                            <Input type='textarea' name='character_description' value={editCD} onChange={(e) => setEditCD(e.target.value)} />
                        </FormGroup>

                        <br />

                        <FormGroup>
                            <Label htmlFor='background'>Edit Character Background:</Label>
                            <Input type='textarea'  name='background' value={editBG} onChange={(e) => setEditBG(e.target.value)} />
                        </FormGroup>

                        <br />
                
                        <Button type='submit'>Submit Edited Character</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default CharacterEdit
