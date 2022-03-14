import React from 'react'
import styled from 'styled-components'

const RowOne = () => {
  return (
    <RowOneContainer>
        <RowOneTextContainer>
            <h1>Enjoy on your TV.</h1>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </RowOneTextContainer>
        <RowOneImageContainer>
            <img src="/images/tv.png" alt="logo" />
        </RowOneImageContainer>
    </RowOneContainer>
  )
}

export default RowOne;

const RowOneContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 75vh;
    background-color: black;
    margin-top: 8px;
    /* border: 2px solid white; */
    padding-left: 50px;
    padding-right: 50px;


`
const RowOneTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    flex: 1;
    margin-left: 70px;
    

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
const RowOneImageContainer = styled.div`
    /* border: 2px solid white; */
    flex: 1;
    margin-left: 20px;
    margin-bottom: 20px;

    > img {
      height: 400px; 
      width: 530px;
    }
`