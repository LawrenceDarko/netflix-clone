// import React, {useState} from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

const RowFive = ({input}) => {

    const accordionData = [
        {title: "What is Netflix?", content: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"},
        {title: "How much does Netflix cost?", content: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$3.99 to US$11.99 a month. No extra costs, no contracts."},
        {title: "Where can I watch?", content: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."},
        {title: "How do I cancle?", content: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."},
        {title: "What can I watch on Netflix?", content: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."},
        {title: "Is Netflix good for kids?", content: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."}
      ]

  return (
    <RowFiveContainer>
        <RowFiveTextContainer>
            <h1>Frequently Asked Questions.</h1>
            {accordionData.map(({ title, content})=>(<Accordion title={title} content={content} key={title}/>))}
        </RowFiveTextContainer>
        <FormContainer>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <Form>
              <FormInput type="email" placeholder="Email Address" />
              <FormButton>Get Started ►</FormButton>
            </Form>
          </FormContainer>
    </RowFiveContainer>
  )
}

export default RowFive;

const RowFiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    background-color: black;
    margin-top: 8px;
    padding-top: 50px;
    /* border: 2px solid white; */
    /* padding-left: 50px;
    padding-right: 50px; */


`
const RowFiveTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    flex: 1;
    /* margin-left: 70px; */
    

    > h1 {
      color: white;
      font-size: 3rem;
      text-align: center;
      font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
      /* margin-block-end: 0.1rem; */
    }
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    text-align: center;
    /* border: 1px solid white; */
    width: 700px;
    margin-top: 10vh;
    margin-bottom: 10vh;
    /* margin-block-end: 0em;
    margin-block-start: 0em;
    padding-block-end: 0em;
    padding-block-start: 0em; */

    > p {
        color: white;
        font-size: 1.3rem;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* border: 1px solid white; */
    width: 100%;
    /* margin-block-end: 0em;
    margin-block-start: 0em;
    padding-block-end: 0em;
    padding-block-start: 0em; */
    

`
export const FormInput = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    height: 60px;
    width: 65%;
    /* border left redius */
    border-radius: 3px 0px 0px 3px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 1.2rem;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    padding-left: 10px;
    /* opacity: 0.8 */
    /* border: 1px solid white; */

`
export const FormButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 65px;
    width: 35%;
    background-color: #e50914;
    color: white;
    font-size: 1.7rem;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    border-radius: 0px 3px 3px 0px;
    border: none;
    outline: none;
    cursor: pointer;
    /* font-weight: 50; */
`