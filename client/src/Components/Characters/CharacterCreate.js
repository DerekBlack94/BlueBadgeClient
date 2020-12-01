import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../../helpers/environment'

const CharacterCreate = (props) => {
    const [project_name, setProject_Name] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [race, setRace] = useState('');
    const [gender, setGender] = useState('');
    const [character_description, setCharacter_Description] = useState('');
    const [background, setBackground] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/character/create`, {
            method: 'POST',
            body: JSON.stringify({ character : {
                project_name: project_name, name: name, age: age, race: race, gender: gender, character_description: character_description, background: background
            }}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setProject_Name('');
                setName('');
                setAge();
                setRace('');
                setGender('');
                setCharacter_Description('');
                setBackground('');
                props.fetchCharacters();
            })
    }

    return (
        <div>
            <h3>Create a Character!</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='project_name'>Project Name:</Label>
                    <br />
                    <Input name='project_name' type='text' value={project_name} onChange={(e) => setProject_Name(e.target.value)} />
                </FormGroup>

                <br />

                <FormGroup>
                    <Label htmlFor='name'>Name:</Label>
                    <br />
                    <Input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                </FormGroup>

                <br />

                <FormGroup>
                    <Label htmlFor='age'>Age:</Label>
                    <br />
                    <Input type='text' name='age' value={age} onChange={(e) => setAge(e.target.value)} />
                </FormGroup>

                <br />

                <FormGroup>
                    <Label htmlFor='race'>Race:</Label>
                    <br />
                    <Input type='select' name='race' value={race} onChange={(e) => setRace(e.target.value)}>
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
                    <Label htmlFor='gender'>Gender:</Label>
                    <br />
                    <Input type='select' name='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Nonbinary">Nonbinary</option>
                        <option value="Other">Other</option>
                    </Input>
                </FormGroup>

                <br />

                <FormGroup>
                    <Label htmlFor='character_description'>Character Description:</Label>
                    <br />
                    <Input type='textarea' name='character_description' value={character_description} onChange={(e) => setCharacter_Description(e.target.value)} />
                </FormGroup>

                <br />

                <FormGroup>
                    <Label htmlFor='background'>Character Background:</Label>
                    <br />
                    <Input type='textarea'  name='background' value={background} onChange={(e) => setBackground(e.target.value)} />
                </FormGroup>

                <br />
                
                <Button type='submit' onSubmit={handleSubmit}>Create</Button>
                
            </Form>
        </div>
    )
}

export default CharacterCreate
