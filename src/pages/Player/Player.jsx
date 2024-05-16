import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
  const navigate= useNavigate()
  const {id}= useParams()
  const [apiData, setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWZkNjFhY2E3YjBmMTcxODQ4YzA4NzMzMGE2YjM5MCIsInN1YiI6IjY2NDViMjBkZjVlZWJkMDliYTQwZjljYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L8r38vwOBTWcQdNAfO2JazFktukSO97Dnml1nyCPYWI'
    }
  };
  useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
})
  return (
    <div className='player'>
      <img onClick={()=>{navigate(-2)}} src={back_arrow_icon} alt="" />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width="90%" height="90%" title='trailer' frameBorder='0' allowFullScreen>
        
      </iframe>
      <div className="player-info">
          <p>{apiData.published_at.slice(1,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.typeof}</p>
        </div>
    </div>
  )
}

export default Player