import styled from 'styled-components';
import FetchData from './FetchData';
import Footer from './Footer';
import HomeNavbar from './HomeNavbar';
import RowFive from './RowFive';
import RowFour from './RowFour';
import RowOne from './RowOne';
import RowThree from './RowThree';
import RowTwo from './RowTwo';


const Index = () => {


  return (
    <>
        <HomeNavbar />
        <ImageContainer>
          <HomeTextContainer>
            <h1>Unlimited movies, TV shows, and more.</h1>
          </HomeTextContainer>
          <SecondHomeTextContainer>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h3 style={{fontSize: 18}}>Ready to watch? Enter your email to create or restart your membership.</h3>
          </SecondHomeTextContainer>
          <FormContainer>
            <Form>
              <FormInput type="email" placeholder="Email Address" />
              <FormButton>Get Started ►</FormButton>
            </Form>
          </FormContainer>
        </ImageContainer>
        <PageWrapper>
          <RowOne />
          <RowTwo />
          <RowThree />
          <RowFour />
          <RowFive />
          <Footer />
          {/* <FetchData title={"Hot Movies"} link={'albums'}/>
          <FetchData title={"Comedy Movies"} link={'posts'}/> */}
        </PageWrapper>
    </>
  )
}

export default Index;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 110vh;
    background-color: #333;
    /* background-image: radial-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)), url("/images/home.jpg"); */
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url("/images/home.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* background-attachment: fixed; */
    z-index: -1;
`
const HomeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* border: 1px solid white; */
    width: 600px;
    /* position: relative; */
    margin-top: 10vh;
    /* margin-block-end: 0em;
    margin-block-start: 0em;
    padding-block-end: 0em;
    padding-block-start: 0em; */


    > h1 {
      font-size: 3rem;
      color: white;
      font-weight: bold;
      font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
      margin-block-end: 0em;
      margin-block-start: 0em;
      padding-block-end: 0em;
      padding-block-start: 0em;
    }

    

`
const SecondHomeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* border: 1px solid white; */
    width: 720px;

    > h3 {
      font-size: 1.7rem;
      color: white;
      font-weight: 200;
      font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
      margin-block-end: 0em;
      /* margin-block-start: 0em; */
      padding-block-end: 0em;
      padding-block-start: 0em;

    }

    > h3:nth-child(2) {
      font-size: 2.0rem;
      color: white;
      font-weight: 200;
      font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
      margin-block-end: 0em;
      font-size: 21px;
      /* margin-block-start: 0em; */
      padding-block-end: 0.9em;
      padding-block-start: 0em;
    }


`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    text-align: center;
    /* border: 1px solid white; */
    width: 620px;
    margin-block-end: 0em;
    margin-block-start: 0em;
    padding-block-end: 0em;
    padding-block-start: 0em;
`
export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* border: 1px solid white; */
    width: 100%;
    margin-block-end: 0em;
    margin-block-start: 0em;
    padding-block-end: 0em;
    padding-block-start: 0em;
    

`
export const FormInput = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    height: 50px;
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
    height: 54px;
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
const PageWrapper = styled.div`
    /* width: 100%; */
    background-color: #333;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
`
