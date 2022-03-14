import React from 'react';
import styled from 'styled-components';

const RowTwo = () => {
  return (
        <RowTwoContainer>
            <RowTwoImageContainer>
                <img src="/images/mobile.jpg" alt="logo" />
                <StrangerThings>
                    <img src="/images/book.png" alt="logo" />
                    <STTextContainer>
                        <h1>Stranger Things</h1>
                        <p>Downloading...</p>
                    </STTextContainer>
                </StrangerThings>
            </RowTwoImageContainer>
            <RowTwoTextContainer>
                <h1>Download your shows to watch offline.</h1>
                <p>Save your favorites easily and always have something to watch.</p>
            </RowTwoTextContainer>
        </RowTwoContainer>
  )
}

export default RowTwo;

const RowTwoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 75vh;
    background-color: black;
    margin-top: 8px;
    /* border: 2px solid white; */
    padding-left: 20px;
    padding-right: 70px;

`
const RowTwoTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* width: 300px; */
    flex: 1;
    margin-left: 20px;
    padding-right: 50px;
    padding-left: 50px;
    /* border: 1px solid white; */
    

    > h1 {
      color: white;
      font-size: 3.1rem;
      text-align: left;
      font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
      margin-block-end: 0.1rem;
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
const RowTwoImageContainer = styled.div`
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
const StrangerThings = styled.div`
    display: flex;
    flex-direction: row;
    height: 90px;
    width: 320px;
    border-radius: 15px;
    background-color: black;
    border: 2px solid #333;
    position: absolute;
    /* margin-top: 15px; */
    /* z-index: 2; */
    top: 30;
    margin-left: 90px;
    margin-top: 250px;
    /* margin-bottom: 500px; */

    > img {
        height: 70px;
        width: 50px;
        padding-top: 10px;
        padding-left: 10px;
    }

`
const STTextContainer = styled.div`
    padding-left: 15px;
    padding-top: 15px;
    > h1 {
        color: white;
        margin-block-end: 0em;
        font-size: 1.1rem;
        
    }

    > p {
        color: #0071eb;
        margin-block-start: 0em;
        font-size: 1rem;
    }
`