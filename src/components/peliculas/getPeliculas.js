import React from 'react'

export const GetPeliculas = () => {
    const getPelis = async() =>{
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=f5773e1237f778ecf6dcf7bdb9e5c860&language=en-US&page=1"
    const resp = await fetch (url);
    const data = await resp.json();
    
    const pelis = data.results.map(img => {
        return {
            id: img.id,
            title: img.title,
            vote: img?.vote_average,
            imagen: img?.poster_path,
            date: img?.release_date
        }
    })
    //console.log(pelis)
    }
    getPelis();
    return (
        <div>
            
        </div>
    )
}
