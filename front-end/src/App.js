import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrimaryNav from './PrimaryNav'
import Footer from './Footer'
import Home from './Home'
import Search from './Search'
import Profile from './Profile'
import FAQ from './FAQ'
import About from './About'
import Login from './Login'
import SignUp from './SignUp'
// import AnimalsList from './AnimalsList'
import Animal from './Animal'
import './App.css'
import Results from './Results'
import PhotocardPage from './PhotocardPage'
import EditProfile from './EditProfile'


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
            <Footer />
          </Route>

          <Route path="/signup">
            <PrimaryNav />
            <SignUp />
          </Route>

          <Route path="/search">
            <PrimaryNav />
            <Search />
            <Footer />
          </Route>

          <Route path="/profile">
            <PrimaryNav />
            <Profile />
            <Footer />
          </Route>

          <Route path="/faq">
            <PrimaryNav />
            <FAQ />
            <Footer />
          </Route>

          <Route path="/about">
            <PrimaryNav />
            <About />
            <Footer />
          </Route>

          <Route path="/animals/:id" component={AnimalWrapper} />

          <Route path="/photocard">
            <PrimaryNav />
            <PhotocardPage />
            <Footer />
          </Route>

          <Route path="/results">
            <PrimaryNav />
            <Results />
            <Footer />
          </Route>

          <Route path="/editprofile">
            <PrimaryNav />
            <EditProfile />
            <Footer />
          </Route>

          <Route path="/">
            <PrimaryNav />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

// make this available to other modules as an import
export default App
