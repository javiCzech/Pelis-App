import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const SerieCard = () => {

const {id} = useParams()

const [carta, setCarta] = useState({})



useEffect(() =>{
        getSearch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
      
const getSearch = async() => {
      
const URL = `https://api.themoviedb.org/3/tv/${id}?api_key=f5773e1237f778ecf6dcf7bdb9e5c860&language=en-US`
        
const resp = await fetch(URL);
        
const data = await resp.json();
      
const carta = data
setCarta({ ...data })
console.log(carta)
}
    return (
        <>
        {  
        <div className="movie-card">
  
  <div className="container10">
    
    <img src={`https://image.tmdb.org/t/p/w500${carta?.poster_path}`} alt={carta.title} className="cover10" />
        
    <div className="hero" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/w500${carta?.backdrop_path})`,
      backgroundSize: 'cover'
      }}>
            
      <div className="details10">
      
        <div className="title10"> {carta.name} </div>   
        
        <fieldset className="rating10">
    <input type="radio" id="star5" name="rating10" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
    <input type="radio" id="star4half" name="rating10" value="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
    <input type="radio" id="star4" name="rating10" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
    <input type="radio" id="star3half" name="rating10" value="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
    <input type="radio" id="star3" name="rating10" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
    <input type="radio" id="star2half" name="rating10" value="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
    <input type="radio" id="star2" name="rating10" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
    <input type="radio" id="star1half" name="rating10" value="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
    <input type="radio" id="star1" name="rating10" value="1" /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
    <input type="radio" id="starhalf" name="rating10" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
  </fieldset>
        <div className="hola">
        <span className="movie_info text-end" id="movie5"><i className="fas fa-star"></i>{carta.vote_average}</span>
        </div>
      </div> 
      
    </div> 
    
    <div className="description">
      
      <div className="column10">
        <div className="flexible">
        {
         carta.genres && carta.genres.map(genre => {
            return(
            <span className="tag" key={genre.id}>{genre.name}</span>
            )
          })
        }
        </div>
        <p className="release_date"><b>First air Date:</b><br/> {carta.first_air_date} </p>
        
      </div> 
      
      <div className="column20">
        
        <p>{carta.overview}</p>
        
        <div className="avatars">
        <a href={carta.homepage}>
        <i className="fas fa-play " data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
            </i>
        <p>Watch the trailer</p>
        </a>
        </div> 
        
        
        
      </div> 
    </div> 
    
   
  </div> 
</div>
}
    </>
    )
}