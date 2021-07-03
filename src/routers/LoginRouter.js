import React, { createElement } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Buscador } from '../components/buscador/buscador'
import { Navbar } from '../components/navbar/NavBar'
import { Peliculas } from '../components/peliculas/peliculas'
import { MovieCard } from '../components/PelisCard/MovieCard'
import { SerieCard } from '../components/SerieCard/SerieCard'
import { Series } from '../components/series/series'
import { Footer } from '../components/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export const LoginRouter = () => {
  return (
    <Switch>
      <Route exact path="/peliculas" render={(props) => createElement(Layout, props, createElement(Peliculas, props))} />
      <Route exact path="/movie/:id" render={(props) => createElement(Layout, props, createElement(MovieCard, props))} />
      <Route exact path="/series" render={(props) => createElement(Layout, props, createElement(Series, props))} />
      <Route exact path="/tv/:id" render={(props) => createElement(Layout, props, createElement(SerieCard, props))} />
      <Route exact path="/buscador" render={(props) => createElement(Layout, props, createElement(Buscador, props))} />
      <Redirect to="/peliculas" />
    </Switch>
  )
}
