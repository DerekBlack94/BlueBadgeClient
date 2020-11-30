// import React, {useState, useEffect} from 'react';
// import { Container, Row, Col} from 'reactstrap'
// import CharacterCreate from './CharacterCreate';
// import CharacterTable from './CharacterTable';
// import CharacterEdit from './CharacterEdit';

// const CharacterIndex = (props) => {
//     const [characters, setCharacters] = useState([]);
//     const [updateActive, setUpdateActive] = useState(false);
//     const [characterToUpdate, setCharacterToUpdate] = useState({});

//     const fetchCharacters = () => {
//         fetch('http://localhost:3000/character', {
//             method: 'GET',
//             headers: new Headers ({
//                 'Content-Type': 'application/json',
//                 'Authorization' : props.token
//             })
//         }) .then((res) => res.json())
//         .then((charData) => {
//             setCharacters(charData)
//         })
//         /*useEffect(() => {
//             fetchCharacters();
//         }, [])*/
    



//     return(
//         <Container>
//             <Row>
//                 <Col>
                
//                 </Col>
//             </Row>
//         </Container>
//     );
//     };
// }


    
    

    
    
    
    
    
    
//     export default CharacterIndex;