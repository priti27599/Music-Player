import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import Section from './Section'
import Cards from './Cards'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TrackDetails from './TrackDetails'
import All from './All'
import Trending from './Trending'
import useFetch from './useFetch';
import New from './New'

function App() {



  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Section />
            <Cards />
          </Route>
          <Route path='/All'>
            <All />
          </Route>
          <Route path='/Trending'>
            <Trending />
          </Route>
          <Route path='/New'>
            <New />
          </Route>
          <Route path="/items/:id">
            <TrackDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
