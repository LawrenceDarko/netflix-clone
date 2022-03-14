import React from 'react';
import styled from 'styled-components';

const Footer = ({footerColor}) => {
  return (
    <FooterContainer footerColor={footerColor}>
        <FooterTextContainer>
            <a href='#'><p>Questions? Contact us.</p></a>
            <a href='#'><p>FAQ</p></a>
            <a href='#'><p>Investor Relations</p></a>
            <a href='#'><p>Privacy</p></a>
            <a href='#'><p>Speed Test</p></a>
            <a href='#'><p>Netflix Ghana</p></a>
        </FooterTextContainer>
        <FooterContainerTwo>
            <a href='#'><p>Help Center</p></a>
            <a href='#'><p>Jobs</p></a>
            <a href='#'><p>Cookie Preferences</p></a>
            <a href='#'><p>Legal Notices</p></a>
        </FooterContainerTwo>
        <FooterContainerThree>
            <a href='#'><p>Account</p></a>
            <a href='#'><p>Ways to Watch</p></a>
            <a href='#'><p>Corporate Information</p></a>
            <a href='#'><p>Only on Netflix</p></a>
        </FooterContainerThree>
        <FooterContainerFour>
            <a href='#'><p>Media Center</p></a>
            <a href='#'><p>Terms of Use</p></a>
            <a href='#'><p>Contact Us</p></a>
        </FooterContainerFour>
        
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 55vh;
    background-color: ${props => props.footerColor? '#111' : '#000'};
    margin-top: 8px;
    /* border: 2px solid white; */
    padding-left: 50px;
    padding-right: 50px;


`
const FooterTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* flex: 1; */
    margin-right: 90px;

    > a:nth-child(5) {
        margin-bottom: 10px;
    }

    > a:nth-child(1) {
        margin-bottom: 10px;
        font-size: 17px;
        font-weight: bold;
    }

    /* > a {
        text-decoration: none;
    } */

    

    > a > p {
        text-decoration: none;
        color: #757575;
        font-size: 13px;
        font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
        margin-block-end: 0rem;
        padding-block-end: 0rem;
        white-space: nowrap;
    }

    > a {
        text-decoration: none;
        &:hover{
            text-decoration: underline;
            color: #757575;
        }
    }


`
const FooterContainerTwo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 90px;

    > a > p {
      color: #757575;
      font-size: 13px;
      font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
      margin-block-end: 0rem;
      padding-block-end: 0em;
      white-space: nowrap;
    }

    > a {
        text-decoration: none;
        &:hover{
            text-decoration: underline;
            color: #757575;
        }
    }
`
const FooterContainerThree = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 90px;

    > a > p {
      color: #757575;
      font-size: 13px;
      font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
      margin-block-end: 0rem;
      padding-block-end: 0em;
      white-space: nowrap;
    }

    > a {
        text-decoration: none;
        &:hover{
            text-decoration: underline;
            color: #757575;
        }
    }
`
const FooterContainerFour = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 90px;

    > a > p {
      text-decoration: none;
      color: #757575;
      font-size: 13px;
      font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
      margin-block-end: 0rem;
      padding-block-end: 0em;
      white-space: nowrap;
    }

    > a {
        text-decoration: none;
        &:hover{
            text-decoration: underline;
            color: #757575;
        }
    }
`
