import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const BrowseNavbar = () => {

  const [navbarColorFill, setNavbarColorFill] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setNavbarColorFill(true)
    } else {
      setNavbarColorFill(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  },[])

  return (
    <BrowseNav navbarColorFill={navbarColorFill}>
        <NavLogo>
          <img src="/images/logo.png" alt="logo" width={130} height={70} />
          <Link to="">Home</Link>
          <Link to="">TV Shows</Link>
          <Link to="">Movies</Link>
          <Link to="">Latest</Link>
          <Link to="">My List</Link>
        </NavLogo>
        <AvatarButton><Link to="/browse"><img src="/images/avatar.png" alt="" /></Link></AvatarButton>
    </BrowseNav>
  )
}

export default BrowseNavbar;

const BrowseNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    height: 10vh;
    background-color: ${props => props.navbarColorFill ? '#111' : 'transparent'};
    z-index: 20;
    top: 0px;
    /* margin: 20px; */
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 20px;
    position: fixed;
    /* border: 1px solid white; */
    transition: background-color 0.3s ease-in-out;
`
const NavLogo = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
    

    >img {
      margin-right: 30px;
    }

    > a {
      text-decoration: none;
      color: ${props => props.navbarColorFill ? '#fff' : '#fff'};
      margin-right: 7px;
      
    }

    
`
const AvatarButton = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 2vw;
    height: 2vh; */
    /* background-color: #e50914; */
    /* color: white; */
    /* font-size: 1rem; */
    margin-right: 10px;
    /* border-radius: 5px; */

    > a > img {
      width: 45px;
      height: 45px;

    }
    
`