import React from 'react';
import styled from 'styled-components';

const RowThree = () => {
  return (
    <RowThreeContainer>
        <RowThreeTextContainer>
            <h1>Watch everywhere.</h1>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </RowThreeTextContainer>
    </RowThreeContainer>
  )
}

export default RowThree;

const RowThreeContainer = styled.div`
    /* display: flex; */
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 38vh;
    background-color: black;
    margin-top: 8px;
    /* border: 2px solid white; */
    padding-left: 50px;
    padding-right: 50px;
    


`
const RowThreeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* flex: 1; */
    margin-left: 70px;
    width: 550px;
    /* border: 1px solid white; */
    

    > h1 {
      color: white;
      font-size: 3.2rem;
      text-align: left;
      font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
      margin-block-end: 0.1rem;
    }

    > p {
      color: white;
      font-size: 1.68rem;
      font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
      margin-block-start: 0.9rem;
    }
`