import React from 'react';
import './Navbar.css';
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
  DropdownItem
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: 'coral' }} dark expand="md">
          <NavbarBrand href="/">
            <img src="./SHARPR_logo.png" alt="SHARPR" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#/prices">Prices</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/#/converter">Converter</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/#/home">Tickers</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">Graph</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">Analytics</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Profile
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/#/sign-in">LogOut</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
