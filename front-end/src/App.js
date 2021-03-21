import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrimaryNav from './PrimaryNav'
import Home from './Home'
import Search from './Search'
import Profile from './Profile'
import FAQ from './FAQ'
import About from './About'
import Login from './Login'
import AnimalsList from './AnimalsList'
import Animal from './Animal'
import './App.css'
import Results from './Results'
import PhotocardPage from './PhotocardPage'


// this is used in one of the routes below for a specific animal with a specific id
// there's no nicer way to pass props to a component in a route
const AnimalWrapper = ({ match }) => {
  return (
    <>
      <PrimaryNav />
      <Animal animalId={match.params.id} />
    </>
  )
}

// set up routes so different URL routes load up different main components
const App = (props) => {
  return (
    <div className="container">
      <Router>
        <Switch>
        <Route path="/login">
            <PrimaryNav />
            <Login />
          </Route>

          <Route path="/search">
            <PrimaryNav />
            <Search />
          </Route>

          <Route path="/profile">
            <PrimaryNav />
            <Profile />
          </Route>

          <Route path="/faq">
            <PrimaryNav />
            <FAQ />
          </Route>

          <Route path="/about">
            <PrimaryNav />
            <About />
          </Route>
        
          <Route path="/animals/:id" component={AnimalWrapper} />

          <Route path="/photocard">
            <PrimaryNav />
            <PhotocardPage />
          </Route>

          <Route path="/results">
            <PrimaryNav />
            <Results />
          </Route>

          <Route path="/">
            <PrimaryNav />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

// make this available to other modules as an import
export default App
