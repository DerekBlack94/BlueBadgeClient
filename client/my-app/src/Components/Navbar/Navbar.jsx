import './Navbar.css'
import React, {useState} from 'react';
// import 'https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js'
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
    Input
}  from 'reactstrap';


const Sitebar = (props) => {
    const[isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const toggle2 = () => {
        setIsOpen(!isOpen);

        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    return(
        
        <Navbar color="dark" light expand="md">
            {/* <NavbarBrand className="blue"  href="/"> EPIC CHARACTER CREATOR</NavbarBrand> */}
            
            <NavbarToggler onClick={toggle2}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" >
                    <NavItem>
                        <NavLink className="blue" href="/">EPIC  CHARACTER CREATOR</NavLink>
                    </NavItem>
                    <NavItem>
                    <Dropdown className="charDropdown" nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Characters
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Character Options</DropdownItem>
            <DropdownItem >Browse Characters</DropdownItem>
            <DropdownItem>Create Character</DropdownItem>
            <DropdownItem>Update Character</DropdownItem>
            <DropdownItem>Delete Character</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Close</DropdownItem>
            
          </DropdownMenu>
        </Dropdown>
                    </NavItem>
                    <NavItem>
                        <NavLink className="invite" href="/">Invite Friends</NavLink>
                    </NavItem>
                    
                    <NavItem>
                    </NavItem>
                </Nav>
                <Form inline>
                <Input type="text" placeholder="Search Character" className="mr-sm-2" />
                <Button className="infoBtn" outline color="info">Search </Button>
                </Form>
                <br/>
                
                        <Button className="logoutBtn" size="lg" color="danger" onClick={props.clickLogout}>Logout</Button>
            </Collapse>
        </Navbar>
    )
}
export default Sitebar;