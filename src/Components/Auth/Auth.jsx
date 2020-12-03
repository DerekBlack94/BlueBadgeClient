import React from 'react';
import Signup from './Signup';
import Login from './Login';
import {Container, Row, Col} from 'reactstrap';
import './Auth.css'




const Auth = (props) => {
    console.log(props)
    return(
        <Container className="auth-container">
            <Row>

                <Col md="5" className='signup-col'>
                    <Signup updateToken={props.updateToken}/>
                </Col>
                <Col md='1'></Col>
                <Col md="5" className="login-col">

                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}



export default Auth;