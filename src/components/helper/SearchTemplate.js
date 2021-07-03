import React from 'react'
import { Link } from 'react-router-dom';

export const SearchTemplate = (mov) => {
  //console.log(mov)
  return (
    mov.media && mov.imagen ?
      <div key={mov.id} className="col-lg-3 col-xl-3 col-sm-12 col-md-6 col-xs-12">
        <div className="card movie_card">
          <Link to={`./${mov.media}/${mov.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${mov.imagen}`} className="card-img-top" alt={mov.title} />
          </Link>
          <div className="card-body">
            <Link to={`./movie/${mov.id}`}>
              <i className="fas fa-play play_button mb-3" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
              </i>
            </Link>
            <h5 className="card-title">{mov.title}</h5>

            <span> <b>Release date:</b> <br />{mov.date}</span>


            <span className="movie_info text-end"><i className="fas fa-star"></i>{mov.vote}</span>

          </div>
        </div>
      </div>
      :
      null
  )
}
