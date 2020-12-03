import React, {useState, useEffect} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../helpers/environment'


const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [signupErrors, setSignupErrors] = useState('');
    const [passwordErrors, setPasswordErrors] = useState('');
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (username.length < 5 || /^[a-zA-Z]+$/.test(username) ) {
            setSignupErrors('username must contain at least 5 characters AND 1 special character/number!');
            return;
        } 
        if (password.length < 6) {
            setPasswordErrors('password must contain at least 5 characters!');
            return;
        }
        

        
		try {
			const response = await fetch(`${APIURL}/user/create`, {

				method: 'POST',
				body: JSON.stringify({user:{firstName: firstName, lastName: lastName, username: username, password: password}}),
				headers: new Headers({
					'Content-Type': 'application/json'
				})
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
            if (response.status === 500) {
                setSignupErrors(data.error.errors.map((error) => error.message).join("\n"))
            }
			props.updateToken(data.sessionToken);
		} catch (err) {
			console.log(err)
		}
	}

    return(
        <div>
            <h1>Sign Up</h1>

            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input onChange={(e) => setFirstName(e.target.value)} name="firstName" value={firstName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input onChange={(e) => setLastName(e.target.value)} name="lastName" value={lastName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                    {signupErrors && (<div className='signupErrors'>{signupErrors}</div>)}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} type='password' name="password" value={password}/>
                    {passwordErrors && (<div className='passwordErrors'>{passwordErrors}</div>)}
                </FormGroup>
                <Button className='signupBtn' type="submit">Signup</Button>

            </Form>
        </div>
    )
}



export default Signup;