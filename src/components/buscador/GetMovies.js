import React, { useEffect } from 'react'
import { useState } from 'react'
import { SearchTemplate } from '../helper/SearchTemplate';

export const GetMovies = ({ categories }) => {

  const [search, setSearch] = useState()

  useEffect(() => {
    getSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getSearch = async () => {

    const URL = `https://api.themoviedb.org/3/search/multi?api_key=f5773e1237f778ecf6dcf7bdb9e5c860&language=en-US&page=1&include_adult=false&query=${encodeURI(categories)}`

    const resp = await fetch(URL);

    const data = await resp.json();

    const gifs = data?.results.map(mov => {
      return {
        id: mov?.id,
        title: mov?.title || mov.name,
        vote: mov?.vote_average,
        imagen: mov?.poster_path,
        date: mov?.release_date || mov.first_air_date,
        overview: mov?.overview,
        media: mov?.media_type,
      }
    })

    setSearch(gifs);
  }

  return (
    <div>
      <p className="h1 mb-4 text-center">
        Results for: {categories}
      </p>
      <div className="container">
        <div className="row">
          {
            search?.map(mov => (
              <SearchTemplate
                key={mov.id}
                {...mov} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
