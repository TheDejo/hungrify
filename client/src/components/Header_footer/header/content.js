import React from 'react';
import styled from 'styled-components';



import {Link} from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex; 
  flex-flow: row nowrap;
  

  li{
    color:#fff;
    padding: 18px 10px;
    font-size: 20px;
      font-weight: 400
  }
  

  @media(max-width: 900px) {
    align-items: center;
    list-style: none;
    display: flex; 
    flex-flow: column nowrap;
    background-color: #fff;
    background: #fff;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)' };
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  
   li {
      text-decoration: none;
      list-style: none;
      color: #000;
      font-size: 20px;
      font-weight: 400
    }
  }


  


`;

const Content = ({open}) => {
  return (
    <Ul open={open}>
        <li><Link to="/">link</Link></li>
        <li><Link to="/">link</Link></li>
        <li><Link to="/">link</Link></li>
        <li><Link to="/">link</Link></li>
        <li><Link to="/">link</Link></li>
    </Ul>

  );
};

export default Content;