import React, { Component } from 'react';
import styled from 'styled-components';


import '../../../style/Header.css';
import Burger from './burger'


const Nav = styled.nav`
  width: 100%;
  height:55px;
  background: transparent;
  border-bottom: 2px solid transparent;
  padding: 0 20px;
  position: fixed;
  display: flex;
  justify-content: center;

  .logo {
    padding: 15px 0 ;
    color: #fed330;
    font-size: 30px;
    font-weight: 500;
  }
 
`;

class Header extends Component {
  render() {
    return (
      <Nav >
      <div className="logo">
        Hungrify
      </div>
      <Burger />
    </Nav>
    );
  }
}

export default Header;