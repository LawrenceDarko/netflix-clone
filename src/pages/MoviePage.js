import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import BrowseNavbar from '../components/BrowseNavbar';
import Footer from '../components/Footer';
import MoviesRow from '../components/MoviesRow';
import request from '../components/Request';

const MoviePage = () => {
  //  const [imageLink, setImageLink] = useState([])
   const [banner, setBanner] = useState([])

   useEffect(() => {
    fetch(`https://api.themoviedb.org/3${request.fetchNetflixOrignals}`)
    .then(response => response.json())
    .then(data => setBanner(data))
    // const bannerLink = `banner.results[0].backdrop_path`
    // console.log(banner.results[0].backdrop_path)
  }, [])

   
  const bannerLink = Math.floor(Math.random() * 21);
  console.log(bannerLink)

  return (
      <>
        <BrowseNavbar />
        <ImageContainer>
          {banner.results && <img key={banner.results[bannerLink].id} src={`https://image.tmdb.org/t/p/original${banner.results[bannerLink].backdrop_path}`} alt={banner.results[bannerLink].name} />}
          <HeaderTextContainer>
            {/* <h1>The Originals</h1> */}
            <p>A death row inmate in an infamous Cnetral American prison learns he's been bought by a reality show mogul who wants to cast him in his latest project.</p>
            <HeaderButtons>
              <PlayButton><p>Play</p></PlayButton>
              <InfoButton><p>More Info</p></InfoButton>
          </HeaderButtons>
          </HeaderTextContainer>
          
          {/* <Second><h1>Hey</h1></Second> */}
          <FadeBanner />
        </ImageContainer>
        <PageWrapper>
            <MoviesRow title={"Popular on Netflix"} movieLink={request.fetchNetflixOrignals} />
            <MoviesRow title={"Trending Now"} movieLink={request.fetchTrending} />
            <MoviesRow title={"Hollywood Movies"} movieLink={request.fetchRomanceMovies} />
            <MoviesRow title={"For Kids"} movieLink={request.fetchComedyMovies} />
            <MoviesRow title={"Documentries"} movieLink={request.fetchDocumentaries} />
            <MoviesRow title={"Romance"} movieLink={request.fetchRomanceMovies} />
            <MoviesRow title={"Horror Movies"} movieLink={request.fetchHorrorMovies} />
            <Footer footerColor />
        </PageWrapper>
    </>
  )
}

export default MoviePage;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    height: 95vh;
    /* background-color: #333; */
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    /* background-image: radial-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)), url("/images/home.jpg"); */
    /* background-image: radial-gradient(circle, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url("/images/home.jpg"); */
    > img {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 95vh;
        width: 100%;
        object-fit: cover;
        z-index: -1;
    }
    /* background-attachment: fixed; */
    
`
const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #111;
    height: auto;
    /* position: relative; */
    z-index: -2;

    /* opacity: 0.9; */
    /* padding-left: 50px; */
`
const HeaderTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    /* align-items: center; */
    /* flex: 1; */
    margin-top: 45vh;
    margin-left: 60px;
    width: 550px;
    /* border: 1px solid red; */
    

    > h1 {
      color: white;
      font-size: 3.2rem;
      text-align: left;
      font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
      margin-block-end: 0.1rem;
    }

    > p {
      color: white;
      font-size: 1.4rem;
      font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
      margin-block-start: 0.9rem;
    }
`
const FadeBanner = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    position: absolute;
    /* align-items: center; */
    /* flex: 1; */
    bottom: 0px;
    width: 100%;
    height: 8rem;
    background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.8), #111);
    /* opacity: 1; */

`
const HeaderButtons = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    /* position: absolute; */
    height: 10vh;
    width: 50vh;
    /* margin-top: 70vh; */
    /* margin-left: 60px; */
    /* width: 550px; */
    /* border: 1px solid red; */
`
const PlayButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1vh;
    height: 6vh;
    width: 17vh;
    background-color: white;
    border-radius: 4px;
    cursor: pointer;

    
    
    > p{
      font-weight: bold;
    }
`
const InfoButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-right: 2vh; */
    height: 6vh;
    width: 22vh;
    background-color: rgba(109,109,110,0.4);
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      border: 2px solid white;
    }

    > p{
      font-weight: bold;
      color: white;
    }

`