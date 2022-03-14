import React, {useState} from 'react';
import styled from 'styled-components';

const Accordion = ({title, content}) => {

    const [isActive, setIsActive] = useState(false)
    

    

  return (
    <div>
         <AccordionContainer>
            <AccordionTitle  onClick={()=>{setIsActive(!isActive)}}>
                <Title>
                    <p>{title}</p>
                </Title>
                <Espansion><p>{isActive? "X":"+"}</p></Espansion>
            </AccordionTitle>
            {isActive && <AccordionContent key={title}>
                <p>{content}</p>
            </AccordionContent>}
        </AccordionContainer>
    </div>
  )
}

export default Accordion;

const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
    background-color: black;
    /* height: 12vh; */
    background-color: black;
    margin-bottom: 1.5vh;
    /* position: fixed; */
    /* border: 2px solid green; */
`
const AccordionTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100%;
    background-color: #333;
    cursor: pointer;
    /* margin-left: -20px;
    margin-right: -20px; */
    /* margin-bottom: 10vh; */
    /* border: 1px solid blue; */
`
const AccordionContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    
    width: 60vw;
    height: auto;
    background-color: #333;
    /* margin-bottom: 2vh; */
    margin-top: 0.2vh;
    /* border: 1px solid white; */

    > p {
        color: white;
        padding: 10px;
        padding-left: 30px;
        font-size: 1.5rem;
    }
`
const Title = styled.div`
    display: flex;
    /* border: 1px solid yellow; */
    padding-left: 30px;

    > p {
        font-size: 1.5rem;
        color: white;
    }
`
const Espansion = styled.div`
    /* display: flex; */
    padding-right: 20px;
    /* border: 1px solid white; */
    /* height: 70px; */
    

    > p {
        margin-block-start: 0em;
        margin-block-end: 0em;
        padding-block-start: 0em;
        padding-block-end: 0em;
        color: white;
        cursor: pointer;
        font-size: 2.5rem;
    }
`