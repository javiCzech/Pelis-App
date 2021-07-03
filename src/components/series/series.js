import React from 'react'
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const Series = () => {

  const { data } = useFetch("https://api.themoviedb.org/3/trending/tv/week?api_key=f5773e1237f778ecf6dcf7bdb9e5c860&language=en-US");

  const series = data?.results.map(serie => {
    return {
      id: serie?.id,
      title: serie?.name,
      vote: serie?.vote_average,
      imagen: serie?.poster_path,
      date: serie?.first_air_date,
      overview: serie?.overview,
      country: serie?.origin_country
    }
  })

  return (
    <>
      <div className="container">
        <h1 className="h1 text-center mt-4">Popular TV Shows</h1>
      </div>
      <div className="container" style={{ "height": series ? null : "100%" }}>
        <div className="row">
          {
            series?.map(serie => (
              <div key={serie.id} className="col-lg-3 col-xl-3 col-sm-12 col-md-6 col-xs-12">
                <div className="card movie_card">
                  <Link to={`./tv/${serie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${serie.imagen}`} className="card-img-top" alt={serie.title} />
                  </Link>
                  <div className="card-body">
                    <Link to={`./movie/${serie.id}`}>
                      <i className="fas fa-play play_button mb-3" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                      </i>
                    </Link>
                    <h5 className="card-title">{serie.title}</h5>

                    <span> <b>Release date:</b> <br />{serie.date}</span>


                    <span className="movie_info text-end"><i className="fas fa-star"></i>{serie.vote}</span>

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
