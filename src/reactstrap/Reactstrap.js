import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
} from 'reactstrap';

function Reactstrap() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      style={{ margin: '100px 0', padding: '50px', border: '3px solid #000' }}
    >
      <h2
        style={{ marginBottom: '30px', fontSize: '30px', fontWeight: 'bold' }}
      >
        [Reactstrap]
      </h2>

      <Navbar color="light" light expand="md">
        <NavbarBrand>reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#">Menu1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Menu2</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>

      <div style={{ display: 'flex', marginTop: '30px' }}>
        <Input placeholder="Basic usage" style={{ width: '200px' }} />
        <Button outline color="primary">
          primary
        </Button>
      </div>
    </div>
  );
}

export default Reactstrap;
