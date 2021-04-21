import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrimaryNav from './PrimaryNav'
import Footer from './Footer'
import Home from './Home'
import Search from './Search'
import Profile from './Profile'
import Wishlist from './Wishlist'
import FAQ from './FAQ'
import About from './About'
import Login from './Login'
import SignUp from './SignUp'
import './App.css'
import Results from './Results'
import PhotocardPage from './PhotocardPage'
import WishSellTabs from './WishSellTabs'
import Selling from './Selling'
import SellingPost from './SellingPost'
import ListingDetail from './ListingDetail'
import EditProfile from './EditProfile'


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

          <Route path="/wishlist">
            <PrimaryNav />
            <Wishlist />
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

          <Route path="/photocard/listing">
            <PrimaryNav />
            <ListingDetail />
            <Footer />
          </Route>

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

          <Route path="/wishselltabs">
            <PrimaryNav />
            <WishSellTabs />
            <Footer />
          </Route>

          <Route path="/selling">
            <PrimaryNav />
            <Selling />
            <Footer />
          </Route>

          <Route path="/sellingpost">
            <PrimaryNav />
            <SellingPost />
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
