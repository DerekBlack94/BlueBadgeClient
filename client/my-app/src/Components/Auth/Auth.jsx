import React from 'react';
import Signup from './Signup';
import Login from './Login';
import {Container, Row, Col} from 'reactstrap';

const Auth = (props) => {
    console.log(props)
    return(
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup updateToken={props.updateToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}

// import Signup from './Signup';
// import Login from './Login';

// const Auth = () => {
//     return (
//         <Container>
//             <Row>
//                 <Col md="6">
//                     <Signup />
//                 </Col>
//                 <Col md="6">
//                     <Login />
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

export default Auth;