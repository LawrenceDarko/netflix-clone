import React,{useEffect, useState} from 'react'

const FetchData = ({link, title}) => {

    const [data, setData] = useState([])
    // const link = 'users'
    // Fetching Data Using then
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/"+link)
      .then(response => response.json())
      .then(data => setData(data))
    }, [])
    

  return (
    <div style={{marginTop: 50}}>
        <h1 style={{color: 'white'}}>{title}</h1>
        {data.map( info =>(
        <p style={{color: 'white'}} key={info.name}>{info.title}</p>))}
    </div>
  )
}

export default FetchData