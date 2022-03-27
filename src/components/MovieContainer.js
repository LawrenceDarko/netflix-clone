import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const MovieContainer = ({movieLink}) => {

    const [data, setData] = useState([])
    
    // const link = 'users'
    // Fetching Data Using then
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3${movieLink}`)
      .then(response => response.json())
      .then(data => setData(data))
      console.log(`https://api.themoviedb.org/3${movieLink}`)
    }, [movieLink])

  return (
      <>
        {data.results?.map(movie => (<MyContainer>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} key={movie.id} alt={movie.name} />
        </MyContainer>))}
      </>
  )
}

export default MovieContainer;

const MyContainer = styled.div`
    display: flex;
    height: 23vh;
    width: 50vw;
    background-color: #333;
    border-radius: 4px;
    margin-right: 5px;
    /* Scale on hover */
    &:hover {
        transform: scale(1.1);
    }
    /* border: 2px solid white; */

    > img {
        height: 23vh;
        width: 18vw;
        object-fit: cover;
        border-radius: 4px;

    }
`