import React from 'react'
import { useState } from 'react'
import { SearchText } from './SearchText'
import { GetMovies } from './GetMovies'


export const Buscador = () => {
  const [categories, setCategories] = useState([])

  return (
    <div style={{ "height": categories.length ? null : "100%" }} >
      <div className="container">
        <h1 className="h1 mt-4">Search here your favorite Movie/Tv Show</h1>
      </div>
      <SearchText setCategories={setCategories} />
      {
        categories.map(categories => (
          <GetMovies key={categories}
            categories={categories} />
        ))
      }
    </div>
  )
}