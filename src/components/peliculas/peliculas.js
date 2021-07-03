import React from 'react'
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch'
import './peliculascss.css';

export const Peliculas = () => {

  const { data } = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=f5773e1237f778ecf6dcf7bdb9e5c860&language=en-US&page=1");

  const movies = data?.results.map(mov => {
    return {
      id: mov?.id,
      title: mov?.title,
      vote: mov?.vote_average,
      imagen: mov?.poster_path,
      date: mov?.release_date,
      overview: mov?.overview
    }
  })

  return (
    <>
      <div className="container">
        <h1 className="h1 text-center mt-4">Popular Movies</h1>
      </div>

      <div className="container" style={{ "height": movies ? null : "100%" }}>
        <div className="row">
          {
            movies?.map(mov => (
              <div key={mov.id} className="col-lg-3 col-xl-3 col-sm-12 col-md-6 col-xs-12">
                <div className="card movie_card">
                  <Link to={`./movie/${mov.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${mov.imagen}`} className="card-img-top" alt={mov.title} />
                  </Link>
                  <div className="card-body">
                    <Link to={`./movie/${mov.id}`}>
                      <i className="fas fa-play play_button mb-3" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                      </i>
                    </Link>
                    <h5 className="card-title mt-2">{mov.title}</h5>
                    <span> <b>Release date:</b> <br />{mov.date}</span>
                    <span className="movie_info text-end"><i className="fas fa-star"></i>{mov.vote}</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
