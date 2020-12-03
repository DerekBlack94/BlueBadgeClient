import './Navbar.css'
import React, {useState, useRef} from 'react';
// import 'https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { 
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Button,
    NavLink,
    Dropdown, DropdownItem, DropdownToggle, DropdownMenu,
    Form,
    FormControl,
    Input,
    Modal,
    ModalHeader,
    Row,
    Col,
    useModal,
    ModalTransition,
    ModalBody
}  from 'reactstrap';

import CharacterTable from '../Characters/CharacterTable';
import CharacterCreate from '../Characters/CharacterCreate';


const Sitebar = (props) => {

    const [show, setShow] = useState(false);

    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    // const [isOpen, setIsOpen] = useState(false);


    // const [dropdownOpen, setDropdownOpen] = useState(false);

    // const toggle = () => setDropdownOpen(!dropdownOpen);

    const toggle2 = () => {
        setIsOpen(!isOpen);

        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }


    // const toggleSearch = () => {
    //     (props.sessionToken === localStorage.getItem('token') ? 
    //     <Form inline>
    //         <Input type="text" placeholder="Search Character" className="mr-sm-2" />
    //         <Button className="infoBtn" outline color="info">Search </Button>
    //     </Form> : <div></div>)
    // }
    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
    };
    

    // const toggleSearch = () => {
    //     (props.sessionToken === localStorage.getItem('token') ? 
    //     <Form inline>
    //         <Input type="text" placeholder="Search Character" className="mr-sm-2" />
    //         <Button className="infoBtn" outline color="info">Search </Button>
    //     </Form> : <div></div>)
    // }


    return(
        
    <div className='parent'>


        <Navbar light expand="md">

            {/* <NavbarBrand className="blue"  href="/"> EPIC CHARACTER CREATOR</NavbarBrand> */}
            
            {/* <NavbarToggler onClick={toggle2}/>
            <Collapse isOpen={isOpen} navbar> */}
            <Nav className="mr-auto" >
                <NavItem>
                    <NavLink className="blue" href="/">EPIC  CHARACTER CREATOR</NavLink>
                </NavItem>
                    

                {/* <div className='dropdown'>

                <Router>
                    <div className='styling'>
                    <NavItem>
                        <Dropdown className="charDropdown" nav isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle nav caret>Characters</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Character Options</DropdownItem>
                                <DropdownItem><Link to='/characters' >Browse Characters</Link></DropdownItem>
                                <DropdownItem><Link to='/charactercreate'>Create Character</Link></DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Close</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavItem>
                    </div>
                </Router>
                </div> */}


                    
                <NavItem>
                    <NavLink className="invite" to="/invite">Invite Friends</NavLink>
                    <NavItem/>
                    <NavItem>

                    </NavItem>
                    <Modal isOpen={isOpen} className="invModal">
                        {/* <ModalHeader className="invModal">Invite Friends</ModalHeader> */}
                        <ModalBody className="invtForm">
                            <h3 className="inviteTag">Invite Friends</h3>

                            
                        <Col><div>
        <button className="copyBtn" onClick={copyToClipboard}>Copy</button> 
            {copySuccess}
        </div>
                    

    <Form className="invtForm">
        <textarea className="textarea"
            ref={textAreaRef}
            value='https://edk-character-creator-client.herokuapp.com/'
        />
    </Form>
    <Button className="exitBtn" onClick={toggle2}>close</Button></Col>
        </ModalBody >
        </Modal>
    </NavItem>
    <NavItem>

        <Button className="invitebtn" onClick={toggle2}>Invite</Button>
                </NavItem>
        
            </Nav>


            {/* <div className='search'>
                <Form inline>
                    <Input type="text" placeholder="Search Character" className="mr-sm-2" />
                    <Button className="infoBtn" outline color="info">Search </Button>
                </Form> */}
                {/* {toggleSearch()} */}
            {/* </div> */}

            <br/>
                
            <Button className="logoutBtn" size="lg"  onClick={props.clickLogout}>Logout</Button>
            {/* </Collapse> */}
        </Navbar>
    
        {/* <Router>

        <div className = 'navRoute'>
        <Switch>
            <Route exact path = '/characters'><CharacterTable /></Route>
            <Route exact path = '/charactercreate'><CharacterCreate /></Route>
        </Switch>
        </div>
        </Router> */}

    </div>
    )
}
export default Sitebar;