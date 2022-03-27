import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// import MovieContainer from './MovieContainer';

const MoviesRow = ({title, movieLink, headerImage}) => {

    // HeaderImage("data")

    const [data, setData] = useState([])
    
    // const link = 'users'
    // Fetching Data Using then
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3${movieLink}`)
      .then(response => response.json())
      .then(data => setData(data))
      console.log(`https://api.themoviedb.org/3${movieLink}`)
    }, [movieLink])

    const ScrollR = () => { 
        const left = document.querySelector('.myScroller');
        left.scrollLeft += 400;
     }

    const ScrollL = () => {
        const left = document.querySelector('.myScroller');
        left.scrollLeft -= 400;
    }


  return (
        <Wrapper>
            <h1>{title}</h1>
            <MovieSlideer className='myScroller'>
                <ScrollerR onClick={()=>{ScrollR()}}><p>&#xFFEB;</p></ScrollerR>
                {data.results?.map(movie => (<MovieContainer key={movie.id}> <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} key={movie.id} alt={movie.name} /></MovieContainer> ))}
                {/* <MovieContainer movieLink={movieLink} /> */}
                <ScrollerL onClick={()=>{ScrollL()}}><p>&#xFFE9;</p></ScrollerL>
            </MovieSlideer>
        </Wrapper>
  )
}

export default MoviesRow;

const MovieSlideer = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
    
    /* border: 2px solid red; */
    
    margin-bottom: 30px;
    /* position: absolute; */
    padding: 6px;
    padding-left: 50px;
    transition: 300ms;
    

    ::-webkit-scrollbar {
        display: none;
    }

   
    /* display: none; */
    /* width: 30vh; */
    /* background-color: #333; */
    /* border: 2px solid red; */
`


const MovieContainer = styled.div`
    display: flex;
    height: auto;
    width: 18vw;
    background-color: #333;
    border-radius: 4px;
    margin-right: 5px;
    cursor: pointer;
    /* position: relative; */
    /* z-index: 52; */
    /* Scale on hover */
    /* create transition */
    transition: all 0.2s ease-in-out;

    

    > img {
        height: 23vh;
        width: 18vw;
        object-fit: cover;
        border-radius: 4px;

        &:hover {
        transform: scale(1.1);
    }
        
    }

`
const Wrapper = styled.div`
    /* position: absolute; */
    /* border: 2px solid red; */
    
    z-index: 10;
    > h1 {
        color: white;
        padding-left: 50px;
        font-size: 1.2rem;
        margin-block-start: 0em;
        padding-block-start: 0em;
        /* margin-block-end: 0em;
        padding-block-end: 0em; */
    }
`
const ScrollerR = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
    height: 130px;
    width: 40px;
    background-color: transparent;
    opacity: 0.5;
    position: absolute;
    z-index: 50;
    left: 0px;
    cursor: pointer;


    > p {
        color: transparent;
        cursor: pointer;
    }

    &:hover {
        height: 130px;
        background-color: #333;

        > p {
            color: #9EA5A5;
            font-size: 50px;
        }
    }
`
const ScrollerL = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
    height: 130px;
    width: 40px;
    background-color: transparent;
    opacity: 0.3;
    position: absolute;
    z-index: 50;
    right: 0;

    > p {
        color: transparent;
        cursor: pointer;
    }

    &:hover {
        height: 130px;
        background-color: #333;

        > p {
            color: #9EA5A5;
            font-size: 50px;
        }
    }
`