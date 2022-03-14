import React from 'react';
import styled from 'styled-components';

const RowFour = () => {
  return (
    <RowFourContainer>
        <RowFourImageContainer>
            <img src="/images/four.png" alt="logo" />
        </RowFourImageContainer>
        <RowFourTextContainer>
            <h1>Create profiles for kids.</h1>
            <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </RowFourTextContainer>
    </RowFourContainer>
  )
}

export default RowFour;

const RowFourContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 75vh;
    background-color: black;
    margin-top: 8px;
    /* border: 2px solid white; */
    padding-left: 80px;
    padding-right: 60px;

`
const RowFourTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* width: 300px; */
    flex: 1;
    margin-left: 20px;
    padding-right: 50px;
    padding-left: 0px;
    /* border: 1px solid white; */
    

    > h1 {
      color: white;
      font-size: 3rem;
      text-align: left;
      font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
      margin-block-end: 0.1rem;
      margin-block-start: 0em;
      /* padding-right: 20px; */
    }

    > p {
      color: white;
      font-size: 1.68rem;
      font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
      margin-block-start: 0.9rem;
      /* padding-right: 20px; */
    }
`
const RowFourImageContainer = styled.div`
    display: flex;
    /* border: 2px solid white; */
    flex: 1;
    margin-left: 20px;
    margin-bottom: 20px;
    position: relative;
    

    > img {
      height: 370px; 
      width: 510px;
      position: relative;
      /* z-index: -1; */
    }
`
