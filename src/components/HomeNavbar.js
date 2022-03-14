import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HomeNavbar = () => {
  return (
    <HomeNav>
        <NavLogo>
          <img src="/images/logo.png" alt="logo" width={200} height={100} />
        </NavLogo>
        <SignInButton><Link to="/browse">Sign In</Link></SignInButton>
    </HomeNav>
  )
}

export default HomeNavbar;

const HomeNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 10vh;
    background-color: transparent;
    z-index: 1;
    top: 0;
    margin: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 20px;
    position: absolute;
    /* border: 1px solid white; */
`
const NavLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const SignInButton = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 6vw;
    height: 5vh;
    background-color: #e50914;
    color: white;
    font-size: 1rem;
    margin-right: 20px;
    border-radius: 5px;

    > a {
      text-decoration: none;
      color: white;
    }
    
`